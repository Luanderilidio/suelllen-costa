import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiFileList3Fill } from "react-icons/ri";
import { MdAccessTimeFilled } from "react-icons/md";
import Product from "../components/Product";
import { useProducts } from "../hooks/useProduct";
import SwipperProduct from "../components/SwipperProduct";

export default function Home() {

  const { products, loading, error } = useProducts()

  console.log("products",products)
  return (
    <div className="grid grid-cols-12 font-Montserrat antialiased">
      <div
        className="col-span-12  border-red-500 bg-cover min-h-screen flex flex-col items-center justify-between p-4 relative"
        style={{
          backgroundImage: `url(https://img.freepik.com/fotos-premium/uma-rosa-rosa-com-um-centro-amarelo-e-um-centro-amarelo_221375-2799.jpg?w=740)`,
        }}
      >
        <div className="z-0 absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-b-lg" />
        <div className="w-full z-10">
          <div className="col-span-12 w-full border bg-gray-300 rounded-lg flex items-center justify-start gap-2 p-3">
            <MdAccessTimeFilled size={40} />
            <div>
              <p className="font-normal text-sm">
                Nosso horário de atendimento
              </p>
              <p className="font-bold leading-none">07h ás 12h e 13h ás 17h </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center z-10">
          <img
            src="https://cdn-front.freepik.com/images/ai/image-generator/gallery/65446.webp"
            className=" w-52 h-52 object-cover rounded-full outline-2 outline-white outline-offset-2 border-4 shadow-lg shadow-black/30 transition hover:scale-105 active:scale-95"
            alt=""
          />
          <p className="font-bold text-3xl font-Montserrat text-white mt-2">
            Luander Ilidio{" "}
          </p>
          <p className="font-normal text-xl font-Montserrat text-white">
            Web Designer | Video Maker
          </p>
          <div className="flex items-center justify-center gap-5 mt-3">
            <BsInstagram
              size={25}
              color="#FFFFFF"
              className="transition hover:scale-110 active:scale-95"
            />
            <FaFacebook
              size={25}
              color="#FFFFFF"
              className="transition hover:scale-110 active:scale-95"
            />
            <FaTiktok
              size={25}
              color="#FFFFFF"
              className="transition hover:scale-110 active:scale-95"
            />
            <FaXTwitter
              size={25}
              color="#FFFFFF"
              className="transition hover:scale-110 active:scale-95"
            />
          </div>
          <div className="flex items-center justify-center gap-3 mt-5">
            <button className="flex items-center justify-center text-white gap-2 font-bold py-2 px-4 border-2 rounded-full leading-none bg-amber-600 transition hover:scale-105 active:scale-95 shadow-lg">
              <RiFileList3Fill size={25} />
              <p className="text-lg font-Montserrat">Catalogo</p>
            </button>
            <button className="flex items-center justify-center text-white gap-2 font-bold py-2 px-4 border-2 rounded-full leading-none bg-green-600 transition hover:scale-105 active:scale-95 shadow-lg">
              <IoLogoWhatsapp size={25} />
              <p className="text-lg font-Montserrat">Whatsapp</p>
            </button>
          </div>
          <div className="col-span-12 relative mt-5">
            <p className="text-sm text-center text-white font-bold">
              Minha localização
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d958.4907843543662!2d-57.68215698066078!3d-16.067402573803413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939aff000381fba7%3A0x7244c855dbe22b74!2sFuner%C3%A1ria%20Park%20dos%20Ip%C3%AAs!5e0!3m2!1spt-BR!2sbr!4v1739562095522!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              loading="lazy"
              className="rounded-xl !w-full h-28"
            />
            {/* <button className="bg-gradient-to-r from-blue-800 to-primary rounded-full absolute px-3 py-2 flex items-center justify-center gap-2 text-white -bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition ease-in-out hover:scale-105 active:scale-95 shadow-black/60 shadow-lg">
              <FaMapMarkerAlt />
              <p className="font-bold ">Abrir Mapa </p>
            </button> */}
          </div>
        </div>
      </div>
      <div className="col-span-12 w-full  border-red-500 flex flex-col items-center justify-between py-4 relative ">
        <div className="w-full flex items-center justify-start gap-3 px-4">
          <p className="text-2xl font-semibold text-[#222]">Joias</p>
          <div className="w-full bg-black/20 border-b border-black/10 opacity-25 " />
        </div>
        <SwipperProduct products={products} />
      </div>
    </div>
  );
}
