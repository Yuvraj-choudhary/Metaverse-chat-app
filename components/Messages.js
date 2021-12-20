import { useRef } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

function Messages() {
  const { user } = useMoralis();
  const endOfMessageRef = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) => query.ascending("createdAt"),
    [],
    {
      live: true,
    }
  );

  return (
    <div className="pb-56">
      <div className="space-y-10 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        {data.map((message) => (
          <SendMessage
            endOfMessageRef={endOfMessageRef}
            key={message.id}
            messages={message}
          />
        ))}
      </div>
      <div ref={endOfMessageRef} className="text-center text-gray-400 mt-5">
        <p>You are up to date {user.getUsername()} 🎉</p>
      </div>
    </div>
  );
}

export default Messages;
