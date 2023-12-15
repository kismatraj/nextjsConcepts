import Link from "next/link";
type TProps = {
  promise: Promise<TUser[]>;
};

const UserList = async ({ promise }: TProps) => {
  const data = await promise;
  return (
    <div className="flex gap-4 flex-wrap">
      {data.map((u) => (
        <div className="border-2 p-4" key={u.id}>
          <h1 className="font-extrabold">
            <Link href={`/data-fetching/ssr/${u.id}`}>{u.name}</Link>
          </h1>
          <h2>{u.username}</h2>
          <p>{u.email}</p>
          <p>{u.phone}</p>
          <p>{u.company.name}</p>
          <p>{u.address.city}</p>
          <p>{u.website}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
