export default function StatsCard({ title, value, icon, colorVariant = "default", subtitle }) {
  // TODO: Build your StatsCard component here
  return (
    <div className={`stats-card variant-${colorVariant}`}>
      {/* TODO: Display icon, title, value, and subtitle */}
      <div className="stats-card-header">
        <span className="stats-title">{title}</span>
        {icon && <span className="stats-icon">{icon}</span>}
      </div>
      <div className="stats-value">{value}</div>
      {subtitle && <p className="stats-subtitle">{subtitle}</p>}
    </div>
  );
}
