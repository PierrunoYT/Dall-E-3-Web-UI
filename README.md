# Dalle-3 Image and Prompt Generator

This project is a web application that utilizes the OpenAI DALL-E 3 model to generate images and prompts based on user input.

## Features

- Feature 1: Generate creative prompts based on user input using OpenAI's GPT-4 model.
- Feature 2: Generate images from prompts using OpenAI's DALL-E 3 model.
- Feature 3: Validate image sizes to match the requirements of the DALL-E 3 model.

## Installation

To set up the development environment, follow these steps:

1. Clone the repository to your local machine using `git clone <repository-url>`.
2. Navigate to the project directory with `cd <project-name>`.
3. Install the required dependencies with `npm install`.
4. Copy the `.env.example` file to a new file named `.env` and fill in the necessary environment variables.
5. Start the application with `npm start` or `node index.js`.

## Usage

Once the application is running, you can use it as follows:

- Open your web browser and go to `http://localhost:3000` (or the port you have configured).
- To generate prompts, enter your idea in the 'Enter your idea' input field and click 'Generate Prompts'.
- To generate a random prompt, click the 'Generate Random Prompts' button.
- To create an image from a custom prompt, enter your prompt in the 'Or enter your own prompt' input field, select the image size, and click 'Create Image from Custom Prompt'.
- To create an image from a selected prompt, choose a prompt from the 'Select a prompt' dropdown, select the image size, and click 'Create Image from Selected Prompt'.

## Contributing

Contributions are welcome! Please read the project's contribution guidelines for more information on how you can contribute.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## Project Structure

- `.env`: Environment variables configuration file
- `index.js`: Entry point of the application
- `node_modules/`: Contains all the npm dependencies
- `package-lock.json`: Automatically generated file for any operations where npm modifies either the `node_modules` tree, or `package.json`
- `package.json`: Lists the packages your project depends on
- `public/`: Contains all the static files used by the application
  - `css/`: Contains CSS files for styling.
  - `js/`: Contains JavaScript files for frontend logic.
  - `index.html`: The main HTML file for the web application.
- `src/`: Contains the source code for the application
  - `generateImage.js`: Handles the generation of images from prompts.
  - `openai_integration.js`: Integrates with OpenAI's API to generate prompts.
  - `validateSize.js`: Validates the image sizes for DALL-E 3 model.
- `start_server.bat`: Batch file to start the server on Windows
- `views/`: Currently not used in the project.
