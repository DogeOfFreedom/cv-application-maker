/* 
Name - text
Email - text
Phone - number
*/

import { useState } from "react";

export default function General({ isActive }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);

  return (
    <div className={`input-container ${isActive ? "show" : ""}`} id="general">
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        onChange={(e) => setFirstName(e.target.value)}
        maxLength={20}
        required
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        onChange={(e) => setLastName(e.target.value)}
        maxLength={20}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        maxLength={50}
        required
      />
      <label htmlFor="phone">Phone Number</label>
      <input
        type="text"
        id="phone"
        onChange={(e) => setPhoneNumber(e.target.value)}
        pattern="[0-9]{10}"
        maxLength={10}
        required
      />
    </div>
  );
}
