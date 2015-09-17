
var formAjaxSubmit = function(form, modal) {
   $(form).submit(function (e) {
      e.preventDefault();
      $.ajax({
          type: $(this).attr('method'),
          url: $(this).attr('action'),
          data: $(this).serialize(),
          success: function (xhr, ajaxOptions, thrownError) {
              if ( $(xhr).find('.errorlist').length > 0 ) {
               $(modal).find('.modal-body').html(xhr);
               formAjaxSubmit(form, modal);
           } else {
               $(modal).modal('toggle');
           }
       },
       error: function (xhr, ajaxOptions, thrownError) {
             }
         });
  });
}
$("#myModal").on("show.bs.modal", function(e) {
    var link = $(e.relatedTarget);
    $(this).find(".modal-body").load('/login',function () {
      formAjaxSubmit('#form-modal-body form', '#myModal')
    });
});

$('#myModal').on('hidden.bs.modal', function () {
    window.location.reload(true);
});
