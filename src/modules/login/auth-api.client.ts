interface IAuthenticatedUser {
  email: string
}

export class User implements IAuthenticatedUser {
  email: string;

  constructor(email: string) {
    this.email = email
  }
}

export enum ELoginType {
  GOOGLE = 'google',
  FACEBOOK = 'facebook'
}

interface IAuthClient {
  login: (type: ELoginType) => Promise<IAuthenticatedUser>
  logout: () => Promise<void>
}

class FakeAuth implements IAuthClient {

  login(type: ELoginType): Promise<IAuthenticatedUser>{
    return new Promise((res, reject) => {
      setTimeout(() => {
        res(new User("someEmail@gmail.com"))
      }, 100);
    });
  }

  logout(): Promise<void> {
    return new Promise((res, reject) => {
      setTimeout(res, 100);
    });
  }
};

export default FakeAuth;
