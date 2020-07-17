// function to generate markdown for README
function generateMarkdown(data) {
    return `# Title:
    # ${data.title}
    
   # Description:
  ## ${data.description}

 # Table of Contents:
 
 [Description](#description)
 [Installation](#installation)
 [Usage](#usage)
 [License](#license)
 [Contributing](#contributing)
 [Tests](#tests)
 [Questions](#questions)


  # Installinstation:
  ## ${data.installInstr}

  # Usage:
  ## ${data.usageInfo}

  # License:
## ${data.stack}

  # Contributing:
  ## ${data.contGuidelines}

  # Tests:
  ## ${data.testInstructns}
  
  # Questions?
  ## ${data.questions}
  ## Github user name:  ${data.githubUserName}
  ## Developer email:  ${data.email}
  ## video link
`;
}

module.exports = generateMarkdown;