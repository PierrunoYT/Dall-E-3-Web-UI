import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

// Body parser middleware to parse JSON bodies
app.use(express.json());

import { generatePrompts } from './src/openai_integration.js';
import { generateImage } from './src/generateImage.js';
import { validateSize } from './src/validateSize.js';

// Endpoint to log errors
app.post('/log-error', (req, res) => {
  const error = req.body.error;
  const type = req.body.type;
  console.error(`Logged error for ${type}:`, error);
  res.status(200).send('Error logged.');
});

// Serve static files from the public directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.render('index.ejs');
});

// Endpoint to generate prompts
app.post('/generate-prompts', async (req, res) => {
  try {
    const idea = req.body.idea;
    // Logic to generate prompts using OpenAI API
    const prompts = await generatePrompts(idea);
    res.json({ prompts: prompts });
  } catch (error) {
    console.error('Error generating prompts:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Endpoint to generate an image
app.post('/generate-image', async (req, res) => {
  try {
    const { prompt, size } = req.body;
    // Logic to generate an image using OpenAI API
    validateSize(size);
    const imageResponse = await generateImage(prompt, size);
    if (imageResponse.data) {
        res.json({
          "created": imageResponse.created,
          "data": imageResponse.data.map(item => ({ "url": item.url }))
        });
      } else {
        // Simulate an empty data response
        res.json({
          "created": imageResponse.created,
          "data": []
        });
      }
  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Existing app routes and middleware...

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});