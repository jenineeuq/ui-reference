"use client";

import { useState, useEffect } from "react";
import {
  Send, User, Bot, Copy, Check, Play, Pause, Volume2,
  Code, Plus, Minus, RefreshCw, Wand2, Download, Settings,
  Wrench, CheckCircle, Loader2, Image, Sparkles
} from "lucide-react";

// ===== CHAT =====

// ChatInterface Preview
export function ChatInterfacePreview() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { role: "user", content: "How do I create a React component?" },
    { role: "assistant", content: "To create a React component, you can use either a function or class syntax. Here's a simple functional component example:\n\n```jsx\nfunction MyComponent() {\n  return <div>Hello World</div>;\n}\n```" },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages([...messages, { role: "user", content: message }]);
    setMessage("");
    // Simulate response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "assistant", content: "I understand! Let me help you with that..." }]);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md h-80 flex flex-col border border-border rounded-xl overflow-hidden">
      {/* Messages */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}>
            {msg.role === "assistant" && (
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
            )}
            <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
              msg.role === "user"
                ? "bg-primary text-white"
                : "bg-muted"
            }`}>
              {msg.content}
            </div>
            {msg.role === "user" && (
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 bg-muted rounded-full text-sm focus:outline-none"
          />
          <button
            onClick={sendMessage}
            className="p-2 bg-primary text-white rounded-full hover:bg-primary/90"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ChatMessage Preview
export function ChatMessagePreview() {
  const [copied, setCopied] = useState(false);

  return (
    <div className="w-full max-w-md space-y-4">
      {/* User message */}
      <div className="flex gap-3 justify-end">
        <div className="max-w-[80%] px-4 py-2 bg-primary text-white rounded-2xl text-sm">
          Can you explain how async/await works?
        </div>
        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
          <User className="w-4 h-4" />
        </div>
      </div>

      {/* Assistant message */}
      <div className="flex gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1 space-y-2">
          <div className="px-4 py-3 bg-muted rounded-2xl text-sm">
            <p>Async/await is a way to handle asynchronous operations in JavaScript. It makes asynchronous code look and behave more like synchronous code.</p>
            <p className="mt-2">Here's a simple example:</p>
          </div>
          <div className="relative">
            <pre className="px-4 py-3 bg-slate-900 text-slate-100 rounded-xl text-sm overflow-x-auto">
              <code>{`async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}`}</code>
            </pre>
            <button
              onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 2000); }}
              className="absolute top-2 right-2 p-1.5 bg-slate-700 rounded hover:bg-slate-600"
            >
              {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3 text-slate-300" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// StreamingText Preview
export function StreamingTextPreview() {
  const fullText = "This is an example of streaming text that appears character by character, simulating how AI models generate responses in real-time...";
  const [displayedText, setDisplayedText] = useState("");
  const [isStreaming, setIsStreaming] = useState(true);

  useEffect(() => {
    if (!isStreaming) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsStreaming(false);
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isStreaming]);

  const restart = () => {
    setDisplayedText("");
    setIsStreaming(true);
  };

  return (
    <div className="w-full max-w-md space-y-3">
      <div className="p-4 bg-muted rounded-xl min-h-[80px]">
        <p className="text-sm">
          {displayedText}
          {isStreaming && <span className="inline-block w-2 h-4 bg-primary ml-0.5 animate-pulse" />}
        </p>
      </div>
      <button
        onClick={restart}
        className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <RefreshCw className="w-4 h-4" />
        Restart
      </button>
    </div>
  );
}

// ===== CODE =====

// CodeBlock Preview
export function CodeBlockPreview() {
  const [copied, setCopied] = useState(false);

  const code = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage
console.log(fibonacci(10)); // 55`;

  return (
    <div className="w-full max-w-md">
      <div className="rounded-xl overflow-hidden border border-border">
        <div className="flex items-center justify-between px-4 py-2 bg-slate-800">
          <span className="text-sm text-slate-400">fibonacci.js</span>
          <button
            onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 2000); }}
            className="flex items-center gap-1 px-2 py-1 text-xs text-slate-400 hover:text-white"
          >
            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <pre className="p-4 bg-slate-900 text-sm overflow-x-auto">
          <code className="text-slate-100">{code}</code>
        </pre>
      </div>
    </div>
  );
}

// CodeDiff Preview
export function CodeDiffPreview() {
  return (
    <div className="w-full max-w-md rounded-xl overflow-hidden border border-border">
      <div className="px-4 py-2 bg-slate-800 text-sm text-slate-400">
        Changes in utils.js
      </div>
      <div className="bg-slate-900 text-sm font-mono">
        <div className="px-4 py-1 bg-red-900/30 text-red-300 border-l-2 border-red-500">
          - const result = data.filter(x =&gt; x &gt; 0);
        </div>
        <div className="px-4 py-1 bg-green-900/30 text-green-300 border-l-2 border-green-500">
          + const result = data.filter(x =&gt; x &gt;= 0);
        </div>
        <div className="px-4 py-1 text-slate-400">
          &nbsp; return result.map(x =&gt; x * 2);
        </div>
        <div className="px-4 py-1 bg-red-900/30 text-red-300 border-l-2 border-red-500">
          - console.log("done");
        </div>
        <div className="px-4 py-1 bg-green-900/30 text-green-300 border-l-2 border-green-500">
          + logger.info("Processing complete");
        </div>
      </div>
    </div>
  );
}

// TerminalOutput Preview
export function TerminalOutputPreview() {
  return (
    <div className="w-full max-w-md rounded-xl overflow-hidden border border-border">
      <div className="flex items-center gap-2 px-4 py-2 bg-slate-800">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-slate-400 ml-2">Terminal</span>
      </div>
      <div className="p-4 bg-slate-900 font-mono text-sm space-y-1">
        <div className="text-green-400">$ npm run build</div>
        <div className="text-slate-300">
          <span className="text-blue-400">info</span> - Creating optimized production build...
        </div>
        <div className="text-slate-300">
          <span className="text-blue-400">info</span> - Compiled successfully
        </div>
        <div className="text-slate-300">
          <span className="text-green-400">✓</span> Build completed in 4.2s
        </div>
        <div className="text-slate-300">
          <span className="text-yellow-400">warn</span> - 2 warnings found
        </div>
        <div className="text-green-400 flex items-center gap-2">
          $ <span className="inline-block w-2 h-4 bg-green-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

// ===== GENERATION =====

// ImageGenerator Preview
export function ImageGeneratorPreview() {
  const [prompt, setPrompt] = useState("A futuristic city at sunset");
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(true);

  const generate = () => {
    setGenerating(true);
    setGenerated(false);
    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
    }, 2000);
  };

  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Prompt</label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={2}
          className="w-full px-3 py-2 rounded-xl border border-border bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>

      <button
        onClick={generate}
        disabled={generating}
        className="w-full flex items-center justify-center gap-2 py-2.5 bg-primary text-white rounded-xl font-medium disabled:opacity-70"
      >
        {generating ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Wand2 className="w-4 h-4" />
            Generate Image
          </>
        )}
      </button>

      {/* Generated image preview */}
      <div className="aspect-square rounded-xl bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 flex items-center justify-center relative overflow-hidden">
        {generating && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-white animate-spin" />
          </div>
        )}
        {generated && !generating && (
          <>
            <Image className="w-16 h-16 text-white/30" />
            <div className="absolute bottom-2 right-2 flex gap-1">
              <button className="p-1.5 bg-black/50 rounded-lg hover:bg-black/70">
                <Download className="w-4 h-4 text-white" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// AudioPlayer Preview
export function AudioPlayerPreview() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  useEffect(() => {
    if (!playing) return;
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, [playing]);

  return (
    <div className="w-full max-w-sm p-4 bg-background border border-border rounded-xl space-y-3">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <div className="font-medium text-sm">AI Generated Audio</div>
          <div className="text-xs text-muted-foreground">Generated from prompt</div>
        </div>
      </div>

      {/* Waveform */}
      <div className="flex items-center gap-0.5 h-8">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 rounded-full ${i < progress * 0.4 ? "bg-primary" : "bg-muted"}`}
            style={{ height: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setPlaying(!playing)}
          className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center"
        >
          {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>
        <div className="flex-1">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <span className="text-xs text-muted-foreground w-16 text-right">
          {Math.floor(progress * 0.03)}:{String(Math.floor((progress * 1.8) % 60)).padStart(2, "0")} / 3:00
        </span>
        <Volume2 className="w-4 h-4 text-muted-foreground" />
      </div>
    </div>
  );
}

// ===== AGENTS =====

// AgentPanel Preview
export function AgentPanelPreview() {
  const [status, setStatus] = useState<"idle" | "thinking" | "running">("running");

  const steps = [
    { name: "Analyze request", status: "complete" },
    { name: "Search codebase", status: "complete" },
    { name: "Generate solution", status: "running" },
    { name: "Apply changes", status: "pending" },
  ];

  return (
    <div className="w-full max-w-sm p-4 bg-background border border-border rounded-xl space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="font-medium text-sm">Coding Agent</div>
            <div className="text-xs text-muted-foreground">Working on your request</div>
          </div>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs text-green-600 dark:text-green-400">Running</span>
        </div>
      </div>

      <div className="space-y-2">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-3">
            {step.status === "complete" ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : step.status === "running" ? (
              <Loader2 className="w-5 h-5 text-primary animate-spin" />
            ) : (
              <div className="w-5 h-5 rounded-full border-2 border-border" />
            )}
            <span className={`text-sm ${step.status === "pending" ? "text-muted-foreground" : ""}`}>
              {step.name}
            </span>
          </div>
        ))}
      </div>

      <div className="text-xs text-muted-foreground">
        Elapsed: 12s • 3/4 steps complete
      </div>
    </div>
  );
}

// ToolCallCard Preview
export function ToolCallCardPreview() {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="w-full max-w-sm border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3 px-4 py-3 bg-muted/50 hover:bg-muted transition-colors"
      >
        <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
          <Wrench className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="flex-1 text-left">
          <div className="font-medium text-sm">read_file</div>
          <div className="text-xs text-muted-foreground">Reading src/utils/helpers.ts</div>
        </div>
        <CheckCircle className="w-5 h-5 text-green-500" />
      </button>

      {expanded && (
        <div className="px-4 py-3 border-t border-border space-y-2">
          <div>
            <div className="text-xs text-muted-foreground mb-1">Input</div>
            <pre className="p-2 bg-muted rounded-lg text-xs overflow-x-auto">
              <code>{`{ "path": "src/utils/helpers.ts" }`}</code>
            </pre>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Output</div>
            <pre className="p-2 bg-muted rounded-lg text-xs overflow-x-auto max-h-24">
              <code>{`export function formatDate(date) {
  return new Intl.DateTimeFormat('en-US')
    .format(date);
}`}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
