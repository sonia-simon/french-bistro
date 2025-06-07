import React from "react";
import "./menu.css"; 
import { motion } from "framer-motion";

const dishesData = [
  {
    section: "Aperitifs",
    categories: [
      {
        title: "Alcoholic",
        dishes: [
          {
            id: 13,
            name: "French Red Wine",
            price: "$8/glass",
            description: "A classic French red wine with notes of dark berries, oak, and spice. Perfect to open the palate.",
            img: "wine.jpeg",
            alt: "French Red Wine",
          },
          {
            id: 14,
            name: "Kir Royale",
            price: "$10",
            description: "A festive aperitif made with sparkling champagne and crème de cassis, offering a sweet and elegant start.",
            img: "kir-royale.jpg",
            alt: "Kir Royale",
          },
          {
            id: 15,
            name: "Pastis",
            price: "$7",
            description: "A traditional anise-flavored spirit from southern France, usually served diluted with water.",
            img: "pastis.jpg",
            alt: "Pastis",
          },
          {
            id: 16,
            name: "Champagne",
            price: "$12",
            description: "A glass of premium French sparkling wine with fine bubbles and a crisp, dry finish.",
            img: "champagne.png",
            alt: "Champagne",
          },
          {
            id: 17,
            name: "Calvados",
            price: "$9",
            description: "A rich apple brandy from Normandy, aged in oak barrels for a deep, complex flavor.",
            img: "calvados.webp",
            alt: "Calvados",
          },
        ],
      },
      {
        title: "Non-Alcoholic",
        dishes: [
          {
            id: 18,
            name: "Virgin Mojito",
            price: "$7",
            description: "A refreshing alcohol-free cocktail with fresh mint leaves, lime juice, and sparkling water.",
            img: "virgin-mojito.jpg",
            alt: "Virgin Mojito",
          },
          {
            id: 19,
            name: "Lemonade",
            price: "$4",
            description: "Homemade lemonade made with freshly squeezed lemons and a touch of sugar.",
            img: "lemonade.jpg",
            alt: "Lemonade",
          },
          {
            id: 20,
            name: "Ginger Beer",
            price: "$5",
            description: "A zesty and slightly spicy non-alcoholic beverage with a robust ginger flavor.",
            img: "ginger-beer.jpg",
            alt: "Ginger Beer",
          },
          {
            id: 21,
            name: "Apple Juice",
            price: "$4",
            description: "Pure, freshly pressed apple juice with a naturally sweet and crisp taste.",
            img: "apple-juice.avif",
            alt: "Apple Juice",
          },
          {
            id: 22,
            name: "Iced Tea",
            price: "$4",
            description: "Chilled black tea infused with lemon slices for a tangy and refreshing drink.",
            img: "ice-tea.webp",
            alt: "Iced Tea",
          },
        ],
      },
    ],
  },
  {
    section: "Starters",
    dishes: [
      {
        id: 1,
        name: "French Onion Soup",
        price: "$9",
        description: "A rich broth of caramelized onions topped with melted cheese over toasted bread. Vegetarian-friendly.",
        img: "onion-soup.jpg",
        alt: "French Onion Soup",
      },
      {
        id: 2,
        name: "Salade Niçoise",
        price: "$11",
        description: "A hearty salad with tuna, olives, green beans, potatoes, and hard-boiled eggs. Gluten-free.",
        img: "salade-nicoise.webp",
        alt: "Salade Niçoise",
      },
      {
        id: 3,
        name: "Escargot de Bourgogne",
        price: "$14",
        description: "Tender snails baked in garlic and parsley butter, served in their shells. A French delicacy.",
        img: "escargots.jpg",
        alt: "Escargot de Bourgogne",
      },
      {
        id: 4,
        name: "Foie Gras",
        price: "$18",
        description: "Silky duck liver pâté, served with toasted brioche and a fig or onion chutney.",
        img: "foie-gras.webp",
        alt: "Foie Gras",
      },
    ],
  },
  {
    section: "Main Courses",
    dishes: [
      {
        id: 5,
        name: "Boeuf Bourguignon",
        price: "$20",
        description: "A traditional beef stew slow-cooked in red wine with carrots, onions, and mushrooms.",
        img: "bourguignon.jpg",
        alt: "Boeuf Bourguignon",
      },
      {
        id: 6,
        name: "Duck Confit",
        price: "$22",
        description: "Duck leg slowly cooked in its own fat until tender, then crisped to perfection.",
        img: "canard-confit.jpg",
        alt: "Duck Confit",
      },
      {
        id: 7,
        name: "Bouillabaisse",
        price: "$25",
        description: "A Provencal seafood stew with various fish, shellfish, saffron, and aromatic herbs.",
        img: "bouillabaisse.jpg",
        alt: "Bouillabaisse",
      },
      {
        id: 8,
        name: "Ratatouille",
        price: "$18",
        description: "A colorful vegetable medley of eggplant, zucchini, peppers, and tomatoes in olive oil. Vegan & gluten-free.",
        img: "ratatouille.jpg",
        alt: "Ratatouille",
      },
    ],
  },
  {
    section: "Fromages",
    dishes: [
      {
        id: 101,
        name: "Camembert",
        price: "$12",
        description: "A soft, bloomy-rind cheese from Normandy with a creamy interior and earthy aroma.",
        img: "camembert.jpg",
        alt: "Camembert",
      },
      {
        id: 102,
        name: "Roquefort",
        price: "$15",
        description: "A tangy blue cheese made from sheep’s milk, aged in limestone caves in southern France.",
        img: "roquefort.jpg",
        alt: "Roquefort",
      },
      {
        id: 103,
        name: "Comté",
        price: "$14",
        description: "A firm cheese from the Jura region with a nutty, slightly sweet flavor and a golden rind.",
        img: "comté.webp",
        alt: "Comté",
      },
      {
        id: 104,
        name: "Brie de Meaux",
        price: "$13",
        description: "A soft cow’s milk cheese with a velvety rind and a rich, buttery taste.",
        img: "brie.avif",
        alt: "Brie de Meaux",
      },
      {
        id: 105,
        name: "Reblochon",
        price: "$16",
        description: "A creamy and aromatic cheese from the Alps, traditionally used in Tartiflette.",
        img: "reblochon.jpg",
        alt: "Reblochon",
      },
    ],
  },
  {
    section: "Desserts",
    dishes: [
      {
        id: 9,
        name: "Tarte Tatin",
        price: "$8",
        description: "A caramelized upside-down tart made with tender apples and buttery pastry.",
        img: "tatin.jpg",
        alt: "Tarte Tatin",
      },
      {
        id: 10,
        name: "Madeleines",
        price: "$7",
        description: "Light and buttery shell-shaped sponge cakes with a hint of lemon zest.",
        img: "madeleines.jpg",
        alt: "Madeleines",
      },
      {
        id: 11,
        name: "Crème Brûlée",
        price: "$9",
        description: "Rich vanilla custard topped with a crisp, caramelized sugar crust.",
        img: "creme-brulee.jpeg",
        alt: "Crème Brûlée",
      },
      {
        id: 12,
        name: "Profiteroles",
        price: "$10",
        description: "Cream-filled choux pastry puffs topped with warm chocolate sauce.",
        img: "profiteroles.jpg",
        alt: "Profiteroles",
      },
    ],
  },
  {
    section: "Hot Drinks",
    dishes: [
      {
        id: 23,
        name: "Café au Lait",
        price: "$4",
        description: "A French-style coffee with hot milk, smooth and comforting.",
        img: "cafe-lait.jpg",
        alt: "Café au Lait",
      },
      {
        id: 24,
        name: "Thé à la Menthe",
        price: "$5",
        description: "A traditional Moroccan green tea infused with fresh mint leaves.",
        img: "the-menthe.jpeg",
        alt: "Thé à la Menthe",
      },
      {
        id: 25,
        name: "Chocolat Chaud",
        price: "$5",
        description: "Thick and rich French hot chocolate made with real dark chocolate.",
        img: "chocolat-chaud.webp",
        alt: "Chocolat Chaud",
      },
    ],
  },
];


function DishCard({ dish }) {
  return (
    <motion.div
      className="dish-card"
      data-id={dish.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={dish.img} alt={dish.alt} />
      <div className="dish-info">
        <h3>{dish.name}</h3>
        <p className="price">{dish.price}</p>
        <div className="description-hover">{dish.description}</div>
      </div>
    </motion.div>
  );
}


function MenuSection({ section }) {
  // On détecte si la section a des sous-catégories (comme Aperitifs)
  if (section.categories) {
    return (
      <section>
        <h2>{section.section}</h2>
        {section.categories.map((cat) => (
          <div key={cat.title}>
            <h3>{cat.title}</h3>
            {cat.dishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        ))}
      </section>
    );
  }

  // Sinon on affiche juste la section avec ses plats
  return (
    <section>
      <h2>{section.section}</h2>
      {section.dishes.map((dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </section>
  );
}

export default function Menu() {
  return (
    <div className="menu-wrapper">
      {dishesData.map((section) => (
        <MenuSection key={section.section} section={section} />
      ))}
    </div>
  );
}
