export default function EducationForm({ id, data, onEdit }) {
  return (
    <form>
      <label htmlFor="schoolName">School Name</label>
      <input
        type="text"
        id="schoolName"
        onChange={(e) => {
          const educationEntry = { ...data[id], schoolName: e.target.value };
          const updatedData = { ...data };
          updatedData[id] = educationEntry;
          onEdit(updatedData);
        }}
        maxLength={20}
        required
      />
      <label htmlFor="studyArea">Area of Study</label>
      <input
        type="text"
        id="studyArea"
        onChange={(e) => {
          const educationEntry = { ...data[id], studyArea: e.target.value };
          const updatedData = { ...data };
          updatedData[id] = educationEntry;
          onEdit(updatedData);
        }}
        maxLength={40}
        required
      />
      <label htmlFor="startDate">Start Date</label>
      <input
        type="date"
        id="startDate"
        onChange={(e) => {
          const educationEntry = { ...data[id], startDate: e.target.value };
          const updatedData = { ...data };
          updatedData[id] = educationEntry;
          onEdit(updatedData);
        }}
        required
      />
      <label htmlFor="endDate">End Date</label>
      <input
        type="date"
        id="endDate"
        onChange={(e) => {
          const educationEntry = { ...data[id], endDate: e.target.value };
          const updatedData = { ...data };
          updatedData[id] = educationEntry;
          onEdit(updatedData);
        }}
        required
      />
    </form>
  );
}
