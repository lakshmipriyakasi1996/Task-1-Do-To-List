// $(document).ready(function () {
//     $("#input").change(function () { 
//        var input= $(this).val();
//        $("ul").append("<li>" +input + "</li>");
//        $(this).val('');
       
//     });
    
// });
$(document).ready(function () {
    $("#btn").click(function () { 
      var input = $("#text").val();
      $("#area").append( "<li> <input type='checkbox' id = 'check'>" + input + " </li>");
      $("#text").val('');
    });

    $("#area").on ('click', '#check',function () { 
     if($(this).is(':checked')){
      $(this).parent().css('text-decoration','line-through')
    }
      else{
        $(this).parent().css('text-decoration','none ')
      }

    });
});


