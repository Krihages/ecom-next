export default function Price({
  price,
  discountedPrice,
}: {
  price: number;
  discountedPrice: number;
}) {
  return (
    <div className="py-8">
      {discountedPrice < price ? (
        <div className="flex flex-col  ">
          <div className=" ">
            Price:{" "}
            <span className="font-bold text-muted-foreground line-through">
              {price} NOK
            </span>
          </div>

          <span className="  ">
            Now: <span className="font-bold ">{discountedPrice} NOK</span>
          </span>
        </div>
      ) : (
        <div className="text-lg font-semibold">{price} NOK</div>
      )}
    </div>
  );
}
