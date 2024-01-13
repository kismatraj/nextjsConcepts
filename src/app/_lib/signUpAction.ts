import { revalidatePath } from "next/cache";

export async function signUpAction(candidate: TSignUpSchema) {
  console.log("Signup action ", candidate);

  const res = await fetch(`${process.env.baseApiUri}/candidate/single`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(candidate),
  });
  if (!res.ok) undefined;
  const promise: Promise<{ status: string; data: TSignUpSchema[] }> =
    await res.json();
  const candidates = await promise;
  console.log(candidates);
  revalidatePath("/");
  return candidates;
}
