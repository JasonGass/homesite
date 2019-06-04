export interface project {
  id: string;
  title: string;
  description: string;
  item: string;
  img: string;
}

export const projects: project[] = [
  {
    id: "stain-deck",
    title: "Stain Deck",
    description: "Stain Deck",
    item: "Landscaping",
    img: "/images/Deck.jpg"
  },
  {
    id: "change-oil",
    title: "Change oil",
    description: "Change oil",
    item: "Corolla",
    img: "/images/Corolla.jpg"
  },
  {
    id: "flush-drain",
    title: "Flush drain",
    description: "Flush drain",
    item: "Garage",
    img: "/images/GarageDrain.jpg"
  },
  {
    id: "trim-trees",
    title: "Trim trees",
    description: "Trim trees",
    item: "Landscaping",
    img: "/images/LilacTree.jpg"
  },
  {
    id: "clean-out-dryer-vent",
    title: "Clean out dryer vent",
    description: "Clean out dryer vent",
    item: "Home Exterior",
    img: "/images/DryerVent.jpg"
  },
  {
    id: "clean-gutters",
    title: "Clean gutters",
    description: "Clean gutters",
    item: "Home Exterior",
    img: "/images/Gutters.jpg"
  },
  {
    id: "paint-window-trim",
    title: "Paint window trim",
    description: "Paint window trim",
    item: "Home Interior",
    img: "/images/WindowTrim.jpg"
  },
  {
    id: "fix-bay-window-ledge",
    title: "Fix bay window ledge",
    description: "Fix bay window ledge",
    item: "Home Interior",
    img: "/images/BayWindowLedge.jpg"
  },
  {
    id: "wax",
    title: "Wax",
    description: "Wax",
    item: "Corolla",
    img: "/images/Corolla.jpg"
  }
];
