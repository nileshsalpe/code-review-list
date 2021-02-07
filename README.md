# Code Review - Etiquettes

## Table of Content

- [General](#general) 
    - [Right Mindset](#right-mindset)
    - [Dedicated time slot for review](#dedicated-time-slot-for-review)
    - [Avoid Silos](#avoid-silos)
    - [Avoid conflicts](#avoid-conflicts)
- [Before CR]()
    - [Self-Review](#self-review)
    - [Commit Size](#commit-size)
    - [Background Information](background-information)
    - [Choosing Reviewers](choosing-reviewers)
    - [Deadlines](#deadlines)
- [In CR](#in-cr)
    - [Don't be evil](##dont-be-evil)
    - [Understand constraints](#understand-constraints)
    - [Handling the Comments](#handling-the-comments)
    - [Conflict Resolution](#conflict-resolution)
[After CR](#after-cr)
    - [After CR approved](#after-cr-approved)
    - [If CR rejected](#if-cr-rejected)
    
    
## General

### Right Mindset
- Shared responsibility to improve the product
- Learn from each other
- Opportunity to understand the new area in product
- Mentoring

### Dedicated time slot for review

The team should daily dedicated time slot for code review.

For example, morning 10.30 to 11 am, all will do the dedicated code review if they have assigned one. 

Block calendar of the team to do so for timely and quality code reviews.

If we don't follow such conventions, gate-keepers of the code might try to slow the speed of code merges.
It might happen because either they are busy or lazy or political this could result in a dangerous tool to slow down someone's space of changes.

The above convention eliminates such tactics and helps for speedy, efficient code reviews in a timed fashion.

### Avoid Silos

Avoid code brother's environment so no two persons always review each other's code.

No islands of coder and reviewers.

### Avoid conflicts
The team should have a consensus on general topics like
- Code style and formatting (prettier, check style)
- Language Conventions (Java, Python, Golang, Nodejs)
- Framework conventions (Spring, Hibernate, Rest APIs, Swagger, etc.)
- Third-party approved list of libraries​
- Realistic code coverage thresholds line/branch/function converge. Example 90% for line, 90% for branch, 80% for function etc.

## Before CR

### Self-Review

- First, you have to explain the code to yourself before adding any reviewer.
- Acting like reviewing and putting comments for the code of somebody else (though, actually, it is your code) helps a lot.
You might not believe how simple mistakes you have done.

### Commit Size
- Code commit size should not be more than ~10 files. Code review should finish in ~ 30 min.
- Code review should not need half or one day to review CR. it should be in small manageable chunks.

### Background Information
- Assume code reviewers don't know anything about the feature or design decisions. 
- You have relevant documentation in internal wiki/task tracking tools for the change, add links details in the task in project management tools like JIRA, Rally, Team Foundation Server, etc.
- Always mention how you have tested the code. Add links for details for testing data and results in project management tools like  JIRA.

### Choosing Reviewers
- Choose one from the current team (required) and the other from another team (optional) for code review.
- Reviewer can reject to review code if he has other commitments or lacks knowledge in the area of code changes.

### Deadlines
- Mention a realistic deadline for code review  - give at least one day. Mention that in daily standup if you have an urgent need in exceptional cases like fixing prod issue etc. ​
- If the reviewer is too much busy or not comfortable in the area of code change, he should communicate in stand-ups. 

## In CR

### Don't be evil
- If the reviewer doesn’t understand code, ask clear to point questions.
- Comments should lead to solutions not to conflicts. Provide sample code in the comment for more context.
- Reviewer should not criticize the developer but the code. Give clear, constructive comments. Keep comment to point and avoid passion adjectives like dumb, crazy stupid, wonderful, etc.
- Comments should not contain personal blames or complaints, sarcastic, personal (yours, mine theirs, etc.) content like.
    
    `You must understand by doing this will decrease the performance.`
    
    `You should not have returned this from the method it so bullshits!!!`

instead, comment like this

    use XYZ to increase performance by 2x.
    
    return this from function in case of error

- Appreciate code if code has done something very elegant and learn from it.

### Understand constraints
- Reviewer should understand the constraints of the developer.
  - timeline
    - It could be a production bug need to fix what is causing the problem right now than an ideal fix.
  - infra
     - May be current cloud doesn't have support for the sticky session so we have to some hacks.
     - It may not support automatic scaling we have to do it manually 
     - It may not support particular technology say it supports SOLR as a service but not elastic search due to company-wide decision.
   - dependent systems/services/product 
      - Need to call two different APIs instead of service efficiently returning desired results in the single API call.
      - It does not support async mechanism for time taking request so you have to poll for results.
      - It does not support pagination and there are chances of going out of memory by fetching all results in one call.
      - It may return wrong response codes in case of errors say it returns HTTP 500 for auth error due to bad design.
    - evolution path etc. and assumptions teams' best practices for coding etc.
      - The team is developing a quick proto-type and wants to get things working fast.

### Handling the Comments
- Developers should take a moment back and consider themselves in reviewers' shoes and explain code to themself first.
- Developer should address code either by adding more comments in the code or changing code to be clearer/performant.
- Developer should address or acknowledge all the comments.
- Reviewer should add nit: (nitpick) for non-critical comments. Example renaming, extra brackets, etc.

### Conflict Resolution
- Facts or data points override personal preferences of coding.​
- Team's styling guide for naming, spaces, file size, usage of the library, etc. overrides personal preferences of coding.
- If there are too many iterations say 4-5, the reviewer and code need to sync either through the meeting to resolve the conflicts.
- If that does not solve involve a third person and take decisions based on time and cost investments to returns of code changes.
- If that does not solve involve the manager and escalate the concern ​
- Developer can reject review comments by citing valid reasons like time constraints or hidden assumptions etc.

## After CR

### After CR approved
- All checks in the pipeline are passed – build/code coverage/static code analysis etc.
- Track changes got merge in destination branch - user squash and merge so that commit history is clean.
- Create tasks or stories if there are any follow up items.
- Track it reflects in the latest artifacts in the pre-prod environment.
- Sanity check after the merge in pre-prod could help.

### If CR rejected
- Developer and reviewer decide the next steps with the involvement of the manager.
- This should happen either if the developer is working in silos or CR size is big like the entire feature.

