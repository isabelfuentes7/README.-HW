const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);

//function that creates array for user

function promptUser() {
    return inquirer.prompt([  
    ])
}

{
    type; "input",
    message; "What is the your email?",
    name;"title",
},
{
    type; "input",
    message; "What is your project name?",
    name; "title"
},
{
    type; "input",
    message; "What is your project description?",
    name; "description"
},
{
    type; "input",
    message; "Who contributed on this project?",
    name; "contribution"
},

    
}
const writeFileAsync = util.promisify(fs.writeFile);

const init = () => { 
    promptUser()
    .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Success'))
    .catch((err) => console.error(err));
};

// Function call to initialize app

init();
//async function init(){
   // try {
      // const response = await promptUser();
        //const readMe = geneerateMarkdown(response);

        //await writeFileAsync( "README.md", readMe);
        //console.log("Success!");
        //catch (err){
            //console.log(err);

        }
    }



}