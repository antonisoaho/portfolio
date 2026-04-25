"use client";

import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.35,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const shouldReduceMotion = useReducedMotion();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("Sending your message...");
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000,
          },
        }
      )
      .then(
        () => {
          toast.success("Your message have been sent!", {
            id: toastId,
          });
        },
        (error) => {
          toast.error("Something went wrong, please try again later!", {
            id: toastId,
          });
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Anton Isoaho",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
  };
  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial={shouldReduceMotion ? false : "hidden"}
        animate={shouldReduceMotion ? {} : "show"}
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg w-full flex flex-col items-center justify-center space-y-6"
      >
        <motion.div variants={item} className="w-full">
          <label htmlFor="name" className="mb-2 inline-block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name", {
              required: "Name is required.",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters long.",
              },
            })}
            className="w-full p-3 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/70 custom-bg"
          />
          {errors.name && (
            <span
              id="name-error"
              role="alert"
              className="mt-2 inline-block self-start text-accent"
            >
              {errors.name.message}
            </span>
          )}
        </motion.div>

        <motion.div variants={item} className="w-full">
          <label htmlFor="email" className="mb-2 inline-block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email address.",
              },
            })}
            className="w-full p-3 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/70 custom-bg"
          />
          {errors.email && (
            <span
              id="email-error"
              role="alert"
              className="mt-2 inline-block self-start text-accent"
            >
              {errors.email.message}
            </span>
          )}
        </motion.div>

        <motion.div variants={item} className="w-full">
          <label htmlFor="message" className="mb-2 inline-block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Tell me about your project..."
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : "message-help"}
            {...register("message", {
              required: "Message is required.",
              maxLength: {
                value: 500,
                message: "Max length of message is 500 characters.",
              },
              minLength: {
                value: 50,
                message: "Min length of message is 50 characters.",
              },
            })}
            className="w-full min-h-40 p-3 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/70 custom-bg"
          />
          {!errors.message && (
            <span
              id="message-help"
              className="mt-2 inline-block text-xs text-foreground/90"
            >
              Minimum 50 characters, maximum 500 characters.
            </span>
          )}
          {errors.message && (
            <span
              id="message-error"
              role="alert"
              className="mt-2 inline-block self-start text-accent"
            >
              {errors.message.message}
            </span>
          )}
        </motion.div>
        <motion.input
          variants={item}
          value="Send me a message!"
          type="submit"
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
        />
      </motion.form>
    </>
  );
}
