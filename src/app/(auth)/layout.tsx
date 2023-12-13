import React, { FC, ReactNode } from "react";
type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return <div className="bg-zinc-200 p-10 rounded-sm">{children}</div>;
};

export default AuthLayout;
