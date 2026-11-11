interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  lead?: string;
}

export function SectionHeader({ eyebrow, title, lead }: SectionHeaderProps) {
  return (
    <header className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </header>
  );
}

