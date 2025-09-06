import CompanyView from "@/components/company-view";

export default function CompanyDetailPage() {
  return <CompanyView />;
}

// This function generates the static params for the company IDs
export function generateStaticParams() {
  return [
    { id: 'techcorp-solutions' },
    { id: 'innovate-labs' },
    { id: 'global-finance' },
    { id: 'startup-dynamics' },
    { id: 'enterprise-solutions' },
    { id: 'cloud-ventures' },
  ];
}