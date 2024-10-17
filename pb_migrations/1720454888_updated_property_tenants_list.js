/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ene4oiyp951jqq2")

  collection.listRule = "@request.auth.id ?= @collection.property_tenants_list.account || @request.auth.id ?= @collection.property_staff_list.account"
  collection.viewRule = "(@request.auth.id ?= @collection.property_tenants_list.account)|| (@request.auth.id ?= @collection.property_staff_list.account)"
  collection.createRule = "@request.auth.id ?= @collection.property_staff_list.account"
  collection.updateRule = "(@request.auth.id ?= @collection.property_tenants_list.account) && (@request.auth.id = id)"
  collection.deleteRule = "@request.auth.id ?= @collection.property_staff_list.account"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ene4oiyp951jqq2")

  collection.listRule = "@request.auth.id ?= @collection.property_tenants_list.id || @request.auth.id ?= @collection.property_staff_list.id"
  collection.viewRule = "(@request.auth.id ?= @collection.property_tenants_list.id )|| (@request.auth.id ?= @collection.property_staff_list.id)"
  collection.createRule = "@request.auth.id ?= @collection.property_staff_list.id"
  collection.updateRule = "(@request.auth.id ?= @collection.property_tenants_list.id) && (@request.auth.id = id)"
  collection.deleteRule = "@request.auth.id ?= @collection.property_staff_list.id"

  return dao.saveCollection(collection)
})
