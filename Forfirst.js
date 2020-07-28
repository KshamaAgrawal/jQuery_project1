$(document).ready(function()
{
  $('.btnforHeading').on('click',function(event){
    var ForHEADING = $("#exampleModal").find('input').val();
    $('main').append("<section><h1>"+ForHEADING+"</h1></section>");         // showing heading on screen
    
    $(".SltDrp option").remove();                                           // removing select option(select heading)
    $(".SltDrp").append("<option>select Heading</option>");   

    $("main section h1").each(function(key){                                // loop on heading 
      var str = $(this).text();                                            // finding heading text
      key= key+1;
      $(".SltDrp").append('<option value="'+key+'">'+str+'</option>');    //appending key to heading select
    });
  });

  $('.btnforSubheading').on('click',function(event)
  {
    var forsubhead = $(".Subhead").val();                                            // finding subheading input value
    var Sbhead = $(".SltDrp").val();                                                   // finding select value like 1,2,3,4...
    $('main section:nth-child('+Sbhead+')').append('<article><h2>'+forsubhead+'</h2></article>');  // appending subhead accord to head
  }) 
    $(".SltDrp").change(function(){
      var forform = $(this).val();                                     // storing heading option value in forform variable

      $(".ForADD option").remove();                                    // removing subheading option (select suheading)
      $(".ForADD").append("<option>select SubHeading</option>")  
  

     $('main section:nth-child('+forform+') article h2').each(function(key){  //loop on heading option value
      var foradd = $(this).text();                                            // assign subheading text in foradd variable
      key=key+1;
      $(".ForADD").append('<option value="'+key+'">'+foradd+'</option>');     // appending subheading text in addform button subheading dropdown
     }) 
  });
});

