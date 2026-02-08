import type { Metadata } from "next";
import OperatingSystem from "@/components/operating-system/OperatingSystem";

export const metadata: Metadata = {
  title: "The AI Search Operating System | Semrush",
  description:
    "The complete playbook for winning visibility in AI search — built with insights from leading search practitioners and the teams behind Semrush.",
};

export default function OperatingSystemPage() {
  return <OperatingSystem />;
}
