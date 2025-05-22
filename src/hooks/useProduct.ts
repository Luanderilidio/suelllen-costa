import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productsServices";
import { ProductProps } from "../components/Product";


 
export const useProducts = ( ) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getAllProducts();
      setProducts(data);
       
    } catch (err: any) {
      setError(err.message || "Erro ao buscar articles");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []); 

  return { products, loading, error };
};
