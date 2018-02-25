 



<script type="text/javascript">
  
function enviar(){
      var nome =document.getElementById("nome").value;
      var tema =document.getElementById("tema").value;
      var idade =document.getElementById("idade").value;
  	  var sexo =document.getElementById("sexo").value;
	  var Caixa =document.getElementById("Caixa").value;
	  var Quantidade =document.getElementById("Quantidade").value;

  if(nome.lenght <= 5 || nome.lenght >30)
  alert('Digite um nome válido');
else {
  if(tema.lenght <= 6 || tema.lenght >15 )
    alert('tema inválido');
  else
  alert('Olá cliente. seu pedido foi enviado com sucesso\nnome: '+nome +'\nidade: '+idade +'\nsexo: '+sexo +'\ntema: '+tema +'\nCaixa: '+Caixa +'\nQuantidade: '+Quantidade );

     }    
    } 
</script>

 

