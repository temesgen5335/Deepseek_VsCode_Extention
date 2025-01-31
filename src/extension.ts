import * as vscode from 'vscode';
import ollama from 'ollama'; // Ensure ollama is properly imported

export function activate(context: vscode.ExtensionContext) {
    // Register the command
    const disposable = vscode.commands.registerCommand('tom-ext.hiTom', () => {
        // Create a webview panel
        const panel = vscode.window.createWebviewPanel(
            'deepChat', // Identifies the type of webview
            'Deepseek Chat', // Title of the panel
            vscode.ViewColumn.One, // Editor column to show the panel
            { enableScripts: true } // Enable JavaScript in the webview
        );

        // Set the HTML content for the webview
        panel.webview.html = getWebviewContent();

        // Handle messages from the webview
        panel.webview.onDidReceiveMessage(async (message) => {
            if (message.command === 'chat') {
                const userPrompt = message.question;
                let responseText = '';

                try {
                    // Stream the response from Ollama
                    const streamResponse = await ollama.chat({
                        model: 'deepseek-r1:latest',
                        messages: [{ role: 'user', content: userPrompt }],
                        stream: true
                    });

                    // Send each part of the streamed response to the webview
                    for await (const part of streamResponse) {
                        responseText = part.message.content; // Corrected property access
                        panel.webview.postMessage({ command: 'chatResponse', text: responseText });
                    }
                } catch (e) {
                    // Handle errors
                    responseText = 'Sorry, I am not able to answer that question.';
                    panel.webview.postMessage({ command: 'chatResponse', text: responseText });
                }
            }
        });

        // Handle panel close event
        panel.onDidDispose(() => {
            // Clean up resources if needed
        });
    });

    // Add the disposable to the context
    context.subscriptions.push(disposable);
}

function getWebviewContent(): string {
    return /*html*/ `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Deepseek Chat</title>
        </head>
        <body>
            <h2>Deepseek VSCode Extension</h2>
            <textarea id="prompt" placeholder="Ask something..."></textarea>
            <button id="askbtn">Ask</button>
            <div id="response"></div>

            <script>
                const vscode = acquireVsCodeApi();
                const askbtn = document.getElementById('askbtn');
                const prompt = document.getElementById('prompt');
                const responseDiv = document.getElementById('response');

                // Send user input to the extension
                askbtn.addEventListener('click', () => {
                    const question = prompt.value;
                    vscode.postMessage({
                        command: 'chat',
                        question
                    });
                });

                // Listen for messages from the extension
                window.addEventListener('message', (event) => {
                    const message = event.data;
                    if (message.command === 'chatResponse') {
                        responseDiv.innerHTML += '<p><strong>Response:</strong> ' + message.text + '</p>';
                    }
                });
            </script>
        </body>
        </html>
    `;
}

export function deactivate() {}