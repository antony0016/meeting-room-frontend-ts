export class CUser {
  id: number;
  username: string;
  nickname: string;
  is_admin: boolean;
}

export class CLoginPayload {
  username: string;
  password: string;
}
