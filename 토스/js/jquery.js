$(function(){

  $(window).on("scroll",function(){ // 헤더색상추가
    let fiexdOn = $(this).scrollTop()
    if(fiexdOn > 0){
      $("#header").addClass("fixedOn")
    }else{
      $("#header").removeClass("fixedOn")
    }
  })


  
})