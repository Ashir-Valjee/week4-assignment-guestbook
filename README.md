client link: https://week4-assignment-guestbook-1-wm2b.onrender.com

server link: https://week4-assignment-guestbook-q1h7.onrender.com

github repo link: https://github.com/Ashir-Valjee/week4-assignment-guestbook

screenshots of your trello board, wireframe etc - these are in my github repository

reflection

### Requirements

- 🎯 Ensure your HTML form is working and submitting data into the database as expected.
  This was working locally, but when I deployed it stopped working. I checked on Thunderclient and I am getting a 500 internal server error on the POST API endpoint

- 🎯 Confirm that your project is functional on multiple screen sizes using either media queries or dynamic CSS styling.
  Yes with media queries, I planned this from the outset

- 🎯 Create a working GET API route in your server.
  The GET route works fine

- 🎯 Create a working POST API route in your server and fetch it from your client.
  THis worked locally as mentioned. But now I am getting a 500 internal server error on the POST API endpoint
- 🎯 Seed your database with realistic-looking ‘dummy’ data through the Supabase query editor or a seed file in your server. Ensure that this is saved and submitted (in a screenshot or seed file form) so it can be marked and tested efficiently.
  -Done using my seed file

### Stretch User Stories

- 🐿️ As a user, I want additional functionality on the form such as form validation so that I can have a more interactive experience when submitting my information.
  This is done
- 🐿️ As a user, I want the website to be visually impressive and user-friendly so that it provides a pleasant browsing experience.
  I think its well styled
- 🐿️ As a user, I would like to be able to delete posts.
  I intended to this but once I deployed my API POST endpoint was not working so I spent all my time trying to solve that
- 🐿️ As a user, I would like to be able to like messages so I can show my appreciation to other users.
- DIdnt attempt this

### Required

- 🎯 What requirements did you achieve? Mentioned above
- 🎯 Were there any requirements or goals that you were unable to achieve?
  As mentioned, my site was functional on Friday, but once I deployed on Sunday evening my POST API endpoint is not working.
  APart from that i did not manage the delete or like buttons

- 🎯 If so, what was it that you found difficult about these tasks?
  I spent a long time on Friday solving why I was posting NULL values in my database. I fixed that with Mannys help. I was not wrangling my form data quite correctly.
  Then on Sunday evening, deploying my site caused the POST route to break down and I am not sure why!

#### Optional

🏹 Feel free to add any other reflections you would like to share about your submission, for example:

- Requesting feedback about a specific part of your submission.
  I'd really like to figure out what caused my post route not to work
- What useful external sources helped you complete the assignment (e.g YouTube tutorials)?
  mainly class workshops
- What errors or bugs did you encounter while completing your assignment? How did you solve them?
  This has already been mentioned
- What went really well and what could have gone better?
  I think my styling and responsiveness is good.
