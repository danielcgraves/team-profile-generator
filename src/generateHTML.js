
const createTeam = (renderedHtml) => {
    console.log(renderedHtml);

    const html = [];

    const newManager = manager => {

        let managerCard = `
        
            <div class="col-sm">
                <div class="card bg-light mb-3" style="min-width: 18rem;">
                    <div class="card-header">Manager</div>
                    <div class="card-body">
                    <h5 class="card-title">${manager.name}</h5>
                    <p class="card-text">ID: ${manager.id}</p>
                    <p class="card-text">Email: <span><a href="mailto:${manager.email}">${manager.email}</a></span></p>
                    <p class="card-text">Office: ${manager.officeNumber}</p>
                    </div>
                </div>
            </div>
        
        `;
        html.push(managerCard);
    }
    const newEngineer = engineer => {

        let engineerCard = `
        
            <div class="col-sm">
                <div class="card bg-light mb-3" style="min-width: 18rem;">
                    <div class="card-header">Engineer</div>
                    <div class="card-body">
                    <h5 class="card-title">${engineer.name}</h5>
                    <p class="card-text">ID: ${engineer.id}</p>
                    <p class="card-text">Email: <span><a href="mailto:${engineer.email}">${engineer.email}</a></span></p>
                    <p class="card-text">github: <a href="https://www.github.com/${engineer.github}">${engineer.github}</a></p>
                    </div>
                </div>
            </div>
        
        `;
        html.push(engineerCard);
    }
    const newIntern = intern => {

        let internCard = `
       
            <div class="col-sm">
                <div class="card bg-light mb-3" style="min-width: 18rem;">
                    <div class="card-header">Intern</div>
                    <div class="card-body">
                    <h5 class="card-title">${intern.name}</h5>
                    <p class="card-text">ID: ${intern.id}</p>
                    <p class="card-text">Email: <span><a href="mailto:${intern.email}">${intern.email}</a></span></p>
                    <p class="card-text">School: ${intern.school}</a></p>
                    </div>
                </div>
            </div>
        
        `;
        html.push(internCard);
    }

    for (let i = 0; i < renderedHtml.length; i++) {
        if (renderedHtml[i].getRole() === "Manager") {
            newManager(renderedHtml[i]);
        }
        if (renderedHtml[i].getRole() === "Engineer") {
            newEngineer(renderedHtml[i]);
        }
        if (renderedHtml[i].getRole() === "Intern") {
            newIntern(renderedHtml[i]);
        }
        
        
        
    }

    return html.join('');
}






module.exports = renderedHtml => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="../dist/styles.css">
    
</head>
<body>
    <main>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>
        <div class="container">
            <div class="row">
                ${createTeam(renderedHtml)}
            </div>
        </div>
    </main>
    
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>`;
}

