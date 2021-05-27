# Movie App

## Find ALl Movies

get all movies in database

- **URL**

  '/movies'

- **Method:**

  `GET`

- **URL Params:** none
- **Data Params:**

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

## Create Movies

create one movie

- **URL**

  '/movies'

- **Method:**

  `POST`

- **URL Params:** none
- **Data Params:**
  ```json
  {
    "title": "<movie name> required",
    "genre": "<movie genre> required",
    "imageUrl": "<movie image link> required",
    "releasedYear": "<year> required",
    "status": "<Released | In Production> required"
  }
  ```
- **Success Response:**

  - **Code:** 200 <br />
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
    "message": "<field1> can not be null"
  }
  ```

  - **Code:** 500 INTERNAL SERVER ERROR <br />
