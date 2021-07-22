# Movie App

## Show All Movies

- **URL**

  `/movies`

- **Method:**

  `GET`

- **URL Params**: none

- **Data Params**: none

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

    ```json
    {
      "result": [
        {
          "id": "number",
          "title": "string",
          "genre": "string",
          "imageUrl": "string",
          "releasedYear": "string",
          "status": "string",
          "createdAt": "2021-07-19T09:10:46.035Z",
          "updatedAt": "2021-07-19T09:10:46.035Z"
        }
      ]
    }
    ```

- **Error Response:**

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal server error" }`

## Create New Movie

- **URL**

  `/movies`

- **Method:**

  `POST`

- **URL Params**: none

- **Data Params**:

  ```json
  {}
  ```

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

    ```json
    {
      "result": [
        {
          "id": "number",
          "title": "string",
          "genre": "string",
          "imageUrl": "string",
          "releasedYear": "string",
          "status": "string",
          "createdAt": "2021-07-19T09:10:46.035Z",
          "updatedAt": "2021-07-19T09:10:46.035Z"
        }
      ]
    }
    ```

- **Error Response:**

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal server error" }`
