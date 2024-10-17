/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ftrh16vgkvygnbe")

  collection.listRule = null
  collection.viewRule = "@request.auth.id = id"
  collection.createRule = "@request.auth.id != \"\""
  collection.updateRule = "@request.auth.id = id"
  collection.deleteRule = "@request.auth.id = id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ftrh16vgkvygnbe")

  collection.listRule = "@request.auth.id ?= @collection.property_tenants_list.id || @request.auth.id ?= @collection.property_staff_list.id"
  collection.viewRule = "(@request.auth.id ?= @collection.property_tenants_list.id )|| (@request.auth.id ?= @collection.property_staff_list.id)"
  collection.createRule = "@request.auth.id ?= @collection.property_staff_list.id"
  collection.updateRule = "(@request.auth.id ?= @collection.property_tenants_list.id) && (@request.auth.id = id)"
  collection.deleteRule = "@request.auth.id ?= @collection.property_staff_list.id"

  return dao.saveCollection(collection)
})
