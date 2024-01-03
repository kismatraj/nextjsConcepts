"use server";

import { revalidatePath } from "next/cache";

export async function saveCandidateAction(candidate: TCandidate) {
  const res = await fetch(`${process.env.baseApiUri}/candidate/single`, {
    body: JSON.stringify(candidate),
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
  });
  if (!res.ok) undefined;
  const promise: Promise<{ status: string; data: TCandidate[] }> =
    await res.json();
  const candidates = await promise;
  console.log(candidates);
  revalidatePath("/");
  return candidates;
}

export async function getAllCandidatesAction() {
  const res = await fetch(`${process.env.baseApiUri}/candidate`);
  if (!res.ok) undefined;
  const promise: Promise<{ status: string; data: TCandidate[] }> =
    await res.json();
  const candidates = await promise;
  return candidates;
}
