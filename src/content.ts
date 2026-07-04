export type Locale = "ca" | "es";
export type MenuKey = "migdia" | "capSetmana" | "grups";

export const content = {
  ca: {
    nav: {
      home: "Inici",
      menus: "Menús",
      house: "La casa",
      groups: "Grups",
      visit: "Visita’ns",
      reserve: "Reservar taula",
    },
    hero: {
      titleA: "Cuina de sempre.",
      titleB: "Ànima de Reus.",
      body: "Cuina mediterrània, plats generosos i una casa feta al voltant de la taula.",
      menus: "Veure els menús",
      call: "Truca’ns",
      address: "Carrer del Batan, 3 · Reus",
      hours: "Avui · 13.00–15.30",
      imageAlt: "Fideuà de marisc servida al centre d’una taula",
    },
    menu: {
      title: "Avui a taula",
      intro: "Els nostres menús canvien amb el mercat i la temporada. Aquesta és la manera de menjar a Casa Alejandro.",
      tabs: {
        migdia: "Menú de migdia",
        capSetmana: "Cap de setmana",
        grups: "Menús de grup",
      },
      content: {
        migdia: {
          heading: "Dinar bé, cada dia",
          note: "Primers, segons i postres de la casa. Consulta la selecció d’avui.",
          items: ["Plats de cullera i amanides", "Peix, arrossos i carns", "Postres fetes a casa"],
        },
        capSetmana: {
          heading: "La taula del cap de setmana",
          note: "Una selecció més llarga per venir sense presses i compartir.",
          items: ["Entrants per compartir", "Arrossos, mar i brasa", "Postres de la casa"],
        },
        grups: {
          heading: "Menús per trobar-nos",
          note: "Propostes per a celebracions, equips i taules grans.",
          items: ["Opcions per compartir", "Menús acordats", "Atenció a al·lèrgies"],
        },
      },
      action: "Consultar el menú",
      phoneNote: "Menú actualitzat i reserves al 977 77 30 39",
    },
    dishes: {
      title: "Plats que fan casa",
      body: "Receptes mediterrànies, producte ben cuinat i racions per compartir.",
      action: "Descobrir la carta",
      items: [
        { name: "Cargols a la llauna", image: "images/cargols.jpg", alt: "Safata de cargols a la llauna" },
        { name: "Fideuà de marisc", image: "images/hero-fideua.jpg", alt: "Paella de fideuà de marisc" },
        { name: "Pop amb patata i pebre vermell", image: "images/pop.jpg", alt: "Pop servit sobre patata en un plat de ceràmica" },
      ],
    },
    history: {
      title: "Una casa amb memòria",
      body: "Casa Alejandro forma part de Reus des de 1999. Una història de cuina, família i hoquei patins que continua a cada servei.",
      timeline: ["1999 · Obrim les portes", "Reus · La nostra ciutat", "Avui · La casa continua"],
      action: "Conèixer la nostra història",
      imageAlt: "Patins d’hoquei, estic i samarreta com a memòria de la casa",
      imageNote: "Imatge conceptual · pendent de substituir per l’arxiu original de la casa",
    },
    groups: {
      title: "Taules per compartir",
      body: "Dinars en família, sopars amb amics i menús per a grups. Parlem i preparem la taula.",
      action: "Veure menús de grup",
      imageAlt: "Família compartint un dinar en una taula de restaurant",
      details: [
        { title: "Trones disponibles", body: "Digueu-nos si en necessiteu una quan feu la reserva." },
        { title: "Al·lèrgies i intoleràncies", body: "Parleu amb l’equip abans de demanar per revisar les opcions disponibles." },
        { title: "Celebracions", body: "Preparem menús i distribucions de taula per a grups." },
      ],
    },
    visit: {
      title: "T’esperem a Reus",
      address: "Carrer del Batan, 3 · 43204 Reus",
      hoursTitle: "Horaris",
      hours: [
        "Dilluns i diumenge · 13.00–15.30",
        "Dimecres a dissabte · 13.00–15.30 / 20.30–23.00",
        "Dimarts · Tancat",
      ],
      reserve: "Reservar taula",
      directions: "Com arribar",
      mapAlt: "Esquema de situació de Casa Alejandro al centre de Reus",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      menus: "Menús",
      house: "La casa",
      groups: "Grupos",
      visit: "Visítanos",
      reserve: "Reservar mesa",
    },
    hero: {
      titleA: "Cocina de siempre.",
      titleB: "Alma de Reus.",
      body: "Cocina mediterránea, platos generosos y una casa hecha alrededor de la mesa.",
      menus: "Ver los menús",
      call: "Llámanos",
      address: "Carrer del Batan, 3 · Reus",
      hours: "Hoy · 13.00–15.30",
      imageAlt: "Fideuá de marisco servida en el centro de una mesa",
    },
    menu: {
      title: "Hoy en la mesa",
      intro: "Nuestros menús cambian con el mercado y la temporada. Esta es la manera de comer en Casa Alejandro.",
      tabs: {
        migdia: "Menú de mediodía",
        capSetmana: "Fin de semana",
        grups: "Menús de grupo",
      },
      content: {
        migdia: {
          heading: "Comer bien, cada día",
          note: "Primeros, segundos y postres de la casa. Consulta la selección de hoy.",
          items: ["Platos de cuchara y ensaladas", "Pescado, arroces y carnes", "Postres hechos en casa"],
        },
        capSetmana: {
          heading: "La mesa del fin de semana",
          note: "Una selección más larga para venir sin prisas y compartir.",
          items: ["Entrantes para compartir", "Arroces, mar y brasa", "Postres de la casa"],
        },
        grups: {
          heading: "Menús para encontrarnos",
          note: "Propuestas para celebraciones, equipos y mesas grandes.",
          items: ["Opciones para compartir", "Menús acordados", "Atención a alergias"],
        },
      },
      action: "Consultar el menú",
      phoneNote: "Menú actualizado y reservas en el 977 77 30 39",
    },
    dishes: {
      title: "Platos que hacen casa",
      body: "Recetas mediterráneas, producto bien cocinado y raciones para compartir.",
      action: "Descubrir la carta",
      items: [
        { name: "Caracoles a la llauna", image: "images/cargols.jpg", alt: "Bandeja de caracoles a la llauna" },
        { name: "Fideuá de marisco", image: "images/hero-fideua.jpg", alt: "Paella de fideuá de marisco" },
        { name: "Pulpo con patata y pimentón", image: "images/pop.jpg", alt: "Pulpo servido sobre patata en un plato de cerámica" },
      ],
    },
    history: {
      title: "Una casa con memoria",
      body: "Casa Alejandro forma parte de Reus desde 1999. Una historia de cocina, familia y hockey sobre patines que continúa en cada servicio.",
      timeline: ["1999 · Abrimos las puertas", "Reus · Nuestra ciudad", "Hoy · La casa continúa"],
      action: "Conocer nuestra historia",
      imageAlt: "Patines de hockey, stick y camiseta como memoria de la casa",
      imageNote: "Imagen conceptual · pendiente de sustituir por el archivo original de la casa",
    },
    groups: {
      title: "Mesas para compartir",
      body: "Comidas en familia, cenas con amigos y menús para grupos. Hablamos y preparamos la mesa.",
      action: "Ver menús de grupo",
      imageAlt: "Familia compartiendo una comida en una mesa de restaurante",
      details: [
        { title: "Tronas disponibles", body: "Indícanos si necesitas una al hacer la reserva." },
        { title: "Alergias e intolerancias", body: "Habla con el equipo antes de pedir para revisar las opciones disponibles." },
        { title: "Celebraciones", body: "Preparamos menús y distribuciones de mesa para grupos." },
      ],
    },
    visit: {
      title: "Te esperamos en Reus",
      address: "Carrer del Batan, 3 · 43204 Reus",
      hoursTitle: "Horarios",
      hours: [
        "Lunes y domingo · 13.00–15.30",
        "Miércoles a sábado · 13.00–15.30 / 20.30–23.00",
        "Martes · Cerrado",
      ],
      reserve: "Reservar mesa",
      directions: "Cómo llegar",
      mapAlt: "Esquema de situación de Casa Alejandro en el centro de Reus",
    },
  },
} as const;
