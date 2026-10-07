export interface SagaEntry {
  year: string;
  label: string;
  heading: string;
  body: string;
  /** Historical anchor shown as a small footnote under the entry. */
  anchor: string;
}

export const saga: SagaEntry[] = [
  {
    year: "793",
    label: "The first summer",
    heading: "Three ships and a borrowed name",
    body: "Our founder Asgeir pooled his farm, his brother's boat and a neighbour's silver into one felag, a shared venture where every man owned a piece of the ship and a piece of the risk. The first crews were kin, foster brothers and men who had heard at the thing that Asgeir paid in rings, not promises.",
    anchor: "The same summer the monastery at Lindisfarne was raided, the event most histories use to open the Viking Age.",
  },
  {
    year: "845",
    label: "The Seine",
    heading: "Silver by weight, not by face",
    body: "Warriors rowed up the Seine in the great fleet. We came home with Frankish silver that we cut, weighed and shared on the strand with folding scales. From that year no man of ours trusted a coin for its stamp, only for its weight.",
    anchor: "Ragnar's fleet reached Paris in 845 and was paid 7,000 pounds of silver to leave.",
  },
  {
    year: "865",
    label: "Winter camp",
    heading: "We stopped going home",
    body: "Raiding changed when the fleets began to winter abroad. Warriors overwintered in East Anglia, built a hall, and learned that a crew that stays together through a winter fights as one in spring. The shield wall drill we still use dates from that camp.",
    anchor: "The Great Army landed in East Anglia in 865 and wintered there, shifting from raiding to conquest.",
  },
  {
    year: "911",
    label: "Land for peace",
    heading: "The chieftain who took a county",
    body: "Some of our oldest families settled when Rollo was given land at the mouth of the Seine in exchange for defending it. Warriors kept its ships, but learned a lesson in trade: a sworn peace can be worth more than a season of plunder.",
    anchor: "Treaty of Saint-Clair-sur-Epte, 911, the founding of Normandy.",
  },
  {
    year: "1016",
    label: "The king's lid",
    heading: "Paid crews, standing fleets",
    body: "When Cnut took England he paid off his fleet and kept forty ships as a standing troop. Two Warriors ships were among them. Our men came home with runestones' worth of fame and enough silver to buy the Hedeby forge we still work today.",
    anchor: "Cnut's thingalid, 1018. Runestone U 668 at Kalsta names a man who 'sat in the thingalid in the west'.",
  },
  {
    year: "Now",
    label: "Still sworn",
    heading: "Seven ships, one hall, one market",
    body: "Warriors today is seven ships, a hall at Hedeby, a forge, and a crew of 212 who have all sworn the same oath on the same ring. We recruit every spring. We trade every winter. The saga is not finished.",
    anchor: "You are reading the newest page of it.",
  },
];
