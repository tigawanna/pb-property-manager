/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zgt203ucjejv51q");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "zgt203ucjejv51q",
    "created": "2024-07-01 19:28:49.344Z",
    "updated": "2024-07-01 19:29:54.348Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "659hw8hr",
        "name": "uwu",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
