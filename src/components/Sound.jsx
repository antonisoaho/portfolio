"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { createPortal } from "react-dom";

const Modal = ({ onClose, toggle }) => {
  return createPortal(
    <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8">
        <p className="font-light">
          Would you like to hear the background music?
        </p>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={toggle}
            className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded"
          >
            No
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("my-modal")
  );
};

const isOlderThanDays = (date, days) => {
  const targetDate = new Date(date).getTime() + days * 24 * 60 * 60 * 1000;
  return targetDate <= new Date().getTime();
};

const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleFirstUserInteraction = useCallback(() => {
    const musicConsent = localStorage.getItem("musicConsent");
    if (musicConsent == "true" && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }

    ["click", "keydown", "touchStart"].forEach((event) =>
      document.removeEventListener(event, handleFirstUserInteraction)
    );
  }, [isPlaying]);

  useEffect(() => {
    const consent = localStorage.getItem("musicConsent");
    const consentTime = localStorage.getItem("consentTime");

    if (consent && consentTime) {
      if (isOlderThanDays(consentTime, 3)) {
        setShowModal(true);
      } else {
        setIsPlaying(consent == "true");

        if (consent == "true") {
          ["click", "keydown", "touchStart"].forEach((event) =>
            document.addEventListener(event, handleFirstUserInteraction)
          );
        }
      }
    } else {
      setShowModal(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleIsPlaying = () => {
    const newState = !isPlaying;

    setShowModal(false);
    setIsPlaying(newState);
    newState ? audioRef.current.play() : audioRef.current.pause();

    localStorage.setItem("musicConsent", String(newState));
    localStorage.setItem("consentTime", new Date().toISOString());
  };

  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          toggle={toggleIsPlaying}
        />
      )}
      <audio
        loop
        ref={audioRef}
      >
        <source
          src={"/audio/background-sound.mp3"}
          type="audio/mpeg"
        />
        your browser does not support the audio element.
      </audio>
      <motion.button
        onClick={toggleIsPlaying}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4
        custom-bg"
        aria-label={"home"}
        name={"home"}
      >
        {isPlaying ? (
          <Volume2
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={0.5}
          />
        ) : (
          <VolumeX
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={0.5}
          />
        )}
      </motion.button>
    </div>
  );
};

export default Sound;
