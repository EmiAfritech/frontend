import React from "react";

export function Notification({ message, type }) {
  let typeHeader;
  let borderColorClass;

  switch (type) {
    case "success":
      typeHeader = "Success";
      borderColorClass = "border-green-500";
      break;
    case "error":
      typeHeader = "Oops ! something went wrong";
      borderColorClass = "border-red-500";
      break;
    case "warning":
      typeHeader = "Warning";
      borderColorClass = "border-yellow-500";
      break;
    case "info":
      typeHeader = "Important Notice ! ";
      borderColorClass = "border-blue-500";
      break;
    default:
      typeHeader = "Notification !";
      borderColorClass = "border-[#04B1C4]";
      break;
  }

  return (
    <main className={`border-l-4 px-4 ${borderColorClass}`}>
      <div className="font-bold text-lg mb-2">{typeHeader}</div>
      <div className="text-lg">{message}</div>
    </main>
  );
}
