export async function postSingle(candidate: TCandidate) {
  const { name, fatherName, motherName, courseName } = candidate;
  const res = await fetch("/candidate/single", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name, fatherName, motherName, courseName }),
  });
  if (!res.ok) undefined;
  return res.json();
}

export async function getAllCandidates() {
  const res = await fetch("/candidate");
  if (!res.ok) undefined;
  return res.json();
}
