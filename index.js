// Define a function named submitData that takes a user's name and email as parameters
function submitData(usersname, usersemail) {
  // Create a JavaScript object with the user's name and email
  const userData = {
    name: name,
    email: email
  };

  // Make a POST request to the specified URL with the user data
  return fetch('http://localhost:3000/users', {
    method: 'POST', // Set the HTTP method to POST
    headers: {
      'Content-Type': 'application/json', // Specify that the request payload is in JSON format
      'Accept': 'application/json' // Specify that the response should be in JSON format
    },
    body: JSON.stringify(userData) // Convert the user data to a JSON string and include it in the request body
  })
  .then(response => response.json()) // Convert the response to JSON format
  .then(data => {
    console.log(data); // Log the response data to the console (you can replace this with your own logic)
    return data; // Return the response data
  })
  .catch(error => {
    console.error('Error:', error); // Log any errors to the console
    return error; // Return the error object
  });
}