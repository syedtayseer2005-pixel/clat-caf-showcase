export type Review = {
  author: string;
  meta?: string;
  when: string;
  quote: string;
  ownerReply?: string;
};

export const reviews: Review[] = [
  {
    author: "Kavish Kumar",
    meta: "Local Guide · 41 reviews",
    when: "2 months ago",
    quote:
      "Lovely place with very nice staff. Food was very tasty. We had the fish burger and chicken taco bowl. The chef went above and beyond and provided our baby with fresh fruits without us asking.",
    ownerReply:
      "Thank you so much for your lovely review! It makes us very happy to know that our team made you feel welcome. We truly appreciate your kind words and look forward to welcoming you and your family again soon!",
  },
  {
    author: "deviewssuna",
    meta: "3 reviews · 8 photos · translated by Google",
    when: "a year ago",
    quote:
      "I had an iced latte and a mango cheesecake, and they were really delicious! The prices are affordable, and the taste is excellent, so I love it!",
  },
  {
    author: "유니",
    meta: "4 reviews · 6 photos · translated by Google",
    when: "a year ago",
    quote:
      "The interior was pretty, and the Shakshuka was delicious. The lady working there was really kind.",
  },
];

export const ratingSummary = {
  score: "4.7",
  count: 73,
  breakdown: [
    { label: "Food", value: "5.0" },
    { label: "Service", value: "5.0" },
    { label: "Dine in", value: "Most guests" },
  ],
};
