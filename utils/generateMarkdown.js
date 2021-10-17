//generate  README
const generateMarkdown = (data) => {



  // table of contents
  let table_of_content  = `\n## Table of Contents\n`
  if (data.install) { table_of_content  += `* [Installation](#installation)\n`; }
  if (data.usage) { table_of_content  += `* [Usage](#usage)\n`; }
  if (data.contrib) { table_of_content  += `* [Contributing](#contributing)\n`; }
  if (data.test) { table_of_content  += `* [Tests](#tests)\n`; }
  table_of_content  += `* [License](#license)\n`;
  if (data.credits) { table_of_content  += `* [Credits](#credits)\n`; }
  table_of_content  += `* [Questions](#questions)\n`;


  let year = new Date();

  /*** README.md Generation ***/
  //--------------------------//

  //Add the README title
  let readme_template = `# ${data.title}\n`;

 
  // the description heading and description
  readme_template += `\n## Description\n${data.description}\n`;

  // table of contents
  readme_template += table_of_content ;

  //Add installation 
  if (data.install) {
    readme_template += `\n## Installation\n${data.install_notes}\n`;
  }

  // usage 
  if (data.usage) {
    readme_template += `\n## Usage\n${data.usage_info}\n`;
  }

  // contributing 
  if (data.contrib) {
    readme_template += `\n## Contributing\n${data.contribute_notes}\n`;
  }

  if (data.test) {
    readme_template += `\n## Tests\n${data.test_notes}\n`;
  }

  //Add a license 
  readme_template += `\n## License \nLicensed under the ${data.license} License. Copyright \u00A9 ${year.getFullYear()}\n`;

  // credits 
  if (data.credits) {
    readme_template += `\n## Credits\n* ${data.credit_data}\n`;
  }

  // questions 
  readme_template += `\n## Questions\n*For any additional information find me at* \n\nGitHub: [@${data.github}](https://github.com/${data.github}/)\n\nEmail: [${data.email}](mailto:${data.email})\n`;

  
  return readme_template;

}

module.exports = generateMarkdown;
