
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import AnimatedTransition from "@/components/AnimatedTransition";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Confirmation = () => {
  const navigate = useNavigate();
  const [showQuote, setShowQuote] = useState(false);
  
  useEffect(() => {
    // Show the quote after 5 seconds (simulating the 5 minutes mentioned in requirements)
    const timer = setTimeout(() => {
      setShowQuote(true);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <AnimatedTransition>
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <GlassmorphicCard className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-4 text-shadow">
                  תודה רבה, תפילתך נשמעה
                </h2>
                <p className="text-lg mb-6">
                  הלב שלך דיבר – משהו טוב כבר זז בעולם
                </p>
                
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t"></span>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white/60 px-4 text-sm text-muted-foreground backdrop-blur-sm rounded-full">
                      הברכה בדרך אליך
                    </span>
                  </div>
                </div>
                
                {showQuote && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="my-6 p-4 bg-blue-50/60 backdrop-blur-sm rounded-lg"
                  >
                    <p className="text-lg font-medium text-blue-900">
                      "כל המתפלל על חברו – נענה תחילה"
                    </p>
                  </motion.div>
                )}
                
                <Button
                  onClick={() => navigate("/")}
                  className="mt-4"
                >
                  חזרה לדף הראשי
                </Button>
              </motion.div>
            </GlassmorphicCard>
          </motion.div>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default Confirmation;
