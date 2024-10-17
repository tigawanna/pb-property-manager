/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fp554yfudhhy15m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fgg9r5eg",
    "name": "staff",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "oaggjwaw3gz12ah",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fp554yfudhhy15m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fgg9r5eg",
    "name": "staff",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "oaggjwaw3gz12ah",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
