import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

type RegisterFieldsProps = {
  emailLabel: string;
  passwordLabel: string;
   firstNameLabel:string;
  lastNameLabel:string;
};

export const RegisterFields = ({
  emailLabel,
  passwordLabel,
  firstNameLabel,
  lastNameLabel
}: RegisterFieldsProps) => {

  const  {register, formState:{errors}}  = useFormContext<{ [x: string]: string }>();

  return (
    <>

    <div className="space-y-3">
        <Label htmlFor="firstname">{firstNameLabel}</Label>
        <Input
          id="firstname"
          type="text"
          {...register("firstname")}
          placeholder="John"
          className="bg-background/50"
        />
        {errors.firstname?.message && <p className="text-xs md:text-sm text-red-500">{errors.firstname.message}</p>}
      </div>

        <div className="space-y-3">
        <Label htmlFor="lastname">{lastNameLabel}</Label>
        <Input
          id="lastname"
          type="text"
          {...register("lastname")}
          placeholder="Doe"
          className="bg-background/50"
        />
        {errors.lastname?.message && <p className="text-xs md:text-sm text-red-500">{errors.lastname.message}</p>}
      </div>
      
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
