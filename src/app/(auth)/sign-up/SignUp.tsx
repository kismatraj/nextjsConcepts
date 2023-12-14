"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import NavigateButton from "@/app/components/NavigateButton";
// import { DevTool } from "@hookform/devtools";

const SignUp = () => {
  const {
    // control,
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<TSignUpSchema>({ mode: "onTouched" });

  const submitForm: SubmitHandler<TSignUpSchema> = (data) => {
    console.log("Submitted", data);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="font-bold">User sign up</h2>
      {/* noValidate: disable browser validation, this will allow react hook form to apply validation rules */}
      <form
        noValidate
        action=""
        className="flex flex-col justify-center gap-3"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex flex-col">
            <label htmlFor="fName">First Name</label>
            <input
              type="text"
              {...register("name.fName", {
                required: {
                  value: true,
                  message: "First name field is required",
                },
              })}
              style={errors.name?.fName && { border: "0.01em solid red" }}
            />
            <p className="error-text">{errors.name?.fName?.message}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="mName">Middle Name</label>
            <input type="text" {...register("name.mName")} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lName">Last Name</label>
            <input type="text" {...register("name.lName")} />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="userId">User id</label>
          <input
            type="text"
            {...register("userId", { required: "User id is required field" })}
            style={errors.userId && { border: "0.01em solid red" }}
          />
          <p className="error-text">{errors.userId?.message}</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="mobile">Mobile number</label>
          <input
            type="text"
            {...register("mobile", { required: "Mobile is required field" })}
            style={errors.mobile && { border: "0.01em solid red" }}
          />
          <p className="error-text">{errors.mobile?.message}</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email id</label>
          <input
            type="text"
            {...register("email", { required: "Email is required field" })}
            style={errors.email && { border: "0.01em solid red" }}
          />
          <p className="error-text">{errors.email?.message}</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 6,
                message: "Password should be at least 6 chars long",
              },
            })}
            style={errors.password && { border: "0.01em solid red" }}
          />
          <p className="error-text">{errors.password?.message}</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Confirm password is required",
              },
              validate: {
                matchWthPassword: (fieldValue) => {
                  const pwd = getValues("password");
                  if (pwd !== fieldValue)
                    return "Confirm password does not matched with password field";
                },
              },
            })}
            style={errors.confirmPassword && { border: "0.01em solid red" }}
          />
          <p className="error-text">{errors.confirmPassword?.message}</p>
        </div>

        <button>Register now</button>
      </form>
      {/* <DevTool control={control} /> */}

      <NavigateButton
        label="Already having account? Sign in now"
        path="/sign-in"
        type="Link"
      />
    </div>
  );
};

export default SignUp;
