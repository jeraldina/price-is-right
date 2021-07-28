const calculateItemTotal = item => {
  const unformattedTotal = item.quantity * (item.price * (1 - item.discount))
  const total = parseInt(unformattedTotal * 100) / 100

  return { ...item, total }
}

function calculateTotal(items) {
  return items.map(calculateItemTotal)
}
module.exports = calculateTotal
