export class GridColumnSettingModel {
  public name: string;
  public visible: boolean;
  public index: number;

  public sort: string;
  public sortedAt: number;

  public constructor(fields?: Partial<GridColumnSettingModel>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
