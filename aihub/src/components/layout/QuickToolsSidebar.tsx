import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight, Sparkles, Search, Bot, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const quickTools = [
  {
    name: "Microsoft Copilot",
    description: "AI assistant for productivity",
    icon: Bot,
    url: "https://copilot.microsoft.com",
    color: "bg-blue-500",
  },
  {
    name: "REVA Lit",
    description: "Search prior research at REVA",
    icon: Search,
    url: "https://revalit.netlify.app/",
    color: "bg-track-research",
  },
  {
    name: "Prompt Library",
    description: "Ready-to-use AI prompts",
    icon: FileText,
    url: "/resources/prompt-library",
    color: "bg-accent",
    internal: true,
  },
  {
    name: "Julius AI",
    description: "AI data analyst and researcher",
    icon: Sparkles,
    url: "https://julius.ai/",
    color: "bg-indigo-600",
  },
  {
    name: "ChatGPT",
    description: "OpenAI's conversational AI",
    icon: Sparkles,
    url: "https://chatgpt.com/",
    color: "bg-emerald-500",
  },
];

const QuickToolsSidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <aside
      className={cn(
        "hidden xl:flex flex-col border-l border-border bg-card transition-all duration-300 sticky top-16 h-[calc(100vh-4rem)]",
        collapsed ? "w-14" : "w-64"
      )}
    >
      <div className="p-2 border-b border-border flex items-center justify-between">
        {!collapsed && (
          <span className="text-sm font-semibold text-foreground px-2">Quick Tools</span>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 shrink-0"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {quickTools.map((tool) => (
          <a
            key={tool.name}
            href={tool.url}
            target={tool.internal ? undefined : "_blank"}
            rel={tool.internal ? undefined : "noopener noreferrer"}
            className={cn(
              "flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors group",
              collapsed && "justify-center"
            )}
            title={collapsed ? tool.name : undefined}
          >
            <div className={cn("flex items-center justify-center h-9 w-9 rounded-lg text-white shrink-0", tool.color)}>
              <tool.icon className="h-5 w-5" />
            </div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium text-foreground truncate">{tool.name}</span>
                  {!tool.internal && <ExternalLink className="h-3 w-3 text-muted-foreground" />}
                </div>
                <span className="text-xs text-muted-foreground truncate block">{tool.description}</span>
              </div>
            )}
          </a>
        ))}
      </div>

      {!collapsed && (
        <div className="p-3 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            Access AI tools quickly from anywhere on the site
          </p>
        </div>
      )}
    </aside>
  );
};

export default QuickToolsSidebar;
