const ShoppingCart = [];
const shoppingCart = [];

module.exports.getCart = () => {
    // spread spreading cart into new array, can still change object reference in array
    return shoppingCart.slice();
}

module.exports.newItem = (name, price, qty) => {
    if (qty === undefined) {
        qty = 1
    }
    return { name, price, qty }
    // var item = {
    //     name: newItem,
    //     price: newItemPrice
    // }
    //
    // return item;

    // var itemList = []
    // var item = {}
    // item[newItem] = newItemPrice
    // itemList.push(item)
    // return itemList
}
module.exports.addItem = (item) => {
    for(index in shoppingCart) {
        if(shoppingCart[index].name === item.name) {
            shoppingCart[index].qty++
            return
        }
    }
    shoppingCart.push(item)
}

module.exports.getQty = () => {
    return shoppingCart.reduce((acc, item) => {
        return acc + item.qty
    }, 0)
}

module.exports.removeItem = (item) => {
    if(shoppingCart.length > 0) {
        for(index in shoppingCart) {
            if(shoppingCart[index].name === item.name) {
                delete shoppingCart[index]
            }
        }
    }
}

module.exports.clearCart = () => {
    shoppingCart.length = 0
}