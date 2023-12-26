"use client";

import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

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
      className="flex flex-col gap-2 w-[100vw] md:w-[75vw] xl:w-[50vw] text-xl text-accent-950 px-2"
      action=""
      onSubmit={sendMail}
    >
      <div className="w-full flex flex-col">
        <label htmlFor="name" className="invisible w-0 h-0">
          Name
        </label>
        <input
          minLength={2}
          maxLength={60}
          className="p-4 m-1 bg-white placeholder-primary-300 font-normal focus:outline-none focus:ring-accent-500 focus:ring-2"
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
      <div className="w-full flex flex-col">
        <label htmlFor="email" className="invisible w-0 h-0">
          Email
        </label>
        <input
          minLength={5}
          maxLength={120}
          className="p-4 m-1 bg-white placeholder-primary-300 font-normal focus:outline-none focus:ring-accent-500 focus:ring-2"
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

      <div className="w-full flex">
        <label htmlFor="message" className="w-0 invisible">
          Message
        </label>
        <textarea
          required
          minLength={10}
          name="message"
          rows={4}
          className="p-4 m-1 bg-white placeholder-primary-300 font-normal focus:outline-none focus:ring-accent-500 focus:ring-2 grow"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Write a message..."
        ></textarea>

        <button
          type="submit"
          className="font-display text-3xl ml-2 text-primary-50 bg-accent-500 flex items-center content-between relative before:absolute before:w-full before:h-full before:bg-primary-400 before:top-0 before:left-0 before:scale-x-0 before:translate-x-1/2 hover:before:scale-x-[2] overflow-hidden before:duration-500"
        >
          <p className="h-full flex items-center px-2 z-10">submit</p>
          <div className="text-accent-500 bg-primary-400 h-full flex items-center">
            <AiOutlineArrowRight className="z-10" />
          </div>
        </button>
      </div>
    </form>
  );
}
