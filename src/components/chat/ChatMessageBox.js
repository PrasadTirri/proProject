import "./chatMessageBox.css";
import { useState } from "react";
import {
  MdKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
  MdChevronRight,
} from "react-icons/md";

const ChatMessageBox = ({ user }) => {
  
  const [messageBoxActive, setMessageBoxActive] = useState(true);

  return (
    <div className={`chatMessageBox ${messageBoxActive && "messageBoxActive"}`}>
      <div className="chatBox">
        <div
          className="chatInfo"
          onClick={() => {
            setMessageBoxActive((state) => !state);
          }}
        >
          <div className="heading">
            <img src={user?.profilepicture} width="30px" alt="" />
            <p>{user?.name}</p>
          </div>
          
          {!messageBoxActive ? (
            <MdKeyboardArrowUp size={25} />
          ) : (
            <MdOutlineKeyboardArrowDown size={25} />
          )}
        </div>
        
        <div className="messages">
          <div className="message agent">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="message agent">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="time">
            <p>9:16 PM</p>
          </div>
          <div className="message customer">
            <p>Lorem ipsum dolor.</p>
          </div>
          <div className="message customer">
            <p>Lorem ipsum.</p>
          </div>
          <div className="message agent">
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="message customer">
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
        
        <div className="messageInput">
          <input type="text" />
          <MdChevronRight fontWeight={"bold"} />
        </div>
      </div>
    </div>
  );
};

export default ChatMessageBox;
