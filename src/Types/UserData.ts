import { Avatar } from "./Avatar";

export interface UserData {
  id:        number;
  name:      string;
  email:     string;
  is_active: boolean;
  avatar:    Avatar;
  type:      string;
  created:   Date;
  modified:  Date;
  role:      string;
}