"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import NavigateButton from "@/app/components/NavigateButton";
import schema from "../schemas/SignIn";

const handleLogin: SubmitHandler<TSignIn> = (data) => {
  console.log(data);
};

const SignIn = () => {
  const {
    formState: { errors, isDirty, isSubmitting },
    handleSubmit,
    register,
    trigger,
  } = useForm<TSignIn>({ mode: "onTouched", resolver: zodResolver(schema) });

  return (
    <form className="flex flex-col gap-4 justify-center">
      <p className="text-center">Sign In</p>

      <div className="flex flex-col">
        <label htmlFor="userId">User id</label>
        <input type="text" {...register("userId")} placeholder="Your user id" />
        <p className="error-text">{errors.userId?.message}</p>
      </div>

      <div className="flex flex-col">
        <label htmlFor="password">User id</label>
        <input
          type="password"
          {...register("password")}
          placeholder="Your secret password"
        />
        <p className="error-text">{errors.password?.message}</p>
      </div>
      <button onClick={handleSubmit(handleLogin)}>Sign in now</button>

      <div className="flex gap-2">
        <NavigateButton
          label="Have no account? Sign up now."
          path="/sign-up"
          type="Link"
        />
      </div>
    </form>
  );
};

export default SignIn;
