import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./CreateEvent.css";

const CreateEvent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("RESULT", data);
  };

  const handleNext = () => {
    navigate("/event");
  };

  return (
    <div className="eventDetailsForm">
      <h1 style={{ color: "#240D57" }}>Create Your Event</h1>
      <form className="eventForm" onSubmit={handleSubmit(onSubmit)}>
        <label>Event name</label>
        <input
          type="text"
          {...register("eventName", { required: true, maxLength: 80 })}
        />

        <label>Host name</label>
        <input
          type="text"
          {...register("hostName", { required: true, maxLength: 100 })}
        />

        <label>Starting Time</label>
        <input
          type="text"
          {...register("startingTime", {
            required: true,
          })}
        />
        <label>Ending Time</label>
        <input
          type="text"
          {...register("endingTime", {
            required: true,
          })}
        />

        <label>Event Location</label>
        <input
          type="text"
          {...register("eventLocation", { required: true, maxLength: 80 })}
        />

        <label>Event Photo</label>
        <input type="text" {...register("eventPhoto", { required: true })} />

        <br />
        <input className="submit" type="submit" value="Submit" />
        <div className="btn4">
          <button onClick={handleNext} className="nextBtn">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
