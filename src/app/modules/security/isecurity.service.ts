import { IUser } from './user/user.component';

export abstract class ISecurityService {
  logout: () => void;
  login: (username: string, password: string) => boolean;
  user: IUser;
}
