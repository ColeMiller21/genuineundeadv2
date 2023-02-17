import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import styles from "../styles/FAQ.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const Accordion = ({ faqQuestions }) => {
  return (
    <div className={`${styles.accordion} w-full flex flex-col items-center`}>
      {faqQuestions.map((question, i) => (
        <AccordionItemMotion
          key={`${question}-${i}`}
          question={question.question}
          answer={question.answer}
          idx={i}
          questionsLength={faqQuestions?.length}
        />
      ))}
    </div>
  );
};

const AccordionItemMotion = ({ question, answer, idx, questionsLength }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(null);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    if (mounted) {
      setCurrentTheme(theme === "system" ? systemTheme : theme);
    }
  }, [mounted, theme]);
  return (
    <motion.div
      className={` w-[90%] md:w-[70%] border-t  ${
        currentTheme === "dark" ? "border-white" : "border-black"
      } ${idx == questionsLength - 1 ? "border-b" : ""} py-[1rem]`}
    >
      <AnimatePresence>
        <motion.div
          key="question"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex py-[1rem] text-[.9rem] md:text-[1rem]"
        >
          <span className="w-[10%] font-didot mr-[5px] text-[1.25rem]">
            <i>0{idx + 1}</i>
          </span>
          <span className="w-full text-[1.25rem]">
            {question.toUpperCase()}
          </span>
          <span className="w-[5%] ml-[5px] cursor-pointer flex my-auto h-full">
            {isOpen ? <FaMinus /> : <FaPlus />}
          </span>
        </motion.div>

        {isOpen && (
          <motion.div
            key="answer"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            className="py-[1rem] w-full flex"
          >
            <span className="w-[10%] mr-[5px]"></span>
            <span className="w-full text-[.95rem]">{answer}</span>
            <span className="w-[5%] ml-[5px]"></span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
