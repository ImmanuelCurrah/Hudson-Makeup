import { useState } from "react";
import Button from "../../UI/button/Button";
import { send } from "emailjs-com";

const defaultInput = {
  name: "",
  phone: "",
  email: "",
  contactPreference: "",
  numOfPeople: "",
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

  const handleSelected = (e) => {
    setInputData((prevState) => ({
      ...prevState,
      contactPreference: e.target.value,
    }));
  };

  const onSubmit = () => {
    send(
      "service_bar12i8",
      "template_bkud67j",
      inputData,
      "user_xgsffGVyXexQ3ivs5i03i"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    setInputData(defaultInput);
  };

  return (
    <form onSubmit={onSubmit}>
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
        <input
          type="number"
          id="numOfPeople"
          value={inputData.numOfPeople}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          id="location"
          value={inputData.location}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Give me a brief description of what you are envisioning:</label>
        <textarea
          type="text"
          id="vision"
          value={inputData.vision}
          onChange={handleChange}
        />
      </div>
      <Button onSubmit={onSubmit}>Submit</Button>
    </form>
  );
}
