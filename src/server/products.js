export const fetchProducts = async () => {
  try {
    const response = await fetch('/products.json')
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error.message)
  }
}
