"use client";
import { motion } from "framer-motion";
export const NavbarButton = ({
  children,
  onClick,
  className,
  type = "button",
  loading,
  textWhileLoading = "Loading...",
}) => {
  return (
    <motion.button
      initial={{ y: 0 }}
      whileHover={{ y: -5 }}
      className={className}
      type={type}
      onClick={onClick}
    >
      {loading ? textWhileLoading : children}
    </motion.button>
  );
};
