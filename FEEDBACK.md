# Project 1 Feedback

## Code Quality - Performing

Criteria: Is the code well formatted? Are variable and function names semantic and sensible? Is the code easy to read and understand?

### Strengths:

- Code is well-formatted with semantic and sensible naming.
- Code is easy to read and understand.
- HTML and CSS both pass validators!

### Areas for Growth:

- The only error that returns on the HTML validator is a warning about the empty `h2` on line 43 — I would generate that `h2` element dynamically and then fill it in with text, instead of hard-coding an empty HTML element.
- Additionally, I noticed that you use a mixture of single and double quotes for HTML attributes — I would stick with double quotes for those throughout your `index.html` for the sake of consistency.
- Make sure to remove commented-out code from `style.css` and `script.js`. If any of that commented-out code is related to features you’re working on, I would move it to a development branch and work on it there, rather than having it in your deployed master.

## Technical Requirements - Performing

Criteria: How does the project stack up to the requirements for this project? Is the developer making use of the material we've covered in a way that makes sense?

### Strengths:

- Your application meets all the technical requirements listed below! The app renders in the browser and no errors were observed in the console. Nice job getting your app deployed to GH Pages, and also having an extensive history of commits dating back to the start of your project.
- Your application is feature-rich and also very user friendly.

### Areas for Growth:

- GitHub repo shows a good history of commits, but work on both the consistency of your commit message formatting as well as their content. Commit messages should be concise, descriptive , and consistently structured -- 'layout done' is not ideal, though we're all guilty of having messages like that at one point or another. The standard is usually 'present-tense verb + description of what was done' for each and every commit. For example, 'add styling to card container' or 'refactor API clall'. [This](https://chris.beams.io/posts/git-commit/) is my favorite article on how to write good commit messages and why it's an important focus for developers.
- For further feature development and for future projects, definitely make use of Git Branches to work on code without affecting the master branch -- this will keep you from having to worry about breaking the working game, and is an important development practice to get in the habit of doing. When your branch works the way you want it to and you're ready to incorporate it into production code, you can use `git merge` to [merge](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) your development branch to the master (we haven't really practiced this yet, but it's pretty straightforward!).

## Creativity and Interface - Performing

Criteria: Is the application easy to navigate? Does it work well in every major browser? Is it responsive? Does it incorporate modern UI Themes?

### Strengths:

### Areas for Growth

## Functionality - Performing

Criteria: Does the application work without errors or bugs? Does it present a complete app, where every feature is fully implemented in a way that makes sense?

### Strengths:

### Areas for Growth:

## Presentation - Performing

Criteria: Is there adequate documentation? Is the repository well organized and free of clutter?

### Strengths:

- The README.md looks great! I love how you included screenshots of the major views of you application, and you wrote great explanations, including technologies used, installation instructions, and future plans. This is the first point of contact to your application, and does a great job of introducing your application.
- Thank you for listing out your sources - it’s an important practice to acknowledge the contributions of others to our applications.
- The repo is overall well-organized and free of clutter.

### Areas for Growth:

- Please include a `planning` directory in your repo that includes your user stories and wireframes. This is a great practice for project management skills, and shows your methodological approach to building out an application. I would also consider describing your MVP/silver/gold feature plans in the README, to show off all the features you have incorporated and list out future ones you plan to include, such as the responsive design.
- You can delete that `.vscode` directory — it looks like at some point you made a workspace adjustment to your LiveServer settings that was saved in a `settings.json` file. This is not really necessary and can be removed to eliminate unneeded files.

## Hard Requirements - Complete:

- [x] Render in the browser
- [x] Include separate HTML / CSS / JavaScript files
- [x] Use Javascript for DOM manipulation
- [x] Be deployed online, using Github Project pages and/or to a custom domain.
- [x] Use semantic markup for HTML and CSS (adhere to best practices)
- [x] Show a good commit history with frequent commits

## Necessary Deliverables - Complete:

- [x] A hosted copy of your game, built by you, hosted on Github Pages
- [x] Your HTML/CSS should pass the HTML5 Validator and CSS Validator
- [x] A git repository hosted on Github with frequent commits dating back to the very beginning of the project
- [x] A link to your hosted project in the URL section of your Github repo
- [x] A readme.md file, including explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

## Grade: Pass
