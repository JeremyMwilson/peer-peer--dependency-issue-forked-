import React, { useState, useEffect } from "react";
import { Channel, MessageList, MessageInput } from "stream-chat-react";
import { StreamChat, TokenOrProvider } from "stream-chat";
import type { Channel as ChannelType, MessageResponse } from "stream-chat";
import { useClerk } from "@clerk/clerk-react";
import { use } from "i18next";

const apiKey = "kcr8y24ntv2w";
const client = StreamChat.getInstance(apiKey);

// Connect to Stream Chat with the Clerk token
const ChatWindow = () => {
  // Retrieve authenticated data from Clerk
  const { user } = useClerk();

  const [channel, setChannel] = useState<ChannelType>();
  const [messages, setMessages] = useState<MessageResponse[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    // Set the username and token to values from Clerk
    const username = user.primaryEmailAddress;
    const token = user.token;

    client.connectUser(
      {
        id: username,
        name: username,
      },
      token
    );
  }, [user]);

  return (
    <div>
      <Channel channel={channel}>
        <MessageList messages={messages} />
        <MessageInput value={text} />
      </Channel>
    </div>
  );
};

export default ChatWindow;
