import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Search, Filter } from "lucide-react";
import Link from "next/link";

export default function CompanyList() {
  // Mock companies data
  const companies = [
    {
      id: "techcorp-solutions",
      name: "TechCorp Solutions",
      industry: "Software Technology",
      employees: "2,500+",
      revenue: "$750M",
      status: "Active",
      lastInteraction: "2 weeks ago",
      upcomingMeeting: "Next Tuesday, Jan 28",
    },
    {
      id: "innovate-labs",
      name: "Innovate Labs",
      industry: "AI & Machine Learning",
      employees: "450+",
      revenue: "$120M",
      status: "Prospect",
      lastInteraction: "1 month ago",
      upcomingMeeting: null,
    },
    {
      id: "global-finance",
      name: "Global Finance Corp",
      industry: "Financial Services",
      employees: "8,000+",
      revenue: "$2.1B",
      status: "Active",
      lastInteraction: "3 days ago",
      upcomingMeeting: "Friday, Feb 2",
    },
    {
      id: "startup-dynamics",
      name: "Startup Dynamics",
      industry: "SaaS Platform",
      employees: "80+",
      revenue: "$8M",
      status: "Prospect",
      lastInteraction: "2 months ago",
      upcomingMeeting: null,
    },
    {
      id: "enterprise-solutions",
      name: "Enterprise Solutions Inc",
      industry: "Enterprise Software",
      employees: "1,200+",
      revenue: "$300M",
      status: "Active",
      lastInteraction: "1 week ago",
      upcomingMeeting: "Monday, Jan 29",
    },
    {
      id: "cloud-ventures",
      name: "Cloud Ventures",
      industry: "Cloud Infrastructure",
      employees: "600+",
      revenue: "$180M",
      status: "Lead",
      lastInteraction: "5 days ago",
      upcomingMeeting: null,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "text-green-700 bg-green-100";
      case "Prospect":
        return "text-blue-700 bg-blue-100";
      case "Lead":
        return "text-yellow-700 bg-yellow-100";
      default:
        return "text-gray-700 bg-gray-100";
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r p-6 flex flex-col gap-6">
        <div className="text-2xl font-bold">BS</div>
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
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Companies</h1>
          <p className="text-gray-600 mb-6">
            Manage and track your business relationships with partner companies
          </p>

          {/* Search and Filter Bar */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search companies..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {companies.map((company) => (
            <Link key={company.id} href={`/company/${company.id}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  {/* Company Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Building2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">
                        {company.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {company.industry}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${getStatusColor(company.status)}`}
                    >
                      {company.status}
                    </span>
                  </div>

                  {/* Company Stats */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Employees:</span>
                      <span className="font-medium">{company.employees}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Revenue:</span>
                      <span className="font-medium">{company.revenue}</span>
                    </div>
                  </div>

                  {/* Interaction Info */}
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Last contact:</span>
                      <span className="text-gray-900">
                        {company.lastInteraction}
                      </span>
                    </div>
                    {company.upcomingMeeting && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Next meeting:</span>
                        <span className="text-blue-600 font-medium">
                          {company.upcomingMeeting}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
