import React from "react";

const Contact = ({
  register,
  errors,
  contactData,
  setContactData,
  handleChange,
  onSubmit,
  handleSubmit,
}) => {
  return (
    <div>
      <form className="contact_form">
        <div className="first_row">
          <input
            {...register(
              "name", 
              { 
                required: "Please enter your name",
                maxLength: {
                  value: 30,
                  message: "Please enter a name with fewer thank 30 characters.",
                }, 
              },
              { required: true }  
            )}
            name="name"
            key="name"
            type="text"
            placeholder="Name *"
            className="text"
            register={register}
            errors={errors}
            defaultValue={contactData.name}
            onChange={handleChange}
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
            key="email"
            type="email"
            placeholder="Email *"
            className="text"
            register={register}
            errors={errors}
            defaultValue={contactData.email}
            onChange={handleChange}
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
            key="message"
            type="text"
            placeholder="Message *"
            className="text"
            register={register}
            errors={errors}
            defaultValue={contactData.message}
            onChange={handleChange}
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
            value="Submit"
            onClick={this.handleSubmit(onSubmit)}
          />
        </div>
        {/* End tokyo_tm_button */}
      </form>
      {/* End contact */}
    </div>
  );
};

export default Contact;
