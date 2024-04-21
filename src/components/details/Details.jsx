import General from "./General";
import Education from "./Education";
import Practical from "./Practical";
import Panel from "./Panel";
import { useState } from "react";

export default function Details() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className="details">
      <Panel
        name="General"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(activeIndex === 0 ? -1 : 0)}
      >
        <General isActive={activeIndex === 0} />
      </Panel>
      <Panel name="Education" onShow={() => setActiveIndex(1)}>
        <Education />
      </Panel>
      <Panel name="Practical" onShow={() => setActiveIndex(2)}>
        <Practical />
      </Panel>
    </div>
  );
}
