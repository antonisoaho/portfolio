"use client";

import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion, useReducedMotion } from "framer-motion";

const fieldClass =
  "w-full rounded-xl border border-white/15 bg-panel/35 px-4 py-3 text-[15px] text-foreground shadow-none outline-none transition-[border-color,box-shadow] placeholder:text-foreground/35 focus:border-cyan/45 focus:ring-1 focus:ring-cyan/35";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 380, damping: 28 },
  },
};

export default function Form() {
  const shouldReduceMotion = useReducedMotion();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const messageLen = watch("message")?.length ?? 0;

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
          toast.success("Your message has been sent.", {
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
        className="flex w-full flex-col gap-6 text-left"
        noValidate
      >
        <motion.div variants={item} className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/50"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
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
            className={fieldClass}
          />
          {errors.name && (
            <span
              id="name-error"
              role="alert"
              className="text-sm text-cyan"
            >
              {errors.name.message}
            </span>
          )}
        </motion.div>

        <motion.div variants={item} className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/50"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            inputMode="email"
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
            className={fieldClass}
          />
          {errors.email && (
            <span
              id="email-error"
              role="alert"
              className="text-sm text-cyan"
            >
              {errors.email.message}
            </span>
          )}
        </motion.div>

        <motion.div variants={item} className="flex flex-col gap-1.5">
          <div className="flex items-baseline justify-between gap-3">
            <label
              htmlFor="message"
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/50"
            >
              Message
            </label>
            <span
              className="tabular-nums text-[11px] text-foreground/40"
              aria-live="polite"
            >
              {messageLen} / 500
            </span>
          </div>
          <textarea
            id="message"
            placeholder="What you're building, timeline, and how I can help..."
            rows={5}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={
              errors.message
                ? "message-error"
                : "message-help"
            }
            {...register("message", {
              required: "Message is required.",
              maxLength: {
                value: 500,
                message: "Message can be at most 500 characters.",
              },
              minLength: {
                value: 50,
                message: "Please write at least 50 characters so I can respond usefully.",
              },
            })}
            className={`${fieldClass} min-h-[9.5rem] resize-y`}
          />
          {!errors.message && (
            <p id="message-help" className="text-xs leading-relaxed text-foreground/45">
              A few sentences is enough: context, goals, and whether you want a
              call or email reply.
            </p>
          )}
          {errors.message && (
            <span
              id="message-error"
              role="alert"
              className="text-sm text-cyan"
            >
              {errors.message.message}
            </span>
          )}
        </motion.div>
        <motion.div variants={item} className="pt-1">
          <motion.button
            type="submit"
            whileHover={
              shouldReduceMotion ? undefined : { scale: 1.01 }
            }
            whileTap={
              shouldReduceMotion ? undefined : { scale: 0.99 }
            }
            className="w-full rounded-xl border border-cyan/35 bg-gradient-to-r from-cyan/12 via-panel/60 to-violet/12 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-foreground shadow-glass-card backdrop-blur-md transition-[border-color,box-shadow] hover:border-cyan/55 hover:shadow-glass-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50 sm:w-auto sm:min-w-[13rem] sm:self-end"
          >
            Send message
          </motion.button>
        </motion.div>
      </motion.form>
    </>
  );
}
