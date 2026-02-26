import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface TeamMember {
  name: string;
  title: string;
  imageUrl?: string;
  bio?: string;
}

interface TeamGridProps {
  headline: string;
  subheadline?: string;
  members: TeamMember[];
}

export default function TeamGrid({
  headline = "Meet the team behind NovaMart",
  subheadline = "A passionate crew focused on quality, speed, and customer care.",
  members = [],
}: Partial<TeamGridProps>) {
  const membersToRender = members.length
    ? members
    : [
        {
          name: "Ava Patel",
          title: "Head of Merchandising",
          imageUrl: "/images/team.jpg",
          bio: "Curates the best-in-class brands and seasonal collections.",
        },
        {
          name: "Jordan Lee",
          title: "Customer Experience Lead",
          imageUrl: "/images/team.jpg",
          bio: "Ensures every order arrives with care and precision.",
        },
        {
          name: "Riley Chen",
          title: "Operations Manager",
          imageUrl: "/images/team.jpg",
          bio: "Keeps shipping, logistics, and fulfillment running smoothly.",
        },
        {
          name: "Sam Rivera",
          title: "Product Quality Specialist",
          imageUrl: "/images/team.jpg",
          bio: "Tests every item before it reaches your doorstep.",
        },
      ];

  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {membersToRender.map(function (member, i) {
            return (
              <Card key={i} className="overflow-hidden border-0 bg-background shadow-md text-center">
                {member.imageUrl && (
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={600}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary">{member.title}</p>
                  {member.bio && <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
