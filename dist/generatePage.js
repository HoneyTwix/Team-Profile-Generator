function createTeam(team){
    return team.map((employee)=>{
        if (employee.getRole() === "Manager") {
            return `<div class="job">
              <h2>${employee.getName()}</h2>
              <h3>${employee.constructor.name}</h3>
              <p>ID: ${employee.getId()}</p>
              <p>Email:<a href = "mailto: ${employee.getEmail()}">${employee.getEmail()}</a></p>
              <p>Office Number: ${employee.officeNumber}</p>
              </div>`
          } else if (employee.getRole() === "Engineer") {
            return `<div class="job">
              <h2>${employee.getName()}</h2>
              <h3>${employee.constructor.name}</h3>
              <p>ID: ${employee.getId()}</p>
              <p>Email: <a href = "mailto: ${employee.getEmail()}">${employee.getEmail()}</a></p>
              <p>Github:<a href = "https://github.com/${employee.github}"> ${employee.github}</a> </p>
              </div>`
          } else if (employee.getRole() === "Intern") {
            return `<div class="job">
              <h2>${employee.getName()}</h2>
              <h3>${employee.constructor.name}</h3>
              <p>ID: ${employee.getId()}</p>
              <p>Email: <a href = "mailto: ${employee.getEmail()}">${employee.getEmail()}</a></p>
              <p>School: ${employee.school}</p>
              </div>`
          }
        })
      }

function generatePage(team){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
        <title>Team Generator</title>
        <link href="style.css" rel="stylesheet">
    
    </head>
    <body>
        <header class="title"> 
            <p>My Team</p>
        </header>
        <div class="team">
          ${createTeam(team)}
        </div>
    </body>
    </html>`
    
}

module.exports = generatePage