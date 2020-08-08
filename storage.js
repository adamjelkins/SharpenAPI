// Stores and retrieves data in local storage

class Storage {
  constructor() {
    this.auth;
  }

  getAuthData() {
    if (localStorage.getItem('auth') === null) {
      this.auth = null;
    } else {
      this.auth = localStorage.getItem('auth');
    }

    return {
      auth: this.auth,
    };
  }

  setAuthData(auth) {
    localStorage.setItem('auth', auth);
  }
}
