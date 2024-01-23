"use client";

import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import RoundButton from "../../components/ui/RoundButton";
import IconForButton from "../../components/ui/IconForButton";
import SendMessageButton from "./SendMessageButton";
import CloseModalButton from "./CloseModalButton";
import { useFormik } from "formik";
import { basicSchema } from "./schemas";
import { motion } from "framer-motion";
import { useContactModalContext } from "@/app/context/ContactModalContext";
import { LiaFeatherAltSolid } from "react-icons/lia";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  const { name, email, message } = values;

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
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

export default function ContactForm() {
  // FORMIK DECLARATIONS
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  const { openModal } = useContactModalContext();

  // console.log(errors);

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

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

  const gap = "gap-10";

  const formVariant = {
    enter: {
      x: "0%",
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
    exit: {
      x: "-200%",
      transition: {
        duration: 0.5,
      },
    },
  };

  const inputStyles =
    " border-2 px-8 bg-mygreen-100 border-myblue-950 py-4 placeholder-myblue-950 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-myblue-500 font-medium";
  const inputError = "border-mypink-500";

  const errorMessageStyles =
    "absolute bottom-0 left-0 translate-y-full text-sm font-semibold tracking-wide text-mypink-800";

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
    <motion.section
      variants={formVariant}
      animate={openModal ? formVariant.enter : ""}
      initial={formVariant.exit}
      exit={formVariant.exit}
      className="z-2 pointer-events-auto h-fit w-[80%]  rounded-br-3xl border-4 border-myblue-950 bg-mygreen-500 p-4"
    >
      <form
        className={`flex flex-col justify-center ${gap} pt-2 text-xl text-myblue-950`}
        action=""
        onSubmit={handleSubmit}
      >
        <div className={`flex flex-col items-center ${gap}`}>
          <div className="relative flex w-full flex-col">
            <FloatingLabel htmlFor="name" title="Name" />

            <input
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${inputStyles} ${
                errors.name && touched.name ? inputError : ""
              }`}
              type="text"
              id="name"
              autoComplete="off"
              placeholder="Name"
            />
            {errors.name && touched.name ? (
              <p className={errorMessageStyles}>{errors.name}</p>
            ) : null}
          </div>
          <div className="relative flex w-full flex-col">
            <FloatingLabel htmlFor="email" title="E-Mail" />

            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputStyles}
              type="email"
              id="email"
              autoComplete="off"
              placeholder="E-mail"
            />
            {errors.email && touched.email ? (
              <p className={errorMessageStyles}>{errors.mail}</p>
            ) : null}
          </div>
        </div>

        <div className="relative flex w-full ">
          <FloatingLabel htmlFor="message" title="Message" />

          <div className="absolute right-0 top-0 -translate-y-1/2 rounded-full border-2 border-myblue-800 bg-yellow-400 p-2 text-2xl text-myblue-800">
            <LiaFeatherAltSolid />
          </div>
          <textarea
            minLength={10}
            name="message"
            className={`${inputStyles} h-[40vh] grow`}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Write a message..."
          ></textarea>
          {errors.message && touched.message ? (
            <p className={errorMessageStyles}>{errors.message}</p>
          ) : null}
        </div>

        <div className="flex w-full justify-between">
          <CloseModalButton />
          <SendMessageButton isSubmitting={isSubmitting} />
        </div>
      </form>
    </motion.section>
  );
}
