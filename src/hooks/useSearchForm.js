import { useState } from "react";

export default function useSearchForm() {
  const [inputValue, setInputValue] = useState('');
  const [isShort, setIsShort] = useState(false);

  function handleCheckboxChange(e) {
    setIsShort(() => (e.target.checked))
  }

  function handleChange(e) {
    setInputValue(() => (e.target.value))
  }


  return {inputValue, setInputValue, isShort, setIsShort, handleChange, handleCheckboxChange}
}
