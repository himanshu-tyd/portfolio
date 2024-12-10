import React from "react";
import SectionHeading from "./sub-components/SectionHeading";
import useSectionView from "@/hooks/useInView";
import { FaPaperPlane } from "react-icons/fa";
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
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-7 ">
        Please contact me directly at{" "}
        <a href="mailto:himanshutaviyad93@gmail.com" className="underline">
          code.himanshu@93gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="flex flex-col mt-10"
        action={async (formData: FormData) => {
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
          className="h-14 borderBlack rounded-lg px-4 outline-none "
          required
          maxLength={80}
        />
        <textarea
          name="message"
          required
          maxLength={500}
          placeholder="Your message..."
          className="min-h-52 my-3 outline-none borderBlack rounded-lg px-4 pt-4  "
        />
        <CustomeBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
