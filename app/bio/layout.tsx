import { BioNav } from "@/components/bio/BioNav";

export default function BioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BioNav />
      {children}
    </>
  );
}
