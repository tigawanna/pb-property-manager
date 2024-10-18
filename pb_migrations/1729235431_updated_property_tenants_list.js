/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ene4oiyp951jqq2")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ene4oiyp951jqq2")

  collection.viewRule = "(@request.auth.id ?= @collection.property_tenants_list.account)|| @request.auth.tenant.id = id"

  return dao.saveCollection(collection)
})
