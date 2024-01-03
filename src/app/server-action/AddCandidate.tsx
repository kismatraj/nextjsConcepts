"use client";
import { saveCandidateAction } from "../_lib/candidateActions";
import { useState } from "react";

const init: TCandidate = {
  name: "",
  fatherName: "",
  motherName: "",
  courseName: "",
};

const AddCandidate = () => {
  const [candidate, setCandidate] = useState<TCandidate>(init);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCandidate((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const saved = await saveCandidateAction(candidate);
    console.log(saved);
  };
  return (
    <form
      autoComplete="off"
      // action={saveCandidateAction}
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   // console.log(candidate);

      //   saveCandidateAction(candidate);
      // }}
    >
      <p className="font-bold mt-3">Add candidates</p>
      <div className="flex flex-col mt-1">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={candidate?.name}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col mt-1">
        <label htmlFor="fatherName">Father name</label>
        <input
          type="text"
          name="fatherName"
          id="fatherName"
          value={candidate?.fatherName}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col mt-1">
        <label htmlFor="motherName">Mother name</label>
        <input
          type="text"
          name="motherName"
          id="motherName"
          value={candidate?.motherName}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col mt-1">
        <label htmlFor="courseName">Course name</label>
        <input
          type="text"
          name="courseName"
          id="courseName"
          value={candidate?.courseName}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default AddCandidate;
