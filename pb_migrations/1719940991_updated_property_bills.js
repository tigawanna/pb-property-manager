/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cvtakohtxaagiat")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_r0bKVqc` ON `property_bills` (\n  `shop`,\n  `month`,\n  `year`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cvtakohtxaagiat")

  collection.indexes = [
    "CREATE INDEX `idx_r0bKVqc` ON `property_bills` (\n  `shop`,\n  `month`,\n  `year`\n)"
  ]

  return dao.saveCollection(collection)
})
