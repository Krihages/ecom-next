import Section from "@/components/Section";
import fetchProducts from "@/lib/fetchProducts";
import ProductImg from "./ProductImg";
import ProductDetails from "./ProductDetails";
import ProductReviews from "@/components/ProductReviews.tsx";

export default async function Product({ id }: { id: string }) {
  const product = await fetchProducts(id);
  console.log(product);
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <>
      <Section>
        <div className="flex flex-col lg:flex-row ">
          <div className="flex-1">
            <ProductImg
              image={product.image}
              onSale={product.price - product.discountedPrice}
            />
          </div>
          <div className="flex-1">
            <ProductDetails product={product} />
          </div>
        </div>
      </Section>
      {product.reviews && product.reviews.length > 0 && (
        <Section>
          <ProductReviews reviews={product.reviews} />
        </Section>
      )}
    </>
  );
}
