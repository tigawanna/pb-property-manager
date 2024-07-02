/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dlvnttlfiw585jv");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "dlvnttlfiw585jv",
    "created": "2023-05-02 16:08:51.004Z",
    "updated": "2024-07-01 16:36:54.598Z",
    "name": "property_staff",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fmalwmlx",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "waydpv0j",
        "name": "type",
        "type": "select",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "caretaker",
            "manager",
            "cashier"
          ]
        }
      },
      {
        "system": false,
        "id": "reee5uks",
        "name": "avatar",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif",
            "image/webp"
          ],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `_dlvnttlfiw585jv_created_idx` ON `property_staff` (`created`)"
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "onlyVerified": false,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
})
