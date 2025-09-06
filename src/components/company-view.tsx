import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Calendar, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CompanyView() {
  // Mock company data
  const company = {
    name: "TechCorp Solutions",
    industry: "Software Technology",
    employees: "2,500+",
    revenue: "$750M",
    meetingDate: "Next Tuesday, Jan 28",
    meetingTime: "2:00 PM - 3:00 PM",
  };

  // Mock company news/events
  const companyEvents = [
    {
      type: "company",
      title: "Q4 Earnings Beat Expectations",
      description:
        "TechCorp reported 25% revenue growth, exceeding analyst predictions",
      date: "2 days ago",
      impact: "positive",
      source: "TechCorp Investor Relations",
      sourceUrl: "https://investor.techcorp.com/earnings",
    },
    {
      type: "company",
      title: "New Partnership with Azure",
      description: "Announced strategic partnership to expand cloud services",
      date: "1 week ago",
      impact: "positive",
      source: "Microsoft News Center",
      sourceUrl: "https://news.microsoft.com/partnerships",
    },
    {
      type: "company",
      title: "Office Expansion in Seattle",
      description: "Opening new development center, hiring 200+ engineers",
      date: "2 weeks ago",
      impact: "neutral",
      source: "TechCorp Blog",
      sourceUrl: "https://blog.techcorp.com/expansion",
    },
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "positive":
        return "text-green-600 bg-green-50";
      case "negative":
        return "text-red-600 bg-red-50";
      default:
        return "text-blue-600 bg-blue-50";
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
          <Button variant="default" className="justify-start">
            Company View
          </Button>
          <Button variant="ghost" className="justify-start">
            Settings
          </Button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {/* Company Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Building2 className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{company.name}</h1>
              <p className="text-gray-600">
                {company.industry} • {company.employees} employees •{" "}
                {company.revenue} revenue
              </p>
            </div>
          </div>

          <Link href="/company/meeting">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center gap-3 hover:bg-blue-100 transition-colors cursor-pointer">
              <Calendar className="w-5 h-5 text-blue-600" />
              <div>
                <div className="font-semibold text-blue-900">
                  Upcoming Meeting
                </div>
                <div className="text-blue-700">
                  {company.meetingDate} at {company.meetingTime}
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="max-w-4xl">
          {/* Company Events & News */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Recent Company Events
            </h2>

            <div className="space-y-4">
              {companyEvents.map((event, i) => (
                <Card key={i} className="shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div
                        className={`px-2 py-1 text-xs rounded-full ${getImpactColor(event.impact)}`}
                      >
                        {event.impact}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{event.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {event.description}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-gray-400 text-xs">{event.date}</p>
                          <a
                            href={event.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-xs underline"
                          >
                            Source: {event.source}
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
