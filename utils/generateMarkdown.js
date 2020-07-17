// function to generate markdown for README
function generateMarkdown(data) {
    return `# Title:
    # ${data.title}
    
   # Description:
  ## ${data.description}

  #Table of Contents:
  (#Description)
  (#Installation)
  (#Usage)
  (#License)
  (#Contributing)
  (#Tests)
  (#Questions)


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
  ## Github user name:
  ## ${data.githubUserName}
  ## Developer email:
  ## ${data.email}
  ## video link
`;
}

module.exports = generateMarkdown;