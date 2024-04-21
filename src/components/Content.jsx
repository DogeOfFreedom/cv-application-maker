import { useState } from "react";
import Details from "./details/Details";
import Preview from "./Preview";

export default function Content() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);

  // const initialEducationState
  const [education, setEducation] = useState("");

  const [school, setSchool] = useState("");
  const [studyArea, setStudyArea] = useState("");
  const [dateOfStudy, setDateOfStudy] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [positionName, setPositionName] = useState("");
  const [,] = useState("");
  const [,] = useState("");

  return (
    <>
      <Details />
      <Preview />
    </>
  );
}
