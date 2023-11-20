import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ scale: [1, 2, 2, 3, 1], opacity: [0.1, 0.2, 0.4, 0.6, 0.8] }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center mt-[-500px]"
    >
      <div className="absolute border border-purple-500 rounded-full h-[40px] w-[250px] mt-[-140px] animate-spin" />
      <div className="absolute border border-purple-500 rounded-full h-[20px] w-[20px] mt-[-140px]" />
      <div className="absolute border border-purple-500 bg-black rounded-full h-[50px] w-[50px] mt-18 ml-24" />
      <div className="absolute border border-purple-500 rounded-full h-[50px] w-[50px] mt-18 ml-24 animate-ping" />
      <div className="absolute border border-purple-500 rounded-full h-[50px] w-[50px] mt-18 mr-24" />
      <div className="absolute border border-purple-500 rounded-full h-[180px] w-[260px] mt-16" />
      <div className="absolute border border-purple-500 rounded-full h-[20px] w-[20px] mt-16 animate-bounce" />
      <div className="absolute border border-purple-500 rounded-full h-[200px] w-[200px] mt-16" />
      <div className="absolute border border-purple-500 rounded-full h-[250px] w-[250px] mt-16 animate-ping" />
      <div className="absolute border border-purple-500 rounded-full h-[300px] w-[300px] mt-16 animate-ping" />
    </motion.div>
  );
}
