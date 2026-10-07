/**
 * 3D visualisation slots.
 *
 * To swap in a real render: drop the file in /public/renders, change `src`,
 * write a real `alt`, and set `placeholder: false`. Keep roughly the same
 * aspect ratio so the layout does not shift.
 */
export interface RenderSlot {
  id: string;
  src: string;
  alt: string;
  /** Short caption shown under gallery tiles. */
  caption: string;
  width: number;
  height: number;
  placeholder: boolean;
}

export const renders = {
  hero: {
    id: "01",
    src: "/renders/hero-longship.svg",
    alt: "Placeholder for a 3D render of the Warriors flagship under sail at dawn",
    caption: "The flagship Ormr leaving the Schlei fjord",
    width: 1920,
    height: 1200,
    placeholder: true,
  },
  shieldWall: {
    id: "02",
    src: "/renders/shield-wall.svg",
    alt: "Placeholder for a 3D render of the crew locked in a shield wall",
    caption: "Skjaldborg drill on the strand",
    width: 1600,
    height: 1200,
    placeholder: true,
  },
  camp: {
    id: "03",
    src: "/renders/hedeby-camp.svg",
    alt: "Placeholder for a 3D render of the winter camp at Hedeby",
    caption: "Winter quarters at Hedeby",
    width: 1200,
    height: 1500,
    placeholder: true,
  },
  forge: {
    id: "04",
    src: "/renders/forge.svg",
    alt: "Placeholder for a 3D render of the clan forge",
    caption: "The forge, where the market is made",
    width: 1200,
    height: 1500,
    placeholder: true,
  },
} satisfies Record<string, RenderSlot>;
