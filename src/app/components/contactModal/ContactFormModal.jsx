"use client";

import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import RoundButton from "../../components/ui/RoundButton";
import IconForButton from "../../components/ui/IconForButton";
import SendMessageButton from "./SendMessageButton";
import CloseModalButton from "./CloseModalButton";

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

  const gap = 8;

  const inputStyles =
    " border-2 px-8 bg-mygreen-100 border-myblue-950 py-4 placeholder-myblue-950 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-myblue-500 font-medium";

  const FloatingLabel = ({ title, props }) => {
    return (
      <label
        {...props}
        className="absolute left-0 top-0 z-10 -translate-y-1/2 rounded-full border-2 border-myblue-950 bg-mygreen-500 px-2 font-singoRound tracking-wider"
      >
        {title}
      </label>
    );
  };

  return (
    <section className="z-2 h-fit w-[80%] rounded-br-3xl border-4 border-myblue-950 bg-mygreen-500 p-4">
      <form
        className={`flex flex-col justify-center gap-${gap} pt-2 text-xl text-myblue-950`}
        action=""
        onSubmit={sendMail}
      >
        <div className={`flex flex-col items-center gap-${gap}`}>
          <div className="relative flex w-full flex-col">
            <FloatingLabel htmlFor="name" title="Name" />

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
          </div>
          <div className="relative flex w-full flex-col">
            <FloatingLabel htmlFor="email" title="E-Mail" />

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
        </div>

        <div className="relative flex w-full ">
          <FloatingLabel htmlFor="message" title="Message" />

          <textarea
            required
            minLength={10}
            name="message"
            className={`${inputStyles} h-[40vh] grow`}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Write a message..."
          ></textarea>
        </div>

        <div className="flex w-full justify-between">
          <CloseModalButton />
          <SendMessageButton />
        </div>
      </form>
    </section>
  );
}
