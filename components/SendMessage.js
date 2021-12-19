import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessageRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {},
        (error) => {
          console.error(error.message);
        }
      );
    endOfMessageRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setMessage("");
  };

  return (
    <form className="flex w-11/12 fixed bottom-10 bg-black opacity-75 px-6 py-4 max-w-2xl border-blue-400 z-50 rounded-full border-4 shadow-xl">
      <input
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
        type="text"
        placeholder={`Enter your message ${user.getUsername()}...`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      744
      <button
        onClick={sendMessage}
        type="submit"
        className="font-bold text-pink-500"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
