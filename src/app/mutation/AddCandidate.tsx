// "use client";
// import { useState } from "react";
import { saveCandidateAction } from "../lib/candidateActions";

// const init: TCandidate = {
//   _id: "",
//   name: "",
//   fatherName: "",
//   motherName: "",
//   courseName: "",
// };

const AddCandidate = () => {
  // const [candidate, setCandidate] = useState<TCandidate>(init);
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setCandidate((prevData) => ({ ...prevData, [name]: value }));
  // };

  // const handleSubmitAction = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   const saved = await postSingleAction(candidate);
  //   console.log(saved);
  // };

  return (
    <form className="flex flex-col gap-3">
      <p className="font-bold text-center mt-3">Add Candidate</p>
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          // value={candidate?.name}
          // onChange={handleChange}
          className="p-2 border border-1"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="fatherName">Father Name</label>
        <input
          type="text"
          name="fatherName"
          // value={candidate?.fatherName}
          // onChange={handleChange}
          className="p-2 border border-1"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="motherName">Mother Name</label>
        <input
          type="text"
          name="motherName"
          // value={candidate?.motherName}
          // onChange={handleChange}
          className="p-2 border border-1"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="courseName">Course Name</label>
        <input
          type="text"
          name="courseName"
          // value={candidate?.courseName}
          // onChange={handleChange}
          className="p-2 border border-1"
        />
      </div>
      <button formAction={saveCandidateAction}>Submit</button>
    </form>
  );
};

export default AddCandidate;
