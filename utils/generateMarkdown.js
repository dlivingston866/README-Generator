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


  # Installation:
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
  ## Video Link:  https://drive.google.com/file/d/1--PoqJHOqtaqCOqZgIppOU0EkpMJirdJ/view
`;
}

module.exports = generateMarkdown;