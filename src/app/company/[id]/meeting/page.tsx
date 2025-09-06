import MeetingDetailView from "@/components/meeting-detail-view";

export default function MeetingPage() {
  return <MeetingDetailView />;
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