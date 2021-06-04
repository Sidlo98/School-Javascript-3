class AuthService {
  constructor() {
    this.authenticated = false;
  }

  login(callback) {
    this.authenticated = true;
    // väntar på servern
    setTimeout(callback, 1000);
  }

  logout(callback) {
    this.authenticated = false;
    // väntar på servern
    setTimeout(callback, 1000);
  }

  isAuthenicated() {
    return this.authenticated;
  }
}

export default new AuthService();
