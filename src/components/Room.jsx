import React from 'react';
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import {appId , secret} from "./variables";

const Room = () => {
    const { id } = useParams();
  
    const liveStream = async (element) => {
        const appID = appId;
        const serverSecret = secret;
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        id,
        Date.now().toString(),
        "Manjyot Singh"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
        container: element,
        scenario: {
          mode: ZegoUIKitPrebuilt.LiveStreaming,
        },
        sharedLinks: [
        {
          name: "Copy Link",
          url: `http://localhost:5173/room/${id}`,
        },
      ],
    });
  };


  return (
    <>
      <div ref={liveStream} />
    </>
  );
};

export default Room;
      