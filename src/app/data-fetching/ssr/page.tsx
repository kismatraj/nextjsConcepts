import { getAllUsers } from "@/app/_lib/users";
import { Metadata } from "next";
import UserList from "./UserList";

export const metadata: Metadata = {
  title: "User's List",
  description: "Ths is the user's list.",
};

const SSRPage = async () => {
  const usersPromise: Promise<TUser[]> = getAllUsers();

  return (
    <section>
      <UserList promise={usersPromise} />
    </section>
  );
};

export default SSRPage;
