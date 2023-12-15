type TProps = {
  promise: Promise<TUserPost[]>;
};

const UserPost = async ({ promise }: TProps) => {
  const posts = await promise;

  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id} className="mb-4">
          <h1 className="font-bold">{p.title}</h1>
          <p>{p.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default UserPost;
