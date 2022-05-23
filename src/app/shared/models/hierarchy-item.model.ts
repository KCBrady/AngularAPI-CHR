export class HierarchyItem {
  public name?: string;
  public id?: number;
  public parentId?: number;

  public constructor(fields?: Partial<HierarchyItem>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
