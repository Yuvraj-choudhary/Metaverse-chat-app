import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();

  return (
    <div className="sticky top-0 z-50 bg-black shadow-sm text-pink-500 border-b-2 border-pink-700 p-5">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full object-cover"
            src={"https://cryptologos.cc/logos/chatcoin-chat-logo.png"}
          />
        </div>
        <div className="text-left lg:text-center col-span-4">
          <div className="relative h-44 w-44 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-3xl">Welcome to the Blockchain ChatApp</h1>
          <h2 className="text-5xl font-bold truncate h-20">
            {user.getUsername()}
          </h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
