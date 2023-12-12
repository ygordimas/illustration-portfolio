"use client";

import { useState } from "react";

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
    <form className="" action="" onSubmit={sendMail}>
      <div className="w-full flex flex-col my-4">
        <label htmlFor="name" className="font-bold text-gray-700">
          Name
        </label>
        <input
          minLength={2}
          maxLength={60}
          className=" border border-gray-100 text-black"
          type="text"
          id="name"
          autoComplete="off"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="w-full flex flex-col my-4">
        <label htmlFor="email" className="font-bold text-gray-700">
          Email
        </label>
        <input
          minLength={5}
          maxLength={120}
          className=" border border-gray-100 text-black"
          type="email"
          id="email"
          autoComplete="off"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="w-full flex flex-col my-4">
        <label htmlFor="message" className="font-bold text-gray-700">
          Message
        </label>
        <textarea
          required
          minLength={10}
          name="message"
          rows={4}
          className="w-full p-4 bg-gray-50 border border-gray-100 text-black"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
      </div>
      <button
        type="submit"
        className="px-4 py-2 w-24 bg-gray-700 text-white font-medium mt-2"
      >
        Submit
      </button>
    </form>
  );
}
