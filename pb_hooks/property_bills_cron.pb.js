/// <reference path="../pb_data/types.d.ts" />
// @ts-check

// $app

cronAdd("bumpBillsEveryMonth", "5 0 1 * *", () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;
  // The previous year will be the current year unless the current month is January
  const previousYear = currentMonth === 1 ? currentYear - 1 : currentYear;
  function getPeriodBill() {
    const records = $app.dao().findRecordsByFilter(
      "property_bills", // collection
      "month = {:month} && year = {:year}", // filter
      "-created", // sort
      500, // limit
      0, // offset
      { month: previousMonth - 1, year: previousYear } 
    );
    return records;
  }

  const bills = getPeriodBill();
  for (const bill of bills) {
    if (!bill) continue;
    const collection = $app.dao().findCollectionByNameOrId("property_bills");
    const record = new Record(collection);
    const form = new RecordUpsertForm($app, record);

    const newRecord = {
      shop: bill.get("shop"),
      elec_readings: bill.get("elec_readings"),
      water_readings: bill.get("water_readings"),
      // If the current month is December, the readings should be for month 11, and month 10 was the latest readings we have, so we'll carry forward all the readings from month 10 to 11
      // In case there are no readings (e.g., shop locked) for this month, ensure the previous value won't be undefined next month
      month: previousMonth,
      year: previousYear,
    };
    console.log("============= new record ============= ", JSON.stringify(newRecord, null, 2));
    form.loadData(newRecord);
    form.submit();
  }
});
