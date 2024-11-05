/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bmcrwrrlcir76kx")

  // remove
  collection.schema.removeField("7ty8lkbi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jbf3intk",
    "name": "utils",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "elec",
        "water",
        "both",
        "none"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bmcrwrrlcir76kx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7ty8lkbi",
    "name": "to",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("jbf3intk")

  return dao.saveCollection(collection)
})
