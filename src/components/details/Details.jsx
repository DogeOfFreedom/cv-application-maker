import ResetButton from "./ResetButton";
import General from "./General";
import ExtendableInput from "./ExtendableInput";
import Panel from "./Panel";
import { useState } from "react";

export default function Details({
  personalDetails,
  onPersonalDetailsEdit,
  education,
  onEducationEdit,
  experience,
  onExperienceEdit,
}) {
  const reset = () => {
    onPersonalDetailsEdit({});
    onEducationEdit({});
    onExperienceEdit({});
  };

  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <div className="details">
      <ResetButton reset={reset} />
      <Panel
        name="General"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(activeIndex === 0 ? -1 : 0)}
      >
        <General
          data={personalDetails}
          onEdit={onPersonalDetailsEdit}
          isActive={activeIndex === 0}
        />
      </Panel>
      <Panel
        name="Education"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(activeIndex === 1 ? -1 : 1)}
      >
        <ExtendableInput
          type="education"
          data={education}
          onEdit={onEducationEdit}
          isActive={activeIndex === 1}
        />
      </Panel>
      <Panel
        name="Practical"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(activeIndex === 2 ? -1 : 2)}
      >
        <ExtendableInput
          type="practical"
          data={experience}
          onEdit={onExperienceEdit}
          isActive={activeIndex === 2}
        />
      </Panel>
    </div>
  );
}
