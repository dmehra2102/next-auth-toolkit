import React from "react";
import CardWrapper from "@/components/auth/card-wrapper";

interface Props {}

const LoginForm = (props: Props) => {
  return (
    <CardWrapper headerLabel="Welcome back" backButtonLabel="Don't have an account?" backButtonHref="/auth/register" showSocial>
      Login Form
    </CardWrapper>
  );
};

export default LoginForm;
