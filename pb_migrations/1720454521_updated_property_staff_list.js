/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oaggjwaw3gz12ah")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ahdahgwl",
    "name": "accoount",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "xbeqi8mrlar7b5t",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oaggjwaw3gz12ah")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ahdahgwl",
    "name": "accoount",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "xbeqi8mrlar7b5t",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
