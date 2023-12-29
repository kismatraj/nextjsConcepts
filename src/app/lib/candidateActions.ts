"use server";

// import { revalidatePath } from "next/cache";

export async function postSingleAction(data: FormData) {
  // console.log("Form Data", data);
  const name = data.get("name");
  console.log("Form Data ", name);

  // const { name, fatherName, motherName, courseName } = candidate;
  // const res = await fetch("/candidate/single", {
  //   method: "POST",
  //   headers: { "content-type": "application/json" },
  //   body: JSON.stringify({ name, fatherName, motherName, courseName }),
  // });
  // if (!res.ok) undefined;
  // return res.json();
  // revalidatePath("/mutation");
}

export async function getAllCandidatesAction() {
  const res = await fetch("/candidate");
  if (!res.ok) undefined;
  return res.json();
}
