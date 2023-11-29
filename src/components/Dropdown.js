import { useState } from "react";

function Dropdown({ options, selection, onSelect }) {
  const [isOpen, setIsopen] = useState(false);

  const handleClick = () => {
    setIsopen(!isOpen);
  };

  const renderOptionsClick = (option) => {
    setIsopen(false);
    onSelect(option);
  };
  const renderOptions = options.map((option) => {
    return (
      <div onClick={() => renderOptionsClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  //   let content = "Select...";
  //   if (selection) {
  //     content = selection.label;
  //   }

  return (
    <div>
      <div onClick={handleClick}>{selection?.label || "Select..."}</div>
      {isOpen && <div>{renderOptions}</div>}
    </div>
  );
}

export default Dropdown;
