export default function Price({
  price,
  discountedPrice,
}: {
  price: number;
  discountedPrice: number;
}) {
  return (
    <div className="">
      {discountedPrice < price ? (
        <div className="flex flex-col  ">
          <span className="line-through text-sm text-gray-500">
            {price} NOK
          </span>
          <span className="text-sm  font-semibold">{discountedPrice} NOK</span>
        </div>
      ) : (
        <>
          <div className="h-5"></div>
          <div className="text-sm  font-semibold ">{price} NOK</div>
        </>
      )}
    </div>
  );
}
