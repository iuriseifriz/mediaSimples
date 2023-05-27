$(document).ready(function(){
    
    var input = '<label><input type="number" name="number" style="margin-left: 30px;" style="margin-bottom: 0px;"/> <a href="#" class="remove">X</a></label>';

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

    /*if (Number.isNaN(media) return false){
        res.innerHTML = `erro`
        else{
            res.innerHTML = `${media}`
        }

    }
}
*/

    res.innerHTML = `${media}`

}



    /*if (n1.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados')
} 
*/