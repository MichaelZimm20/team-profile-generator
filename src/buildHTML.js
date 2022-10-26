

    // generate manager to html
    const managerGenerator = function (manager)  {
        return `
        <div class = 'card card-style'>
            <div class = 'card-header bg-primary text-white'>
                <h2 class = 'card-title'>${manager.getName()}</h2>
                <h4 class = 'card-title'><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h4>
            </div>

            <div class = 'card-body'>
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
        
        `;
    };


    //generate engineer to html 
    const engineerGenerator = function(engineer)  {
        return `
        <div class = 'card  card-style'>
            <div class = 'card-header bg-primary text-white'>
                <h2 class = 'card-title'>${engineer.getName()}</h2>
                <h4 class = 'card-title'><i class="fas fa-glasses"></i> ${engineer.getRole()}</h4>
            </div>

            <div class = 'card-body'>
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="http://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></li>
                </ul>
            </div>
        </div>
        
        `;
    };

    //generate intern to html
    const internGenerator = function(intern) {
        return `
        <div class = 'card  card-style'>
            <div class = 'card-header bg-primary text-white'>
                <h2 class = 'card-title'>${intern.getName()}</h2>
                <h4 class = 'card-title'><i class="fas fa-glasses"></i> ${intern.getRole()}</h4>
            </div>

            <div class = 'card-body'>
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>
        
        `;
    };
    
    //creates team html
    const createHTML = (myTeam) => {
        const teamArr = [];
   
    //   for (let member of myTeam) {
        // myTeam.forEach(member => {
            for (i = 0; i < myTeam.length; i++ ) {
            // const role = member.getRole();
    

                if (myTeam[i].getRole() === 'Manager') {
                    console.log("created manager");
                    const managerCard = managerGenerator(myTeam[i]);
                     teamArr.push(managerCard);
                 }
                 if (myTeam[i].getRole() === 'Engineer') {
                    console.log("created engineer");
                    const engineerCard = engineerGenerator(myTeam[i]);
                    teamArr.push(engineerCard)
                }
                if (myTeam[i].getRole() === 'Intern') {
                    console.log("created intern");
                    const internCard = internGenerator(myTeam[i]);
                     teamArr.push(internCard);
                 }
                
        }
       
    //    console.log(teamArr);
        return teamArr.join('');

    }


    module.exports = function (myTeam){
        // console.log(myTeam);
        return `
        <!DOCTYPE html>
        <html lang="en">
    
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        
            <link rel="stylesheet" href="style.css">
            <script src="https://kit.fontawesome.com/7c83ffe4d1.js" crossorigin="anonymous"></script>
           
    
        <title>My Team Profile</title>
        </head>         
        
        <body>

            <div class="container-fluid">
                <div class="row">
                    <div class=" col-12 jumbotron mb-3 bg-danger">
                        <h1 class="text-white text-center">My Team</h1>
                    </div>
                </div>
            </div>


            <div class = 'container'>
                <div class = 'row'>
                    <div class = 'row col-12 d-flex justify-content-center '>
                    ${createHTML(myTeam)}
                    </div>
                </div>
            </div>
        
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
            crossorigin="anonymous"></script>
        </body>
        </html>
    
        `;
    };



