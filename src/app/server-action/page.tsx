import AddCandidate from "./AddCandidate";
import ListCandidates from "./ListCandidates";

const ServerAction = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <AddCandidate />
      <ListCandidates />
    </div>
  );
};

export default ServerAction;
