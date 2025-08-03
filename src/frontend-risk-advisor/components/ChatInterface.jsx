import React from "react";
import { RiskScoreCard } from "./RiskScoreCard";
import { MitigationPlaybook } from "./MitigationPlaybo";
import { ScenarioGuidance } from "./ScenarioGuidance";
import { AlertDemo } from "./AlertDemo";
import { FaRobot } from "react-icons/fa";

export function ChatInterface() {
  const [messages, setMessages] = React.useState([
    {
      id: 1,
      type: "ai",
      content:
        "Hello! I'm your Risk Advisor AI. I can help you with risk analysis, mitigation strategies, and scenario planning. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const [quickActionLock, setQuickActionLock] = React.useState(false);
  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions = [
    { text: "Analyze high-risk scenarios", icon: "fas fa-exclamation-triangle" },
    { text: "Risk score analysis", icon: "fas fa-chart-line" },
  ];

  const handleQuickAction = async (action) => {
    setQuickActionLock(true);
    const userMessage = {
      id: Date.now(),
      type: "user",
      content: action,
      timestamp: new Date(),
    };

    let aiResponse = {
      id: Date.now() + 1,
      type: "ai",
      timestamp: new Date(),
      content: "",
    };

    switch (action) {
      case "Analyze high-risk scenarios":
        aiResponse.content = "Analyzing high-risk scenarios... Here's what I found:";
        aiResponse.component = "RiskScoreCard";
        break;
      case "Risk score analysis":
        aiResponse.content = "Generating your risk score analysis...";
        aiResponse.component = "RiskScoreCard";
        break;
      default:
        aiResponse.content = "I'm here to help with your risk inquiries. Please type a question!";
    }

    setMessages((prev) => [...prev, userMessage]);
    await new Promise((res) => setTimeout(res, 300));
    setMessages((prev) => [...prev, aiResponse]);
    setQuickActionLock(false);
  };

  const handleSendMessage = async (message = inputValue) => {
    if (!message.trim() || quickActionLock) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: message,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const isYesOrNo = ["yes", "no"].includes(message.trim().toLowerCase());
      const lastBotMessage = messages[messages.length - 1]?.content || "";
      const isConfirming = lastBotMessage.includes("Would you like advice");

      const payload = {
        session_id: "user-session-123",
        ...(isYesOrNo && isConfirming
          ? { confirm_response: message }
          : { message: message }),
      };

      const response = await fetch("https://robotechgh-risk-bot.hf.space/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      const aiMessage = {
        id: Date.now(),
        type: "ai",
        content: data.response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("API error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          type: "ai",
          content: "⚠️ Error: Could not reach the server.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const renderMessageComponent = (componentType) => {
    switch (componentType) {
      case "RiskScoreCard":
        return <RiskScoreCard data-id="xax6vpl9m" />;
      case "MitigationPlaybook":
        return <MitigationPlaybook data-id="sojlynuo8" />;
      case "ScenarioGuidance":
        return <ScenarioGuidance data-id="p26m9iext" />;
      case "AlertDemo":
        return <AlertDemo data-id="6icpffo77" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <div className="text-white text-xl">
              <FaRobot />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Risk Advisor AI</h3>
            <p className="text-sm text-gray-500">Online • Ready to assist</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-green-600 font-medium">Active</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-96">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.type === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              <p className="text-sm whitespace-pre-line">{message.content}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}

        {messages.map(
          (message) =>
            message.component && (
              <div key={`${message.id}-component`} className="w-full">
                {renderMessageComponent(message.component)}
              </div>
            )
        )}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex flex-wrap gap-2 mb-3">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => handleQuickAction(action.text)}
              className="flex items-center space-x-2 px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <i className={`${action.icon} text-xs`}></i>
              <span>{action.text}</span>
            </button>
          ))}
        </div>

        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Ask me about risk management..."
            disabled={quickActionLock}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={quickActionLock}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
