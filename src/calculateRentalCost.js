/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceCar = 40;
  const fullPrice = priceCar * days;

  if (days < 3) {
    return fullPrice;
  }

  if (days >= 3 && days < 7) {
    return fullPrice - 20;
  }

  if (days >= 7) {
    return fullPrice - 50;
  }
}

module.exports = calculateRentalCost;
