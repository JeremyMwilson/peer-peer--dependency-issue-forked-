import {
  Channel,
  MessageList,
  MessageInput,
  ChannelHeader,
} from "stream-chat-react";
import type { Channel as ChannelType, MessageResponse } from "stream-chat";
import { StreamChat, TokenOrProvider } from "stream-chat";
import "stream-chat-react/dist/css/index.css";

const apiKey = "kcr8y24ntv2w";
const client = StreamChat.getInstance(apiKey);

useEffect(() => {
  const username = "YOUR_USERNAME";
  constToken = "YOUR_USER_TOKEN";
  client.connect({ id: username },Token as TokenOrProvider);
}, []);

const [messages, setMessages] = useState<MessageResponse[]>([]);
const channelId = "YOUR_CHANNEL_ID";

useEffect(() => {
  const fetchMessages = async () => {
