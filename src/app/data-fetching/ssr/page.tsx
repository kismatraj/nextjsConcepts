import { getAllUsers } from "@/app/lib/users";
import { Metadata } from "next";
import User from "./User";

export const metadata: Metadata = {
  title: "Server side rendering",
  description: "At time of request server request data.",
};

// type UsersType = {
//   users: TUser[];
//   total: number;
//   skip: number;
//   limit: number;
// };

const SSRPage = async () => {
  const usersPromise: Promise<TUser[]> = getAllUsers();
  const users = await usersPromise;

  return (
    <section>
      {users.map((u) => (
        <User key={u.id} user={u} />
      ))}
    </section>
  );
};

export default SSRPage;
