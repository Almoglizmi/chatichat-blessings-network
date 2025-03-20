
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import PasswordEntry from "@/components/PasswordEntry";
import AnimatedTransition from "@/components/AnimatedTransition";
import { motion } from "framer-motion";

const Index = () => {
  const navigate = useNavigate();
  
  const handleSuccessfulLogin = () => {
    navigate("/user-info");
  };
  
  return (
    <AnimatedTransition>
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold mb-2 text-shadow">
              חתיכת סיפור
            </h1>
            <p className="text-xl text-muted-foreground">
              ברוכים הבאים!
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <GlassmorphicCard className="backdrop-blur-md">
              <PasswordEntry onSuccess={handleSuccessfulLogin} />
            </GlassmorphicCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6 text-center text-sm text-muted-foreground"
          >
            <p>רשת של ערבות הדדית, שבה כל בקשה שלך הופכת לברכה של מישהו אחר</p>
          </motion.div>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default Index;
