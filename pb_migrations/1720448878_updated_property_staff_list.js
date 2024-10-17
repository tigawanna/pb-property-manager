/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oaggjwaw3gz12ah")

  collection.updateRule = "@request.auth.id = id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oaggjwaw3gz12ah")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
