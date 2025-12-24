import AppLayout from "@components/Layout/AppLayout";
import ChatPanel from "@components/Ai-Chat/ChatPanel";
import AiChat from "@components/Ai-Chat/AiChat";

export default function AiChatPage() {
  return (
    <AppLayout>
      {/* Chat Panel - Part of AI Chat page */}
      <ChatPanel />
      
      {/* Main Chat Area */}
      <AiChat />
    </AppLayout>
  );
}
