
import React from "react";
import { useNavigate } from "react-router-dom";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import AnimatedTransition from "@/components/AnimatedTransition";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const TermsOfService = () => {
  const navigate = useNavigate();
  
  return (
    <AnimatedTransition>
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-2 text-shadow">תקנון השימוש</h1>
            <p className="text-muted-foreground">אנא קרא בעיון את תנאי השימוש</p>
          </div>
          
          <GlassmorphicCard>
            <ScrollArea className="h-[60vh] pr-4">
              <div className="space-y-6 text-right">
                <h2 className="text-xl font-semibold">ברוכים הבאים לחתיכת סיפור</h2>
                
                <p>
                  אנו מברכים אותך על הצטרפותך לרשת התפילות שלנו, מקום שבו תפילות מתחברות ואנשים מתברכים זה מזה.
                </p>
                
                <h3 className="text-lg font-semibold">מטרת האפליקציה</h3>
                <p>
                  חתיכת סיפור היא רשת של ערבות הדדית, שמטרתה לאפשר למשתמשים לקבל ולהעניק ברכות ותפילות. כל בקשה שלך הופכת לברכה של מישהו אחר.
                </p>
                
                <h3 className="text-lg font-semibold">פרטיות</h3>
                <p>
                  הפרטים האישיים שאתה מספק (שם פרטי, שם האם ומספר טלפון) משמשים אך ורק לצורך האפליקציה ולא יימסרו לצד שלישי. 
                  מספר הטלפון ישמש רק לשליחת הודעות הקשורות לתפילות.
                </p>
                
                <h3 className="text-lg font-semibold">אופן פעולה</h3>
                <p>
                  לאחר מילוי הפרטים ובחירת קטגוריית התפילה, הבקשה שלך תישמר במערכת.
                  תפילות מועברות באופן אקראי בין המשתמשים, כך שכל אחד מתפלל עבור אדם אחר מבלי לדעת את זהותו המלאה.
                  כל תפילה שאתה מבקש עבור עצמך - הופכת לתפילה שמישהו אחר מתפלל עבורך.
                </p>
                
                <h3 className="text-lg font-semibold">תזכורות</h3>
                <p>
                  האפליקציה עשויה לשלוח לך תזכורות להתפלל עבור אחרים. אתה יכול לבחור לקבל תזכורות יומיות או לבטל אותן בכל עת.
                </p>
                
                <h3 className="text-lg font-semibold">כללי התנהגות</h3>
                <p>
                  בבחירת הקטגוריות או בהזנת בקשות מיוחדות, יש להקפיד על שפה נקייה ומכבדת. האפליקציה שומרת לעצמה את הזכות להסיר תוכן לא ראוי.
                </p>
                
                <h3 className="text-lg font-semibold">שינויים בתקנון</h3>
                <p>
                  אנו עשויים לעדכן תקנון זה מעת לעת. במקרה של שינויים מהותיים, תישלח הודעה לכל המשתמשים.
                </p>
                
                <div className="pt-4">
                  <p className="font-medium">
                    בכניסתך לאפליקציה ובסימון "אני מסכים לתקנון השימוש", אתה מאשר כי קראת, הבנת והסכמת לכל התנאים המופיעים בתקנון זה.
                  </p>
                </div>
              </div>
            </ScrollArea>
            
            <div className="flex justify-center mt-6">
              <Button onClick={() => navigate(-1)}>
                חזרה
              </Button>
            </div>
          </GlassmorphicCard>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default TermsOfService;
