/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ene4oiyp951jqq2")

  collection.listRule = "@request.auth.id ?= @collection.property_staff_list.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ene4oiyp951jqq2")

  collection.listRule = "@request.auth.verified = true && @request.auth.role=\"staff\""

  return dao.saveCollection(collection)
})
