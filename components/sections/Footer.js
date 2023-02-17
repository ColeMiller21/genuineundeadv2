import React from "react";
import { withTranslation } from "next-i18next";
import { motion } from "framer-motion";

const Footer = ({ t }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:justify-between pt-[2rem] pb-[5rem] text-[.9rem] gap-[2rem] lg:gap-0 items-center text-center lg:text-left lg:items-start px-[3.2rem] bg-[#f8f8f4] dark:bg-[#191917] transition-all duration-700">
      {/* <div>@ {t("genuineUndead")} 2023</div> */}
      <div>@ GenuineUndead 2023</div>
      <div>
        <ul>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {" "}
            {/* <a className="cursor-pointer">{t("portal")}</a> */}
            <a className="cursor-pointer">Portal</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {" "}
            {/* <a className="cursor-pointer">{t("art")}</a> */}
            <a className="cursor-pointer">Art</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {" "}
            {/* <a className="cursor-pointer">{t("story")}</a>{" "} */}
            <a className="cursor-pointer">Story</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {" "}
            {/* <a className="cursor-pointer">{t("community")}</a>{" "} */}
            <a className="cursor-pointer">Community</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {" "}
            {/* <a className="cursor-pointer">{t("ethos")}</a> */}
            <a className="cursor-pointer">Ethos</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {" "}
            {/* <a className="cursor-pointer">{t("home")}</a>{" "} */}
            <a className="cursor-pointer">Home</a>
          </motion.li>
        </ul>
      </div>
      <div>
        <ul>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {/* <a className="cursor-pointer">{t("guidelines")}</a>{" "} */}
            <a className="cursor-pointer">Guidelines</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {/* <a className="cursor-pointer">{t("contact")}</a>{" "} */}
            <a className="cursor-pointer">Contact</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {/* <a className="cursor-pointer">{t("ip")}</a> */}
            <a className="cursor-pointer">IP</a>
          </motion.li>
        </ul>
      </div>
      <div>
        <ul>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {/* <a className="cursor-pointer">{t("discord")}</a> */}
            <a className="cursor-pointer">Discord</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {/* <a className="cursor-pointer">{t("twitter")}</a>{" "} */}
            <a className="cursor-pointer">Twitter</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {/* <a className="cursor-pointer">{t("medium")}</a>{" "} */}
            <a className="cursor-pointer">Medium</a>
          </motion.li>
        </ul>
      </div>
      {/* <div>{t("allRightsReserved")}</div> */}
      <div>All Rights Reserved</div>
    </div>
  );
};

export default withTranslation("common")(Footer);
