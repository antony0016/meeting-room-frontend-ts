export type Room = {
  id: number;
  location_id: number;
  room_name: string;
  is_deleted: boolean;
};

export class CRoom {
  id: number;
  location_id: number;
  room_name: string;
  is_deleted: boolean;
}
