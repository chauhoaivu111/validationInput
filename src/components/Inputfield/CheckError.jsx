import { useCallback, useContext, useEffect } from "react";
import { ErrorContext } from "../../Provider";

const validationPhone = (phone) => {
  const checkphone = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return checkphone.test(phone);
};
const validationMail = (mail) => {
  const checkmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return checkmail.test(mail);
};

const CheckError = ({ type, value, error }) => {
  const { errorMessages, setErrorMessages } = useContext(ErrorContext);

  const updateMessagesError = useCallback(() => {
    if (value !== "") {
      
      const updateError = { ...errorMessages };

      // case error
      if (
        (type === "Num" && isNaN(value)) ||
        (type === "Phone" && !validationPhone(value)) ||
        (type === "Email" && !validationMail(value)) ||
        (!isNaN(value) && !type)
      ) {
        updateError[type] = error;
      } else {
        updateError[type] = undefined;
      }

      setErrorMessages(updateError);
    } else {
      setErrorMessages((prvState) => ({
        ...prvState,
        [type]: undefined,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, value, error, setErrorMessages]);

  useEffect(updateMessagesError, [updateMessagesError]);

  return errorMessages[type] ? (<p style={{color:"red"}}>
    {errorMessages[type]} 
  </p>) : null
};

export default CheckError;
