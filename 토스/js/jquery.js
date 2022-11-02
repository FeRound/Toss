$(function(){
  setTimeout(sectio1Event,500);// 섹션1 이벤트
  
  $(window).on("scroll",function(){
    let wHeight = $(window).height();
    let NowHeight = $(this).scrollTop()   
    console.log(`현재스크롤높이:${NowHeight}`) 

    if(NowHeight > 0){ //헤더 보더바텀 추가
      $("#header").addClass("fixedOn")
    }else{
      $("#header").removeClass("fixedOn")
    }

    // && ($(this).offset().top) + wHeight > NowHeight
    $("section").each(function(index){ // 특정 높이에 도달하면 active 클래스 추가
      console.log(`${index + 1}번 섹션 : ${$(this).offset().top}`)
      if(($(this).offset().top) < NowHeight){     
        //이구간에 들어오면 특정시간후 active 속성을 차례대로 추가    
        
        console.log($(this).find("aniOn").addClass("active"));


      }      
    })

  })
})





let sectio1Event = function(){ //섹션1 이벤트
  $("#section1 .container").addClass("active")
}


