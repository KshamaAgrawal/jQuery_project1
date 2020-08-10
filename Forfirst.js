$(document).ready(function()
{
  var formArray = [];
  
  $('.Formhead').submit(function(event){
    event.preventDefault()                                                // it will hold data if you press enter kry data will show you and if you don't put this then data will disable when you press enter key
    var ForHEADING = $("#exampleModal").find('input').val();
    $('main').append('<section><h1>'+ForHEADING+'<button class="crossbtn" onclick="myfunction(this)">X</button></h1></section>');         // showing heading on screen

    $(".SltDrp option").remove();                                           // removing select option from subheading dropdown (select heading)
    $(".SltDrp").append("<option>select Heading</option>");   

    $(".head_in_form option").remove();                                     // removing select option from add_form dropdown (select heading)
    $(".head_in_form").append("<option>select Heading</option>");   

    $("main section h1").each(function(key){                                   // loop on heading 
      var Headtxt = $(this).text().replace('X','');                            // finding heading text and also replace cross sign in space 
      key= key+1;
      $(".SltDrp").append('<option value="'+key+'">'+Headtxt+'</option>');        //appending heading text to subheading select heading dropdown
      $(".head_in_form").append('<option value="'+key+'">'+Headtxt+'</option>');   // appending heading text to addform selct haeding dropdown
    });
    formArray.push({ 'key':ForHEADING,'subheading':[] });
    console.log(formArray);

    localStorage.setItem('ForHEADING', JSON.stringify(formArray))

    $(".Formhead").trigger('reset');                                               // it will remove heading from input type heading after saving heading
  });

  $('.FormSubHead').submit(function(event){
    event.preventDefault()                                                       // it will hold data if you press enter kry data will show you and if you don't put this then data will disable when you press enter key
    var subheadValue = $(".Subhead").val();                                      // finding subheading input value
    var Sh_Opt_Val = $(".SltDrp").val();                                         // finding select value like 1,2,3,4...
    $('main section:nth-child('+Sh_Opt_Val+')').append('<article><h2>'+subheadValue+'<button onclick="myfunction(this)">X</button></h2></article>');  // appending subhead accord to head
    
    formArray[Sh_Opt_Val-1].subheading.push({ 'title' :subheadValue });
    console.log(formArray);

    localStorage.setItem('subheadValue', JSON.stringify(formArray))
  });

  $(".head_in_form").change(function(){
    var forform = $(this).val();                                     // storing heading option value in forform variable
      
    $(".ForADD option").remove();                                    // removing subheading option (select suheading)
    $(".ForADD").append("<option>select SubHeading</option>")  
  
    $('main section:nth-child('+forform+') article h2').each(function(key){       //loop on heading option value
      var foraddForm = $(this).text().replace('X','');                             // assign subheading text in foradd variable and also replace cross sign in space
      key=key+1;
      $(".ForADD").append('<option value="'+key+'">'+foraddForm+'</option>');     // appending subheading text in addform button subheading dropdown
    }); 
  });

  $('.btnforaddForm').on("click",function(event){
    // event.preventDefault()                                 // it will hold data if you press enter kry data will show you and if you don't put this then data will disable when you press enter key
    var gethead     = $(".head_in_form").val();               // getting heading value in add_form 
    var getsubhead  = parseInt($(".ForADD").val());           // getting subheading value in add_form
    var input_type  = $(".form_input").val();                 // getting input type value in add_form
    var getlabel    = $(".lvl_input").val();                  // getting level value in add_form
    var getname     = $(".nm_input").val();                   // getting name value in add_form
    var getplc_hldr = $(".plc_input").val();                  // getting placeholder value in add_form  
    var getclass    = $(".cls_input").val();                  // getting class value in add_form
    var getvalue    = $(".val_input").val();                  // getting value of value in add_form
    var getoptns    = $(".opn_input").val();                  // getting option value in add_form
    getsubhead=getsubhead+1
  
    if(input_type == 'textarea')                                   // condition for textarea if we select textarea in input type dropdown then it will show textarea
    {
      $('main section:nth-child('+gethead+') article:nth-child('+getsubhead+')').append('<p><label>'+getlabel+'</label><textarea rows="5" cols="30" name="'+getname+'" placeholder="'+getplc_hldr+'" class="'+getclass+'" value="'+getvalue+'"></textarea><button class="crossbtn" onclick="fntionForInput(this)">X</button></p>');   //and it will show textarea if condition is true and also removing the textarea with cross btn 
    }
    else if(input_type == 'checkbox')
    {
      var forchkbox = getoptns.split(',');
      
      $(forchkbox).each(function(key, value){
        $('main section:nth-child('+gethead+') article:nth-child('+getsubhead+')').append('<p><label>'+value+'</label><input type="'+input_type+'" name="'+value+'" class="'+value+'" value = "'+value+'"><button class="crossbtn" onclick="fntionForInput(this)">X</button></p>'); //and it will show checkbox if condition is true and also removing the checkbox with cross btn 
      })
    }
    else if(input_type == 'radio')
    {
      var forrdbtn = getoptns.split(',');
     
      $(forrdbtn).each(function(key){
        $('main section:nth-child('+gethead+') article:nth-child('+getsubhead+')').append('<p><label>'+forrdbtn[key]+'</label><input type="'+input_type+'" name="'+getname+'" class="'+getclass+'" value = "'+getvalue+'"><button class="crossbtn" onclick="fntionForInput(this)">X</button></p>'); //and it will show radio if condition is true and also removing the radio with cross btn 
      })
    }
    else if(input_type == 'select')
    {
      var forselt = getoptns.split(',');
      console.log(forselt);
      var itsForP = $('<p><label>'+getlabel+'</label></p>');
      
      var forSelect = $('<select><option>select</option>').appendTo(itsForP);
     
      for(var i = 0; i < forselt.length; i++){
        $('<option value="'+forselt[i]+'">'+forselt[i]+'</option>').appendTo(forSelect);

        if(forselt[i] == getvalue)
        // var forSelect = $('<select><option>'+getvalue+'</option></select>').appendTo(itsForP);
        $("select [value='{getvalue}']").prop('selected', true);
      }
      $('main section:nth-child('+gethead+') article:nth-child('+getsubhead+')').append(itsForP);
      $('<button class="crossbtn" onclick="fntionForInput(this)">X</button>').appendTo(itsForP);
    }
    else if(input_type == 'button')
    {
      $('main section:nth-child('+gethead+') article:nth-child('+getsubhead+')').append('<p><input type="'+input_type+'" name="'+getname+'" placeholder="'+getplc_hldr+'" class="'+getclass+'" value="'+getvalue+'"><button class="crossbtn" onclick="fntionForInput(this)">X</button></p>'); //and it will show button if condition is true and also removing the button with cross btn 
    }
    else
    {  
      $('main section:nth-child('+gethead+') article:nth-child('+getsubhead+')').append('<p><label>'+getlabel+'</label><input type="'+input_type+'" name="'+getname+'" placeholder="'+getplc_hldr+'" class="'+getclass+'" value="'+getvalue+'"><button class="crossbtn" onclick="fntionForInput(this)">X</button></p>'); //and it will show text,number,date,email if condition is true and also removing the text,number,date,email with cross btn 
    }

    if($(".disable").is(":checked"))
    {
      var fordisable = input_type;
      
      if(input_type == 'text' || input_type== 'button' || input_type == 'checkbox' || input_type == 'radio' || input_type == 'date' || input_type == 'number' || input_type == 'email')
      {
        fordisable = 'input';             
      }
      $('main section:nth-child('+gethead+') article:nth-child('+getsubhead+') p:last-child '+fordisable).attr('disabled','disabled');
    }

    if($(".readonly").is(":checked"))
    {
      var forrdonly = input_type;
      
      if(input_type == 'text' || input_type== 'button' || input_type == 'checkbox' || input_type == 'radio' || input_type == 'date' || input_type == 'number' || input_type == 'email')
      {
        forrdonly = 'input'; 
      }
      $('main section:nth-child('+gethead+') article:nth-child('+getsubhead+') p:last-child '+forrdonly).attr('readonly', true);
    }

    if($(".required").is(":checked"))
    {
      var forrequired = input_type;
      
      if(input_type == 'text' || input_type== 'button' || input_type == 'checkbox' || input_type == 'radio' || input_type == 'date' || input_type == 'number' || input_type == 'email')
      {
        forrequired = 'input'; 
      }
      $('main section:nth-child('+gethead+') article:nth-child('+getsubhead+') p:last-child '+forrequired).attr('required', true);
    }
    $(".FormAddform").trigger('reset');                              // it will remove all form data from add_form after saving the data
  }); 
});

function myfunction(thiss){
  $(thiss).parent().parent().remove();                          // it will remove heading and subheading from browser
}
function fntionForInput(thiss){
  $(thiss).parent().remove();                                  // it will remove all input type from browser
}