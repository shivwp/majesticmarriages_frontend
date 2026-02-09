import { motion } from "motion/react";

export function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--cream)] to-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <div className="relative w-20 h-20 mx-auto mb-4">
          <motion.div
            className="absolute inset-0 border-4 border-[var(--gold)]/30 rounded-full"
          />
          <motion.div
            className="absolute inset-0 border-4 border-[var(--maroon)] border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <p className="text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
          Loading...
        </p>
      </motion.div>
    </div>
  );
}
