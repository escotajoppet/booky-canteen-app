$(document).ready(function() {
  if (typeof dishes !== 'undefined') {
    $('.dishes').select2();

    const dishesId = dishes.map(function(dish) {
      return dish.id
    });

    $('.dishes').val(dishesId).trigger('change');
  }
});
