$('#btnAddCart').on('click', function () {
    var amount = +$('#pizzaSize').val() + +$('#pizzaCrust').val() + +$('#pizzaTopping').val()
    var finalAmount = amount * +$('#pizzaQuantity').val()
    $('#subTotal').html(finalAmount)
    $('#cardCart').fadeIn(1000)
})

$('#flexSwitchCheckChecked').on('change', function () {
    if($('#flexSwitchCheckChecked').is(':checked')){
        $('#deliveryDetails').fadeIn(1000)
    }else{
        $('#deliveryDetails').fadeOut(1000)
    }
})

$('#btnCheckout').on('click', function () {
    $('#cardCheckout').fadeIn(1000)
    $('#orderSize').html($('#pizzaSize').find('option:selected').text())
    $('#orderCrust').html($('#pizzaCrust').find('option:selected').text())
    $('#orderTopping').html($('#pizzaTopping').find('option:selected').text())
    $('#orderQuantity').html($('#pizzaQuantity').val())
    var amount = +$('#pizzaSize').val() + +$('#pizzaCrust').val() + +$('#pizzaTopping').val()
    var finalAmount = amount * +$('#pizzaQuantity').val()
    var orderAmount = finalAmount
    if($('#flexSwitchCheckChecked').is(':checked')){
        orderAmount = finalAmount + 1000
    }
    $('#orderTotal').html(orderAmount)

})

function formValidation() {
    var name = document.getElementById("name").value;
    alert( name + " we have received your message thank you for your feedback");
  }