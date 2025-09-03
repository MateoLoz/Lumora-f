import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from 'zod';
import { LoginTranslations } from "@/types/translations";


export default function useLogin(errorsMsj:LoginTranslations) {

const schema = z.object({
  email: z.string()
    .max(80, { message: errorsMsj.loginErrors.emailIsToLong })
    .regex(
      /^(?!.*\.\.)[a-zA-Z0-9](?:[\w.-]*[a-zA-Z0-9])?@[a-zA-Z\d-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/,
      { message: errorsMsj.loginErrors.emailIsInvalid }
    ),
  password: z.string()
    .min(8, { message: errorsMsj.loginErrors.passwordIsShort })
    .max(50, { message: errorsMsj.loginErrors.passwordIsToLong })
});



type FormFields = z.infer<typeof schema>

  const methods = useForm<FormFields>({
  resolver:zodResolver(schema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve)=> setTimeout(resolve,1000));
    console.log(data);
  };

  return {
    errors,
    isSubmitting,
    onSubmit: handleSubmit(onSubmit), 
    ...methods,
    register,
  };
}
