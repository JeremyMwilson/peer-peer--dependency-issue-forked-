import React, { useState, useEffect } from "react";
import {
  Chat,
  Channel,
  ChannelHeader,
  Thread,
  Window,
  MessageList,
  MessageInput,
  LoadingIndicator,
} from "stream-chat-react";
import { StreamChat } from "stream-chat";

import "stream-chat-react/dist/css/index.css";
const apiKey = "kcr8y24ntv2w";

const user = {
  id: "john",
  name: "john",
};
function Contact2() {
  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);
  useEffect(() => {
    async function init() {
      const chatClient = StreamChat.getInstance(apiKey);

      await chatClient.connectUser(user, chatClient.devToken(user.id));
      const channel = chatClient.channel("messaging", "react-talk", {
        name: "Agent Chat",
        members: [user.id],
      });
      await channel.watch();
      setChannel(channel);
      setClient(chatClient);
    }

    init();
    if (client) return () => client.disconnectUser();
  }, []);

  if (!channel || !client) return <LoadingIndicator />;

  return (
    <Chat client={client} theme="messaging light">
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
}
export default Contact2;

e