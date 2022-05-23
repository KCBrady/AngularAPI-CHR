import { HierarchyItem } from '@shared/models/hierarchy-item.model';

export interface HierarchyLevelItem extends HierarchyItem {
  level?: number;
}
