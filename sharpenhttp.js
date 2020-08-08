// Handles HTTP requests to Sharpen platform

class EasyHTTP {
  // Make an HTTP GET Request
  async get(url, encodedAuth) {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Basic ${encodedAuth}`,
      },
    });

    const resData = await response.json();
    return resData;
  }

  // Make an HTTP POST Request
  async post(url, data, token) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
      json: true,
    });
    const resData = await response.json();
    return resData;
  }
}
