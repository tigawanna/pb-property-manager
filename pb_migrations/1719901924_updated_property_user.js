/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xbeqi8mrlar7b5t")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tdye2kpy",
    "name": "pnone",
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
  const collection = dao.findCollectionByNameOrId("xbeqi8mrlar7b5t")

  // remove
  collection.schema.removeField("tdye2kpy")

  return dao.saveCollection(collection)
})
