export type exchangeRequest = {
  reservation_id: number;
  requester_id: number;
  replier_id: number;
  status: "REQUESTING" | "ACCEPT" | "REJECT";
  reason: string;
  reply: boolean;

  read: boolean;
  created: Date;
  is_deleted: boolean;
};
