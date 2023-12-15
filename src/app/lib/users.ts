export async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) undefined;
  return res.json();
}

export async function getUserDetails(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!res.ok) undefined;
  return res.json();
}

export async function getUserPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userid=${userId}`
  );
  if (!res.ok) undefined;
  return res.json();
}
