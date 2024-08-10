

$('#next').bind('click', function () {
    $('#f1').hide();
    $('#f2').fadeIn(300);
    $("#noel-progressbar").animate({'width': '100%'}, 100 );
    $("#noel-progressbar").html("Step 2 &nbsp; 100%");

});

$('#prev').bind('click', function () {
    $('#f2').hide();
    $('#f1').fadeIn(300);
    $("#noel-progressbar").animate({width: '50%'}, 100 );
    $("#noel-progressbar").html("Step 1 &nbsp; 50%");
});

var filse = 1;

$('#more').bind('click', function(){
    if(filse==1){
        $('#noel-ro2').css({'opacity':'1'}, 300);
        $("#noel-inpu2").prop('disabled', false);
    }else{
        if(filse==2){
            $('#noel-ro3').css({'opacity':'1'}, 300);
            $("#noel-inpu3").prop('disabled', false);
        }else{
            if(filse==3){
                $('#noel-ro4').css({'opacity':'1'}, 300);
                $("#noel-inpu4").prop('disabled', false);
            }else{
                if(filse==4){
                    $('#noel-ro5').css({'opacity':'1'}, 300);
                    $("#noel-inpu5").prop('disabled', false);
                }
            }
        }
    }
    filse++;
});
//exampleFormControlInput

    function validateForm()
    {
        var a=document.getElementById('exampleFormControlInput1').value;
        var b=document.getElementById('exampleFormControlInput2').value;
        var c=document.getElementById('exampleFormControlInput3').value;
        if (a===null || a==="",b===null || b==="",c===null || c==="")
        {
            $('#f2').hide();
    $('#f1').fadeIn(300);
    $("#noel-progressbar").animate({width: '50%'}, 100 );
    $("#noel-progressbar").html("Step 1 &nbsp; 50%");
            Swal.fire({
  type: 'warning',
  title: 'please fill all required fields',
  showConfirmButton: true,
  timer: 3000
})
            return false;
        }
    }



