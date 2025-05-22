import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import Product, { ProductListProps, ProductProps } from "./Product";

export default function SwipperProduct({ products }: ProductListProps) {
  return (
    <Swiper
      // instala módulos necessários
      // modules={[Navigation, Pagination, Autoplay, EffectFade]}
      spaceBetween={0} // espaço entre slides em px
      slidesPerView={2.3} // quantos slides exibidos por vez
      autoplay={{ delay: 3000 }} // troca automática a cada 3s
      loop // modo infinito
      // onSwiper={(swiper) => console.log('Swiper iniciado:', swiper)}
      // onSlideChange={() => console.log('Slide mudou')}
    >
      {products.map((product: ProductProps) => (
        <SwiperSlide key={product.id} className="ml-4">
          <Product
            id={product.id}
            nome={product.nome}
            categoria={product.categoria}
            preco={product.preco}
            url_image={product.url_image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
