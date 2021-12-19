import { FadingCircle } from "better-react-spinkit";

function Loading() {
  return (
    <center
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        backgroundColor: 'BLACK'
      }}
    >
      <div>
        <img
          src="https://cryptologos.cc/logos/chatcoin-chat-logo.png"
          alt="just a image"
          style={{ marginBottom: 20 }}
          height={250}
          width={250}
        />
        <FadingCircle type="Puff" color="#1b97f6" size={60} />
      </div>
    </center>
  );
}

export default Loading;
