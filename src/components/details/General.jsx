export default function General({ isActive, data, onEdit }) {
  return (
    <div className={`input-container ${isActive ? "show" : ""}`}>
      <form action="">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          onChange={(e) => onEdit({ ...data, firstName: e.target.value })}
          maxLength={20}
          required
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          onChange={(e) => onEdit({ ...data, lastName: e.target.value })}
          maxLength={20}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={(e) => onEdit({ ...data, email: e.target.value })}
          maxLength={50}
          required
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          id="phone"
          onChange={(e) => onEdit({ ...data, phoneNumber: e.target.value })}
          pattern="[0-9]{10}"
          maxLength={10}
          required
        />
      </form>
    </div>
  );
}
