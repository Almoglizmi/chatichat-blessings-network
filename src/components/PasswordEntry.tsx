
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface PasswordEntryProps {
  defaultPassword?: string;
  onSuccess: () => void;
}

const PasswordEntry: React.FC<PasswordEntryProps> = ({
  defaultPassword = "הסיפור שלי",
  onSuccess,
}) => {
  const [password, setPassword] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === defaultPassword && termsAgreed) {
      toast.success("ברוך הבא לחתיכת סיפור!");
      onSuccess();
    } else if (!termsAgreed) {
      toast.error("יש לאשר את תקנון השימוש");
    } else {
      toast.error("סיסמה שגויה, נסו שנית");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      <div className="space-y-2">
        <Label htmlFor="password" className="text-right text-base">
           1סיסמה לכניסת קהל
        </Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="הזן סיסמה"
          className="text-right"
          required
        />
      </div>
      
      <div className="flex items-center justify-end space-x-2 space-x-reverse">
        <Checkbox 
          id="terms" 
          checked={termsAgreed}
          onCheckedChange={(checked) => setTermsAgreed(checked === true)}
        />
        <div className="flex gap-1 items-center">
          <Label
            htmlFor="terms"
            className="text-sm font-medium leading-none cursor-pointer"
          >
            אני מסכים
          </Label>
          <Button 
            variant="link" 
            className="p-0 h-auto text-sm font-medium text-primary"
            onClick={(e) => {
              e.preventDefault();
              navigate("/terms");
            }}
          >
            לתקנון השימוש
          </Button>
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full"
        disabled={!termsAgreed}
      >
        המשך
      </Button>
    </form>
  );
};

export default PasswordEntry;
