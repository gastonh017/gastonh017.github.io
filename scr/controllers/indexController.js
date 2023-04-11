const fs = require('fs');
const path = require('path');

const menuCategoriesFilePath = path.join(__dirname, '../data/categoriasMenu.json');
const menuFilePath = path.join(__dirname, '../data/menu.json');
const menuCategories = JSON.parse(fs.readFileSync(menuCategoriesFilePath, 'utf-8'));
const menu = JSON.parse(fs.readFileSync(menuFilePath, 'utf-8'));


const cards = [
  {
    title: "Cervezas",
    src: "/images/imgCard01.jpg",
    alt: "Nuestras Cervezas",
    href: "/menu"
  },
  {
    title: "Entradas",
    src: "/images/imgCard02.jpg",
    alt: "Nuestras Entradas",
    href: "/menu#entradas"
  },
  {
    title: "Tragos",
    src: "/images/imgCard03.jpg",
    alt: "Nuestros Tragos",
    href: "/menu#tragos"
  },
  {
    title: "Comidas",
    src: "/images/imgCard04.jpg",
    alt: "Nuestras Comidas",
    href: "/menu#hamburguesas"
  },
  {
    title: "Bebidas",
    src: "/images/imgCard05.jpg",
    alt: "Nuestras Bebidas",
    href: "/menu#bebidas"
  },
  {
    title: "Promociones",
    src: "/images/imgCard06.png",
    alt: "Nuestras Promociones",
    href: "/promociones"
  },
];

const cardsPromotions = [
  {
    title: "",
    src: "/images/evento01.png",
    alt: "Evento01",
  },
  {
    title: "",
    src: "/images/evento02.png",
    alt: "Evento02",
  },
  {
    title: "",
    src: "/images/evento03.png",
    alt: "Evento03",
  },
];

const promotions = [
  {text: 'Happy Hour 2X1 de 19 a 22 en Cervezas Seleccionadas',
  src: '/images/promo-cerveza2.jpg',
  alt: 'promo01'
  },
  {text: 'Happy hour de Fernet Branca',
  src: '/images/promo-fernet.jpg',
  alt: 'promo02'
  },
  {text: 'Miercoles de ladies night. 50% off en mesas exclusivas de chicas',
  src: '/images/promo-ladies.jpg',
  alt: 'promo03'
  },
  {text: 'Descuentos a Residentes',
  src: '/images/promo-residentes.jpg',
  alt: 'promo03'
  },
]
// let menu = [
//   {
//     name: "Agua",
//     description: "",
//     category: "bebidas",
//     image: "/images/menu/bebidas/agua.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Coca-Cola",
//     description: "",
//     category: "bebidas",
//     image: "/images/menu/bebidas/cocacola.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Sprite",
//     description: "",
//     category: "bebidas",
//     image: "/images/menu/bebidas/sprite.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Fanta",
//     description: "",
//     category: "bebidas",
//     image: "/images/menu/bebidas/fanta.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Levite",
//     description: "",
//     category: "bebidas",
//     image: "/images/menu/bebidas/levite.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Empanadas Gourment",
//     description: "",
//     category: "empanadas",
//     image: "/images/menu/empanadas/empanadasGourmet.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Bastones de Muzzarella",
//     description: "",
//     category: "entradas",
//     image: "/images/menu/entradas/bastonesMuzzarella.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Bastones de surubí",
//     description: "",
//     category: "entradas",
//     image: "/images/menu/entradas/bastonesSurubi.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Langostinos",
//     description: "",
//     category: "entradas",
//     image: "/images/menu/entradas/langostinos.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Picada Humulus",
//     description: "",
//     category: "entradas",
//     image: "/images/menu/entradas/picadaHumulus.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Picaña",
//     description: "",
//     category: "entradas",
//     image: "/images/menu/entradas/picaña.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Rabas",
//     description: "",
//     category: "entradas",
//     image: "/images/menu/entradas/rabas.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Hollywood",
//     description: "",
//     category: "hamburguesas",
//     image: "/images/menu/hamburguesas/hollywood.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Springfield",
//     description: "",
//     category: "hamburguesas",
//     image: "/images/menu/hamburguesas/springfield.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Texana",
//     description: "",
//     category: "hamburguesas",
//     image: "/images/menu/hamburguesas/texana.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Exprimido de naranja",
//     description: "",
//     category: "jugos naturales",
//     image: "/images/menu/jugosNaturales/exprimidoNaranja.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Limonada",
//     description: "",
//     category: "jugos naturales",
//     image: "/images/menu/jugosNaturales/limonada.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Batata Frita",
//     description: "",
//     category: "papas",
//     image: "/images/menu/papas/batataFrita.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Mandioca frita",
//     description: "",
//     category: "papas",
//     image: "/images/menu/papas/mandiocaFrita.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Papas Diablas",
//     description: "",
//     category: "papas",
//     image: "/images/menu/papas/papasDiablas.png",
//     price: "",
//     hidePrice: true,
//   },

//   {
//     name: "Muzzarella",
//     description: "Salsa de tomate, muzzarella, oregano. Tomate sauce, mozzarella, olives, oregano.",
//     category: "pizzas",
//     image: "/images/menu/pizzas/calabresa.png",
//     price: "$1600",
//     hidePrice: true,
//   },
//   {
//     name: "Calabresa",
//     description: "Muzzarella, tomate, longaniza, calabresa, aceitunas y oregano / Mozzarella, tomato, calabrian sausage, olives and oregano",
//     category: "pizzas",
//     image: "/images/menu/pizzas/calabresa.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Crudo y Rúcula",
//     description: "Muzzarella, tomate, longaniza, calabresa, aceitunas / Mozzarella, rawham, arugula, olives and oregano.",
//     category: "pizzas",
//     image: "/images/menu/pizzas/crudoRucula.png",
//     price: "$2400",
//     hidePrice: true,
//   },
//   {
//     name: "4 Quesos",
//     description: "Muzzarella, cheddar, queso tybo, roquefort y aceitunas / Mozzarella, cheddar, tybo, roquefort, cheese and olives.",
//     category: "pizzas",
//     image: "/images/menu/pizzas/cuatroQuesos.png",
//     price: "$2000",
//     hidePrice: true,
//   },
//   {
//     name: "Humulus",
//     description: "Muzzarella, panceta, huevo, tomate, cebolla de verdeo, aceitunas y oregano / Mozzarella, cheddar, tybo, roquefort cheesse and olives",
//     category: "pizzas",
//     image: "/images/menu/pizzas/cuatroQuesos.png",
//     price: "$2500",
//     hidePrice: true,
//   },





//   {
//     name: "Tequila Cuervo",
//     description: "",
//     category: "tequila",
//     image: "/images/menu/tequila/tequilaCuervo.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Tequila nacional",
//     description: "",
//     category: "tequila",
//     image: "/images/menu/tequila/tequilaNacional.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Amarula Frozen",
//     description: "",
//     category: "tragos",
//     image: "/images/menu/tragos/amarulaFrozen.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Baileys Frozen",
//     description: "",
//     category: "tragos",
//     image: "/images/menu/tragos/baileysFrozen.png",
//     price: "",
//     hidePrice: true,
//   },  
//   {
//     name: "Caipirinha",
//     description: "",
//     category: "tragos",
//     image: "/images/menu/tragos/caipirinha.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Borghetti",
//     description: "",
//     category: "tragosExoticos",
//     image: "/images/menu/tragosExoticos/borghetti.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "Carpano",
//     description: "",
//     category: "tragosExoticos",
//     image: "/images/menu/tragosExoticos/carpano.png",
//     price: "",
//     hidePrice: true,
//   },
//   {
//     name: "mint(+)",
//     description: "",
//     category: "tragosExoticos",
//     image: "/images/menu/tragosExoticos/mint.png",
//     price: "",
//     hidePrice: true,
//   },
// ];


const mainController = {
  //Muestra productos destacados de la pagina de inicio
  index: (req, res) => {
    res.render("index", { cards: cards, cardsPromotions: cardsPromotions });
  },
  //Va a la vista de contactenos

  menu: (req, res) => {
    res.render("menu", { menu: menu, categorias: menuCategories });
  },

  quienesSomos: (req, res) => {
    res.render("quienesSomos");
  },

  contactenos: (req, res) => {
    res.render("contactanos");
  },

  ubicacion: (req, res) => {
    res.render("ubicacion");
  },

  promociones: (req, res) => {
    res.render('promociones', {promotions: promotions})
    res.render("promociones");
  },
};

module.exports = mainController;
