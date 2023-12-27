"use client";

import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import RoundButton from "../components/RoundButton";
import IconForButton from "../components/IconForButton";

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

    console.log(await response.json());
  };

  return (
    <form
      className="flex w-[100vw] flex-col gap-2 px-2 text-xl text-accent-950 md:w-[75vw] xl:w-[50vw]"
      action=""
      onSubmit={sendMail}
    >
      <div className="flex w-full flex-col">
        <label htmlFor="name" className="invisible h-0 w-0">
          Name
        </label>
        <input
          minLength={2}
          maxLength={60}
          className="m-1 bg-white p-4 font-normal placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-accent-500"
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
      </div>
      <div className="flex w-full flex-col">
        <label htmlFor="email" className="invisible h-0 w-0">
          Email
        </label>
        <input
          minLength={5}
          maxLength={120}
          className="m-1 bg-white p-4 font-normal placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-accent-500"
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
          className="grow bg-white p-4 font-normal placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-accent-500"
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
        <button type="submit">
          <RoundButton direction="row" cta="submit">
            <AiOutlineArrowRight className="text-accent-500" />
          </RoundButton>
        </button>
      </div>
    </form>
  );
}
