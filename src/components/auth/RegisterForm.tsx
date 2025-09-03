"use client";

import { FormProvider } from "react-hook-form";
import { Card } from "../ui/card";
import { CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { LoginHeader } from "@/app/components/auth/LoginHeader";
import { CreateAccountLink } from "@/app/components/auth/CreateAccountLink";
import { RegisterTranslations } from "@/types/translations";
import { useRegister } from "@/hooks/useRegister";
import { RegisterFields } from "@/app/components/auth/RegisterFields";

type RegisterProps = {
  lang: RegisterTranslations;
};

export const RegisterForm = ({ lang }: RegisterProps) => {
  const methods = useRegister(lang)
  return (
    <FormProvider {...methods}>
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-mesh">
      <form onSubmit={methods.onSubmit} className="w-full max-w-md">
      <Card className="bg-background/80 backdrop-blur-sm border-border/50">
        <LoginHeader
          title={lang.registerForm.registerTitle}
          subtitle={lang.registerForm.registerSubTitle}
        />
        <CardContent className="space-y-4">
          {/* <LoginFields
            emailLabel={lang.registerForm.emailLabel}
            passwordLabel={lang.registerForm.passwordLabel}
          /> */}
          <RegisterFields
          emailLabel={lang.registerForm.emailLabel}
          passwordLabel={lang.registerForm.passwordLabel}
          firstNameLabel={"nombre"}
          lastNameLabel="apellido"/>
          <Button disabled={methods.isSubmitting} className="w-full" size="lg">
            {methods.isSubmitting ? lang.registerForm.loadingRegister :lang.registerForm.signUpButton}
          </Button>
          <CreateAccountLink text={lang.registerForm.logInAnchor} />
        </CardContent>
      </Card>
      </form>
    </div>
    </FormProvider>
  );
};
