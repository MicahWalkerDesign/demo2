import type { Locale } from "./content";

type Localized = Record<Locale, string>;

const l = (ca: string, es: string, en: string, de: string, fr: string, ru: string): Localized =>
  ({ ca, es, en, de, fr, ru });

export const fullMenuUi = {
  eyebrow: l("La carta", "La carta", "The menu", "Die Speisekarte", "La carte", "Меню"),
  title: l("Cuina de casa, escrita sencera", "Cocina de casa, escrita al completo", "Our cooking, written out", "Unsere Küche auf einen Blick", "Toute notre cuisine", "Наша кухня"),
  intro: l(
    "Una selecció àmplia dels clàssics de Casa Alejandro i d’especialitats recents. La cuina segueix el mercat: la disponibilitat, els preus i el menú del dia poden canviar.",
    "Una selección amplia de los clásicos de Casa Alejandro y de especialidades recientes. La cocina sigue el mercado: la disponibilidad, los precios y el menú del día pueden cambiar.",
    "A broad selection of Casa Alejandro classics and recent specials. The kitchen follows the market, so availability, prices and the daily menu may change.",
    "Eine große Auswahl an Klassikern von Casa Alejandro und aktuellen Spezialitäten. Wir kochen nach Marktangebot; Verfügbarkeit, Preise und Tagesmenü können variieren.",
    "Un large choix de classiques de Casa Alejandro et de spécialités récentes. La cuisine suit le marché : disponibilités, prix et menu du jour peuvent varier.",
    "Большой выбор классических блюд Casa Alejandro и недавних специальных предложений. Мы готовим по сезону, поэтому наличие, цены и дневное меню могут меняться."
  ),
  note: l(
    "Pregunta’ns pels plats del dia, al·lèrgens i opcions per a infants.",
    "Pregúntanos por los platos del día, alérgenos y opciones para niños.",
    "Ask us about today’s dishes, allergens and children’s options.",
    "Fragen Sie uns nach Tagesgerichten, Allergenen und Gerichten für Kinder.",
    "Demandez-nous les plats du jour, les allergènes et les options pour enfants.",
    "Уточняйте блюда дня, аллергены и варианты для детей."
  ),
  call: l("Consultar disponibilitat", "Consultar disponibilidad", "Check availability", "Verfügbarkeit erfragen", "Vérifier les disponibilités", "Уточнить наличие"),
  photos: l("Plats recents de la casa", "Platos recientes de la casa", "Recent dishes from the kitchen", "Aktuelle Gerichte aus unserer Küche", "Plats récents de la maison", "Недавние блюда"),
  source: l("Foto: TapaReus · Instagram", "Foto: TapaReus · Instagram", "Photo: TapaReus · Instagram", "Foto: TapaReus · Instagram", "Photo : TapaReus · Instagram", "Фото: TapaReus · Instagram"),
};

export const menuCategories = [
  {
    title: l("Per començar i compartir", "Para empezar y compartir", "To start and share", "Zum Einstieg und Teilen", "À partager pour commencer", "Закуски на компанию"),
    dishes: [
      { name: l("Cargols a la llauna", "Caracoles a la llauna", "Catalan-style grilled snails", "Schnecken „a la llauna“", "Escargots à la catalane", "Улитки по-каталонски"), desc: l("Un clàssic català, torrat al forn i servit amb allioli.", "Un clásico catalán, tostado al horno y servido con alioli.", "A Catalan classic, oven-roasted and served with allioli.", "Ein katalanischer Klassiker, im Ofen geröstet und mit Allioli serviert.", "Un classique catalan rôti au four, servi avec aïoli.", "Каталонская классика: запечённые улитки с айоли.") },
      { name: l("Pop amb patata i pebre vermell", "Pulpo con patata y pimentón", "Octopus with potato and paprika", "Oktopus mit Kartoffel und Paprika", "Poulpe, pomme de terre et paprika", "Осьминог с картофелем и паприкой"), desc: l("Tendre, amb oli d’oliva i pebre vermell.", "Tierno, con aceite de oliva y pimentón.", "Tender octopus with olive oil and paprika.", "Zarter Oktopus mit Olivenöl und Paprika.", "Poulpe tendre, huile d’olive et paprika.", "Нежный осьминог с оливковым маслом и паприкой.") },
      { name: l("Fritura de mar", "Fritura de mar", "Mixed fried seafood", "Frittierte Meeresfrüchte", "Friture de la mer", "Жареные морепродукты"), desc: l("Llagostí, calamar, musclo tigre, gamba, bunyol de bacallà i xipirons.", "Langostino, calamar, mejillón tigre, gamba, buñuelo de bacalao y chipirones.", "Prawn, squid, stuffed mussel, cod fritter and baby squid.", "Garnele, Tintenfisch, gefüllte Muschel, Kabeljaukrapfen und Baby-Calamari.", "Gambas, calamars, moule farcie, beignet de morue et petits encornets.", "Креветки, кальмар, фаршированные мидии, пончики из трески и мини-кальмары.") },
      { name: l("Ou trencat amb xipirons", "Huevo roto con chipirones", "Broken egg with baby squid", "Spiegelei mit Baby-Calamari", "Œuf au plat et petits encornets", "Яичница с мини-кальмарами"), desc: l("Amb patates palla, acabat al moment.", "Con patatas paja, terminado al momento.", "With straw potatoes, finished to order.", "Mit Stroh-Kartoffeln, frisch zubereitet.", "Avec pommes paille, préparé à la minute.", "С картофелем-пай, готовится под заказ.") },
    ],
  },
  {
    title: l("Arrossos, fideus i mar", "Arroces, fideos y mar", "Rice, noodles and the sea", "Reis, Nudeln und Meer", "Riz, nouilles et mer", "Рис, лапша и море"),
    dishes: [
      { name: l("Fideuà de marisc", "Fideuá de marisco", "Seafood fideuà", "Fideuà mit Meeresfrüchten", "Fideuà aux fruits de mer", "Фидеуа с морепродуктами"), desc: l("Fideus torrats, fumet i marisc; una de les especialitats de la casa.", "Fideos tostados, fumet y marisco; una de las especialidades de la casa.", "Toasted noodles, fish stock and seafood; a house speciality.", "Geröstete Nudeln, Fischfond und Meeresfrüchte; eine Spezialität des Hauses.", "Nouilles grillées, fumet et fruits de mer ; une spécialité maison.", "Обжаренная лапша, рыбный бульон и морепродукты — фирменное блюдо.") },
      { name: l("Paella de pop", "Paella de pulpo", "Octopus paella", "Paella mit Oktopus", "Paella au poulpe", "Паэлья с осьминогом"), desc: l("Arròs melós amb el sabor del mar.", "Arroz meloso con todo el sabor del mar.", "Creamy rice with deep Mediterranean flavour.", "Saftiger Reis mit intensiv mediterranem Geschmack.", "Riz fondant aux saveurs méditerranéennes.", "Сочный рис с насыщенным средиземноморским вкусом.") },
      { name: l("Bacallà a la biscaïna", "Bacalao a la vizcaína", "Cod in Biscayan sauce", "Kabeljau nach Biskaya-Art", "Morue à la biscayenne", "Треска по-бискайски"), desc: l("Bacallà, pebrot i una salsa fonda i tradicional.", "Bacalao, pimiento y una salsa profunda y tradicional.", "Cod, peppers and a rich traditional sauce.", "Kabeljau, Paprika und eine kräftige traditionelle Sauce.", "Morue, poivrons et sauce traditionnelle généreuse.", "Треска, перец и насыщенный традиционный соус.") },
      { name: l("Sípia brasejada amb gambes", "Sepia braseada con gambas", "Braised cuttlefish with prawns", "Geschmorte Sepia mit Garnelen", "Seiche braisée aux gambas", "Тушёная каракатица с креветками"), desc: l("Sobre patata, amb allioli de la casa.", "Sobre patata, con alioli de la casa.", "Served over potato with house allioli.", "Auf Kartoffeln mit hausgemachtem Allioli.", "Sur pomme de terre, avec aïoli maison.", "На картофеле, с домашним айоли.") },
    ],
  },
  {
    title: l("Carns i cuina lenta", "Carnes y cocina lenta", "Meat and slow cooking", "Fleisch und Schmorgerichte", "Viandes et cuisson lente", "Мясо и томлёные блюда"),
    dishes: [
      { name: l("Cua de bou guisada", "Rabo de toro guisado", "Slow-braised oxtail", "Geschmorter Ochsenschwanz", "Queue de bœuf mijotée", "Томлёный бычий хвост"), desc: l("Melosa i cuinada sense presses.", "Meloso y cocinado sin prisas.", "Tender and patiently slow-cooked.", "Zart und mit viel Zeit geschmort.", "Fondante et longuement mijotée.", "Нежный, долго томлёный в соусе.") },
      { name: l("Entrecot a la brasa", "Entrecot a la brasa", "Chargrilled rib-eye", "Entrecôte vom Grill", "Entrecôte grillée", "Антрекот на гриле"), desc: l("Carn ben marcada, amb guarnició de temporada.", "Carne bien marcada, con guarnición de temporada.", "Well-seared beef with a seasonal garnish.", "Kräftig angebraten, mit saisonaler Beilage.", "Viande bien saisie, garniture de saison.", "Хорошо обжаренное мясо с сезонным гарниром.") },
      { name: l("Melós de vedella", "Meloso de ternera", "Slow-cooked beef", "Geschmortes Rind", "Bœuf fondant", "Томлёная говядина"), desc: l("Vedella confitada en el seu suc.", "Ternera confitada en su jugo.", "Beef gently cooked in its own juices.", "Sanft im eigenen Saft geschmortes Rind.", "Bœuf confit dans son jus.", "Говядина, медленно приготовленная в собственном соку.") },
      { name: l("Pollastre farcit amb salsa de bolets", "Pollo relleno con salsa de setas", "Stuffed chicken with mushroom sauce", "Gefülltes Hähnchen mit Pilzsauce", "Poulet farci, sauce aux champignons", "Фаршированная курица с грибным соусом"), desc: l("Amb prunes i dàtils, dolç i salat.", "Con ciruelas y dátiles, dulce y salado.", "With prunes and dates, balancing sweet and savoury.", "Mit Pflaumen und Datteln, süß und herzhaft.", "Aux pruneaux et dattes, entre sucré et salé.", "С черносливом и финиками — баланс сладкого и солёного.") },
    ],
  },
  {
    title: l("Postres de la casa", "Postres de la casa", "House desserts", "Desserts des Hauses", "Desserts maison", "Домашние десерты"),
    dishes: [
      { name: l("Crema catalana", "Crema catalana", "Crema catalana", "Katalanische Creme", "Crème catalane", "Каталонский крем"), desc: l("Crema suau amb sucre cremat.", "Crema suave con azúcar quemado.", "Silky custard with a crisp caramel top.", "Zarte Creme mit knuspriger Karamellkruste.", "Crème onctueuse sous une fine croûte caramélisée.", "Нежный крем с хрустящей карамельной корочкой.") },
      { name: l("Pastís de formatge", "Tarta de queso", "Cheesecake", "Käsekuchen", "Gâteau au fromage", "Чизкейк"), desc: l("Cremós i fet a casa.", "Cremoso y hecho en casa.", "Creamy and made in house.", "Cremig und hausgemacht.", "Crémeux et fait maison.", "Нежный, приготовлен в ресторане.") },
      { name: l("Coulant de xocolata", "Coulant de chocolate", "Chocolate fondant", "Schokoladenfondant", "Coulant au chocolat", "Шоколадный фондан"), desc: l("Cor calent de xocolata.", "Corazón caliente de chocolate.", "A warm molten chocolate centre.", "Warmer, flüssiger Schokoladenkern.", "Cœur chaud et coulant.", "Тёплая жидкая шоколадная сердцевина.") },
      { name: l("Flam casolà", "Flan casero", "House flan", "Hausgemachter Flan", "Flan maison", "Домашний флан"), desc: l("Recepta clàssica amb caramel.", "Receta clásica con caramelo.", "A classic recipe with caramel.", "Klassisches Rezept mit Karamell.", "Recette classique au caramel.", "Классический рецепт с карамелью.") },
    ],
  },
];

export const menuPhotos = [
  { image: "images/social-ou-trencat.webp", title: l("Ou trencat amb xipirons", "Huevo roto con chipirones", "Broken egg with baby squid", "Spiegelei mit Baby-Calamari", "Œuf et petits encornets", "Яичница с мини-кальмарами"), href: "https://www.instagram.com/tapareus1/p/DaSC5BktWco/" },
  { image: "images/social-bacalla.webp", title: l("Bacallà a la biscaïna", "Bacalao a la vizcaína", "Cod in Biscayan sauce", "Kabeljau nach Biskaya-Art", "Morue à la biscayenne", "Треска по-бискайски"), href: "https://www.instagram.com/tapareus1/p/DaAEAjptAC0/" },
  { image: "images/social-fritura.webp", title: l("Fritura de mar", "Fritura de mar", "Mixed fried seafood", "Frittierte Meeresfrüchte", "Friture de la mer", "Жареные морепродукты"), href: "https://www.instagram.com/tapareus1/p/DZb9LEetInw/" },
  { image: "images/social-sipia-gambes.webp", title: l("Sípia i gambes", "Sepia y gambas", "Cuttlefish and prawns", "Sepia und Garnelen", "Seiche et gambas", "Каракатица и креветки"), href: "https://www.instagram.com/tapareus1/p/DY25F4BtBnE/" },
];
