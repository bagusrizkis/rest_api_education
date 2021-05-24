# API Doc Movie App

## Movies

### Show Movies

Mendapatkan semua data movie yang ada

- **URL**

  `/movies`

- **Method:**

  `GET`

- **Url Param:** none
- **Data Param:** none

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

    ```json
    [
      {
        "id": 1,
        "title": "<movie name>",
        "genre": "<movie genre>",
        "imageUrl": "<movie image link>",
        "releasedYear": "<year>",
        "status": "<Released | In Production>",
        "createdAt": "2021-05-24T00:56:21.112Z",
        "updatedAt": "2021-05-24T00:56:21.112Z"
      },
      {
        "id": 2,
        "title": "<movie name>",
        "genre": "<movie genre>",
        "imageUrl": "<movie image link>",
        "releasedYear": "<year>",
        "status": "<Released | In Production>",
        "createdAt": "2021-05-24T00:56:21.112Z",
        "updatedAt": "2021-05-24T00:56:21.112Z"
      }
    ]
    ```

- **Error Response:**

  - **Code:** 500 INTERNAL SERVER ERROR <br />

---

### Add Movies

menambahkan data movie

- **URL**

  `/movies`

- **Method:**

  `POST`

- **Url Param:** none
- **Body:**

  ```json
  {
    "id": "<id movie> required",
    "title": "<movie name> required",
    "genre": "<movie genre> required",
    "imageUrl": "<movie image link> required",
    "releasedYear": "<year> required",
    "status": "<Released | In Production> required"
  }
  ```

- **Success Response:**

  - **Code:** 201 <br />
    **Content:**

    ```json
    {
      "message": "created",
      "data": {
        "id": "<id movie>",
        "title": "<movie name>",
        "genre": "<movie genre>",
        "imageUrl": "<movie image link>",
        "releasedYear": "<year>",
        "status": "<Released | In Production>",
        "createdAt": "2021-05-24T00:56:21.112Z",
        "updatedAt": "2021-05-24T00:56:21.112Z"
      }
    }
    ```

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:**

  ```json
  {
    "message": ["<field1> can not be null", "<field2> can not be null"]
  }
  ```

  - **Code:** 500 INTERNAL SERVER ERROR <br />

---

### Delete Movies

menghapus data movie

- **URL**

  `/movies/:idMovie`

- **Method:**

  `DELETE`

- **Url Param:**
  required: `idMovie=[number]`
- **Data Param:** none

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

    ```json
    {
      "message": "deleted"
    }
    ```

- **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:**
    ```json
    {
      "message": "data not found"
    }
    ```
  - **Code:** 500 INTERNAL SERVER ERROR <br />
