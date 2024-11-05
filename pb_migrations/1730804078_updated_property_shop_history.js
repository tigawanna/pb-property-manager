/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bmcrwrrlcir76kx")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tnpgyhsr",
    "name": "monthly_rent",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bmcrwrrlcir76kx")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tnpgyhsr",
    "name": "rent",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
