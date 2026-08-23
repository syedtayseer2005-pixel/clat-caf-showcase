export type MenuItem = {
  name: string;
  description?: string;
  price: string;
};

export type MenuSection = {
  id: string;
  title: string;
  kicker?: string;
  layout: "detailed" | "compact";
  note?: string;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    id: "all-day",
    title: "All Day Menu",
    kicker: "Kitchen",
    layout: "detailed",
    items: [
      {
        name: "Toast",
        description: "Sourdough / multigrain served with butter & spreads",
        price: "8.00",
      },
      {
        name: "Cheesy Garlic Bread",
        description:
          "Turkish roll, garlic butter spread, mozzarella, parmesan served with basil pesto",
        price: "13.50",
      },
      {
        name: "Eggs on Toast",
        description: "Free range eggs, poached, scrambled or fried on choice of toast",
        price: "11.50",
      },
      {
        name: "Quinoa Crusted Arancini",
        description:
          "Arborio rice infused with tomato confit, fresh herbs, crispy fried, served with fiery pomodoro sauce",
        price: "16.50",
      },
      {
        name: "Quinoa and Oats Porridge",
        description: "Caramelized banana and fresh berries drizzled with maple syrup",
        price: "16.00",
      },
      {
        name: "Cornflake Chicken Strips",
        description: "Crumb fried marinated chicken served with red cabbage slaw, garlic dip",
        price: "17.00",
      },
      {
        name: "Breakfast Burger",
        description:
          "Toasted brioche, beef rashers, fried egg, aioli, smash avocado and melted cheeses",
        price: "17.00",
      },
      {
        name: "Éclat Benedict",
        description:
          "Choice of wilted spinach / smoked turkey / smoked salmon, poached eggs, apple cider hollandaise, toasted sourdough or multigrain",
        price: "21.00",
      },
      {
        name: "Chilli Scrambled",
        description:
          "Toasted sourdough, scrambled egg, tarragon confit chilli, crispy kale, micro herbs",
        price: "19.50",
      },
      {
        name: "Fish and Chips",
        description: "Battered crispy fried fish served with tartare sauce, shoestrings",
        price: "20.00",
      },
      {
        name: "Curry Wrap",
        description:
          "Tortilla wrap stuffed with garlic spiced curry sauce, lettuce, tomatoes & cheese with crispy kale",
        price: "20.00",
      },
      {
        name: "Splash Avo",
        description:
          "Toasted multigrain, smashed avocado, lemon ricotta spread, heirloom tomatoes",
        price: "20.00",
      },
      {
        name: "Bowl of Chips",
        description: "Skinny fries served with ranch & house special dip",
        price: "9.50",
      },
      {
        name: "Waffles Stack",
        description:
          "Seasonal fruit, fresh compote, maple syrup with crushed granola and cream chantilly",
        price: "15.50",
      },
      {
        name: "Pancakes",
        description: "Maple syrup, vanilla cream custard, icing",
        price: "18.00",
      },
      {
        name: "Shakshuka",
        description:
          "Tomatoes cooked in Middle Eastern spices with braised eggs and crumbled feta served with sourdough",
        price: "21.00",
      },
      {
        name: "Big Brekie",
        description:
          "Eggs your way, spinach, mushrooms, hash brown, beef sausage, beef rashers, baked beans, sourdough or multigrain toast",
        price: "20.00",
      },
    ],
  },
  {
    id: "little-extras",
    title: "Little Extras",
    kicker: "Add-ons",
    layout: "compact",
    items: [
      { name: "Beef Rasher / Sausage", price: "6.00" },
      { name: "Smoked Salmon", price: "6.00" },
      { name: "Mushroom", price: "4.00" },
      { name: "Hash Brown", price: "4.00" },
      { name: "Avocado (Smashed)", price: "4.00" },
      { name: "Extra Bread", price: "3.50" },
      { name: "Extra Egg", price: "4.00" },
      { name: "Homemade Hollandaise", price: "2.00" },
    ],
  },
  {
    id: "melting-buns",
    title: "Melting Buns",
    kicker: "Burgers",
    layout: "detailed",
    items: [
      {
        name: "Chipotle Chicken Schnitzel",
        description: "Brioche bun, crunchy chicken schnitzel, chipotle mayo, slaw & cheese",
        price: "20.00",
      },
      {
        name: "Epic Endeavour",
        description:
          "Brioche bun, grilled beef patty, lemon mustard mayo, cranberry tomato relish, matured cheese",
        price: "21.50",
      },
      {
        name: "Quinoa Beet Vegan",
        description: "Brioche bun, beetroot patty, hummus sauce, vegan cheese, avocado",
        price: "20.00",
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    kicker: "Fresh",
    layout: "detailed",
    items: [
      {
        name: "Nurturing Quinoa Bowl",
        description:
          "Triple quinoa, avocado, asparagus, chickpeas, toasted almonds, pumpkin seeds, green apple & berry vinaigrette",
        price: "15.50",
      },
      {
        name: "Tropical Twists",
        description:
          "Fresh orange segments, mixed leaves, candied walnuts, feta, heirloom tomatoes, baked tortilla, mustard vinaigrette",
        price: "15.50",
      },
    ],
  },
  {
    id: "pastas",
    title: "Pastas",
    kicker: "House made",
    layout: "detailed",
    items: [
      {
        name: "Creamy Sunburst",
        description:
          "House made sun dried tomato pesto, baby spinach, roasted garlic and extra virgin olive oil with aged parmesan cheese",
        price: "16.00",
      },
      {
        name: "Basilica Brilliance",
        description:
          "House made basil pesto, cream, cherry tomatoes, parmesan cheese and broccolini",
        price: "16.00",
      },
      {
        name: "Braised Beef Bolognese",
        description:
          "Braised beef mince with confit garlic and herby tomato passata finished with parmesan pangritata",
        price: "22.00",
      },
    ],
  },
  {
    id: "smoothies",
    title: "Smoothies",
    kicker: "Blended",
    layout: "detailed",
    items: [
      {
        name: "Berry Blast",
        description: "Blueberry, raspberry, strawberry, almond milk, yoghurt",
        price: "12.00",
      },
      {
        name: "Mango Madness",
        description: "Mango, banana, Greek yogurt, orange juice",
        price: "12.00",
      },
      {
        name: "Coco-Nana",
        description: "Coconut milk, banana, yoghurt, honey, vanilla",
        price: "12.00",
      },
      {
        name: "Breakfast Smoothie",
        description: "Banana, oats, peanut butter, maple syrup, cinnamon, almond milk",
        price: "14.00",
      },
    ],
  },
  {
    id: "coffee",
    title: "Coffee",
    kicker: "Espresso bar",
    layout: "compact",
    items: [
      { name: "White / Black — Regular", price: "4.50" },
      { name: "White / Black — Large", price: "5.00" },
    ],
  },
  {
    id: "specialty-lattes",
    title: "Specialty Lattes",
    kicker: "Espresso bar",
    layout: "compact",
    items: [
      { name: "Matcha Latte", price: "6.00" },
      { name: "Turmeric Latte", price: "6.00" },
      { name: "Sticky Chai Latte", price: "6.00" },
    ],
  },
  {
    id: "hot-chocolate",
    title: "Hot Chocolate",
    kicker: "Espresso bar",
    layout: "compact",
    items: [
      { name: "Hot Chocolate", price: "4.50" },
      { name: "Kids Hot Chocolate", price: "4.00" },
    ],
  },
  {
    id: "iced-drinks",
    title: "Iced Drinks",
    kicker: "Cold",
    layout: "compact",
    items: [
      { name: "Iced Latte", price: "5.00" },
      { name: "Iced Mocha", price: "5.00" },
      { name: "Americano", price: "5.00" },
      { name: "Biscoff Iceberg", price: "5.50" },
      { name: "Affogato", price: "6.00" },
    ],
  },
  {
    id: "milk-extras",
    title: "Milk & Coffee Extras",
    kicker: "Alternatives",
    layout: "compact",
    items: [
      { name: "Extra Shot", price: "0.50" },
      { name: "Soy Milk", price: "0.50" },
      { name: "Almond Milk", price: "0.50" },
      { name: "Lactose Free Milk", price: "0.50" },
      { name: "Oat Milk", price: "0.50" },
      { name: "Lite Milk", price: "0.50" },
    ],
  },
  {
    id: "tea",
    title: "Loose Leaf Teas",
    kicker: "Brewed",
    layout: "compact",
    note: "English Breakfast · Supreme Earl Grey · Malabar Chai · Honeydew Green · Peppermint · Chamomile Blossoms · Lemongrass & Ginger",
    items: [{ name: "Any loose leaf tea", price: "6.00" }],
  },
  {
    id: "bubble-tea",
    title: "Bubble Tea",
    kicker: "Brewed",
    layout: "compact",
    items: [
      { name: "Milk Tea", price: "8.00" },
      { name: "Matcha Milk Tea", price: "8.00" },
    ],
  },
  {
    id: "juices",
    title: "Juices",
    kicker: "Cold pressed",
    layout: "detailed",
    items: [
      { name: "Orange Juice", price: "8.00" },
      { name: "Watermelon", price: "8.00" },
      { name: "ABC", description: "Apple, beetroot, carrot", price: "10.00" },
      { name: "MCG", description: "Mint, cucumber, green apple", price: "10.00" },
      {
        name: "Green Juice",
        description: "Apple, cucumber, ginger, celery & lemon",
        price: "10.00",
      },
    ],
  },
];
