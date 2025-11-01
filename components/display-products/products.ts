interface Product {
  id: number;
  name: string;
  link: string;
  image: string;
}


const products: Product[] = [
  {
    id: 1,
    name: "HEADPHONES",
    image: "/display-1.png",
    link: "/headphones"
  },
  {
    id: 2,
    name: "SPEAKERS",
    image: "/display-2.png",
    link: "/headphones"
  },
  {
    id: 3,
    name: "EARPHONES",
    image: "/display-3.png",
    link: "/headphones"
  },
];


export default products;
