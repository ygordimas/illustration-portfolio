"use client";

import { useFormik } from "formik";
import { basicSchema } from "./schemas";
import { motion } from "framer-motion";
import { useContactModalContext } from "../../context/ContactModalContext";
import { LiaFeatherAltSolid } from "react-icons/lia";
import { BsFeather } from "react-icons/bs";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { FaFileSignature } from "react-icons/fa6";
import { FaAt } from "react-icons/fa6";
import { TbMailOpenedFilled } from "react-icons/tb";
import Spike from "../SVGComponents/Spike";

import ContactFormButton from "../ContactFormButton";

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
  };

  const gap = "gap-12";

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
    " border-4 px-8 bg-mygreen-100 border-myblue-100 py-4 placeholder-myblue-950 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-myblue-500 font-medium";
  const inputError = "border-mypink-500";

  const errorMessageStyles =
    "absolute -bottom-0.5 left-0 translate-y-full text-sm font-bold bg-red-600 px-2 rounded-full tracking-wide text-mygreen-500 ";

  const FloatingLabel = ({ title, props }) => {
    return (
      <label
        {...props}
        className="absolute left-2 top-0 z-10 -translate-y-1/2 rounded-full border-2 border-myblue-100 bg-myblue-50 px-2 font-singoRound tracking-wider"
      >
        {title}
      </label>
    );
  };

  const FloatingLabelIcon = ({ children }) => {
    return (
      <div className="absolute right-2 top-0 -translate-y-1/2 rounded-full border-2 border-myblue-100 bg-myblue-800 p-2 text-2xl text-myblue-800">
        <div className="z-10 rounded-full ">{children}</div>
        <Spike
          className="absolute left-1/2 top-1/2 -z-10 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rotate-[22.5deg]"
          fill="fill-myyellow-400"
        />
      </div>
    );
  };

  return (
    <motion.section
      variants={formVariant}
      animate={openModal ? formVariant.enter : ""}
      initial={formVariant.exit}
      exit={formVariant.exit}
      className="z-2 pointer-events-auto h-fit w-[80%] border-4 border-mypink-300 bg-mygreen-500 p-6"
      style={{
        boxShadow:
          "rgba(6, 152, 214, 0.4) 0px 0px 0px 2px, rgba(66, 152, 214, 0.65) 0px 4px 6px -1px, rgba(6, 152, 214, 0.08) 0px 1px 0px inset",
      }}
    >
      <form
        className={`flex flex-col justify-center ${gap} pt-2 text-xl text-myblue-800`}
        action=""
        onSubmit={handleSubmit}
      >
        <div className={`flex flex-col items-center ${gap}`}>
          <div className="relative flex w-full flex-col">
            <FloatingLabel htmlFor="name" title="Name" />

            <FloatingLabelIcon>
              <MdContactMail
                className="text-xl"
                style={{
                  filter: "drop-shadow(2px 0px 0px rgb(132, 216, 252))",
                }}
              />
            </FloatingLabelIcon>

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

            <FloatingLabelIcon>
              <FaAt
                className="text-xl"
                style={{
                  filter: "drop-shadow(2px 0px 0px rgb(132, 216, 252))",
                }}
              />
            </FloatingLabelIcon>

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
              <p className={errorMessageStyles}>{errors.email}</p>
            ) : null}
          </div>
        </div>

        <div className="relative flex w-full ">
          <FloatingLabel htmlFor="message" title="Message" />

          <FloatingLabelIcon>
            <TbMailOpenedFilled
              className="text-xl"
              style={{ filter: "drop-shadow(2px 0px 0px rgb(132, 216, 252))" }}
            />
          </FloatingLabelIcon>

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
          {/* <CloseModalButton />
          <SendMessageButton isSubmitting={isSubmitting} /> */}
          <ContactFormButton label="Close" />
          <ContactFormButton label="Close" type="submit" />
        </div>
      </form>
    </motion.section>
  );
}
