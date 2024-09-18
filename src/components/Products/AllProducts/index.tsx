import fetchProducts from "@/lib/fetchProducts";
import Thumbnail from "./Thumbnail";
import { Product } from "@/types/Product";

export default async function AllProducts({ query }: { query: string }) {
  const products = await fetchProducts();
  let filteredProducts = products;
  if (query && query.length > 0) {
    filteredProducts = products.filter((product: Product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  return filteredProducts.length > 0 ? (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
      {filteredProducts.map((product: Product) => (
        <Thumbnail key={product.id} product={product} />
      ))}
    </div>
  ) : (
    <div className="flex justify-center items-center">
      <p className="text-gray-500 text-xl">
        No products found matching your search query..
      </p>
    </div>
  );
}
