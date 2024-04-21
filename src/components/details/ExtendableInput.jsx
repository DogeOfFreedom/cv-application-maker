import EducationForm from "./EducationForm";
import PracticalForm from "./PracticalForm";
import { v1 as uuidv1 } from "uuid";

export default function ExtendableInput({ type, isActive, data, onEdit }) {
  const addNew = () => {
    const newIndex = uuidv1();
    const newData = { ...data };
    newData[newIndex] = {};
    onEdit(newData);
  };

  return (
    <div className={`input-container ${isActive ? "show" : ""}`}>
      {Object.keys(data).map((key) => {
        console.log(type);
        if (type === "education") {
          return (
            <EducationForm key={key} id={key} data={data} onEdit={onEdit} />
          );
        }
        return <PracticalForm key={key} id={key} data={data} onEdit={onEdit} />;
      })}
      <button className="add-new-button" onClick={addNew}>
        Add new
      </button>
    </div>
  );
}
