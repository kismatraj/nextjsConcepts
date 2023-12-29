import AddCandidate from "./AddCandidate";
import ListCandidate from "./ListCandidate";

const DataMutationPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <AddCandidate />
      <ListCandidate />
    </div>
  );
};

export default DataMutationPage;
