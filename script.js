$(document).ready(function(){

  //Exemplo 1
  //attr("atributo","valor do atributo")
  // $("img").attr("src","./img/cellep_2.jpg")

  //Exemplo 2
  // $("#clicar").click(function(){
  //   $("img").attr("src","./img/cellep_2.jpg")
  // })

  //Exemplo 3
  // $("#clicarDois").click(function(){
  //   $("img").attr("border","50")
  //   $("img").attr("src","./img/cellep_2.jpg")
  // })

  // Exemplo 4
  // $("#clicarDois").click(function(){
  //   var valorA = $("img").css("border")

  //   console.log(valorA)
  //   $("h3").html(valorA)

  // })


  // Exemplo 5
  $("#clicar").click(function(){
    $(".divisao").attr("style","height: 200px; width: 200px; background-color: red;")
  })

})