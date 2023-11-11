export type Name = string;

export interface IFullName {
  first: Name;
  middle?: Name;
  last: Name;
}

export type Type = 'array' | string;
