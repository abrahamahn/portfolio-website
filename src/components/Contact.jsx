import React from "react";
import Address from "../components/Address";

const Contact = ({
  form,
  register,
  setValue,
  errors,
  sendEmail,
  contactSectionRef,
}) => {
  return (
    <div className="edina_tm_contact" id="contact">
      <div className="container">
        <div className="edina_tm_title">
          <h3>Contact</h3>
        </div>
        <div className="extra_info">
          <Address />
        </div>
        <div className="mainpart">
          <div
            className="left"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <div className="title">
              <p>
                Don't hesitate to contact for
                <br />
                <span> resume request or new projects.</span>
              </p>
            </div>
            <div className="fields">
              <form className="contact_form" ref={form} onSubmit={sendEmail}>
                <div className="first_row" ref={contactSectionRef}>
                  <input
                    {...register("name", {
                      required: true,
                      maxLength: {
                        value: 30,
                        message:
                          "Please enter a name with fewer thank 30 characters.",
                      },
                      onChange: (e) => {
                        setValue("name", e.target.value);
                      },
                    })}
                    type="text"
                    placeholder="Name *"
                    className="text"
                    defaultValue="Your name"
                  />
                  {errors.name && errors.name.type === "required" && (
                    <span className="invalid-feedback">Name is required</span>
                  )}
                </div>
                <div className="second">
                  <input
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                      onChange: (e) => {
                        setValue("email", e.target.value);
                      },
                    })}
                    type="email"
                    placeholder="Email *"
                    className="text"
                    defaultValue="Your email"
                  />
                  {errors.email && (
                    <span className="invalid-feedback">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                {/* End .second */}

                <div className="third">
                  <textarea
                    {...register("message", {
                      required: true,
                      onChange: (e) => {
                        setValue("message", e.target.value);
                      },
                    })}
                    type="text"
                    placeholder="Message *"
                    className="text"
                    defaultValue="Your message"
                  ></textarea>
                  {errors.message && (
                    <span className="invalid-feedback">
                      Message is required
                    </span>
                  )}
                </div>
                <div className="edina_tm_button">
                  <button type="submit" className="color" value="Submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          className="right"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
        </div>
      </div>
    </div>
  );
};

export default Contact;
