export const clan = {
  name: "Warriors",
  homePort: "Hedeby",
  motto: "Cattle die. Kinsmen die. The name does not.",
  hero: {
    eyebrow: "A sworn fellowship out of Hedeby",
    headline: "Warriors",
    subline: "Seven ships, one oath. We row, we trade, we come home with silver.",
    primaryCta: { label: "Join the crew", href: "#oath" },
    secondaryCta: { label: "See the market", href: "#market" },
  },
  intro: {
    title: "A clan is a promise kept, every winter",
    body: [
      "Warriors is a lid, a war band held together by a chieftain's word and his open hand. Nobody is conscripted. Each rower swore on the ring, each took an arm-ring in return, and each gets a share of what the summer brings in.",
      "We sail from Hedeby, the biggest market town in the North, where Frankish wine, Arab silver and Baltic amber change hands by weight. In summer we go a-viking. In winter we trade, mend ships, and teach the young to hold a shield wall.",
    ],
  },
  stats: [
    { value: 7, label: "Ships in the fleet", suffix: "" },
    { value: 212, label: "Sworn crew", suffix: "" },
    { value: 38, label: "Summer voyages", suffix: "" },
    { value: 1340, label: "Marks of silver weighed", suffix: "" },
  ],
} as const;

export const navLinks = [
  { label: "Saga", href: "#saga" },
  { label: "Next raid", href: "#raid" },
  { label: "The oath", href: "#oath" },
  { label: "Market", href: "#market" },
] as const;
