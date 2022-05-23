export class AppConfigModel {
  public api: string;
  public userSettingsApi: string;
  public showSplashScreen: boolean;
  public authClientId: string;
  public authIssuer: string;
  public authRedirectUrl: string;
  public authSilentRefreshRedirectUri: string;
  public authPostLogoutRedirectUri: string;
  public authLogoutUrl: string;
  public authDefaultIdProvider: string;

  public constructor(fields?: Partial<AppConfigModel>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
