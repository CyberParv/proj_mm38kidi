interface Stat {
  value: string;
  label: string;
}

interface StatsCounterProps {
  stats: Stat[];
  bgColor?: string;
}

export default function StatsCounter({
  stats = [],
  bgColor,
}: Partial<StatsCounterProps>) {
  const statsToRender = stats.length
    ? stats
    : [
        { value: "250k+", label: "Happy Customers" },
        { value: "4.9/5", label: "Average Rating" },
        { value: "2M+", label: "Orders Shipped" },
        { value: "30 Days", label: "Free Returns" },
      ];

  const columns = Math.min(statsToRender.length, 4);

  return (
    <section className={"py-16 " + (bgColor || "bg-primary text-primary-foreground")}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className={"grid gap-8 text-center grid-cols-2 md:grid-cols-" + columns}>
          {statsToRender.map(function (stat, i) {
            return (
              <div key={i}>
                <p className="text-4xl font-bold md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-wider opacity-80">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
