// DOM manipulation
// select the form and select feedback container

// FORM
// we need an event to submit the form data
// event handler
// prevent the default behaviour
// a FormData object template
// get the formvalues to insert them into FormData object

// fetch the CREATE endpoint to send the formvalues to the server
//! when you finish your project replace local host url with deployed url
// ! for ex https://week4-assignment-guestbook-q1h7.onrender.com

// fetch("localhost-url/endpoint",
//   {
//     method:
//     headers:
//     body:
//   }
// )

// event listener ---submit

// \feedBAck conTAINer

// fetch the READ endpoint to have access to the data
//fetch the url, parse the response into json
// !once you finish replace local host url
// wrangle data if neccesary

// i need to display the data on the page
databaseData.forEach((item) => {
  // i need DOM elements to contain the data
  // one DOM element (h1,h2 petc) per piece of data. (username,comment ...)
  // ---> for example if i am getting username and comment from the database i need
  // two DOM elements. one for comment and one for username
  // i need to assign the values to the text content property
  // for example the text content property for my h1 will have a value of the username from my database data
  // i need to append those elements to teh DOMm individualy
});
// i need to create DOM elements to contain the data
