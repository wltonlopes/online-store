export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const responseJson = await response.json();
  return responseJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId === null) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const responseJson = await response.json();
    return responseJson;
  }
  if (query === null) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    const responseJson = await response.json();
    return responseJson;
  }
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const responseJson = await response.json();
  return responseJson;
}
