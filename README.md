# Created BY  NOTJS Team 


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


# Documentation

## End point

```sh
https://notjs-backend.herokuapp.com/
```

## Documents

### Generate Signed Link

end point 
```http
POST /documents/upload
```
| headers  | value |
| :---  | :--- |
| `Content-Type`  | `application/json` |

 body example


```json
{
    "fileName":"document.pdf"
}
```

### Upload File

end point 
```http
PUT signedUrl
```
| headers  | value |
| :---  | :--- |
| `Content-Type`  | `application/pdf` |
| `x-ms-blob-type`  | `BlockBlob` |
| `Content-Length`  | `********` |



# Status Codes

EventManager returns the following status codes in its API:

> We should change these values

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 202 | `UPDATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |
