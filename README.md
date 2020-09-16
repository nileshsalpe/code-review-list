### Code Review at Acme Corp.

# Code Review Etiquette

- Give dedicated teams time for code review - Example morning 10.30 to 11 am all will do code review if they have assigned one. Book calendar of team to do so for timely and quality code reviews.

- Avoid code brothers envrionment so no two persons always review each others code.

- Avoid conflictss by having team concensus on general topics
  - Code style and formatting ()
  - Language Conventions (Java, Python, Golang, Nodejs)
  - Framework conventions 
  - Third party approved list of libraries
  - Realistic code coverage threshhodls line/branch/function conevrage 
  
### Before CR

- Self Review, You have reviewed your code first.

- Code commit size should not be more than 10 files. Code review should finish in 30 to 45 min.

- You have relevant documentation in wiki/Jira/in Code to understand change. - add details in task in JIRA.

- Always mentions how you have tested the code - any speific test data you want to share. - add details in task in JIRA

- Choose one from current team (required) and otherfrom another team (optional) for code review.

- Mention realistic SLA for code review - give atleast one day. Mention that in daily standup if you have urgent SLA in exceptional cases like fixing prod issue etc.

- If assigning is too much busy or not confortable in area of code change he should communicate in standups.

### In CR 

- Critisize the code not person but code. Give constructive comments. Create harmnious environment, code review is not smartness game to win but it is constant effort to improve product and so appease customers.

- Appreciate code if code has done something very elegant.

- Code reviewer should understand contraints of code for timeline/infra/dependent systems/services/product evolution path etc. and assumptions teams best practices for coding etc.

- If there are too many iterations say 4-5, reviewer and code need to sync either through meeting to resolve the conflicts.

### After CR approved

### If CR rejected

# Automation of code review steps 

#### Use pre-commit hooks for 
- To check format of commit message 
- Formatting of changed files 
- Run unit tests and it meets the code coverage (line/branch/function), if code coverages drops commit should fail
- Run PMD/Checkstyle/Sonar static code review - if severity errors reposrted commit should fail.

#### Checks in pipeline  
- Run unit tests and it meets the code coverage (line/branch/function), if code coverages drops commit should fail
- Run PMD/Checkstyle/Sonar static code review - if severity errors reposrted commit should fail.

### Code Review List
- Using tampermokey plugin, Team specific code review list if shown using plugin while doing code review in browser.



