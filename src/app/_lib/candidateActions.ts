"use server";

import { revalidatePath } from "next/cache";

export async function saveCandidateAction(candidate: TCandidate) {
  const res = await fetch(`${process.env.baseApiUri}/candidate/single`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(candidate),
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
