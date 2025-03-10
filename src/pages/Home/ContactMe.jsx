import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdAddCall, MdAttachEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Swal from "sweetalert2";
import Aos from 'aos'
import 'aos/dist/aos.css'
const ContactMe = () => {
  useEffect(() =>  {
    Aos.init({duration: 2000})
  },[])
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xntbqdq", "template_wrmf5y9", form.current, {
        publicKey: "6TmHFx8o2bgz1w4uZ",
      })
      .then(
        () => {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Message sent successfully",
            showConfirmButton: false,
            timer: 1500,
          });

          form.current.reset();
        },
        (error) => {
          Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: error.text,
                    showConfirmButton: false,
                    timer: 1500,
                  });
        }
      );
  };

  return (
    <div data-aos='fade-right'>
      <h1 className="text-4xl mt-10 font-bold text-center uppercase text-purple-600">
        Contact Me
      </h1>
      <div className="flex flex-col-reverse md:flex-row bg-purple-600 text-white py-10 sm:px-10 rounded-xl mt-10  w-full mx-auto">
        <form className="flex-1 text-black" ref={form} onSubmit={sendEmail}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              name="from_email"
              placeholder="email"
              className="input input-bordered text-black"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Message</span>
            </label>
            <textarea
              name="message"
              className="textarea text-black textarea-bordered"
              placeholder="message"
            ></textarea>
          </div>
          <button
      className="btn btn-primary py-2.5 px-5 rounded-md mt-4 text-xl font-bold"
      style={{
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
      }}
    >Send</button>
        </form>
        <div className="flex-1 mt-5 space-y-3  md:ml-10">
          <h4 className="flex items-center gap-3 text-xl font-medium">
            <FaLocationDot className="text-3xl font-semibold text-red-600" />{" "}
            Sylhet, Bangladesh.
          </h4>
          <p className="flex items-center gap-3 text-xl font-medium">
            <FaWhatsappSquare className="text-3xl font-semibold text-green-500" />{" "}
            +8801603171796
          </p>
          <p className="flex items-center gap-3 text-xl font-medium">
            <MdAddCall className="text-3xl font-semibold text-green-700" />
            +8801870549075
          </p>
          <p className="flex items-center gap-3 text-xl font-medium">
            <MdAttachEmail className="text-3xl font-semibold text-red-700" />
            habiburmamun313@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;