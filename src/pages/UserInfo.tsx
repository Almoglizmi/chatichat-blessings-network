
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import AnimatedTransition from "@/components/AnimatedTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { motion } from "framer-motion";

const UserInfo = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!firstName.trim() || !motherName.trim() || !phoneNumber.trim()) {
      toast.error("יש למלא את כל השדות");
      return;
    }
    
    // Store user info (in a real app, this would go to a database)
    localStorage.setItem("userInfo", JSON.stringify({
      firstName,
      motherName,
      phoneNumber
    }));
    
    toast.success("הפרטים נשמרו בהצלחה");
    navigate("/category-selection");
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
            <h1 className="text-3xl font-bold mb-2 text-shadow">מילוי פרטים</h1>
            <p className="text-muted-foreground">הפרטים שלך לא יופצו מעבר למערכת</p>
          </motion.div>
          
          <GlassmorphicCard>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-right text-base">
                  שם פרטי
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="הזן את שמך הפרטי"
                  className="text-right"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="motherName" className="text-right text-base">
                  שם האם
                </Label>
                <Input
                  id="motherName"
                  type="text"
                  value={motherName}
                  onChange={(e) => setMotherName(e.target.value)}
                  placeholder="הזן את שם אמך"
                  className="text-right"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-right text-base">
                  מספר טלפון
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="הזן את מספר הטלפון שלך"
                  className="text-right"
                  required
                />
                <p className="text-xs text-muted-foreground text-right">
                  לא יופץ מחוץ למערכת
                </p>
              </div>
              
              <div className="flex justify-between pt-4">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => navigate(-1)}
                >
                  חזרה
                </Button>
                <Button type="submit">המשך</Button>
              </div>
            </form>
          </GlassmorphicCard>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default UserInfo;
