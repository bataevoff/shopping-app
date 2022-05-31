import $api from '../http';

export default class AuthService {
  static async login(email, password ) {
    return $api.post('/login', { email, password })
  }

  static async registration(email, password, sex, birthDate, username) {
    return $api.post('/registration', {email, password, sex, birthDate, username})
  }

  static async logout() {
    return $api.post('/logout')
  }
}

