export class UserModel {
  public userId: string;
  public token: string;
  public email: string;
  public name: string;
  public permission: string[] | string;

  public constructor(fields?: Partial<UserModel>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
