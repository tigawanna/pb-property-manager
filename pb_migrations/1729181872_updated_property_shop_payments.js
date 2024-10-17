/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fp554yfudhhy15m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6tvfs1cz",
    "name": "reciept_number",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fp554yfudhhy15m")

  // remove
  collection.schema.removeField("6tvfs1cz")

  return dao.saveCollection(collection)
})
