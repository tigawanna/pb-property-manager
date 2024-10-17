/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ftrh16vgkvygnbe",
    "created": "2024-07-08 15:32:22.999Z",
    "updated": "2024-07-08 15:32:22.999Z",
    "name": "property_users_list",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mrvz9odk",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "@request.auth.id ?= @collection.property_tenants_list.id || @request.auth.id ?= @collection.property_staff_list.id",
    "viewRule": "(@request.auth.id ?= @collection.property_tenants_list.id )|| (@request.auth.id ?= @collection.property_staff_list.id)",
    "createRule": "@request.auth.id ?= @collection.property_staff_list.id",
    "updateRule": "(@request.auth.id ?= @collection.property_tenants_list.id) && (@request.auth.id = id)",
    "deleteRule": "@request.auth.id ?= @collection.property_staff_list.id",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ftrh16vgkvygnbe");

  return dao.deleteCollection(collection);
})
