import React from "react";
import SectionHeading from "./sub-components/SectionHeading";
import useSectionView from "@/hooks/useInView";
import { motion } from "motion/react";
import { sendEmail } from "@/lib/sendEmail";
import CustomeBtn from "./sub-components/CustomeBtn";
import { toast } from "sonner";

const Contact = () => {
  const { ref } = useSectionView("Contact", 0.5);


  return (
    <motion.section
      ref={ref}
      id="contact"
      className="z-20 w-[min(100%,38rem)] scroll-mt-28 mb-20 sm:mb-28 text-center "
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Get In Touch</SectionHeading>
      <p className="text-gray-700 -mt-7 dark:text-white/60 text-sm sm:text-lg  ">
        Please contact me directly at{" "}
        <a href="mailto:himanshutaviyad93@gmail.com" className="underline dark:hover:text-white/90 hover:text-darkSecondary ">
          code.himanshu@93gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
      //@ts-ignore
        className="flex flex-col mt-10" action={async (formData: FormData) => {
          const { message ,success } = await sendEmail(formData);
          if(!success){
            return toast.error(message)
          }
          toast.success(message);
        }}
      >
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="h-12 sm:h-14 text-sm sm:text-lg borderBlack rounded-lg px-4  dark:bg-black/60 dark:focus:bg-black/100 dark:text-white oultine-none      "
          required
          maxLength={80}
        />
        <textarea
          name="message"
          required
          maxLength={500}
          placeholder="Your message..."
          className="min-h-52 my-3 text-sm sm:text-lg   borderBlack rounded-lg px-4 pt-4   dark:bg-black/60 dark:focus:bg-black/100 dark:text-white outline-none "
        />
        <CustomeBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
