import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsDiscord, BsFillTelephoneFill, BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8wqq47i",
        "template_zcvvcvm",
        form.current,
        // process.env.PUBLIC_KEY
        "0tQjp37grjCCMMXVJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.success("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="card flex-shrink-0 mx-3 md:mx-auto mt-5 md:mt-10 w-full md:w-3/4 lg:w-1/2 max-w-lg shadow-2xl bg-base-100"
      data-aos="flip-left"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mt-8">
        Contact Me
      </h2>
      <form ref={form} onSubmit={sendEmail} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="user_name"
            placeholder="name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="user_email"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="message"
            name="message"
          ></textarea>
        </div>

        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" value="send email" />
        </div>
        <div className="divider">OR</div>
        <div className="flex justify-between items-center mt-3">
          <a
            href="https://github.com/Mohammad-Hidayat-Ullah-Reza"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillGithub className="text-4xl"></AiFillGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-hidayat-ullah-reza/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillLinkedin className="text-4xl"></AiFillLinkedin>
          </a>
          <a
            href="https://www.facebook.com/mohammad.hidayat.775"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillFacebook className="text-4xl"></AiFillFacebook>
          </a>
          {/* <BsMessenger className="text-4xl">
            <a href=""></a>
          </BsMessenger>
          <BsDiscord className="text-4xl">
            <a href=""></a>
          </BsDiscord>
          <IoLogoWhatsapp className="text-4xl">
            <a href=""></a>
          </IoLogoWhatsapp> */}
        </div>
      </form>
    </div>
  );
};

export default ContactSection;
