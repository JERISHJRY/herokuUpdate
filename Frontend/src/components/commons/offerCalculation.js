export const offer =(price,off) => {
    let discount=price-((off/100)*price)
    return(discount)
  }