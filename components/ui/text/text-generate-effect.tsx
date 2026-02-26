"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) {
  const [scope, animate] = useAnimate();
  var wordsArray = words.split(" ");

  useEffect(function () {
    animate(
      "span",
      { opacity: 1, filter: filter ? "blur(0px)" : "none" },
      { duration: duration, delay: stagger(0.2) }
    );
  }, [scope]);

  return (
    <div className={cn("font-bold", className)}>
      <motion.div ref={scope}>
        {wordsArray.map(function (word, idx) {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{ filter: filter ? "blur(10px)" : "none" }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  );
}
