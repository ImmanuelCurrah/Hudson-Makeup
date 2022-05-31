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
    <>
      <form className="m-4 flex flex-col items-center">
        <div className="flex flex-col m-4">
          <label>Name</label>
          <input
            autoFocus
            className="h-8 w-52 rounded-md"
            type="text"
            id="name"
            value={inputData.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col m-4">
          <label>Phone</label>
          <input
            className="h-8 w-52 rounded-md"
            type="text"
            id="phone"
            value={inputData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col m-4">
          <label>Email</label>
          <input
            className="h-8 w-52 rounded-md"
            type="email"
            id="email"
            value={inputData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col m-4 items-center">
          <label>How do you prefer to be reached?</label>
          <select onChange={handleSelected} className="h-8 w-52 rounded-md">
            <option>Select one</option>
            <option>Email</option>
            <option>Phone call</option>
            <option>Text</option>
            <option>Other</option>
          </select>
        </div>
        <div className="flex flex-col m-4 items-center">
          <label>Number of people in addition to the bride:</label>
          <input
            className="h-8 w-52 rounded-md"
            type="number"
            id="numOfPeople"
            value={inputData.numOfPeople}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col m-4">
          <label>Location</label>
          <input
            className="h-8 w-52 rounded-md"
            type="text"
            id="location"
            value={inputData.location}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col m-4">
          <label>Give me a brief description of what you are envisioning</label>
          <textarea
            className="h-32 rounded-md"
            type="text"
            id="vision"
            value={inputData.vision}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="m-4">
        <Button onSubmit={onSubmit}>Submit</Button>
      </div>
    </>
  );
}
