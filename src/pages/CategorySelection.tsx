
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import AnimatedTransition from "@/components/AnimatedTransition";
import PrayerCategoryCard from "@/components/PrayerCategoryCard";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const categories = [
  "בריאות ורפואה",
  "שידוך ואהבה",
  "פרנסה ושפע",
  "שלום בית",
  "פרי בטן",
  "שמירה והגנה מכל רע",
  "נחת מהילדים",
  "בריאות נפש",
  "שמחה ואמונה",
];

const CategorySelection = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [otherCategory, setOtherCategory] = useState("");
  const [showOtherInput, setShowOtherInput] = useState(false);
  
  const toggleCategory = (category: string) => {
    if (category === "אחר") {
      setShowOtherInput(!showOtherInput);
      if (selectedCategories.includes(category)) {
        setSelectedCategories(selectedCategories.filter(c => c !== category));
      } else {
        setSelectedCategories([...selectedCategories, category]);
      }
      return;
    }
    
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  const handleSubmit = () => {
    if (selectedCategories.length === 0) {
      toast.error("יש לבחור לפחות קטגוריה אחת");
      return;
    }
    
    // Store selected categories
    const finalCategories = [...selectedCategories];
    if (showOtherInput && otherCategory.trim()) {
      finalCategories.push(`אחר: ${otherCategory.trim()}`);
    }
    
    localStorage.setItem("selectedCategories", JSON.stringify(finalCategories));
    navigate("/confirmation");
  };
  
  return (
    <AnimatedTransition>
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold mb-2 text-shadow">בחירת קטגוריה</h1>
            <p className="text-muted-foreground">מה הדבר שהכי היית צריך עכשיו?</p>
          </motion.div>
          
          <GlassmorphicCard>
            <div className="space-y-4">
              <motion.div 
                className="grid grid-cols-1 gap-3"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05
                    }
                  }
                }}
                initial="hidden"
                animate="visible"
              >
                {categories.map((category, index) => (
                  <motion.div
                    key={category}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <PrayerCategoryCard
                      label={category}
                      selected={selectedCategories.includes(category)}
                      onClick={() => toggleCategory(category)}
                    />
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <PrayerCategoryCard
                    label="אחר"
                    selected={showOtherInput}
                    onClick={() => toggleCategory("אחר")}
                  />
                </motion.div>
              </motion.div>
              
              {showOtherInput && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Textarea
                    placeholder="פרט את בקשת התפילה שלך כאן..."
                    value={otherCategory}
                    onChange={(e) => setOtherCategory(e.target.value)}
                    className="resize-none text-right"
                  />
                </motion.div>
              )}
              
              <div className="flex justify-between pt-4">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => navigate(-1)}
                >
                  חזרה
                </Button>
                <Button onClick={handleSubmit}>שלח בקשה</Button>
              </div>
            </div>
          </GlassmorphicCard>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default CategorySelection;
