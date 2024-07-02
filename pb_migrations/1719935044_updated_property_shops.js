/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zb1etrv0i3olw5p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zfihv44m",
    "name": "new_tenant",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ene4oiyp951jqq2",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zb1etrv0i3olw5p")

  // remove
  collection.schema.removeField("zfihv44m")

  return dao.saveCollection(collection)
})
