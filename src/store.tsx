const items = [
  "Landscaping",
  "Corolla",
  "Home Exterior",
  "Home Interior",
  "Garage"
];
export interface project {
  id: string;
  title: string;
  item: string;
}

export const projects: project[] = [
  {
    id: "stain-deck",
    title: "Stain Deck",
    item: "Landscaping"
  },
  {
    id: "change-oil",
    title: "Change oil",
    item: "Corolla"
  },
  {
    id: "flush-drain",
    title: "Flush drain",
    item: "Garage"
  },
  {
    id: "trim-trees",
    title: "Trim trees",
    item: "Landscaping"
  },
  {
    id: "clean-out-dryer-vent",
    title: "Clean out dryer vent",
    item: "Home Exterior"
  },
  {
    id: "clean-gutters",
    title: "Clean gutters",
    item: "Home Exterior"
  },
  {
    id: "paint-window-trim",
    title: "Paint window trim",
    item: "Home Interior"
  },
  {
    id: "spray-foam-attic",
    title: "Spray Foam Attic",
    item: "Garage"
  },
  {
    id: "fix-bay-window-ledge",
    title: "Fix bay window ledge",
    item: "Home Interior"
  },
  {
    id: "wax",
    title: "Wax",
    item: "Corolla"
  }
];
