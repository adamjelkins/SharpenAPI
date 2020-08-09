// Main Javascript file which handles initialization, actions, and UI

// Init Storage
const storage = new Storage();
const http = new EasyHTTP();

// Init Bearer Token from Local Storage
const auth = storage.getAuthData();

// UI Elements
const getAuth = document.querySelector('#get-auth');
const postDial = document.querySelector('#post-dial');

// Get Auth - on click, get authentication, assign it to local storage, and close the modal.
getAuth.addEventListener('click', function () {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const encodedAuth = btoa(`${username}:${password}`);
  console.log(encodedAuth);

  // Use encoded auth to authenticate, then set Auth data in local storage
  const interaction = http
    .get('https://api.sharpen.cx/v1/auth/token', encodedAuth)
    .then((data) => storage.setAuthData(data.token))
    .catch((err) => console.log(err));

  // Close modal
  $('#authModal').modal('hide');
});

// Post Dial - on click, post to dial url with dial data and Auth data from storage
postDial.addEventListener('click', function () {
  const toNumber = document.getElementById('toNumber').value;
  const fromNumber = document.getElementById('fromNumber').value;

  const dialData = {
    callerId: {
      name: 'Customer Service',
      number: fromNumber,
    },
    to: toNumber,
  };
  const interaction = http
    .post('https://api.sharpen.cx/v1/interactions/dial', dialData, auth.auth)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
