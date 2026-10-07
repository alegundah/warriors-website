export const nextRaid = {
  eyebrow: "Next great voyage",
  name: "The Frisian Run",
  /** ISO date. The countdown in the UI counts whole days to this date. */
  departure: "2027-05-14",
  departureLabel: "14 May 2027",
  from: "Hedeby, the Schlei fjord",
  to: "Dorestad and the Frisian coast, then the Seine",
  duration: "One summer, home by the autumn thing",
  ships: 5,
  oarsOpen: 46,
  summary:
    "Five ships leave Hedeby when the ice is off the Schlei. First to Dorestad to sell amber, furs and whetstones for Frankish silver and wine. Then south along the coast, where the fleet decides, at the oar, whether the summer is for trade or for the sword.",
  needs: [
    { role: "Rowers", count: 30, note: "Strong back, a shield of your own" },
    { role: "Shieldmen", count: 10, note: "Front rank, proven in the skjaldborg" },
    { role: "Navigators", count: 3, note: "Know the Frisian sandbanks by heart" },
    { role: "Smiths and traders", count: 3, note: "Scales, weights and a quick tongue" },
  ],
  share:
    "Every sworn oar takes one share of the summer's silver. Helmsmen take two. The chieftain takes four and feeds the hall all winter.",
  cta: { label: "Reserve your oar", href: "#oath" },
} as const;
