import Section from "@/components/Section";
import fetchProducts from "@/lib/fetchProducts";
import ProductImg from "./ProductImg";
import ProductDetails from "./ProductDetails";
import ProductReviews from "@/components/ProductReviews";
import ErrorFetch from "@/components/ErrorFetch";

export default async function Product({ id }: { id: string }) {
  const [product, error] = await fetchProducts(id);

  if (error) {
    return <ErrorFetch error={error} />;
  }

  return (
    <>
      <Section>
        <div className="flex flex-col lg:flex-row ">
          <div className="flex-1 max-w-[600px] w-full  mx-auto lg:max-w-full">
            <ProductImg
              image={product.image}
              onSale={product.price - product.discountedPrice}
            />
          </div>
          <div className="flex-1 max-w-[600px] w-full   mx-auto lg:max-w-full">
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
