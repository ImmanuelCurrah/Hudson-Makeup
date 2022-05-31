import { useState } from "react";

const defaultInput = {
  name: "",
  phone: "",
  email: "",
  contactPreference: "",
  numOfPeople: 0,
  location: "",
  vision: "",
};

export default function BookingForm() {
  const [inputData, setInputData] = useState(defaultInput);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  console.log(inputData);

  const handleSelected = (e) => {
    setInputData((prevState) => ({
      ...prevState,
      contactPreference: e.target.value,
    }));
  };

  return (
    <form>
      <div>
        <label>Name:</label>
        <input
          type="text"
          id="name"
          value={inputData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          id="phone"
          value={inputData.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          id="email"
          value={inputData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>How do you prefer to be reached?</label>
        <select onChange={handleSelected}>
          <option>Select one</option>
          <option>Email</option>
          <option>Phone call</option>
          <option>Text</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label>Number of people in addition to the bride:</label>
        <input type="number" />
      </div>
      <div>
        <label>Location:</label>
        <input type="text" />
      </div>
      <div>
        <label>Give me a brief description of what you are envisioning:</label>
        <textarea />
      </div>
    </form>
  );
}
