import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigate } from "react-router-dom";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [loading, setLoading] = useState(true);

  if (!loading) {
    return <Navigate to="/" replace />;
  }

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <LoadingScreen onLoadingComplete={() => setLoading(false)} />
      )}
    </AnimatePresence>
  );
};

export default Index;
