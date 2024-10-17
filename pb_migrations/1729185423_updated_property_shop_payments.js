/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fp554yfudhhy15m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gr0pgwdp",
    "name": "type",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "deposit",
        "rent",
        "water",
        "elec",
        "fines"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fp554yfudhhy15m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gr0pgwdp",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "deposit",
        "rent",
        "water",
        "elec",
        "fines"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
