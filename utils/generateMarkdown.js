// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  #### Questions
  * [GitHub Repository Link](https://github.com/${data.github})
  * ${data.email}
  * ![NPM](https://img.shields.io/npm/l/${data.license})
  # Table of Contents
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
  * ${data.contribution}
  ### Tests
  * ${data.testing}
`;
}

module.exports = generateMarkdown;
