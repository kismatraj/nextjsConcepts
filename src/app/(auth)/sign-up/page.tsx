import NavigateButton from "@/app/components/NavigateButton";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="font-bold">Sign Up</h2>

      <form action="" className="flex flex-col justify-center gap-3">
        <div className="flex md:flex-row gap-2">
          <div className="flex flex-col">
            <label htmlFor="fName">First Name</label>
            <input type="text" name="fName" id="fName" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="mName">Middle Name</label>
            <input type="text" name="mName" id="mName" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lName">Last Name</label>
            <input type="text" name="lName" id="lName" />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="userId">User id</label>
          <input type="text" name="userId" id="userId" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="mobile">Mobile number</label>
          <input type="text" name="mobile" id="mobile" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email id</label>
          <input type="text" name="email" id="email" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="text" name="confirmPassword" id="confirmPassword" />
        </div>

        <button>Register now</button>
      </form>
      <NavigateButton
        label="Already having account? Sign in now"
        path="/sign-in"
        type="Link"
      />
    </div>
  );
};

export default SignUp;
