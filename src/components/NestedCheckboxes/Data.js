export const checkboxData = [
  {
    id: 1,
    label: "Fruits",
    checked: false,
    children: [
      {
        id: 2,
        label: "Citrus",
        checked: false,
        children: [
          { id: 3, label: "Orange", checked: false },
          { id: 4, label: "Lemon", checked: false },
        ],
      },
      {
        id: 5,
        label: "Berries",
        checked: false,
        children: [
          { id: 6, label: "Strawberry", checked: false },
          { id: 7, label: "Blueberry", checked: false },
        ],
      },
    ],
  },
  {
    id: 8,
    label: "Vegetables",
    checked: false,
    children: [
      {
        id: 9,
        label: "Leafy Greens",
        checked: false,
        children: [
          { id: 10, label: "Spinach", checked: false },
          { id: 11, label: "Kale", checked: false },
        ],
      },
    ],
  },
];
