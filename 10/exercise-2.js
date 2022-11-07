const order = {};

// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//   console.log('City is required');
// }
const CustomerCity = order.customer?.address?.city
if(CustomerCity === undefined){
  console.log("City is required")
}