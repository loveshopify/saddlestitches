/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 */
/*
  $(document).on("click","#customize_checkbox",function() {
    if($(this).prop("checked") == true){
      $('.dm-customize-options').slideDown();
//       $('body').addClass('popup-opened');
    }else if($(this).prop("checked") == false){
      $('.dm-customize-options').slideUp();
//       $('body').removeClass('popup-opened');
    }
  });
  */