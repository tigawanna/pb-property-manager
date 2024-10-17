/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "oaggjwaw3gz12ah",
    "created": "2024-07-02 07:04:24.623Z",
    "updated": "2024-07-02 07:04:24.623Z",
    "name": "property_staff_list",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "x9wfgkv0",
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
  const collection = dao.findCollectionByNameOrId("oaggjwaw3gz12ah");

  return dao.deleteCollection(collection);
})
