

$(document).on("click","#buscar",function(){
  $.ajax({
    type:"get",//como vou enviar
    url: "http://viacep.com.br/ws/"+$("#cep").val()+"/json/", //para onde enviar
    success: function(data){  //executar comando caso funcione
      var conteudo1;
      var conteudo2;
      var conteudo3;
      var conteudo4;

      conteudo1 = data.logradouro;
      conteudo2 = data.bairro;
      conteudo3 = data.localidade;
      conteudo4 = data.uf;

      $("#estado").val(conteudo4);
      $("#cidade").val(conteudo3);
      $("#bairro").val(conteudo2);
      $("#rua").val(conteudo1);
    },
    error: function(){
      alert("Error!"); //executar comando caso não funcione
    }
    })
  
});

