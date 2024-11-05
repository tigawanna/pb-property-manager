/// <reference path="../pb_data/types.d.ts" />

//  deine jsdoc for this type
// export interface PropertyShopHistoryCreate  {
// 	shop: string;
// 	tenant: string;
// 	monthly_rent: number;
// 	deposit: number;
// 	goodwill: number;

// }
// export interface PropertyShopsCreate {
// 	shop_number: string;
// 	tenant: string;
// 	utils?: '' | 'elec' | 'water' | 'both' | 'none';
// 	order?: number;
// 	is_vacant?: boolean;
// 	monthly_rent?: number;
// 	deposit?: number;
// 	goodwill?: number;
// }

// fires for  every save to property_shops  collection
onRecordAfterCreateRequest((e) => {
    const collection = $app.dao().findCollectionByNameOrId("property_shop_history")
    const record = new Record(collection)
    const form = new RecordUpsertForm($app, record)
    form.loadData({
        shop: e.record.get("shop"),
        tenant: e.record.get("tenant"),
        "monthly_rent": e.record.get("monthly_rent"),
        deposit: e.record.get("deposit"), 
        utils: e.record.get("utils"),
        goodwill: e.record.get("goodwill"),
    })
    form.submit()
}, ["property_shops"])

onRecordAfterUpdateRequest((e) => {
    const collection = $app.dao().findCollectionByNameOrId("property_shop_history")
    const record = new Record(collection)
    const form = new RecordUpsertForm($app, record)
    form.loadData({
        shop: e.record.get("shop"),
        tenant: e.record.get("tenant"),
        "monthly_rent": e.record.get("monthly_rent"),
        deposit: e.record.get("deposit"), 
        utils: e.record.get("utils"),
        goodwill: e.record.get("goodwill"),
    })
    form.submit()
}, ["property_shops"])
