export async function postSingle(candidate: TCandidate) {
  const res = await fetch("/candidate/single", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(candidate),
  });
  if (!res.ok) undefined;
  return res.json();
}

export async function getAllCandidates() {
  const res = await fetch("/candidate");
  if (!res.ok) undefined;
  return res.json();
}
