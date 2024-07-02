/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xbeqi8mrlar7b5t")

  // remove
  collection.schema.removeField("mexftzmi")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xbeqi8mrlar7b5t")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mexftzmi",
    "name": "old_tenant",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "vdjzfr0gybtmwif",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})