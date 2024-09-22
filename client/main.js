// DOM manipulation
// select the form and select feedback container
const guestForm = document.getElementById(`guest-form`);
const feedbackContainer = document.getElementById("feedback-container");
// const hostURL = "http://localhost:8080";
// const hostURL = "https://week4-assignment-guestbook-q1h7.onrender.com";
// FORM
// we need an event to submit the form data
// event handler
// prevent the default behaviour
// a FormData object template
// get the formvalues to insert them into FormData object

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(guestForm);
  const formValues = Object.fromEntries(formData);
  console.log(formValues);
  fetch("https://week4-assignment-guestbook-q1h7.onrender.com/add-data", {
    method: "POST",

    headers: { "Content-Type": "application/json" },

    body: JSON.stringify({ formValues }),
  });
}

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
guestForm.addEventListener("submit", handleSubmit);
// \feedBAck conTAINer

// fetch the READ endpoint to have access to the data
//fetch the url, parse the response into json
// !once you finish replace local host url
// wrangle data if neccesary

async function getFeedback() {
  const result = await fetch(
    "https://week4-assignment-guestbook-q1h7.onrender.com/get-feedback"
  );
  const data = await result.json();
  console.log(data);
  return data;
}

guestForm.addEventListener("submit", getFeedback);

async function renderFeedback() {
  feedbackContainer.innerHTML = "";
  const getFeedbackItems = await getFeedback();

  //you will use a loop or array method
  getFeedbackItems.forEach(function (item) {
    //create DOM elements
    const guestContainer = document.createElement("div");
    const guestName = document.createElement("p");
    const guestDate = document.createElement("p");
    const guestFeedback = document.createElement("p");
    const deleteButton = document.createElement("button");
    //for each item in the array, assign the value to a DOM element
    guestName.textContent = `Guest name: ${item.name}`;
    guestDate.textContent = `Date of visit: ${item.date1}`;
    guestFeedback.textContent = `Guest feedback: ${item.review}`;
    deleteButton.textContent = "delete entry";

    // give classnames to elements
    guestContainer.className = "guest-container";
    guestName.className = "guest-child";
    guestDate.className = "guest-child";
    guestFeedback.className = "guest-child";
    deleteButton.className = "delete-button";

    //append the element to the DOM
    feedbackContainer.appendChild(guestContainer);
    guestContainer.appendChild(guestDate);
    guestContainer.appendChild(guestName);
    guestContainer.appendChild(guestFeedback);
    guestContainer.appendChild(deleteButton);
  });
}
guestForm.addEventListener("submit", renderFeedback);
guestForm.addEventListener("submit", () => {
  window.location.reload();
});

renderFeedback();
// renderFeedback();
// i need to display the data on the page
//! databaseData.forEach((item) => {
// i need DOM elements to contain the data
// one DOM element (h1,h2 petc) per piece of data. (username,comment ...)
// ---> for example if i am getting username and comment from the database i need
// two DOM elements. one for comment and one for username
// i need to assign the values to the text content property
// for example the text content property for my h1 will have a value of the username from my database data
// i need to append those elements to teh DOMm individualy
//! });
// i need to create DOM elements to contain the data
