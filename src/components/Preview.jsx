export default function Preview({ personalDetails, education, experience }) {
  const { firstName, lastName, email, phoneNumber } = personalDetails;
  return (
    <div className="preview">
      <div className="document">
        <h1>General</h1>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{email}</p>
        <p>{phoneNumber}</p>
        <h1>Education</h1>
        {Object.keys(education).map((key) => {
          const { schoolName, studyArea, startDate, endDate } = education[key];
          return (
            <div key={key}>
              <p key={schoolName}>{schoolName}</p>
              <p key={studyArea}>{studyArea}</p>
              <p key={startDate}>{startDate}</p>
              <p key={endDate}>{endDate}</p>
            </div>
          );
        })}
        <h1>Experience</h1>
        {Object.keys(experience).map((key) => {
          const {
            companyName,
            positionTitle,
            mainResponsibilities,
            startDate,
            endDate,
          } = experience[key];
          return (
            <div key={key}>
              <p key={companyName}>{companyName}</p>
              <p key={positionTitle}>{positionTitle}</p>
              <p key={mainResponsibilities}>{mainResponsibilities}</p>
              <p key={startDate}>{startDate}</p>
              <p key={endDate}>{endDate}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
