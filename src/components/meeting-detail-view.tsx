import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Building2,
  Calendar,
  Users,
  Heart,
  Linkedin,
  MessageSquare,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function MeetingDetailView() {
  // Mock company data (should match main company view)
  const company = {
    name: "TechCorp Solutions",
    industry: "Software Technology",
    employees: "2,500+",
    revenue: "$750M",
    meetingDate: "Next Tuesday, Jan 28",
    meetingTime: "2:00 PM - 3:00 PM",
  };

  // Mock contacts at the company we're meeting
  const meetingContacts = [
    {
      name: "Sarah Chen",
      role: "VP of Engineering",
      avatar: "S",
      personalUpdates: [
        "Recently moved to new house in Bellevue",
        "Daughter started at University of Washington",
        "Posted about team's successful product launch",
      ],
      workFocus: "Leading cloud migration initiative",
      lastInteraction: "6 months ago",
      relationshipStrength: "strong",
    },
    {
      name: "Marcus Thompson",
      role: "CTO",
      avatar: "M",
      personalUpdates: [
        "Just returned from European vacation",
        "Celebrating 10-year anniversary at TechCorp",
        "Speaking at upcoming tech conference",
      ],
      workFocus: "Digital transformation strategy",
      lastInteraction: "3 months ago",
      relationshipStrength: "medium",
    },
    {
      name: "Lisa Rodriguez",
      role: "Head of Cloud Partnerships",
      avatar: "L",
      personalUpdates: [
        "Marathon training for Boston Marathon",
        "Recently promoted to current role",
        "Active in local tech meetups",
      ],
      workFocus: "Strategic partnership development",
      lastInteraction: "Never met",
      relationshipStrength: "new",
    },
  ];

  const getRelationshipColor = (strength: string) => {
    switch (strength) {
      case "strong":
        return "text-green-600 bg-green-50";
      case "medium":
        return "text-yellow-600 bg-yellow-50";
      case "new":
        return "text-blue-600 bg-blue-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r p-6 flex flex-col gap-6">
        <div className="flex items-center">
          <Image 
            src="/bs-logo.svg" 
            alt="Business Stalker Logo" 
            width={120} 
            height={40}
            className="h-10 w-auto"
          />
        </div>
        <nav className="flex flex-col gap-4 text-gray-600">
          <Link href="/">
            <Button variant="ghost" className="justify-start w-full">
              Dashboard
            </Button>
          </Link>
          <Button variant="ghost" className="justify-start">
            My Contacts
          </Button>
          <Link href="/company">
            <Button variant="ghost" className="justify-start w-full">
              Company View
            </Button>
          </Link>
          <Button variant="ghost" className="justify-start">
            Settings
          </Button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link href="/company">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Company View
            </Button>
          </Link>
        </div>

        {/* Meeting Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Meeting Details</h1>
              <p className="text-gray-600">
                {company.name} • {company.meetingDate} at {company.meetingTime}
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center gap-3">
            <Building2 className="w-5 h-5 text-blue-600" />
            <div>
              <div className="font-semibold text-blue-900">
                {company.name}
              </div>
              <div className="text-blue-700">
                {company.industry} • {company.employees} employees • {company.revenue} revenue
              </div>
            </div>
          </div>
        </div>

        {/* Meeting Attendees */}
        <div>
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Users className="w-5 h-5" />
            Meeting Attendees
          </h2>

          <div className="space-y-6">
            {meetingContacts.map((contact, i) => (
              <Card key={i} className="shadow-sm">
                <CardContent className="p-6">
                  {/* Contact Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>{contact.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-semibold text-lg">
                        {contact.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {contact.role}
                      </div>
                      <div
                        className={`inline-flex items-center px-2 py-1 text-xs rounded-full mt-1 ${getRelationshipColor(contact.relationshipStrength)}`}
                      >
                        {contact.relationshipStrength} relationship
                      </div>
                    </div>
                  </div>

                  {/* Work Focus */}
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm font-medium text-gray-700">
                      Current Focus
                    </div>
                    <div className="text-sm">{contact.workFocus}</div>
                  </div>

                  {/* Personal Updates */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      Personal Updates
                    </div>
                    <ul className="space-y-1">
                      {contact.personalUpdates.map((update, j) => (
                        <li key={j} className="text-sm text-gray-600">
                          • {update}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-xs text-gray-400 mb-4">
                    Last interaction: {contact.lastInteraction}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="default"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" /> Notes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}