export type Reservation = {
  id: number;
  user_id: number;
  room_id: number;
  room_name: string;
  nickname: string;
  host: string;
  use_date: string;
  start_time: string;
  end_time: string;
  reason: string;
  attendee: number;
  guest: number;
  tea: number;
  water: number;
  coffee: number;
  water_dispenser: boolean;
  meal_courtyard: number;
  meal_buffet: number;
  note: string;

  created_date: string;
  is_deleted: boolean;
};

export class CReservation {
  id: number;
  user_id: number;
  room_id: number;
  room_name: string;
  nickname: string;
  host: string;
  use_date: string;
  start_time: string;
  end_time: string;
  reason: string;
  attendee: number;
  guest: number;
  tea: number;
  water: number;
  coffee: number;
  water_dispenser: boolean;
  meal_courtyard: number;
  meal_buffet: number;
  note: string;

  created_date: string;
  is_deleted: boolean;
}
