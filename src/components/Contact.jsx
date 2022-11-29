import React from "react";
import { useForm } from "react-hook-form";

const Contact = ({
  sender,
  onChange,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <form className="contact_form" onSubmit={handleSubmit({onSubmit})}>
        <div className="first_row">
          <input
            {...register("name", { required: true })}
            name="name"
            type="text"
            placeholder="Name *"
            className="text"
            defaultValue={sender.key}
            value={sender.value}
            onChange={onChange}
          />
          {errors.name && errors.name.type === "required" && (
            <span className="invalid-feedback">Name is required</span>
          )}
        </div>
        {/* End .first_row */}

        <div className="second">
          <input
            {...register(
              "email",
              {
                required: "Email is Required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              },
              { required: true }
            )}
            name="email"
            type="email"
            placeholder="Email *"
            className="text"
            defaultValue={sender.key}
            value={sender.value}
            onChange={onChange}
          />
          {errors.email && (
            <span className="invalid-feedback">{errors.email.message}</span>
          )}
        </div>
        {/* End .second */}

        <div className="third">
          <textarea
            {...register("message", { required: true })}
            name="message"
            type="text"
            placeholder="Message *"
            className="text"
            defaultValue={sender.key}
            value={sender.value}
            onChange={onChange}
          ></textarea>
          {errors.message && (
            <span className="invalid-feedback">Message is required</span>
          )}
        </div>
        {/* End .third */}

        <div className="edina_tm_button">
          <button 
            type="submit" 
            className="color"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
        {/* End tokyo_tm_button */}
      </form>
      {/* End contact */}
    </div>
  );
};

export default Contact;
