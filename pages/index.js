import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Messages from "../components/Messages";

export default function Home() {
  const { isAuthenticated, isInitializing } = useMoralis();

  if (!isAuthenticated) return <Login />;

  if (isInitializing) return <Loading />;

  return (
    <div
      className="h-screen overflow-y-auto bg-gradient-to-b
    from-black to-fuchsia-900 overflow-hidden"
    >
      <Head>
        <title>Metaverse-ChatApp</title>
        <link
          rel="icon"
          href="https://cryptologos.cc/logos/chatcoin-chat-logo.png"
        />
      </Head>
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Messages />
      </div>
    </div>
  );
}
