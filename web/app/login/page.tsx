import { SignIn } from "@clerk/nextjs";
import { div } from "framer-motion/client";
import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center">
      <SignIn />
    </div>
  );
};

export default Login;
