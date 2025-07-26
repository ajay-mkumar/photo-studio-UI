import {
  FAILURE_EMAIL_MESSAGE,
  HOMEPAGE,
  SUCCESS_EMAIL_MESSAGE,
} from "../../constants/constants";
import { useModal } from "../../context/ModalContext";
import emailJs from "@emailjs/browser";
import EmailModal from "./EmailModal";
import { useState } from "react";

const serviceId: string = import.meta.env.VITE_EMAIL_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

function HireUsComponent() {
  const { toggleModal } = useModal();
  const [emailModalInfo, setEmailModalInfo] = useState<{
    isSuccess: boolean;
    message: string;
  } | null>(null);
  const [isSending, setIsSending] = useState(false);

  const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    emailJs
      .sendForm(serviceId, templateId, e.target as HTMLFormElement, publicKey)
      .then((result) => {
        setIsSending(false);
        console.log("messgae sent", result.text);
        setEmailModalInfo({ isSuccess: true, message: SUCCESS_EMAIL_MESSAGE });
      })
      .catch((err) => {
        setIsSending(false);
        console.log("error sending mail", err.text);
        setEmailModalInfo({ isSuccess: false, message: FAILURE_EMAIL_MESSAGE });
      });
  };

  return (
    <>
      {emailModalInfo ? (
        <EmailModal
          isSuccess={emailModalInfo.isSuccess}
          message={emailModalInfo.message}
        />
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-pink-50 px-4">
          {/* Form Card */}
          <form
            className="w-full max-w-2xl bg-white p-10 rounded-3xl shadow-2xl flex flex-col gap-6"
            onSubmit={sendMail}
          >
            {/* Close Button */}
            <button
              className="absolute right-6 sm:right-[350px] text-sm font-bold text-red-500 bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center hover:bg-red-100 transition"
              onClick={() => toggleModal(HOMEPAGE)}
            >
              X
            </button>
            <h2 className="text-3xl font-bold text-center text-pink-600">
              Contact Us
            </h2>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="title"
                className="text-sm font-semibold text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter your subject"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="What's on your mind?"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="sm:w-1/4 bg-gradient-to-r from-pink-500 to-pink-700 text-white font-semibold py-3 rounded-xl hover:from-blue-600 hover:to-blue-800 transition duration-300 shadow-md"
            >
              {isSending ? (
                <div className="flex gap-2">
                  <span className="animate-pulse">📨</span>
                  sending...
                </div>
              ) : (
                <span>Send Message</span>
              )}
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default HireUsComponent;
