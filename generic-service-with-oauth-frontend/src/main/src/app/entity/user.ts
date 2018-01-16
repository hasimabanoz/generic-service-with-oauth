import { Fund } from "./fund";

export class User {
  id: number;
  firstname: string;
  surname: string;
  username: string;
  phone: string;
  email: string;
  funds:Fund[];
}
