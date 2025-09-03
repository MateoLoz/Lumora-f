import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterTranslations } from "@/types/translations";
import { createRegisterSchema } from "@/schemas/registerSchema";

import { zodResolver } from "@hookform/resolvers/zod";
import {z} from 'zod';

export function useRegister(registerPageDictionary:RegisterTranslations) {

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