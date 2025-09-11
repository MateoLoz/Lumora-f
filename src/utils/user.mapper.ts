import { IUser } from "@/types/user.type";
import { UserDto } from "@/types/user.type";

export function toUserDto(user:IUser):UserDto {
    return {
        user_name:`${user.firstname} ${user.lastname}`,
        email:user.email,
        password:user.password
    }
}