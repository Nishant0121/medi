import { useAddMedications } from "../hooks/useAddMedications";
import { useState } from "react";
import { useGetUserInfo } from "../hooks/useGetUserInfo";

import TimePicker from "react-time-picker";

export const Home = () => {
  const { addmedi } = useAddMedications();
  const { name } = useGetUserInfo();
  const [hr, setHr] = useState("0");
  const [min, setMin] = useState("0");
  const [medi_name, setMedi_name] = useState("");
  const [discription, setDiscription] = useState("");
  const [frequency, setFrequency] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    addmedi({
      discription,
      medi_name,
      frequency,
      hr,
      min,
    });

    setMedi_name("");
    setDiscription("");
    setFrequency();
    setHr();
    setMin();
  };

  return (
    <div className="add d-flex flex-column justify-content-center align-items-center">
      <nav className="navbar bg-body-tertiary m-3">
        <div className="container-fluid">
          <h2 className="navbar-brand">Add Medication</h2>
          <form className="d-flex" role="search">
            <h3>{name}</h3>
          </form>
        </div>
      </nav>
      <div className="form ">
        <form onSubmit={onSubmit} className="inputs  d-flex flex-column">
          <label class="form-label" htmlFor="name">
            Name
          </label>
          <input
            class="form-control"
            type="text"
            id="name"
            placeholder="Enter Name of Medication"
            value={medi_name}
            onChange={(e) => setMedi_name(e.target.value)}
            required
          />
          <label class="form-label" htmlFor="discription">
            Discription
          </label>
          <input
            class="form-control"
            type="text"
            id="discription"
            placeholder="Enter Description"
            value={discription}
            onChange={(e) => setDiscription(e.target.value)}
            required
          />
          <label class="form-label" htmlFor="frequency">
            Frequency
          </label>
          <div class="col-md">
            <div class="form-floating">
              <select class="form-select" id="floatingSelectGrid">
                <option selected>Open this select menu</option>
                <option value="1">Daily</option>
                <option value="2">Weekly</option>
              </select>
              <label for="floatingSelectGrid">Works with selects</label>
            </div>
          </div>{" "}
          <label class="form-label" htmlFor="days">
            Time
          </label>
          <div className="time d-flex">
            <input
              class="form-control time_input p-2 m-2 w-5"
              type="number"
              min="0"
              max="23"
              id="hr"
              placeholder="Enter Time"
              value={hr}
              onChange={(e) => setHr(e.target.value)}
              required
            />
            :
            <input
              class="form-control time_input p-2 m-2 "
              type="number"
              min="0"
              max="59"
              id="min"
              placeholder="Enter Time"
              value={min}
              onChange={(e) => setMin(e.target.value)}
              required
            />
          </div>
          <button days="submit" className="btn btn-success m-1">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
