import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Loading from "../components/Loading";
import Header from "../components/Header";

export default function Home() {
  const { isAuthenticated, isInitializing } = useMoralis();

  if (!isAuthenticated) return <Login />;

  if (isInitializing) return <Loading />;

  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse-ChatApp</title>
        <link
          rel="icon"
          href="https://cryptologos.cc/logos/chatcoin-chat-logo.png"
        />
      </Head>
      <Header />
     
    </div>
  );
}
