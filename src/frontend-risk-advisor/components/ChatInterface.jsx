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
  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions = [
    {
      text: "Analyze high-risk scenarios",
      icon: "fas fa-exclamation-triangle",
    },
    { text: "Show mitigation playbooks", icon: "fas fa-book" },
    { text: "Risk score analysis", icon: "fas fa-chart-line" },
    { text: "Generate risk alerts", icon: "fas fa-bell" },
  ];

  const handleQuickAction = (action) => {
    handleSendMessage(action);
  };

  const handleSendMessage = async (message = inputValue) => {
  if (!message.trim()) return;

  const timestamp = new Date();
  const userMessage = {
    id: `user-${timestamp.getTime()}`,
    type: "user",
    content: message,
    timestamp,
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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    const aiMessage = {
      id: `ai-${Date.now()}`,
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
        id: `error-${Date.now()}`,
        type: "ai",
        content: "⚠️ Error: Could not reach the server.",
        timestamp: new Date(),
      },
    ]);
  } finally {
    setIsTyping(false);
  }
};


  const generateAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    if (message.includes("risk score") || message.includes("analyze")) {
      return {
        id: Date.now(),
        type: "ai",
        content:
          "I've analyzed your current risk landscape. Here's what I found:",
        timestamp: new Date(),
        component: "RiskScoreCard",
      };
    } else if (message.includes("mitigation") || message.includes("playbook")) {
      return {
        id: Date.now(),
        type: "ai",
        content:
          "Here are the recommended mitigation strategies based on your risk profile:",
        timestamp: new Date(),
        component: "MitigationPlaybook",
      };
    } else if (message.includes("scenario") || message.includes("what if")) {
      return {
        id: Date.now(),
        type: "ai",
        content: "Let me run some scenario analysis for you:",
        timestamp: new Date(),
        component: "ScenarioGuidance",
      };
    } else if (message.includes("alert") || message.includes("urgent")) {
      return {
        id: Date.now(),
        type: "ai",
        content:
          "I've detected some critical risk alerts that need your attention:",
        timestamp: new Date(),
        component: "AlertDemo",
      };
    } else if (message.includes("hello") || message.includes("hi")) {
      return {
        id: Date.now(),
        type: "ai",
        content:
          "Hello! I'm here to help with your risk management needs. I can provide risk analysis, mitigation strategies, scenario planning, and real-time alerts. What would you like to explore?",
        timestamp: new Date(),
      };
    } else {
      return {
        id: Date.now(),
        type: "ai",
        content:
          "I understand you're looking for risk management assistance. I can help with:\n\n• Risk score analysis and prioritization\n• Mitigation strategy recommendations\n• Scenario-based guidance\n• Real-time risk alerts\n\nWhat specific area would you like to focus on?",
        timestamp: new Date(),
      };
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
    <div
      className="flex flex-col h-full bg-white rounded-lg shadow-sm border border-gray-200"
      data-id="n7w6ht3sa">
      {/* Chat Header */}
      <div
        className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50"
        data-id="qmjo6d1cz">
        <div className="flex items-center space-x-3" data-id="2n0ti7f8o">
          <div
            className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center"
            data-id="u3yv5ukqx">
            <div className="text-white text-xl" data-id="hzomnuhcf">
              <FaRobot />
            </div>
          </div>
          <div data-id="ty3gujqy0">
            <h3 className="font-semibold text-gray-900" data-id="p43bvoebg">
              Risk Advisor AI
            </h3>
            <p className="text-sm text-gray-500" data-id="jk0qgzwzh">
              Online • Ready to assist
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2" data-id="xq959z5kc">
          <div
            className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
            data-id="xqwvdqpqh"></div>
          <span
            className="text-xs text-green-600 font-medium"
            data-id="mumiky1xu">
            Active
          </span>
        </div>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto p-4 space-y-4 max-h-96"
        data-id="e74nd47ko">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.type === "user" ? "justify-end" : "justify-start"
            }`}
            data-id="qy58dt8vw">
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.type === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
              data-id="nwwhhs961">
              <p className="text-sm whitespace-pre-line" data-id="8kx56u37b">
                {message.content}
              </p>
              <p className="text-xs opacity-70 mt-1" data-id="2uoe6tdkd">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}

        {/* Render component responses */}
        {messages.map(
          (message) =>
            message.component && (
              <div
                key={`${message.id}-component`}
                className="w-full"
                data-id="25mj3ikpo">
                {renderMessageComponent(message.component)}
              </div>
            )
        )}

        {isTyping && (
          <div className="flex justify-start" data-id="9wacva3d5">
            <div
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg"
              data-id="o39h2vvif">
              <div className="flex items-center space-x-1" data-id="degsrvtv0">
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  data-id="rc0l08y6y"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                  data-id="f26iba0ni"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                  data-id="akiln84hm"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} data-id="t1iootfbm" />
      </div>

      {/* Quick Actions (Commented Out) */}
      {/* 
      <div
        className="p-4 border-t border-gray-200 bg-gray-50"
        data-id="5pj1rgz05">
        <div className="flex flex-wrap gap-2 mb-3" data-id="u2jomo9iu">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => handleQuickAction(action.text)}
              className="flex items-center space-x-2 px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-gray-100 transition-colors"
              data-id="r1ofp9cuf">
              <i className={`${action.icon} text-xs`} data-id="bwyc2c15c"></i>
              <span data-id="zw7gxuy8l">{action.text}</span>
            </button>
          ))}
        </div>
      */}

      {/* Input */}
      <div className="flex space-x-2" data-id="2g2lvtdud">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="Ask me about risk management..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          data-id="avwu7304k"
        />

        <button
          onClick={() => handleSendMessage()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          data-id="yq4h2q6nc">
          <i className="fas fa-paper-plane" data-id="vpbpktvkd"></i>
        </button>
      </div>
    </div>
  );
}
