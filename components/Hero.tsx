import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "I'm Felix",
      "I'm a Software Engineer",
      "I'm a Web Developer",
      "I'm a UI/UX Designer",
      "I'm a Full Stack Developer",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-14 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="F7AB0A" />
      </h1>
    </div>
  );
}
