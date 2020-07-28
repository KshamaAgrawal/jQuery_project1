$(document).ready(function()
{
  $('.btnforHeading').on('click',function(event){
    var ForHEADING = $("#exampleModal").find('input').val();
    $('main').append("<section><h1>"+ForHEADING+"</h1></section>");         // showing heading on screen
    
    $(".SltDrp option").remove();                                           // removing select option(select heading)
    $(".SltDrp").append("<option>select Heading</option>");   

    $(".head_in_form option").remove();                                           // removing select option(select heading)
    $(".head_in_form").append("<option>select Heading</option>");   


    $("main section h1").each(function(key){                                // loop on heading 
      var Headtxt = $(this).text();                                            // finding heading text
      key= key+1;
      $(".SltDrp").append('<option value="'+key+'">'+Headtxt+'</option>');        //appending heading text to subheading select heading dropdown
     $(".head_in_form").append('<option value="'+key+'">'+Headtxt+'</option>');   // appending heading text to addform selct haeding dropdown
    });
  });

  $('.btnforSubheading').on('click',function(event)
  {
    var subheadValue = $(".Subhead").val();                                            // finding subheading input value
    var Sh_Opt_Val = $(".SltDrp").val();                                                   // finding select value like 1,2,3,4...
    $('main section:nth-child('+Sh_Opt_Val+')').append('<article><h2>'+subheadValue+'</h2></article>');  // appending subhead accord to head
  })
    $(".head_in_form").change(function(){
      var forform = $(this).val();                                     // storing heading option value in forform variable

      $(".ForADD option").remove();                                    // removing subheading option (select suheading)
      $(".ForADD").append("<option>select SubHeading</option>")  
  

     $('main section:nth-child('+forform+') article h2').each(function(key){  //loop on heading option value
      var foraddForm = $(this).text();                                            // assign subheading text in foradd variable
      key=key+1;
      $(".ForADD").append('<option value="'+key+'">'+foraddForm+'</option>');     // appending subheading text in addform button subheading dropdown
     }); 
  });

  $('.btnforaddForm').on('click',function(event){
    var gethead     = $(".head_in_form").val();               //getting heading value in add_form 
    var getsubhead  = parseInt($(".ForADD").val())                    // getting subheading value in add_form
    var getlabel    = $(".lvl_input").val();                  // getting level value in add_form
    var getname     = $(".nm_input").val();                   // getting name value in add_form
    var getplc_hldr = $(".plc_input").val();                  // getting placeholder value in add_form  
    var getclass    = $(".cls_input").val();                  // getting class value in add_form
    var getvalue    = $(".val_input").val();                  // getting value of value in add_form
    var getoptns    = $(".opn_input").val();                  // getting option value in add_form
     getsubhead=getsubhead+1
    console.log('main section:nth-child('+gethead+') article:nth-child('+getsubhead+')')
    $('main section:nth-child('+gethead+') article:nth-child('+getsubhead+')').append('<label>'+getlabel+'</label><input name="'+getname+'" placeholder="'+getplc_hldr+'" class="'+getclass+'" value="'+getvalue+'">');
  
  })

  
});