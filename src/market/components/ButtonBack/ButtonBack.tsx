"use client";

import { useRouter } from "next/navigation";
import { IoChevronBackCircle } from "react-icons/io5";

export const ButtonBack = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <button className="p-2 rounded-full  text-brand mr-3" onClick={handleBack}>
      <IoChevronBackCircle size={40} />
    </button>
  );
};
