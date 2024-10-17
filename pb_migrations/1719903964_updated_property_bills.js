/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cvtakohtxaagiat")

  collection.listRule = "@request.auth.verified = true && @request.auth.role=\"staff\""
  collection.viewRule = "@request.auth.verified = true && @request.auth.role=\"staff\""
  collection.createRule = "@request.auth.verified = true && @request.auth.role=\"staff\""
  collection.updateRule = "@request.auth.verified = true && @request.auth.role=\"staff\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cvtakohtxaagiat")

  collection.listRule = "@request.auth.verified = true && @request.auth.type=\"manager\""
  collection.viewRule = "@request.auth.verified = true && @request.auth.type=\"manager\""
  collection.createRule = "@request.auth.verified = true && @request.auth.type=\"manager\""
  collection.updateRule = "@request.auth.verified = true && @request.auth.type=\"manager\""

  return dao.saveCollection(collection)
})
