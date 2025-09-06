import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell, MessageSquare, Linkedin } from "lucide-react";

export default function Dashboard() {
  const interactions = [
    {
      name: "Anna Smith",
      role: "CTO @ Acme Corp",
      avatar: "A",
      trigger: "Posted on LinkedIn about AI yesterday",
      hint: "Comment on her post and share your experience with Azure AI",
      lastInteraction: "2 months ago",
    },
    {
      name: "Peter Johnson",
      role: "CIO @ BetaBank",
      avatar: "P",
      trigger: "Birthday today 🎂",
      hint: "Send a short congratulatory message",
      lastInteraction: "3 weeks ago",
    },
    {
      name: "Maria Lopez",
      role: "Head of Product @ Startly",
      avatar: "M",
      trigger: "Announced a product launch",
      hint: "Congratulate and ask how it aligns with their roadmap",
      lastInteraction: "1 month ago",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r p-6 flex flex-col gap-6">
        <div className="text-2xl font-bold">BS</div>
        <nav className="flex flex-col gap-4 text-gray-600">
          <Button variant="ghost" className="justify-start">
            Dashboard
          </Button>
          <Button variant="ghost" className="justify-start">
            My Contacts
          </Button>
          <Button variant="ghost" className="justify-start">
            Settings
          </Button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Suggested Interactions</h1>

        <div className="grid grid-cols-2 gap-6">
          {interactions.map((person, i) => (
            <Card
              key={i}
              className="rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <CardContent className="p-6 flex flex-col gap-4">
                {/* Person header */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>{person.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-lg">{person.name}</div>
                    <div className="text-sm text-gray-500">{person.role}</div>
                  </div>
                </div>

                {/* Trigger */}
                <div className="flex items-start gap-2 text-sm bg-blue-50 p-3 rounded-lg">
                  <Bell className="w-4 h-4 text-blue-600 mt-0.5" />
                  <span>{person.trigger}</span>
                </div>

                {/* Hint */}
                <div className="text-gray-700 text-sm italic">
                  💡 {person.hint}
                </div>

                {/* Meta */}
                <div className="text-xs text-gray-400">
                  Last interaction: {person.lastInteraction}
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-2">
                  <Button
                    size="sm"
                    variant="default"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" /> View LinkedIn
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" /> Mark Done
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
