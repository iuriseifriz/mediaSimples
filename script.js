$(document).ready(function(){
// Modelo de inputs adicionais
    var input = '<label><input type="number" name="number" style="margin-left: 30px;" style="margin-bottom: 0px;"/> <a href="#" class="remove">X</a></label>';
//Código de adição de inputs
    $("input[name='add']").click(function( e ){
      $('#inputs_adicionais').append( input );
    });
  
    $('#inputs_adicionais').delegate('a','click',function( e ){
      e.preventDefault();
      $( this ).parent('label').remove();
    });
  
  });

function contar(){
    var allInputs = document.querySelectorAll('input[type=number]');
    var soma=0;

    for(var i=0; i< allInputs.length; i++){
        var value=allInputs[i].value;
        soma+=parseInt(value)
    }
    var media= soma/parseInt(allInputs.length);

    res.innerHTML = `${media}`

}
