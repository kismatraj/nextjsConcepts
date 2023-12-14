import { z } from "zod";

const schema = z.object({
  userId: z.string().min(1, "User id is required"),
  password: z.string().min(1, "Password is required"),
});

export default schema;
