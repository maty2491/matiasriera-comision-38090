export const customFetch = (products) => {
    return new Promise((resolve, rejeact) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)

    })
}