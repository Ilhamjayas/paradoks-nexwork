import { DashboardShell } from "@/src/components/dashboard/shell-v2";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardShell>{children}</DashboardShell>;
}
