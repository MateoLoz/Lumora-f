import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

type loginFieldsProps = {
  emailLabel: string;
  passwordLabel: string;
};

export const LoginFields = ({
  emailLabel,
  passwordLabel,
}: loginFieldsProps) => {

  const  {register, formState:{errors}}  = useFormContext<{ [x: string]: string }>();


  return (
    <>
      <div className="space-y-3">
        <Label htmlFor="email">{emailLabel}</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="JohnDoe@gmail.com"
          className="bg-background/50"
        />
        {errors.email?.message && <p className="text-xs md:text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div className="space-y-3">
        <Label htmlFor="password">{passwordLabel}</Label>
        <Input
          id="password"
          type="password"
          {...register("password")}
          placeholder="****************"
          className="bg-background/50 py-4"
        />
        {errors.password?.message && <p className="text-xs md:text-sm text-red-500">{errors.password.message}</p>}
      </div>
    </>
  );
};
