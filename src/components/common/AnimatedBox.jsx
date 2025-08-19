import { motion } from "framer-motion";

export default function AnimatedBox({ children, animation, style }) {
  return (
    <motion.div {...animation} style={style}>
      {children}
    </motion.div>
  );
}
