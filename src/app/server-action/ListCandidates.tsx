import { getAllCandidatesAction } from "../_lib/candidateActions";

const ListCandidates = async () => {
  const { status, data } = await getAllCandidatesAction();

  return (
    <div>
      <p className="font-bold mt-3">List of candidates</p>
      {status === "success" &&
        data.length > 0 &&
        data.map((cd) => (
          <div key={cd._id} className="flex flex-col gap-1 mt-2 px-3">
            <p className="font-bold">Name:{cd.name}</p>
            <p>Father name:{cd.fatherName}</p>
            <p>Mother name:{cd.motherName}</p>
            <p>Course:{cd.courseName}</p>
          </div>
        ))}
    </div>
  );
};

export default ListCandidates;
