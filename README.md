# PDF Streaming Server

This project is a Node.js server that streams a generated PDF to the response.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/githubnext/workspace-blank.git
   cd workspace-blank
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Server

To start the server, run:
```sh
npm start
```

The server will be running on `http://localhost:3000`.

## Endpoint

### `GET /create-pdf`

This endpoint generates a PDF with the text "Hello, world!" and streams it to the response. The response header `Content-Type` is set to `application/pdf`.

Example request:
```sh
curl http://localhost:3000/create-pdf --output hello.pdf
```
