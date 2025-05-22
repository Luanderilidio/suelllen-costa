import { MdAddShoppingCart } from "react-icons/md";
import { MdShare } from "react-icons/md";


export interface ProductProps {
  id: number;
  nome: string;
  categoria: string;
  preco: string;
  url_image: string
}

export interface ProductListProps {
  products: ProductProps[];
}


export default function Product({ 
  id,
  nome,
  preco,
  url_image,
}: ProductProps) {

  const getDriveImageUrl = (url: string) => {
  const match = url.match(/\/d\/(.*?)\//);
  return match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : "";
};

  return (
    <div className="w-full flex flex-col items-start justify-start ">
      <div className="relative">
        <img
          className="object-cover rounded-xl !h-32 shadow-lg transition ease-in-out  active:scale-95 duration-200"
          // src={url_image}
          src={`https://drive.google.com/uc?export=view&id=${url_image.split("/d/")[1]?.split("/")[0]}`}
          alt=""
        />
        <button className="bg-gray-200/70 p-1 rounded-full absolute top-2 right-2 transition ease-in-out hover:scale-105 active:scale-95">
          <MdShare size={15} color="#222222" />
        </button>
        <button className="bg-amber-600 p-1 rounded-full absolute bottom-2 right-2 transition ease-in-out hover:scale-105 active:scale-95">
          <MdAddShoppingCart size={15} />
        </button>
      </div>
      <div></div>
      <p>{nome}</p>
      <div className="flex items gap-1 items-start justify-between  w-full">
        <p className="font-bold text-[#222222] text-[1.68rem] leading-none">
          {preco}
        </p>
        <div className="flex flex-col items-start">
          <p className="font-normal text-sm line-through leading-none">
            R$12,99
          </p>
          <p className="font-extrabold text-sm text-red-500 leading-none">
            -20%
          </p>
        </div>
      </div>
    </div>
  );
}
