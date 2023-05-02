import React, { useState, useEffect, useRef } from "react";
import {
  Channel,
  MessageList,
  MessageInput,
  ChannelHeader,
} from "stream-chat-react";
import type {
  Channel as ChannelType,
  MessageResponse,
  UserResponse,
} from "stream-chat";
import { StreamChat, TokenOrProvider } from "stream-chat";

import "stream-chat-react/dist/css/index.css";
import { useUser } from "@clerk/clerk-react";

const apiKey = "kcr8y24ntv2w";
const channelType = "messaging";
const channelId = "general";

const client = StreamChat.getInstance(apiKey);

function Contact() {
  const [messages, setMessages] = useState<MessageResponse[]>([]);
  const chatOutputRef = useRef(null);

  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const userToken = user.publicMetadata.streamUserToken;
      client.connectUser({ id: user.id }, userToken as TokenOrProvider);
    }
  }, [user]);

  useEffect(() => {
    // fetch messages and set them as state
    const fetchMessages = async () => {
      const channel = client.channel(channelType, channelId) as ChannelType;
      const result = await channel.query({ messages: { limit: 100 } });
      setMessages(result.messages);
    };
    fetchMessages();
  }, []);

  const handleSendMessage = async (text: string) => {
    const channel = client.channel(channelType, channelId) as ChannelType;
    await channel.sendMessage({ text });
  };

  return (
    <div className="Contact">
      <h1>Client Chat</h1>
      <Channel channel={client.channel(channelType, channelId)}>
        <ChannelHeader />
        <MessageList messages={messages} />
        <MessageInput
          Input={(props) => (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSendMessage((event.target as any)["message"].value);
              }}
            >
              <input name="message" {...props} />
              <button type="submit">Send</button>
            </form>
          )}
        />
      </Channel>
    </div>
  );
}

export default Contact;
