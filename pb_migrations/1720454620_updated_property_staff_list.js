/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oaggjwaw3gz12ah")

  collection.viewRule = "@request.auth.id ?= @collection.property_staff_list.account"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oaggjwaw3gz12ah")

  collection.viewRule = "@request.auth.id ?= @collection.property_staff_list.id"

  return dao.saveCollection(collection)
})
