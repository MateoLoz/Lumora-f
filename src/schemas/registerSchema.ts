import { registerErrors } from "@/types/translations";
import { z } from "zod";

export const createRegisterSchema = (errorMessage: registerErrors) => z.object({
  firstname: z.string({ message: errorMessage.firstNameIsRequired })
    .min(5, { message: errorMessage.firstNameIsShort })
    .max(45, { message: errorMessage.firstNameToLong }),
    
  lastname: z.string({ message: errorMessage.lastNameIsRequired })
    .min(5, { message: errorMessage.lastNameIsShort })
    .max(45, { message: errorMessage.lastNameToLong }),
    
  email: z.string({ message: errorMessage.emailRequired })
    .max(80, { message: errorMessage.emailIsToLong })
    .regex(
      /^(?!.*\.\.)[a-zA-Z0-9](?:[\w.-]*[a-zA-Z0-9])?@[a-zA-Z\d-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/,
      { message: errorMessage.emailIsInvalid }
    ),
    
  password: z.string({ message: errorMessage.passwordRequired })
    .min(8, { message: errorMessage.passwordIsShort })
    .max(45, { message: errorMessage.passwordIsToLong })
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#$%&_\-+*]).{8,}$/,
      { message: errorMessage.passwordFormat }
    )
});