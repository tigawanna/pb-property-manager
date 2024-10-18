/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ene4oiyp951jqq2")

  collection.viewRule = "@request.auth.staff.id ?= @collection.property_staff_list.id ||\n@request.auth.tenant.id = id"
  collection.createRule = "@request.auth.staff.id ?= @collection.property_staff_list.id"
  collection.updateRule = "(@request.auth.staff.id ?= @collection.property_staff_list.id) && @request.auth.tenant.id = id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ene4oiyp951jqq2")

  collection.viewRule = ""
  collection.createRule = "@request.auth.id ?= @collection.property_staff_list.account"
  collection.updateRule = "(@request.auth.id ?= @collection.property_tenants_list.account) && @request.auth.tenant.id = id"

  return dao.saveCollection(collection)
})
