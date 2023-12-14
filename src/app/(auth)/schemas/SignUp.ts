import { z } from "zod";

const schema = z.object({
  name: z.object({
    fName: z.string().min(1, "First name is required"),
    mName: z.string().optional(),
    lName: z.string(),
  }),
  userId: z.string().min(1, "User id is required"),
  email: z.string().min(1, "Email is required").email("Email is invalid"),
  mobile: z
    .string()
    .regex(new RegExp("^[1-9][0-9]{9}"), "Invalid mobile number")
    .min(1, "Mobile is required")
    .max(10, "Mobile number should be 10 digit long"),

  password: z.string().min(6, "Password should be at least 6 chars long "),
  confirmPassword: z
    .string()
    .min(6, "Password should be at least 6 chars long."),
});
//   .superRefine((values, ctx) => {
//     if (values.password !== values.confirmPassword)
//       ctx.addIssue({
//         message: "Confirm password did not matched with password field",
//         path: ["confirmPassword"],
//         code: z.ZodIssueCode.custom,
//       });
//   });
export default schema;
