export type Locale = "ca" | "es" | "en" | "de" | "fr" | "ru";
export type MenuKey = "migdia" | "capSetmana" | "grups";

type Copy = {
  nav: string[]; hero: string[]; menu: string[]; dishes: string[]; history: string[];
  groups: string[]; visit: string[];
};

const build = (c: Copy) => ({
  nav: { home: c.nav[0], menus: c.nav[1], house: c.nav[2], groups: c.nav[3], visit: c.nav[4], reserve: c.nav[5] },
  hero: { titleA: c.hero[0], titleB: c.hero[1], body: c.hero[2], menus: c.hero[3], call: c.hero[4], address: "Carrer del Batan, 3 · Reus", imageAlt: c.hero[5] },
  menu: {
    title: c.menu[0], intro: c.menu[1],
    tabs: { migdia: c.menu[2], capSetmana: c.menu[3], grups: c.menu[4] },
    content: {
      migdia: { heading: c.menu[5], note: c.menu[6], items: [c.menu[7], c.menu[8], c.menu[9]] },
      capSetmana: { heading: c.menu[10], note: c.menu[11], items: [c.menu[12], c.menu[13], c.menu[9]] },
      grups: { heading: c.menu[14], note: c.menu[15], items: [c.menu[16], c.menu[17], c.menu[18]] },
    },
    action: c.menu[19], phoneNote: c.menu[20],
  },
  dishes: {
    title: c.dishes[0], body: c.dishes[1], action: c.dishes[2],
    items: [
      { name: c.dishes[3], image: "images/cargols.jpg", alt: c.dishes[4] },
      { name: c.dishes[5], image: "images/hero-fideua.jpg", alt: c.dishes[6] },
      { name: c.dishes[7], image: "images/pop.jpg", alt: c.dishes[8] },
    ],
  },
  history: {
    title: c.history[0], body: c.history[1], timeline: [c.history[2], c.history[3], c.history[4]],
    action: c.history[5], imageAlt: c.history[6], imageNote: c.history[7],
  },
  groups: {
    title: c.groups[0], body: c.groups[1], action: c.groups[2], imageAlt: c.groups[3],
    details: [
      { title: c.groups[4], body: c.groups[5] },
      { title: c.groups[6], body: c.groups[7] },
      { title: c.groups[8], body: c.groups[9] },
    ],
  },
  visit: {
    title: c.visit[0], address: "Carrer del Batan, 3 · 43204 Reus", hoursTitle: c.visit[1],
    hours: [c.visit[2], c.visit[3], c.visit[4]], reserve: c.visit[5], directions: c.visit[6], mapAlt: c.visit[7],
  },
});

export const content = {
  ca: build({
    nav: ["Inici", "Carta", "La casa", "Grups", "Visita’ns", "Reservar taula"],
    hero: ["Cuina de sempre.", "Ànima de Reus.", "Cuina mediterrània, plats generosos i una casa feta al voltant de la taula.", "Veure la carta", "Truca’ns", "Fideuà de marisc servida al centre d’una taula"],
    menu: ["Avui a taula", "Els nostres menús canvien amb el mercat i la temporada. Aquesta és la manera de menjar a Casa Alejandro.", "Menú de migdia", "Cap de setmana", "Menús de grup", "Dinar bé, cada dia", "Primers, segons i postres de la casa. Consulta la selecció d’avui.", "Plats de cullera i amanides", "Peix, arrossos i carns", "Postres fetes a casa", "La taula del cap de setmana", "Una selecció més llarga per venir sense presses i compartir.", "Entrants per compartir", "Arrossos, mar i brasa", "Menús per trobar-nos", "Propostes per a celebracions, equips i taules grans.", "Opcions per compartir", "Menús acordats", "Atenció a al·lèrgies", "Llegir la carta completa", "Menú actualitzat i reserves al 977 77 30 39"],
    dishes: ["Plats que fan casa", "Receptes mediterrànies, producte ben cuinat i racions per compartir.", "Descobrir la carta", "Cargols a la llauna", "Safata de cargols a la llauna", "Fideuà de marisc", "Paella de fideuà de marisc", "Pop amb patata i pebre vermell", "Pop servit sobre patata en un plat de ceràmica"],
    history: ["Una casa amb memòria", "Casa Alejandro forma part de Reus des de 1999. Una història de cuina, família i hoquei patins que continua a cada servei.", "1999 · Obrim les portes", "Reus · La nostra ciutat", "Avui · La casa continua", "Conèixer la nostra història", "Patins d’hoquei, estic i samarreta com a memòria de la casa", "Imatge conceptual · pendent de substituir per l’arxiu original de la casa"],
    groups: ["Taules per compartir", "Dinars en família, sopars amb amics i menús per a grups. Parlem i preparem la taula.", "Veure menús de grup", "Família compartint un dinar en una taula de restaurant", "Trones disponibles", "Digueu-nos si en necessiteu una quan feu la reserva.", "Al·lèrgies i intoleràncies", "Parleu amb l’equip abans de demanar per revisar les opcions disponibles.", "Celebracions", "Preparem menús i distribucions de taula per a grups."],
    visit: ["T’esperem a Reus", "Horaris", "Dilluns i diumenge · 13.00–15.30", "Dimecres a dissabte · 13.00–15.30 / 20.30–23.00", "Dimarts · Tancat", "Reservar taula", "Com arribar", "Mapa de Google amb la ubicació de Casa Alejandro a Reus"],
  }),
  es: build({
    nav: ["Inicio", "Carta", "La casa", "Grupos", "Visítanos", "Reservar mesa"],
    hero: ["Cocina de siempre.", "Alma de Reus.", "Cocina mediterránea, platos generosos y una casa hecha alrededor de la mesa.", "Ver la carta", "Llámanos", "Fideuá de marisco servida en el centro de una mesa"],
    menu: ["Hoy en la mesa", "Nuestros menús cambian con el mercado y la temporada. Esta es la manera de comer en Casa Alejandro.", "Menú de mediodía", "Fin de semana", "Menús de grupo", "Comer bien, cada día", "Primeros, segundos y postres de la casa. Consulta la selección de hoy.", "Platos de cuchara y ensaladas", "Pescado, arroces y carnes", "Postres hechos en casa", "La mesa del fin de semana", "Una selección más larga para venir sin prisas y compartir.", "Entrantes para compartir", "Arroces, mar y brasa", "Menús para encontrarnos", "Propuestas para celebraciones, equipos y mesas grandes.", "Opciones para compartir", "Menús acordados", "Atención a alergias", "Leer la carta completa", "Menú actualizado y reservas en el 977 77 30 39"],
    dishes: ["Platos que hacen casa", "Recetas mediterráneas, producto bien cocinado y raciones para compartir.", "Descubrir la carta", "Caracoles a la llauna", "Bandeja de caracoles a la llauna", "Fideuá de marisco", "Paella de fideuá de marisco", "Pulpo con patata y pimentón", "Pulpo servido sobre patata"],
    history: ["Una casa con memoria", "Casa Alejandro forma parte de Reus desde 1999. Una historia de cocina, familia y hockey sobre patines que continúa en cada servicio.", "1999 · Abrimos las puertas", "Reus · Nuestra ciudad", "Hoy · La casa continúa", "Conocer nuestra historia", "Patines, stick y camiseta como memoria de la casa", "Imagen conceptual · pendiente de sustituir por el archivo original de la casa"],
    groups: ["Mesas para compartir", "Comidas en familia, cenas con amigos y menús para grupos. Hablamos y preparamos la mesa.", "Ver menús de grupo", "Familia compartiendo una comida en un restaurante", "Tronas disponibles", "Indícanos si necesitas una al reservar.", "Alergias e intolerancias", "Habla con el equipo antes de pedir para revisar las opciones.", "Celebraciones", "Preparamos menús y distribuciones de mesa para grupos."],
    visit: ["Te esperamos en Reus", "Horarios", "Lunes y domingo · 13.00–15.30", "Miércoles a sábado · 13.00–15.30 / 20.30–23.00", "Martes · Cerrado", "Reservar mesa", "Cómo llegar", "Mapa de Google con la ubicación de Casa Alejandro en Reus"],
  }),
  en: build({
    nav: ["Home", "Menu", "Our story", "Groups", "Visit", "Book a table"],
    hero: ["Cooking with tradition.", "The soul of Reus.", "Mediterranean cooking, generous dishes and a family house built around the table.", "View the menu", "Call us", "Seafood fideuà served at the centre of a table"],
    menu: ["Today at the table", "Our menus change with the market and the seasons. This is how we eat at Casa Alejandro.", "Weekday lunch", "Weekend", "Group menus", "Eat well, every day", "House starters, mains and desserts. Ask for today’s selection.", "Soups, stews and salads", "Fish, rice and meat", "House-made desserts", "The weekend table", "A longer selection, made for unhurried sharing.", "Starters to share", "Rice, seafood and grill", "Menus for getting together", "For celebrations, teams and large tables.", "Sharing options", "Set menus", "Allergy support", "Read the full menu", "Current menu and bookings: +34 977 77 30 39"],
    dishes: ["Dishes that feel like home", "Mediterranean recipes, carefully cooked produce and generous plates to share.", "Discover the menu", "Catalan-style grilled snails", "Tray of Catalan-style grilled snails", "Seafood fideuà", "Pan of seafood fideuà", "Octopus with potato and paprika", "Octopus served over potato"],
    history: ["A house with memories", "Casa Alejandro has been part of Reus since 1999. A story of food, family and roller hockey that continues with every service.", "1999 · We open our doors", "Reus · Our city", "Today · The story continues", "Discover our story", "Roller hockey skates, stick and shirt from the house archive", "Concept image · to be replaced with original family archive material"],
    groups: ["Tables made for sharing", "Family lunches, dinners with friends and menus for groups. Let’s talk and prepare your table.", "See group menus", "A family sharing lunch at a restaurant table", "Highchairs available", "Tell us when booking if you need one.", "Allergies and intolerances", "Speak to the team before ordering to review available options.", "Celebrations", "We prepare menus and table layouts for groups."],
    visit: ["We’ll see you in Reus", "Opening hours", "Monday and Sunday · 13:00–15:30", "Wednesday to Saturday · 13:00–15:30 / 20:30–23:00", "Tuesday · Closed", "Book a table", "Directions", "Google map showing Casa Alejandro in Reus"],
  }),
  de: build({
    nav: ["Start", "Speisekarte", "Unser Haus", "Gruppen", "Besuch", "Tisch reservieren"],
    hero: ["Küche mit Tradition.", "Die Seele von Reus.", "Mediterrane Küche, großzügige Gerichte und ein Familienhaus, in dem sich alles um den Tisch dreht.", "Speisekarte ansehen", "Anrufen", "Meeresfrüchte-Fideuà in der Mitte eines gedeckten Tisches"],
    menu: ["Heute auf dem Tisch", "Unsere Menüs richten sich nach Markt und Saison. So isst man bei Casa Alejandro.", "Mittagsmenü", "Wochenende", "Gruppenmenüs", "Jeden Tag gut essen", "Vorspeise, Hauptgericht und Dessert aus unserer Küche. Fragen Sie nach der heutigen Auswahl.", "Suppen, Eintöpfe und Salate", "Fisch, Reis und Fleisch", "Hausgemachte Desserts", "Der Wochenendtisch", "Eine größere Auswahl zum entspannten Teilen.", "Vorspeisen zum Teilen", "Reis, Meer und Grill", "Menüs für gemeinsame Runden", "Für Feiern, Teams und große Tische.", "Gerichte zum Teilen", "Abgestimmte Menüs", "Allergien beachten wir gern", "Vollständige Speisekarte", "Aktuelles Menü und Reservierung: +34 977 77 30 39"],
    dishes: ["Gerichte, die Heimat bedeuten", "Mediterrane Rezepte, gute Produkte und großzügige Portionen zum Teilen.", "Speisekarte entdecken", "Schnecken „a la llauna“", "Blech mit katalanischen Schnecken", "Fideuà mit Meeresfrüchten", "Pfanne mit Meeresfrüchte-Fideuà", "Oktopus mit Kartoffel und Paprika", "Oktopus auf Kartoffeln"],
    history: ["Ein Haus voller Erinnerungen", "Casa Alejandro gehört seit 1999 zu Reus. Eine Geschichte von Küche, Familie und Rollhockey, die jeden Tag weitergeht.", "1999 · Eröffnung", "Reus · Unsere Stadt", "Heute · Die Geschichte geht weiter", "Unsere Geschichte", "Rollhockeyschuhe, Schläger und Trikot als Erinnerung des Hauses", "Konzeptbild · wird durch Material aus dem Familienarchiv ersetzt"],
    groups: ["Tische zum Teilen", "Familienessen, Abende mit Freunden und Menüs für Gruppen. Wir bereiten Ihren Tisch vor.", "Gruppenmenüs ansehen", "Familie beim gemeinsamen Essen im Restaurant", "Kinderstühle vorhanden", "Bitte bei der Reservierung angeben.", "Allergien und Unverträglichkeiten", "Sprechen Sie unser Team vor der Bestellung an.", "Feiern", "Wir planen Menüs und Tischaufteilung für Gruppen."],
    visit: ["Wir erwarten Sie in Reus", "Öffnungszeiten", "Montag und Sonntag · 13:00–15:30", "Mittwoch bis Samstag · 13:00–15:30 / 20:30–23:00", "Dienstag · Geschlossen", "Tisch reservieren", "Route planen", "Google-Karte mit Casa Alejandro in Reus"],
  }),
  fr: build({
    nav: ["Accueil", "Carte", "La maison", "Groupes", "Venir", "Réserver une table"],
    hero: ["Cuisine de tradition.", "L’âme de Reus.", "Cuisine méditerranéenne, assiettes généreuses et maison familiale bâtie autour de la table.", "Voir la carte", "Appelez-nous", "Fideuà aux fruits de mer au centre d’une table"],
    menu: ["Aujourd’hui à table", "Nos menus évoluent avec le marché et les saisons. Voilà l’esprit de Casa Alejandro.", "Menu du midi", "Week-end", "Menus de groupe", "Bien manger, chaque jour", "Entrée, plat et dessert maison. Demandez la sélection du jour.", "Soupes, plats mijotés et salades", "Poissons, riz et viandes", "Desserts maison", "La table du week-end", "Un choix plus ample, à partager sans se presser.", "Entrées à partager", "Riz, mer et grillades", "Menus pour se retrouver", "Pour les fêtes, équipes et grandes tablées.", "Plats à partager", "Menus convenus", "Attention aux allergies", "Lire toute la carte", "Menu du jour et réservations : +34 977 77 30 39"],
    dishes: ["Des plats comme à la maison", "Recettes méditerranéennes, beaux produits et portions généreuses à partager.", "Découvrir la carte", "Escargots à la catalane", "Plateau d’escargots à la catalane", "Fideuà aux fruits de mer", "Poêlon de fideuà aux fruits de mer", "Poulpe, pomme de terre et paprika", "Poulpe servi sur pomme de terre"],
    history: ["Une maison pleine de mémoire", "Casa Alejandro fait partie de Reus depuis 1999. Une histoire de cuisine, de famille et de rink hockey qui continue à chaque service.", "1999 · Ouverture", "Reus · Notre ville", "Aujourd’hui · L’histoire continue", "Découvrir notre histoire", "Patins, crosse et maillot de rink hockey, mémoire de la maison", "Image conceptuelle · à remplacer par les archives originales de la famille"],
    groups: ["Des tables à partager", "Déjeuners en famille, dîners entre amis et menus de groupe. Parlons-en et préparons votre table.", "Voir les menus de groupe", "Une famille partageant un repas au restaurant", "Chaises hautes disponibles", "Précisez-le lors de la réservation.", "Allergies et intolérances", "Parlez-en à l’équipe avant de commander.", "Célébrations", "Nous préparons menus et plans de table pour les groupes."],
    visit: ["Rendez-vous à Reus", "Horaires", "Lundi et dimanche · 13h00–15h30", "Du mercredi au samedi · 13h00–15h30 / 20h30–23h00", "Mardi · Fermé", "Réserver une table", "Itinéraire", "Carte Google indiquant Casa Alejandro à Reus"],
  }),
  ru: build({
    nav: ["Главная", "Меню", "О ресторане", "Группы", "Контакты", "Забронировать"],
    hero: ["Кухня с традициями.", "Душа Реуса.", "Средиземноморская кухня, щедрые блюда и семейный ресторан, где всё начинается за общим столом.", "Посмотреть меню", "Позвонить", "Фидеуа с морепродуктами в центре стола"],
    menu: ["Сегодня в меню", "Наше меню меняется вместе с рынком и сезоном. Так готовят в Casa Alejandro.", "Обед по будням", "Выходные", "Групповое меню", "Хороший обед каждый день", "Закуска, основное блюдо и домашний десерт. Уточняйте выбор дня.", "Супы, рагу и салаты", "Рыба, рис и мясо", "Домашние десерты", "Стол выходного дня", "Расширенный выбор для неспешной трапезы.", "Закуски на компанию", "Рис, море и гриль", "Меню для встреч", "Для праздников, команд и больших компаний.", "Блюда на компанию", "Согласованное меню", "Учёт аллергий", "Открыть полное меню", "Актуальное меню и бронь: +34 977 77 30 39"],
    dishes: ["Блюда как дома", "Средиземноморские рецепты, хорошие продукты и щедрые порции на компанию.", "Посмотреть меню", "Улитки по-каталонски", "Поднос улиток по-каталонски", "Фидеуа с морепродуктами", "Сковорода фидеуа с морепродуктами", "Осьминог с картофелем и паприкой", "Осьминог на картофеле"],
    history: ["Дом с историей", "Casa Alejandro — часть Реуса с 1999 года. История кухни, семьи и хоккея на роликах продолжается каждый день.", "1999 · Мы открылись", "Реус · Наш город", "Сегодня · История продолжается", "Узнать нашу историю", "Роликовые коньки, клюшка и форма — память ресторана", "Концептуальное изображение · будет заменено материалами семейного архива"],
    groups: ["Столы для общения", "Семейные обеды, ужины с друзьями и меню для групп. Обсудим и подготовим ваш стол.", "Меню для групп", "Семья за общим столом в ресторане", "Детские стульчики", "Сообщите при бронировании, если он нужен.", "Аллергии и непереносимость", "Обсудите доступные варианты с командой до заказа.", "Праздники", "Подготовим меню и расстановку столов для групп."],
    visit: ["Ждём вас в Реусе", "Часы работы", "Понедельник и воскресенье · 13:00–15:30", "Среда–суббота · 13:00–15:30 / 20:30–23:00", "Вторник · Закрыто", "Забронировать", "Маршрут", "Карта Google с расположением Casa Alejandro в Реусе"],
  }),
} as const;
