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

## Endpoints

### `GET /create-pdf`

This endpoint generates a PDF with the text "Hello, world!" and streams it to the response. The response header `Content-Type` is set to `application/pdf`.

Example request:
```sh
curl http://localhost:3000/create-pdf --output hello.pdf
```

### `GET /trigger-event`

This endpoint generates a PDF with the text "Event Triggered PDF", adds the PDF data to an event, and triggers the event. The response is a message indicating that the event was triggered and the PDF was generated.

Example request:
```sh
curl http://localhost:3000/trigger-event
```

### `GET /`

This endpoint serves a page with buttons that call `/create-pdf` and `/trigger-event` to generate PDFs. When the "Generate PDF" button is clicked, the generated PDF will open in a new tab. When the "Trigger Event" button is clicked, an event will be triggered and a message will be displayed.

To use this endpoint, open your browser and navigate to `http://localhost:3000/`. Click the "Generate PDF" button to generate and view the PDF. Click the "Trigger Event" button to trigger the event and display the message.
