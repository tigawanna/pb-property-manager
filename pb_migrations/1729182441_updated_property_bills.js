/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cvtakohtxaagiat")

  collection.listRule = "@request.auth.staff.id ?= @collection.property_staff_list.id||\n@request.auth.tenant.id = shop.tenant.id"
  collection.viewRule = "@request.auth.staff.id ?= @collection.property_staff_list.id ||\n@request.auth.tenant.id = shop.tenant.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cvtakohtxaagiat")

  collection.listRule = "@request.auth.staff.id ?= @collection.property_staff_list.id"
  collection.viewRule = "@request.auth.staff.id ?= @collection.property_staff_list.id"

  return dao.saveCollection(collection)
})
