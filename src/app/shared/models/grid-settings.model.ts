import { GridColumnSettingModel } from './grid-column-setting.model';

export class GridSettingModel {
  public isFilterVisible: boolean;

  public gridColumnsSettings: GridColumnSettingModel[];

  public filters: any;

  public constructor(fields?: Partial<GridSettingModel>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
