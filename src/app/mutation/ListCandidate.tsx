type Candidate = {
  status: string;
  data: { candidates: TCandidate[] };
};

const CandidateRegistration = async () => {
  const res = await fetch("http://127.0.0.1:5001/api/v1/candidate");
  if (!res.ok) return;
  const prom: Promise<Candidate> = await res.json();
  const { data: candidates } = await prom;
  // console.log("Candidates", candidates);

  return (
    <section className="flex flex-col gap-3 ">
      <p className="mt-3 font-bold">Candidate Registration</p>
      {/* {
        candidates.map()
      } */}
    </section>
  );
};

export default CandidateRegistration;
