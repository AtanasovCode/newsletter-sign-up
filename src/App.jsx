import { useState } from "react";

import Card from "./components/Card";
import Confirmation from "./components/Confirmation";

const App = () => {
  const [mail, setMail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errMessage, setErrMessage] = useState(false);


  const toggle = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailRegex.test(mail)) {
      setIsValid(true);
      setErrMessage(false);
    } else {
      setIsValid(false);
      setErrMessage(true);
    }

  }

  return (
    <div className="bg-background w-screen min-h-screen flex items-center justify-center">
      {isValid ?
        <Confirmation mail={mail} />
      :
        <Card toggle={toggle} mail={mail} setMail={setMail} errMessage={errMessage} />
      }
    </div>
  );
};

export default App;
