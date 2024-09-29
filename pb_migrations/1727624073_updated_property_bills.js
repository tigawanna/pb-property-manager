/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cvtakohtxaagiat")

  collection.viewRule = "@request.auth.staff.id ?= @collection.property_staff_list.id || \n@request.auth.tenant.id = shop.tenant.id"
  collection.createRule = "@request.auth.staff.id ?= @collection.property_staff_list.id"
  collection.updateRule = "@request.auth.staff.id ?= @collection.property_staff_list.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cvtakohtxaagiat")

  collection.viewRule = "@request.auth.verified = true && @request.auth.role=\"staff\""
  collection.createRule = "@request.auth.verified = true && @request.auth.role=\"staff\""
  collection.updateRule = "@request.auth.verified = true && @request.auth.role=\"staff\""

  return dao.saveCollection(collection)
})
