function placeTheOrder(orderNumber) {
  console.log('Customer order', orderNumber);

  cookAndDeliverFood(function() {
    console.log('Deliver Food', orderNumber);
});
}

// simulate 5 second long operation
function cookAndDeliverFood(wordRepresentingCallback) {
  setTimeout(wordRepresentingCallback, 5000);
};

placeTheOrder(1);
placeTheOrder(2);
placeTheOrder(3);
placeTheOrder(4);
placeTheOrder(5);





