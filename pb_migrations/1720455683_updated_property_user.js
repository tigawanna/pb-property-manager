/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xbeqi8mrlar7b5t")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bm1rxb00",
    "name": "verification_status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "\"initial\"|\"pending\"|\"resolved\""
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xbeqi8mrlar7b5t")

  // remove
  collection.schema.removeField("bm1rxb00")

  return dao.saveCollection(collection)
})
