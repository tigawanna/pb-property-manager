/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ene4oiyp951jqq2")

  collection.viewRule = "@request.auth.id ?= @collection.property_staff_list.id"
  collection.createRule = "@request.auth.id ?= @collection.property_staff_list.id"
  collection.updateRule = "@request.auth.id ?= @collection.property_staff_list.id"
  collection.deleteRule = "@request.auth.id ?= @collection.property_staff_list.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ene4oiyp951jqq2")

  collection.viewRule = "@request.auth.verified = true && @request.auth.role=\"staff\""
  collection.createRule = "@request.auth.verified = true && @request.auth.role=\"staff\""
  collection.updateRule = "@request.auth.verified = true && @request.auth.role=\"staff\""
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
