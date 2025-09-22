import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterTranslations } from "@/types/translations";
import { createRegisterSchema } from "@/schemas/registerSchema";

import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";


export function useRegister(registerPageDictionary:RegisterTranslations) {

const router = useRouter();
const {registerErrors} = registerPageDictionary;

const registerSchema = createRegisterSchema(registerErrors);

type FormFields = z.infer<typeof registerSchema>

  const methods = useForm<FormFields>({
  resolver:zodResolver(registerSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
     await axios.post('/api/user',data);
    router.push("login");
  };

  return {
    errors,
    isSubmitting,
    onSubmit: handleSubmit(onSubmit), 
    ...methods,
    register,
  };

}