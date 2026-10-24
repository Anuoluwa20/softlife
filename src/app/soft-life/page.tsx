import { Metadata } from "next";
import { SoftLifeSimulator } from "@/components/soft-life/SoftLifeSimulator";

export const metadata: Metadata = {
  title: "Soft Life Simulator — Enjoy your life. Just don't finish your money.",
  description: "An interactive, scenario-based money simulation helping young Nigerians master everyday financial trade-offs in a risk-free fictional environment.",
};

export default function SoftLifePage() {
  return <SoftLifeSimulator />;
}
