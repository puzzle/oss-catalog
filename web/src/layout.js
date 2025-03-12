export function withLayout(content) {
  return `
    <html>
      <head>
        <style>
          * {
            box-sizing: border-box;
          }

          body {
            font-family: sans-serif;
          }

          a {
            color: #000;
          }

          button {
            border: 1px solid #666;
            border-radius: 5px;
            font-size: 1rem;
            padding: 0.25rem 0.75rem;
            background-color: #eee;
            color: #000;
          }
          button:hover {
            background-color: #ddd;
          }
        </style>
      </head>
      <body>
        <h1>Open Source Catalog POC</h1>
        <main>
          ${content}
        </main>
      </body>
    </html>
  `;
}
