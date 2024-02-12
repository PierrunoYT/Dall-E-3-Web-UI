# DALLE 3 Image Generator

This project is a web application for generating images and prompts using OpenAI's DALL-E 3 model.

## Installation

To set up the project on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.
4. Create a `.env` file in the root of the project and add your OpenAI API key as follows:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```
5. Start the application by running the `start_server.bat` file.

## Usage

Once the application is running, you can generate prompts and images as follows:

1. Open your web browser and go to `http://localhost:3000`.
2. To generate prompts, enter your idea in the 'Enter your idea' field and click 'Generate Prompts'.
3. To generate an image, select a prompt from the list or enter your own prompt, choose an image size, and click 'Create Image from Custom Prompt' or 'Create Image from Selected Prompt'.

Generated images will be displayed on the web page.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.