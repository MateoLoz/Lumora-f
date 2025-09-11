export type IUser = {
 firstname: string;
 lastname:string;
 email:string;
 password:string;
}

export type UserDto = {
user_name: string;
email:IUser['email'];
password:IUser['password'];
}
