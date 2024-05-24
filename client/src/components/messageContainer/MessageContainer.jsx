import MessageInput from "./MessageInput"
import Messages from "./Messages";
import {TiMessages} from "react-icons/ti";

const MessageContainer = () => {

  const noChatSelected = true;

  return (
    <div className="md:min-w-[450px] flex flex-col">
     {noChatSelected ? 
     (
      <NoChatSelected />
     ) : (
      <>
      <div className="bg-slate-100 px-4 py-2 mb-2 ">
        <span className="label-text text-slate-500 font-semibold mr-2">To: </span>{""}
        <span className="text-slate-500 font-bold">John Doe</span>
      </div>
      <Messages />
      <MessageInput />
     </>
     )} 
    </div>
  )
}

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p className="">Welcome  John Doe</p>
        <p className="">Select a chat to start messaging</p>
        <TiMessages className="w-8 h-8"/>
      </div>
    </div>
  )
}
