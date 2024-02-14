import React, { useContext,useEffect } from 'react';
import { Link } from "react-router-dom";
import { UserDataContext } from "../../context/UserDataContext";
import LoadingSpinner from "../layout/loadingSpinne/LoadingSpinner.jsx";

function ChatLog() {
    const { chatLog, images,refreshData } = useContext(UserDataContext);
  //useEffect(()=>{refreshData()},[])
    const imageRefs = images.map(image => ({
        _id: image._id,
        createdAt: image.createdAt,
        type: 'imageRef', // Marker to indicate this entry is an image reference
    }));
    const combinedArray = [...chatLog, ...imageRefs];
    const sortedCombinedArray = combinedArray.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

    return (
        <>
            <div className={sortedCombinedArray.length ? "chatLog" : "chatLog loading"} id="chatLog">
            {sortedCombinedArray.length ? sortedCombinedArray.map((item, index) => {
                const isLastMessage = index === sortedCombinedArray.length - 1; // Check if the current item is the last one
                if (item.type === 'imageRef') {
                    return (
                        <div className={`assistantMessage linkedImage ${isLastMessage ? 'latest' : ''}`} key={item._id} id={isLastMessage ? 'latest' : undefined}>
                            <Link to={`/drive#${item._id}`}>Generated Image</Link>
                        </div>
                    );
                } else {
                    let roleClass = item.role === "user" ? "userMessage" : "assistantMessage";
                    return (
                        <div key={item._id} className={`${roleClass} ${isLastMessage ? 'latest' : ''}`} id={isLastMessage ? 'latest' : undefined}>
                            <p className="chatLog-messages">
                                {/* <span className="chatRole">{item.role}: </span> */}
                                {item.message.split('\n').map((line, index, array) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        {index < array.length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    );
                }
            }) : <LoadingSpinner className="loadingSpinner" />}
            </div>
        </>
    );
}

export default ChatLog;
