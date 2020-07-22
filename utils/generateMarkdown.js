// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions](#questions)
  ### Description
  * ${data.description}
  ### Installation
  * ${data.installation}
  ### Usage
  * ${data.usage}
  ### License
  * ${data.license}
  ### Contributing
  * ${data.contributing}
  ### Tests
  * ${data.tests}
  #### Questions
  * [${data.github}](https://github.com/${data.github})
  * ${data.email}
`;
}

module.exports = generateMarkdown;
