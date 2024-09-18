export default async function fetchProducts(
  id: string = "",
  url: string = "https://v2.api.noroff.dev/online-shop/"
) {
  const res = await fetch(`${url}${id}`);
  const data = await res.json();

  return data.data;
}
