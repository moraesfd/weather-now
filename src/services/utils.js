export default {
  orderListByArray(listToOrder, arrayBase) {
    let filteredArray = []
    arrayBase.map((itemBase) => {
      var filteredItem = listToOrder.filter((itemList) => {
        return itemBase == itemList.location
      })
      filteredArray.push(filteredItem)
    })
    return filteredArray
  }
}
