const teamMembers = require('../index')

function generateHTML(teamMembers) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="./dist/styles.css">
    </head>
    <body>
        <p>${teamMembers[0].name}</p>
        
    </body>
    </html>`
}

module.exports = {
    generateHTML
};