$(document).ready(function() {
  try {
    $('#timepicker').timepicker({
      timeFormat: 'h:mm p',
      interval: 60,
      minTime: '10:00am',
      maxTime: '7:00pm',
      defaultTime: '11',
      startTime: '10:00',
      dynamic: false,
      dropdown: true,
      scrollbar: true
    });
  } catch (err) {

  }

  $('.checkout').off('click').on('click', function(e) {
    var orders = [];

    $('.dish-name').each(function(i) {
      orders[i] = {};
      orders[i].name = $(this).text();
    });

    $('.price').each(function(i) {
      orders[i].price = $(this).text();
    });

    $('.quantity').each(function(i) {
      orders[i].quantity = $(this).text();
    });

    $.ajax({
      url: '/orders/checkout',
      data: {
        orders: orders,
        customer_id: customerId,
        time: $('#timepicker').val(),
      },
      method: 'post',
    });
  });

  $('.add-dish').off('click').on('click', function(e) {
    e.preventDefault();

    var id = $(this).data('id');
    var name = $(this).data('name');
    var price = $(this).data('price');

    var newRow = '<tr id="orders-dish-'+ id +'" data-id="'+ id +'"><td class="dish-name">'+ name +'</td><td><span class="price" data-id="'+ id +'">' + price + '</span></td><td><span class="quantity" data-id="'+ id +'">1</span> <a href="#" class="increment" data-id="'+ id +'">+</a><a href="#" class="decrement" data-id="'+ id +'">-</a></td><td><a href="#" class="remove-order" data-id="'+ id +'">Remove</a></td></tr>'

    $('table.orders tbody').append(newRow);

    $('.remove-order').off('click').on('click', function(e) {
      e.preventDefault();

      $('#orders-dish-'+ $(this).data('id')).remove();

      return false;
    });

    $('.increment').off('click').on('click', function(e) {
      e.preventDefault();

      var newQuantity = parseInt($('.quantity[data-id="'+ $(this).data('id') +'"]').text()) + 1;
      var newPrice = parseFloat($('.price[data-id="'+ $(this).data('id') +'"]').text()) * newQuantity;

      $('.quantity[data-id="'+ $(this).data('id') +'"]').text(newQuantity);
      $('.price[data-id="'+ $(this).data('id') +'"]').text(newPrice);

      return false;
    });

    $('.decrement').off('click').on('click', function(e) {
      e.preventDefault();

      var newQuantity = parseInt($('.quantity[data-id="'+ $(this).data('id') +'"]').text()) - 1;
      var newPrice = parseFloat($('.price[data-id="'+ $(this).data('id') +'"]').text()) * newQuantity;

      if (newQuantity <= 0) {
        return false;
      }

      $('.quantity[data-id="'+ $(this).data('id') +'"]').text(newQuantity);
      $('.price[data-id="'+ $(this).data('id') +'"]').text(newPrice);

      return false;
    });

    return false;
  });
});


