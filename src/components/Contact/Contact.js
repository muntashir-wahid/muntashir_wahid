import React, { useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import SectionWrapper from "../UI/SectionWrapper/SectionWrapper";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const [state, handleSubmit] = useForm("xrgdnrpb");
  const contactFormRef = useRef();
  if (state.succeeded) {
    contactFormRef.current.reset();
    toast.success("Your message was sent to Muntashir Wahid");
  }

  return (
    <SectionWrapper className="px-2 md:px-12">
      <h2 className="text-center font-bold text-4xl mb-12">Contact Me</h2>
      <div className="bg-base-200 p-6 w-full lg:w-3/5 mx-auto">
        <form ref={contactFormRef} onSubmit={handleSubmit}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              name="email"
              className="input input-bordered w-full"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              id="message"
              name="message"
              className="textarea textarea-bordered h-24"
              placeholder="Your message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            className="btn btn-primary mt-4"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </SectionWrapper>
  );
};

export default Contact;
