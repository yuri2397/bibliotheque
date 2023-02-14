import { Model, Permission } from "./base.model";

export class User extends Model<User>{
    name:               string;
    username:           string;
    email:              string;
    phone:              null;
    address:            null;
    city:               string;
    notification_token: null;
    email_verified_at:  null;
    permissions: Permission[]
    
}
