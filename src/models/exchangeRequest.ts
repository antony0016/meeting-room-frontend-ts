export type ExchangeRequest = {
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

export class CExchangeRequest {
  reservation_id: number;
  requester_id: number;
  replier_id: number;
  status: "REQUESTING" | "ACCEPT" | "REJECT";
  reason: string;
  reply: boolean;

  read: boolean;
  created: Date;
  is_deleted: boolean;
}
