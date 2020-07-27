$(document).ready(function()
{
  $('#btnforHeading').on('click',function(event)
  {
    var ForHEADING = $("#exampleModal").find('input').val();
    $('main').append("<section><h1>"+ForHEADING+"</h1></section>");  // showing heading on screen
    
    $(".SltDrp option").remove();
    $(".SltDrp").append("<option>select Heading</option>");   

    $("section h1").each(function(key)
    {
      var str = $(this).text();
      key= key+1;
      $(".SltDrp").append('<option value="'+key+'">'+str+'</option>');
    });
});

  $('#btnforSubheading').on('click',function(event)
  {
    var forsubhead = $("#Subhead").val();
    var Sbhead = $(".SltDrp").val();
    console.log(Sbhead);
    $('main section:nth-child('+Sbhead+')').append('<h2>'+forsubhead+'</h2>'); 
  });
});

