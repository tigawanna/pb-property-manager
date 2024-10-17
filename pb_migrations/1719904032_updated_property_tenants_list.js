/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ene4oiyp951jqq2")

  collection.listRule = "@request.auth.verified = true && @request.auth.role=\"staff\""
  collection.viewRule = "@request.auth.verified = true && @request.auth.role=\"staff\""
  collection.createRule = "@request.auth.verified = true && @request.auth.role=\"staff\""
  collection.updateRule = "@request.auth.verified = true && @request.auth.role=\"staff\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ene4oiyp951jqq2")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
