export class UserSettingsModel {
  public id: string;
  public settings: string;
  public websiteId: string;

  public constructor(fields?: Partial<UserSettingsModel>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
