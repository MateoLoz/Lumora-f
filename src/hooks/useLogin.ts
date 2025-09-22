import { useParams, useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginTranslations } from "@/types/translations";
import axios from "axios";


export default function useLogin(errorsMsj: LoginTranslations) {
  const router = useRouter();
  const { lang } = useParams();

  const schema = z.object({
    email: z
      .string()
      .max(80, { message: errorsMsj.loginErrors.emailIsToLong })
      .regex(
        /^(?!.*\.\.)[a-zA-Z0-9](?:[\w.-]*[a-zA-Z0-9])?@[a-zA-Z\d-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/,
        { message: errorsMsj.loginErrors.emailIsInvalid }
      ),
    password: z
      .string()
      .min(8, { message: errorsMsj.loginErrors.passwordIsShort })
      .max(50, { message: errorsMsj.loginErrors.passwordIsToLong }),
  });

  type FormFields = z.infer<typeof schema>;

  const methods = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError
  } = methods;

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
  try {
    await axios.post("/api/login", data);
    router.push(`/${lang}/dashboard`);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const status = err.response?.status;
      reset();
      if (status === 401) {
        setError("email", { message: errorsMsj.loginErrors.invalidCredentials });
        setError("password", { message: errorsMsj.loginErrors.invalidCredentials });
      }

      // error del servidor
      if (status && status >= 500) {
        setError("root", { message: errorsMsj.loginErrors.serverError });
      }
    } else {
      setError("root", { message: "Unexpected error" });
    }
  }
};


  return {
    errors,
    isSubmitting,
    onSubmit: handleSubmit(onSubmit),
    ...methods,
    register,
  };
}
