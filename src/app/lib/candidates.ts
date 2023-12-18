export async function postSingle(candidate: TCandidate) {
  const res = await fetch("http://172.16.21.63:5001/api/v1/candidate/single", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(candidate),
  });
  if (!res.ok) undefined;
  return res.json();
}

export async function getAllCandidates() {
  const res = await fetch("http://172.16.21.63:5001/api/v1/candidate");
  if (!res.ok) undefined;
  return res.json();
}
