const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Render our index.html file directly instead of using Sinatra
app.get('/', (req, res) => {
  const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  res.send(htmlContent);
});

// Handle form submissions (simple mock for contact form)
app.post('/contact', (req, res) => {
  res.json({ success: true, message: 'Form submission received!' });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
