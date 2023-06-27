import "./chatBox.css";
import { RxChatBubble } from "react-icons/rx";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { useSelector } from "react-redux";
import ChatMessageBox from "./ChatMessageBox";

const ChatBox = () => {
 
  const [chatBoxActive, setChatBoxActive] = useState(false);
  const [messageBoxActive, setMessageBoxActive] = useState(false);
  
  const [inboxUser, SetInboxUser] = useState("");
  
  const users = useSelector((state) => state.users.users);

 
  const handleChatUserClick = (user) => {
    setMessageBoxActive((state) => !state);
    SetInboxUser(user);
  };

  return (
    <div className="chatContainer">
      
      {messageBoxActive && chatBoxActive && <ChatMessageBox user={inboxUser} />}

      <div className="chatBox">
        <div
          className="chatInfo"
          onClick={() => setChatBoxActive((state) => !state)}
        >
          <div className="heading">
            <RxChatBubble size={22} />
            <p>Chats</p>
          </div>
         
          {!chatBoxActive ? (
            <MdKeyboardArrowUp size={25} />
          ) : (
            <MdOutlineKeyboardArrowDown size={25} />
          )}
        </div>

        <div className="chatUsersWrapper">
          <div className={`chatUsers ${chatBoxActive && "usersBoxActive"}`}>
           
            {users.map((user, index) => (
              <div key={user.id} className="chatUserWrapper">
                <div
                  className="chatUser"
                  onClick={() => handleChatUserClick(user)}
                >
                  <img width={"30px"} src={user?.profilepicture} alt="" />
                  <p>{user?.name}</p>
                </div>
                
                <div
                  className={`online ${index % 2 === 0 ? "gray" : "green"}`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
