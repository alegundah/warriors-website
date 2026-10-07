export interface Good {
  id: string;
  name: string;
  norse?: string;
  description: string;
  /** Price in grams of hacksilver, weighed on the scales. */
  silverGrams: number;
  /** Something a farmer could bring instead of silver. */
  barter: string;
  origin: "Made in our forge" | "Taken on the Seine" | "Traded at Hedeby" | "Made in the hall";
}

export const goods: Good[] = [
  {
    id: "shield",
    name: "Round shield",
    norse: "skjoldr",
    description: "Lime planks, about 85 cm across, iron boss, rawhide rim. Painted red and white in the clan pattern.",
    silverGrams: 35,
    barter: "or two sheep",
    origin: "Made in our forge",
  },
  {
    id: "axe",
    name: "Bearded axe",
    norse: "skeggox",
    description: "Long lower blade for hooking a shield rim. Ash haft. Tool on the farm, weapon on the strand.",
    silverGrams: 22,
    barter: "or one otter skin and a sack of grain",
    origin: "Made in our forge",
  },
  {
    id: "sword",
    name: "Pattern-welded sword",
    norse: "sverd",
    description: "Twisted iron and steel core, fuller, lobed pommel. Frankish steel reworked at Hedeby. A status piece.",
    silverGrams: 125,
    barter: "or a good horse and a cow",
    origin: "Taken on the Seine",
  },
  {
    id: "spear",
    name: "Winged spear",
    norse: "spjot",
    description: "The commonest weapon in the North. Leaf head with wings to stop it going too deep. Two metre ash shaft.",
    silverGrams: 12,
    barter: "or a wool cloak",
    origin: "Made in our forge",
  },
  {
    id: "seax",
    name: "Seax",
    norse: "sax",
    description: "Single-edged belt knife worn flat at the hip. Eats, carves, fights. Horn grip.",
    silverGrams: 9,
    barter: "or a basket of eggs each week till Yule",
    origin: "Made in our forge",
  },
  {
    id: "hammer",
    name: "Thor's hammer pendant",
    norse: "Mjollnir",
    description: "Cast silver on a leather cord. The old sign, worn beside the new cross by traders who hedge.",
    silverGrams: 6,
    barter: "or a jar of honey",
    origin: "Made in the hall",
  },
  {
    id: "armring",
    name: "Twisted arm-ring",
    norse: "baugr",
    description: "Four strands of silver twisted and hammered. Jewellery and currency in one. Cut a piece when you need to pay.",
    silverGrams: 48,
    barter: "silver only, this one is money",
    origin: "Made in the hall",
  },
  {
    id: "amber",
    name: "Amber bead string",
    norse: "raf",
    description: "Baltic amber, the gold of the North, drilled and strung. Sells in Dorestad for three times the Hedeby price.",
    silverGrams: 15,
    barter: "or a pair of good hens",
    origin: "Traded at Hedeby",
  },
];

export const marketIntro = {
  eyebrow: "The market",
  title: "Weighed, not counted",
  body: "Viking traders did not trust a coin for its king's face. Silver was cut, weighed on folding scales and tested with a knife. Every price below is in grams of hacksilver. Bring silver, or bring something we can eat, wear or sell on.",
  note: "Prices follow the Hedeby weight of about 24 grams to an ore and 8 ore to a mark.",
};
