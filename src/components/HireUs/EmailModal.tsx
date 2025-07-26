type EmailModalProps = {
  isSuccess: boolean;
  message: string;
};

function EmailModal({ isSuccess, message }: EmailModalProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div
        className={`w-[90%] sm:w-1/2 p-5 m-5 text-center text-white rounded-lg shadow-lg ${
          isSuccess ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {message}
      </div>
     
    </div>
  );
}

export default EmailModal;
