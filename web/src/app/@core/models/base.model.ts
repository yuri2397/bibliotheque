export class Model<T> {
  id: string;

  searched: boolean;
  created: boolean;
  deleted: boolean;
  updated: boolean;
  finded: boolean;
  matched: boolean;
  loading: boolean;
  selected: boolean;
  disabled: boolean;

  created_at: Date;
  updated_at: Date;

  clone(): T {
    return JSON.parse(JSON.stringify(this));
  }
}

export interface Param {
  [param: string]: any;
}

export interface Role {
  guard_name: string;
  name: string;
}


export interface Permission {
  id: number;
  name: string;
  guard_name: string;
  created_at: Date;
  updated_at: Date;
  pivot: Pivot;
}

export interface Pivot {
  model_id: string;
  permission_id: number;
  model_type: string;
}
