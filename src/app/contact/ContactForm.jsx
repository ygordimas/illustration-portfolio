"use client";

import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import RoundButton from "../components/ui/RoundButton";
import IconForButton from "../components/ui/IconForButton";
import SendMessageButton from "./SendMessageButton";

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

  const inputStyles =
    "rounded-full border-2 px-8 bg-myyellow-500 border-myblue-950 py-4 placeholder-myblue-950 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-myblue-500";

  const FloatingLabel = ({ title }) => {
    return (
      <div className="absolute left-0 top-0 z-10 -translate-y-1/2 rounded-full border-2 border-myblue-950 bg-mygreen-500 px-2 font-singoRound tracking-wider">
        {title}
      </div>
    );
  };

  return (
    <section className="z-2 w-full rounded-br-3xl border-4 border-myblue-950 bg-myblue-500 p-4">
      <form
        className="flex flex-col gap-8 pt-2 text-xl text-myblue-950"
        action=""
        onSubmit={sendMail}
      >
        <div className="flex items-center gap-4">
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
          <div className="relative flex w-full flex-col">
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
            <FloatingLabel title="E-Mail" />
          </div>
        </div>

        <div className="relative flex w-full gap-1">
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

          <SendMessageButton />
          <FloatingLabel title="Message" />
        </div>
      </form>
    </section>
  );
}
