import Link from "next/link";
import { notFound } from "next/navigation";

type TInput = {
  promise: Promise<TUser>;
};
const UserDetails = async ({ promise }: TInput) => {
  const user = await promise;
  if (!user.id) return notFound();

  return (
    <div className="border-2 p-4">
      <h1 className="font-extrabold">
        <Link href={`/data-fetching/ssr/${user.id}`}>{user.name}</Link>
      </h1>
      <h2>{user.username}</h2>
      <p>
        {user.address.city}, {user.address.street}, {user.address.suite},{" "}
        {user.address.zipcode}, {user.address.geo.lat}, {user.address.geo.lng}
      </p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>
        {user.company.name} {user.company.bs} {user.company.catchPhrase}
      </p>
      <p>{user.website}</p>
    </div>
  );
};

export default UserDetails;
