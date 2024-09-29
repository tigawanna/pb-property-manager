/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zb1etrv0i3olw5p")

  collection.viewRule = "@request.auth.staff.id ?= @collection.property_staff_list.id ||\n@request.auth.tenant.id = tenant.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zb1etrv0i3olw5p")

  collection.viewRule = "@request.auth.verified = true && @request.auth.role=\"staff\""

  return dao.saveCollection(collection)
})
