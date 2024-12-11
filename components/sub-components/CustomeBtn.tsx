import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

const CustomeBtn = () => {
  const { pending } = useFormStatus();
 
  let test=true

  return (
    <button
      type="submit"
      className="group flex-center-both gap-2 h-[2rem] w-[6rem] sm:h-[3rem] sm:w-[8rem]  text-white bg-gray-950 rounded-full transition-all hover:scale-110 duration-[0.3s] active:scale-100 outline-none group  border-black/10 border disabled:scale-100 disabled:opacity-75 dark:bg-white dark:text-black text-xs sm:text-sm  "
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin border-b-2 dark:border-black border-white rounded-full"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100   " />
        </>
      )}
    </button>
  );
};

export default CustomeBtn;
