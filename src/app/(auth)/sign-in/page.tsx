import NavigateButton from "@/app/components/NavigateButton";

const SignIn = () => {
  return (
    <section className="flex flex-col gap-4 w-1/2 justify-center">
      <p className="text-center">Sign In</p>
      <div className="flex flex-col gap-1">
        <label htmlFor="userId">User id</label>
        <input
          type="text"
          name="userId"
          id="UserId"
          placeholder="Your user id"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password">User id</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Your secret password"
        />
      </div>

      <div className="flex gap-2">
        <NavigateButton label="Sign up" path="/sign-up" type="Link" />
        <NavigateButton label="Go to centre home" path="/centre" type="Link" />
      </div>
    </section>
  );
};

export default SignIn;
