class Cuenta {
  constructor(user, password) {
    this.password = password;
    this.user = user;
  }

  getPassword() {
    return this.password;
  }

  setPassword(password) {
    this.password = password;
  }

  getUser() {
    return this.user;
  }

  setUser(user) {
    this.user = user;
  }
}
module.exports = Cuenta;