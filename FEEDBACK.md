# Project 1 Feedback

## Code Quality - Performing

Criteria: Is the code well formatted? Are variable and function names semantic and sensible? Is the code easy to read and understand?

### Strengths:

- Code is mostly well-formatted with semantic and sensible naming for the most part.
- Code is easy to read and understand.
- HTML and CSS both pass validators with no errors! CSS has no errors or valid warnings, which is great.

### Areas for Growth:

- A few instances where class and id names are not very semantic. "otherContainer", for instance, is probably not very meaningful. Additionally, I noticed some styling with ids in your stylesheet, but I suggest using classes for more sustainable styling and reserving ids for truly unique style instances and JS DOM element selection.
- Be sure to wrap your HTML input and button in a form element -- this is considered best practice for a11y concerns, especially if you add a `<label>` element to the input as well. This will also allow a user to press "enter" to submit an answer instead of having to switch between typing on the keyboard and clicking the submit button.
- The only error that returns on the HTML validator is a warning about using only one `<h1>` element per page. This is because `<h1>` elements are considered top-level headings, and thus there should only be one per HTML page. Use the `<h1>` element as the heading with top priority on the page that will tell the user what the page is about -- do not use it for the its size. You can style `<h2>` and other heading elements with whatever size is necessary for your design. In fact, both of the elements in your HTML that are rendered with `<h1>` tags should probably be rendered with lower-ranked headings. There should be an `<h1>` that provides top-level heading info as to what your page is about for folks with screen readers and other assistive devices.
- There are some formatting issues in the `main.js` file -- inconsistent spaces and formatting. Be sure your Prettier formatter is set up correctly with the settings from Installfest so that your document auto-formats on save.

## Technical Requirements - Performing

Criteria: How does the project stack up to the requirements for this project? Is the developer making use of the material we've covered in a way that makes sense?

### Strengths:

- Your application meets all the technical requirements listed below! The app renders in the browser and no errors were observed in the console during regular game play. Nice job getting your app deployed to GH Pages, and also having an extensive history of commits dating back to the start of your project.
- Your application is feature-rich and engaging, with plenty of GIFs, styling, and interactivity.
- The alert library you integrated into your application is great -- it fits perfectly into the flow of your game and was customized in accordance with your app's theme and features.

### Areas for Growth:

- GitHub repo shows a good history of commits, and for the most part the messages are consistently formatted and meaningful, but continue to work on both the consistency of your commit message formatting as well as their content. Commit messages should be concise, descriptive, and consistently structured -- 'Fixed all bugs' is not very descriptive, though we're all guilty of having messages like that at one point or another. The standard is usually 'Capitalized present-tense verb + description of what was done' for each and every commit. For example, 'Add styling to card container' or 'Refactor API call'. [This](https://chris.beams.io/posts/git-commit/) is my favorite article on how to write good commit messages and why it's an important focus for developers.
- For further feature development and for future projects, definitely make use of Git Branches to work on code without affecting the master branch -- this will keep you from having to worry about breaking the working game, and is an important development practice to get in the habit of doing. When your branch works the way you want it to and you're ready to incorporate it into production code, you can use `git merge` to [merge](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) your development branch to the master (we haven't really practiced this yet, but it's pretty straightforward!).

## Creativity and Interface - Progressing

Criteria: Is the application easy to navigate? Does it work well in every major browser? Is it responsive? Does it incorporate modern UI Themes?

### Strengths:

- The design is great overall and fits with the Avenger theme.
- Nice job incorporating CSS features that contribute to a consistent UI theme.
- Good work styling the custom alert modal so that it fits the overall design of the application. The GIFs are super engaging and animating.

### Areas for Growth

- The interface becomes pretty much unusable in laptop width browsers and smaller. At browser widths smaller than 1760 pixels, the Life and Score containers start to overlap with the input form and make it impossible to click the start button and into the input form and submit button as well. This is a great example of why designing with mobile first is important, because if you ensure your app is usable on even the smallest screens, you'll know it's usable on larger screens as well.
- It would be a good goal to figure out how to get the decreasing lives to be represented with the corresponding number of heart emojis.

## Functionality - Performing

Criteria: Does the application work without errors or bugs? Does it present a complete app, where every feature is fully implemented in a way that makes sense?

### Strengths:

- Regular gameplay appears to work well without errors or bugs observed.
- Application presents a complete product, with a clear beginning, middle, and end, and features mostly fully implemented in a way that makes sense.

### Areas for Growth:

- I found the game pretty challenging to play due to my lack of in-depth Avengers knowledge. In order for users to be able to access the game a little better, consider incorporating either a hints feature that shows the first couple letters of the answer, and/or use multiple-choice answers. Part of the point of the game is to show off the entire app, and for someone like me who isn't able to answer most of the questions without having your `triviaQ` file open, it's hard to see the full scope of the application and experience all the user stories firsthand. That being said, one way around that would be to record yourself going through the full gameplay and including that video in your README.
- I also noticed that user-submitted answers must have the correct casing in order to be considered correct. How could you add more logic so that users can type lower-case or all upper-case answers that would still be considered correct?
- If the user clicks "Do not play again" after game over, it seems to still bring the user back to the beginning of the game.
- One error that does populate to the console -- if the user keeps clicking "next question", eventually they run out of questions and the game breaks. How could you make it so that getting to the end of the list of questions causes the questions array to repopulate with the original items?

## Presentation - Performing

Criteria: Is there adequate documentation? Is the repository well organized and free of clutter?

### Strengths:

- The README.md looks great! I love how you included screenshots of the progress and major views of you application, and you wrote great explanations, including technologies used and an overview of your game. This is the first point of contact to your application, and does a great job of introducing your application.

### Areas for Growth:

- Please include a `planning` directory in your repo that includes your user stories and wireframes. This is a great practice for project management skills, and shows your methodological approach to building out an application. I would also consider describing your MVP/silver/gold feature plans in the README, to show off all the features you have incorporated and list out future ones you plan to include, such as the responsive design.
- I would move your favicon, gifs, background, and Jeopardy audio file into a folder called assets. Since you have multiple JS files, consider creating a folder to hold those js files.
- Suggested folder structure:
  - assets
    - gifs
    - Favicon
    - flash_background
    - Jeopardy-theme
  - js
    - main.js
    - triviaQ.js
  - index.html
  - styles.css
  - Readme.md

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

Please see my inline comments in your Readme, HTML, and JS files.

Patrick, overall this is a great project. You've made tremendous progress in the course of a week-long sprint, and this project highlights a lot of the key ideas in frontend development. In terms of next steps, I would definitely prioritize making the game usable on laptop browser widths and smaller, as a good chunk of potential users will not be able to access your application without some responsiveness. Additionally, think about how you could give users without a deep knowledge of the Avengers universe a foothold into the game so that they can progress through it and see all your great user stories. Let me know if you have any additional questions. Congrats on all your hard work and completing project 1!
