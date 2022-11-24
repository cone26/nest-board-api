export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

// enum
export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
