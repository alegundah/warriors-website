export const recruitment = {
  eyebrow: "Recruitment",
  title: "Swear on the ring",
  intro:
    "A Viking crew was never conscripted. A chieftain fed, armed and rewarded his men, and they gave him their loyalty back. Here is what Warriors gives, and what Warriors asks.",
  gives: {
    title: "What we give",
    items: [
      { title: "An arm-ring at the oath", body: "Twisted silver, yours to keep or to cut and spend. It is the first gift in a bond that runs both ways." },
      { title: "One full share of plunder and trade", body: "Silver is weighed on the strand and split in front of everyone. No man waits for his pay." },
      { title: "A seat in the hall all winter", body: "Food, fire, mead and a bench at Hedeby from the autumn thing to the spring launch." },
      { title: "A name that outlives you", body: "Our skalds sing the deeds of every voyage. Fall abroad and your kin raise a stone that names your ship and your felagi." },
    ],
  },
  asks: {
    title: "What we ask",
    items: [
      { title: "Be between eighteen and fifty winters", body: "Old enough to row a day, young enough to row the next." },
      { title: "Never flee from an equal foe", body: "Hold the line. Step back only when the helmsman calls it." },
      { title: "Avenge your felagi as a brother", body: "Kinship does not matter inside the crew. The oath does." },
      { title: "All plunder to the banner", body: "Everything taken is weighed together and shared together. Nothing hidden in a boot." },
      { title: "Keep the peace of the market", body: "Hedeby trades under the chieftain's peace. Break it and you are out of the lid." },
    ],
  },
  roles: ["Rower", "Shieldman", "Navigator", "Smith", "Trader", "Skald"] as const,
  form: {
    title: "Give your name to the helmsman",
    note: "Spring recruitment opens at the thing. We answer every name before the ice is off the Schlei.",
    submit: "Swear the oath",
    success: "Your name is on the roll. The helmsman will send for you before the spring thing.",
  },
} as const;

export type RecruitRole = (typeof recruitment.roles)[number];
