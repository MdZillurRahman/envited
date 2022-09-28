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
    navigate("/event")
  };

  return (
    <div className="eventDetailsForm">
      <h1>Create Your Event</h1>
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
            // pattern:
            //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        <label>Ending Time</label>
        <input
          type="text"
          {...register("endingTime", {
            required: true,
            // maxLength: 11,
            // minLength: 8,
          })}
        />        

        <label>Event Location</label>
        <input
          type="text"
          {...register("eventLocation", { required: true, maxLength: 80 })}
        />

        <label>Event Photo</label>
        <input
          type="text"
          {...register("eventPhoto", { required: true})}
        />
        
        <br/>
        <input className="submit" type="submit" value="Next"/>
      </form>
    </div>
  );
};

export default CreateEvent;
