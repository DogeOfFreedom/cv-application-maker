/*
School Name - text
Study Area - text
Date of Study - date
*/

/*
Company name - text
Position title - text
Main responsibilities of your job - text input
date from and until when you worked for that company - date input
*/

import { useState } from "react";
import Details from "./Details";
import Preview from "../Preview";

export default function Content() {
  const [personalDetails, setPersonalDetails] = useState({});

  const [education, setEducation] = useState({});

  const [experience, setExperience] = useState({});

  return (
    <>
      <Details
        personalDetails={personalDetails}
        onPersonalDetailsEdit={setPersonalDetails}
        education={education}
        onEducationEdit={setEducation}
        experience={experience}
        onExperienceEdit={setExperience}
      />
      <Preview
        personalDetails={personalDetails}
        education={education}
        experience={experience}
      />
    </>
  );
}
