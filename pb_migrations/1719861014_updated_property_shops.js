/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zb1etrv0i3olw5p")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zb1etrv0i3olw5p")

  collection.listRule = "@request.auth.verified = true && @request.auth.type=\"manager\""

  return dao.saveCollection(collection)
})
