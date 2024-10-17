/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oaggjwaw3gz12ah")

  collection.listRule = "@request.auth.id ?= @collection.property_staff_list.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oaggjwaw3gz12ah")

  collection.listRule = null

  return dao.saveCollection(collection)
})
