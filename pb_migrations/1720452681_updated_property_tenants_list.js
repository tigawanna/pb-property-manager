/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ene4oiyp951jqq2")

  collection.updateRule = "(@request.auth.id ?= @collection.property_tenants_list.id) && (@request.auth.id = id)"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ene4oiyp951jqq2")

  collection.updateRule = "(@request.auth.id ?= @collection.property_staff_list.id) && (@request.auth.id = id)"

  return dao.saveCollection(collection)
})
