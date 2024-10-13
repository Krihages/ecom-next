export default async function fetchProducts(
  id: string = "",
  url: string = process.env.API_URL as string
) {
  try {
    const res = await fetch(`${url}${id}`);
    const data = await res.json();

    return [data.data, null];
  } catch (error) {
    console.error(error);
    return [null, error];
  }
}
