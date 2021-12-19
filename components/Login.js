import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate, isAuthenticating } = useMoralis();

  return (
    <div className="bg-black relative ">
      <div className="flex flex-col absolute z-50 h-4/6 items-center w-full justify-center space-y-4 top-10">
        <button
          onClick={authenticate}
          className="bg-blue-400 rounded-lg p-5 font-bold animate-pulse"
        >
          {!isAuthenticating
            ? "Login to the Metaverse"
            : "Entering To The Metaverse"}
        </button>
      </div>

      <div className="w-full h-screen ">
        <Image
          src={
            "https://www.matrise.no/wp-content/uploads/2020/11/metaverse_illustration-scaled.jpg"
          }
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
