export const customFetch = (products, stallTime = 0, id, field = 'id') => {
  return new Promise((resolve, rejeact) => {
    setTimeout(() => {
      try {
        if (products) {
          if (id) {
            let prod = null
            if (field == "id") {
              prod = products.find((comic) => comic[field] === id)
            } else {
              prod = products.filter((comic) => comic[field] === id)
            }
            resolve(prod)
          } else {
            resolve(products)
          }
        }
      } catch (error) {
        rejeact(error)
      }
    }, stallTime)
  })
}