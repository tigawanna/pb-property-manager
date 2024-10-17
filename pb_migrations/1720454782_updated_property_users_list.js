/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ftrh16vgkvygnbe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ipq5dhko",
    "name": "account",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ftrh16vgkvygnbe")

  // remove
  collection.schema.removeField("ipq5dhko")

  return dao.saveCollection(collection)
})
