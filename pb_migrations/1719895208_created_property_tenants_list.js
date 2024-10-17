/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ene4oiyp951jqq2",
    "created": "2024-07-02 04:40:08.576Z",
    "updated": "2024-07-02 04:40:08.576Z",
    "name": "property_tenants_list",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qpyzfpxq",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ene4oiyp951jqq2");

  return dao.deleteCollection(collection);
})
