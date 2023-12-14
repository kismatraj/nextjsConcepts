import Link from "next/link";

type TInput = {
  user: TUser;
};
const User = ({ user }: TInput) => {
  return (
    <div className="border-2 p-4">
      <h1 className="font-extrabold">
        <Link href={`/data-fetching/ssr/${user.id}`}>{user.name}</Link>
      </h1>
      <h2>{user.username}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.company.name}</p>
      <p>{user.address.city}</p>
      <p>{user.website}</p>
    </div>
  );
};

export default User;
