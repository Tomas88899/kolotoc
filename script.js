
let arr = []
let lava = 1
  let stred = 2
  let prava = 3


  $("#"+lava).css({left: -20 + "%" ,top: 0 + "%",transform: "scale(0.8)"}).show()
  $("#"+stred).removeAttr('style').show()
  $("#"+prava).css({left:"",right: -43 + "%" ,top: 0 + "%",transform: "scale(0.8)"}).show()

$(".sliderPrava").on("click" , function test(){
 
  lava++
  stred++
  prava++
  $("#"+(lava-1)).removeAttr('style')
  $("#"+stred).removeAttr('style').show()
  if(prava > 6){
    $("#"+lava).css({left: -20 + "%" ,top: 0 + "%",transform: "scale(0.8)"}).show()
    $("#"+stred).removeAttr('style').show()
    $("#1").css({left:"",right: -43 + "%" ,top: 0 + "%",transform: "scale(0.8)"}).show()
    prava = 1
  }else if(stred > 6){
    $("#"+lava).css({left: -20 + "%" ,top: 0 + "%",transform: "scale(0.8)"}).show()
    $("#1").removeAttr('style').show()
    $("#2").css({left:"",right: -43 + "%" ,top: 0 + "%",transform: "scale(0.8)"}).show()
    stred=1
  }else if(lava > 6){
    $("#1").css({left: -20 + "%" ,top: 0 + "%",transform: "scale(0.8)"}).show()
    $("#2").removeAttr('style').show()
    $("#3").css({left:"",right: -43 + "%" ,top: 0 + "%",transform: "scale(0.8)"}).show()
    lava = 1
  }else{
      $("#"+lava).css({left: -20 + "%" ,top: 0 + "%",transform: "scale(0.8)"}).show()
      $("#"+stred).removeAttr('style').show()
      $("#"+prava).css({left:"",right: -43 + "%" ,top: 0 + "%",transform: "scale(0.8)"}).show()

  }
})

$(".sliderLava").on("click" , function test(){
 
  lava--
  stred--
  prava--
  $("#"+(prava+1)).removeAttr('style')
  
  if(lava < 1){
    $("#6").css({left: -20 + "%" ,top: 0 + "%",transform: "scale(0.8)"}).show()
    $("#"+stred).removeAttr('style').show()
    $("#"+prava).css({left:"",right: -43 + "%" ,top: 0 + "%",transform: "scale(0.8)"}).show()
    lava = 6
  }else if(stred < 1){
    $("#5").css({left: -20 + "%" ,top: 0 + "%",transform: "scale(0.8)"}).show()
    $("#6").removeAttr('style').show()
    $("#"+prava).css({left:"",right: -43 + "%" ,top: 0 + "%",transform: "scale(0.8)"}).show()
    stred = 6
  }else if(prava < 1){
    $("#4").css({left: -20 + "%" ,top: 0 + "%",transform: "scale(0.8)"}).show()
    $("#5").removeAttr('style').show()
    $("#6").css({left:"",right: -43 + "%" ,top: 0 + "%",transform: "scale(0.8)"}).show()
    prava = 6
  }else{
      $("#"+lava).css({left: -20 + "%" ,top: 0 + "%",transform: "scale(0.8)"}).show()
      $("#"+stred).removeAttr('style').show()
      $("#"+prava).css({left:"",right: -43 + "%" ,top: 0 + "%",transform: "scale(0.8)"}).show()

  }
})

