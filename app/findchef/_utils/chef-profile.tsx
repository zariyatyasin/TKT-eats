interface ChefProfileProps {
  chef: {
    profileImage: string;
    name: string;
    bio: string;
  };
}

export function ChefProfile({ chef }: ChefProfileProps) {
  if (!chef) return null;

  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <img
        src={chef.profileImage}
        alt={`Profile of ${chef.name}`}
        width={150}
        height={150}
        className="rounded-md"
        style={{ aspectRatio: "100/100", objectFit: "cover" }}
      />
      <div>
        <h1 className="text-2xl font-bold">{chef.name}</h1>
        <p className="text-muted-foreground  text-sm md:text-base">
          {chef.bio}
        </p>
      </div>
    </div>
  );
}
