"use client";

import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import RoundButton from "../components/ui/RoundButton";
import IconForButton from "../components/ui/IconForButton";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = async (e) => {
    e.preventDefault();

    const response = await fetch("../api/sendEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    // console.log(await response.json());
  };

  const labelStyles = "";
  const inputStyles =
    "rounded-full border-2 px-8 bg-myyellow-500 border-myblue-950 py-4 placeholder-myblue-950 focus:outline-none focus:ring-2 focus:ring-myblue-500";

  const FloatingLabel = ({ title }) => {
    return (
      <div className="absolute left-0 top-0 z-10 -translate-y-1/2 rounded-full border-2 border-myblue-950 bg-mygreen-500 px-2">
        {title}
      </div>
    );
  };

  return (
    <section className="border-4 border-myblue-950 bg-myblue-500 p-4">
      <form
        className="flex w-[100vw] flex-col gap-4 justify-self-center pt-2 text-xl text-myblue-950 md:w-[75vw] xl:w-[50vw]"
        action=""
        onSubmit={sendMail}
      >
        <div className="relative flex w-full flex-col">
          <label htmlFor="name" className="invisible h-0 w-0">
            Name
          </label>
          <input
            minLength={2}
            maxLength={60}
            className={inputStyles}
            type="text"
            id="name"
            autoComplete="off"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name"
          />
          <FloatingLabel title="Name" />
        </div>
        <div className="flex w-full flex-col">
          <label htmlFor="email" className="invisible h-0 w-0">
            Email
          </label>
          <input
            minLength={5}
            maxLength={120}
            className={inputStyles}
            type="email"
            id="email"
            autoComplete="off"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="E-mail"
          />
        </div>

        <div className="flex w-full gap-1">
          <label htmlFor="message" className="invisible w-0">
            Message
          </label>
          <textarea
            required
            minLength={10}
            name="message"
            className={`${inputStyles} grow`}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Write a message..."
          ></textarea>

          {/* <button
          type="submit"
          className="font-display text-3xl ml-2 text-primary-50 bg-accent-500 flex items-center content-between relative before:absolute before:w-full before:h-full before:bg-primary-400 before:top-0 before:left-0 before:scale-x-0 before:translate-x-1/2 hover:before:scale-x-[2] overflow-hidden before:duration-500"
        >
          <p className="h-full flex items-center px-2 z-10">submit</p>
          <div className="text-accent-500 bg-primary-400 h-full flex items-center">
            <AiOutlineArrowRight className="z-10 rounded-full bg-white m-1" />
          </div>
        </button> */}
          <button
            className="font-singoRound rounded-full border-2 border-myblue-950 bg-mypink-500 p-4 text-4xl"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
