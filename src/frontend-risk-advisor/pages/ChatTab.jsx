import { ChatInterface } from "../components/ChatInterface";

export function ChatTab() {
  return (
    <div className="grid lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <ChatInterface />
      </div>

      <div className="lg:col-span-1 space-y-6">
      </div>
    </div>
  );
}
