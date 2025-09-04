"use client";
import React from "react";
import { FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LoginTranslations } from "@/types/translations";
import { LoginHeader } from "@/app/components/auth/LoginHeader";
import { LoginFields } from "@/app/components/auth/LoginFields";
import { Divider } from "@/app/components/auth/Divider";
import { GoogleButton } from "@/app/components/auth/GoogleButton";
import { CreateAccountLink } from "@/app/components/auth/CreateAccountLink";
import useLogin from "@/hooks/useLogin";

type loginProps = {
  lang: LoginTranslations;
};

export default function LoginForm({ lang }: loginProps) {

  const methods = useLogin(lang);

  return (
    <FormProvider {...methods}>
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-mesh">
        <form onSubmit={methods.onSubmit} className="w-full max-w-md">
          <Card className=" bg-background/80 backdrop-blur-sm border-border/50">
            <LoginHeader
              title={lang.loginForm.loginTitle}
              subtitle={lang.loginForm.loginSubTitle}
            />
            <CardContent className="space-y-4">
              <LoginFields
                emailLabel={lang.loginForm.emailLabel}
                passwordLabel={lang.loginForm.passwordLabel}
              />
              <Button disabled={methods.isSubmitting} type="submit" className="w-full" size="lg">
                {methods.isSubmitting ? lang.loginForm.loadingLogin : lang.loginForm.signInButton}
              </Button>
              <Divider text={lang.loginForm.continueWithText} />
              <GoogleButton text={lang.loginForm.SignInWithGoogleButton} />
              <CreateAccountLink text={lang.loginForm.createAccountAnchor} />
            </CardContent>
          </Card>
        </form>
      </div>
    </FormProvider>
  );
}
