const express = require('express');
const { PDFDocument } = require('pdf-lib');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/create-pdf', async (req, res) => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);
  page.drawText('Hello, world!', {
    x: 50,
    y: 350,
    size: 30,
  });

  const pdfBytes = await pdfDoc.save();

  res.setHeader('Content-Type', 'application/pdf');
  res.send(Buffer.from(pdfBytes));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
