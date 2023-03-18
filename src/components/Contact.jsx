import React from "react";

const Contact = ({
  form,
  register,
  setValue,
  errors,
  sendEmail,
  contactSectionRef
}) => {
  return (
    <div>
      <form className="contact_form" ref={form} onSubmit={sendEmail}>
        <div className="first_row" ref={contactSectionRef}>
          <input
            {...register(
              'name', 
              {
                required: true,
                maxLength: {
                  value: 30,
                  message: "Please enter a name with fewer thank 30 characters."},
                onChange: (e) => {
                  setValue("name", e.target.value);  
              }}
            )}
            type="text"
            placeholder="Name *"
            className="text"
            defaultValue="Your name"
          />
          {errors.name && errors.name.type === "required" && (
            <span className="invalid-feedback">Name is required</span>
          )}
        </div>
        {/* End .first_row */}

        <div className="second">
          <input
            {...register(
              'email',
              {
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format"},
                onChange: (e) => {
                  setValue("email", e.target.value);                
              }}
            )}
            type="email"
            placeholder="Email *"
            className="text"
            defaultValue="Your email"
          />
          {errors.email && (
            <span className="invalid-feedback">{errors.email.message}</span>
          )}
        </div>
        {/* End .second */}

        <div className="third">
          <textarea
            {...register('message', { 
              required: true,
              onChange: (e) => {
                setValue("message", e.target.value);                
              }}
            )}
            type="text"
            placeholder="Message *"
            className="text"
            defaultValue="Your message"
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
