$(function(){  
  setTimeout(section1EventOn,700);//메인배너 실행 함수
  $(window).on("scroll",windowScrollEvent) // 스크롤시 실행 함수
  HomeSliderOn() // 섹션5 슬라이드 함수
})

function HomeSliderOn(){ 
    let number = 1;    
    setInterval(function(){     
      
      number++;
      if(number == 4){
        number = 1;
      }
    },4000); 
}



function section1EventOn(){
  $("#section1 .container").addClass("active")
}

function windowScrollEvent(){
  //(NowHeight / ($(document).height() - $(window).height())) * 100; //전체 스크롤 퍼센트
  let wHeight = $(window).height(); // 웹 높이
  let NowHeight = $(this).scrollTop(); //현재 스크롤 높이
  let section7Height = $("#section8").offset().top - $("#section7").offset().top // 섹션7 높이
  let section7Offset = $("#section7").offset().top // 섹션7 위치
  let section8Offset = $("#section8").offset().top // 섹션8 위치

  console.log(`현재스크롤높이:${NowHeight}`) 
 
  


  if(NowHeight > 0){ //헤더 보더바텀 추가
    $("#header").addClass("fixedOn")
  }else{
    $("#header").removeClass("fixedOn")
  }

  $("section").each(function(index,e){ // 특정 높이에 도달하면 active 클래스 추가
    console.log(`${index + 1}번 섹션 : ${$(this).offset().top}`)
    if(($(this).offset().top - 600) < NowHeight){     
      $(this).addClass("active");
    }  
  })



  if(section7Offset <= NowHeight && section8Offset >= NowHeight){ // 섹션7 구역 안으로 스크롤 들어왔을때 작동
    let percent = (NowHeight  / (section7Height - wHeight)) * 100;
    console.log(percent);
  }


  

}




