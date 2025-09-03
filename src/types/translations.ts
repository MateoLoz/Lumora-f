export type LoginTranslations = {
  loginForm: {
    loginTitle: string;
    loginSubTitle: string;
    emailLabel: string;
    passwordLabel: string;
    signInButton: string;
    continueWithText: string;
    SignInWithGoogleButton: string;
    createAccountAnchor: string;
    loadingLogin: string;
  };
    loginErrors:{
      emailRequired:string;
      emailIsInvalid:string;
      emailIsToLong:string;
      passwordIsShort:string;
      passwordIsToLong:string;
    };
};


export type RegisterTranslations = {
  registerForm: {
    registerTitle: string;
    registerSubTitle: string;
    emailLabel: string;
    passwordLabel: string;
    signUpButton: string;
    logInAnchor: string;
    loadingRegister:string;
  };
 registerErrors:{
   firstNameIsRequired:string;
    firstNameIsShort:string;
    firstNameToLong:string;
    lastNameIsRequired:string;
    lastNameIsShort:string;
    lastNameToLong:string;
    emailRequired:string;
    emailIsInvalid:string;
    emailIsToLong:string;
    passwordRequired:string;
    passwordIsShort:string;
    passwordIsToLong:string;
    passwordFormat:string;
    }
};

export type registerErrors = {

  firstNameIsRequired:string;
    firstNameIsShort:string;
    firstNameToLong:string;
    lastNameIsRequired:string;
    lastNameIsShort:string;
    lastNameToLong:string;
    emailRequired:string;
    emailIsInvalid:string;
    emailIsToLong:string;
    passwordRequired:string;
    passwordIsShort:string;
    passwordIsToLong:string;
    passwordFormat:string;
}
