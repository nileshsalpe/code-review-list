### Code Review at Acme Corp.

---

# Code Review Etiquette

- Team gives dedicated time daily for code review.
example morning 10.30 to 11 am all will do code review if they have assigned one.
Book calendar of team to do so for timely and quality code reviews.

- Avoid code brothers envrionment so no two persons always review each others code.
No islands of coder and reviewers.

- Avoid conflicts by having team concensus on general topics like
  - Code style and formatting (prettier, checkstyle)
  - Language Conventions (Java, Python, Golang, Nodejs)
  - Framework conventions (Spring, Hibernets, Rest APIs, Swagger etc.)
  - Third party approved list of libraries
  - Realistic code coverage threshhodls line/branch/function conevrage. Example 90% for line, 90% for branch, 80% for function etc.

  
### Before CR

#### Self Review 

  - Self Review, You have reviewed your code first before adding any reviewer.

#### Code Size

- Code commit size should not be more than 10 files. Code review should finish in 30 to 45 min.
- Code review should not need half or one day to review CR. it should be in small manageable chunks.

#### Background Information

- Assume code reviwer dont know anything about feature or design decision.

- You have relevant documentation in wiki/Jira/in Code to understand change. - add details in task in JIRA.

- Always mentions how you have tested the code - any speific test data you want to share. - add details in task in JIRA

- Choose one from current team (required) and otherfrom another team (optional) for code review.

- Mention realistic SLA for code review - give atleast one day. Mention that in daily standup if you have urgent SLA in exceptional cases like fixing prod issue etc.

- If assigning is too much busy or not confortable in area of code change he should communicate in standups.

- All checks in pipeline are passed before assigning the review.


### In CR 

#### Don't be evil

- Critisize the code not not person but code. Give clear, constructive comments. Keep comment to point and avoid passion adjective like `really dumb`, `crazy stupid` `wonderful` etc.

- Dont put personal blames or complaint. Comments should lead to solution not to conflicts. Provide sample code in comment for more context.

- Create harmnious environment, code review is not smartness game to win but it is constant effort to improve product and so to appease customers.

Example:

Dont put comments like 

`You should understand by doing this will increase performace`

`You should should not have retuned this from method it so bad`

instead comment like this

`use xyz to increase performance by 2x`

`return this from function in case of error`


- Appreciate code if code has done something very elegant.

- Code reviewer should understand contraints of code for timeline/infra/dependent systems/services/product evolution path etc. and assumptions teams best practices for coding etc.

#### Conflict Resolution 

- If there are too many iterations say 4-5, reviewer and code need to sync either through meeting to resolve the conflicts.
- If that does not solve involve third person and take decision based on time and cost investments to returns of code changes.
- If that does not solve involve manager and escalate concern 

- Coder can reject comments sighting valid reason like time contraints or hidden assumptions etc.


### After CR approved

- Track changes got merge in destination branch - user `squash and merge` so that commit history is clean.
- Track it reflects in latest artefacts in pre-prod environment.
- Sanity check after merge in pre-prod could help.


### If CR rejected

- Coder and reviewer decide next steps with managers involvement.

- This should happen either if code is working in Silos or code review is really big like entire feature.

----

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



