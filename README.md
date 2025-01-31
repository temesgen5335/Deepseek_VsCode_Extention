# Deepseek Chat Extension

A VS Code extension that integrates Deepseek Chat directly into your editor. Seamlessly interact with the Deepseek AI model for code assistance, explanations, and more—all without leaving your coding environment.

## Features

- **Chat with Deepseek AI**: Ask questions, get code explanations, and receive real-time assistance.
- **Streaming Responses**: Responses are streamed directly into the chat window for a smooth experience.
- **Webview Panel**: A clean and intuitive interface for interacting with the AI.
- **Customizable**: Easily configure the AI model and other settings.

## Installation

1. Open VS Code.
2. Go to the Extensions view (Ctrl+Shift+X or Cmd+Shift+X).
3. Search for Deepseek Chat Extension.
4. Click Install.

Alternatively, you can install the extension manually by downloading the `.vsix` file and running:

```bash
code --install-extension deepseek-chat-extension.vsix
```

## Usage

1. Open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P).
2. Search for and select `Deepseek Chat: Open Chat`.
3. A new webview panel will open where you can interact with the Deepseek AI.

## Configuration

To customize the extension, add the following settings to your VS Code `settings.json` file:

```json
{
    "deepseekChat.model": "deepseek-r1:latest", // Specify the AI model
    "deepseekChat.apiKey": "your-api-key-here" // Add your API key if required
}
```

## Development

### Prerequisites

- Node.js (v16 or higher)
- VS Code
- TypeScript (installed as a dev dependency)

### Setup

1. Clone the repository:

        ```bash
        git clone https://github.com/your-username/deepseek-extension.git
        cd deepseek-extension
        ```

2. Install dependencies:

        ```bash
        npm install
        ```

3. Compile the extension:

        ```bash
        npm run compile
        ```

4. Run the extension in debug mode:

        - Open the project in VS Code.
        - Press F5 to start debugging.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the Apache License - see the  [LICENSE](LICENSE) file for details.

## Acknowledgments

- VS Code Team for the amazing extensibility API.
- Ollama for providing the AI backend.
- Deepseek for the powerful AI model.

## Support

If you encounter any issues or have suggestions, please open an issue.

Enjoy coding with Deepseek Chat Extension! 🚀
