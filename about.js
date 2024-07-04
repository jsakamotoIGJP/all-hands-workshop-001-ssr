export const AboutPage = {
    render: () =>
        `<html>
            <head>
                <title>About</title>
                <link rel="stylesheet" href="css/water.css">
            </head>
            <body>
                <h1>About</h1>
                <p>Welcome to the about page</p>
                <p>Go back to the <a href="/">home page</a></p>
                <p>Current date time is ${new Date().toLocaleString()}</p>
            </body>
        </html>`
}