import { TokenData } from "./TokenData";
import { UserData } from "./UserData";

export interface AuthResponse {
  user: UserData;
  tokens: TokenData;
}