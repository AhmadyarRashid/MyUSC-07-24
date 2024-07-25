import { useState } from "react";

const useToggle = (intialToggle) => {
  const [isVisible, setIsVisible] = useState(intialToggle);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  return [isVisible, toggleModal];
};

export default useToggle;
