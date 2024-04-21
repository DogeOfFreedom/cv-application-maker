/*
    Company name - text
    Position title - text
    Main responsibilities of your job - text input
    date from and until when you worked for that company - date input
*/

export default function PracticalForm({ id, data, onEdit }) {
  return (
    <form>
      <label htmlFor="companyName">Company Name</label>
      <input
        type="text"
        id="companyName"
        onChange={(e) => {
          const companyEntry = { ...data[id], companyName: e.target.value };
          const updatedData = { ...data };
          updatedData[id] = companyEntry;
          onEdit(updatedData);
        }}
        maxLength={20}
        required
      />
      <label htmlFor="positionTitle">Position Title</label>
      <input
        type="text"
        id="positionTitle"
        onChange={(e) => {
          const companyEntry = { ...data[id], positionTitle: e.target.value };
          const updatedData = { ...data };
          updatedData[id] = companyEntry;
          onEdit(updatedData);
        }}
        maxLength={40}
        required
      />
      <label htmlFor="mainResponsibilities">Main Responsibilities</label>
      <input
        type="text"
        id="mainResponsibilities"
        onChange={(e) => {
          const companyEntry = {
            ...data[id],
            mainResponsibilities: e.target.value,
          };
          const updatedData = { ...data };
          updatedData[id] = companyEntry;
          onEdit(updatedData);
        }}
        required
      />
      <label htmlFor="startDate">Start Date</label>
      <input
        type="date"
        id="endDate"
        onChange={(e) => {
          const companyEntry = { ...data[id], endDate: e.target.value };
          const updatedData = { ...data };
          updatedData[id] = companyEntry;
          onEdit(updatedData);
        }}
        required
      />
      <label htmlFor="endDate">End Date</label>
      <input
        type="date"
        id="endDate"
        onChange={(e) => {
          const companyEntry = { ...data[id], endDate: e.target.value };
          const updatedData = { ...data };
          updatedData[id] = companyEntry;
          onEdit(updatedData);
        }}
        required
      />
    </form>
  );
}
