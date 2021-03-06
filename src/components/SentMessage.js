import React from 'react';

function SentMessage(props) {
    return (
        <div className='chatWrapperSent'>
          <div className="bodyWrapper">
            <div className="chat-message-sent" >{props.message.body}</div>
            <img className= "tail-sent" alt ="tip" src="./assets/tip-sent.svg"></img>
          </div>
        </div>)
}

export default SentMessage