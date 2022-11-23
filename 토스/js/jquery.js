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
   
  if(NowHeight > 0){ //헤더 border-bottom 추가
    $("#header").addClass("fixedOn")
  }else{
    $("#header").removeClass("fixedOn")
  }

  $("section").each(function(index,e){ // 특정 높이에 도달하면 active 클래스 추가
    console.log(`${index + 1}번 섹션 : ${$(this).offset().top}`)
    if(($(this).offset().top - (wHeight * 1)) < NowHeight){     
      $(this).addClass("active");
    }  
  })
  
  //섹션 7 이벤트
  let section7Op1Start = section7Offset + (wHeight * 0.35);
  let section7Op1End = section7Offset + (wHeight * 0.45);
  if(section7Op1Start <= NowHeight && section7Op1End >= NowHeight){
    let section7Op1 = ((NowHeight - section7Op1Start) / (section7Op1End - section7Op1Start) * 100);
    $("#section7 .chart-opacity1").css("opacity",`${section7Op1}%`)
    console.log($("#section7 .chart-opacity1"))
  }


  // 섹션8 이벤트
  let section8EventStart = section8Offset - (wHeight * 0.8);
  let section8EventEnd = section8Offset + (wHeight * 0.2);
  if(section8EventStart <= NowHeight && section8EventEnd >= NowHeight){
    let section8Width = ((NowHeight - section8EventStart) / (section8EventEnd - section8EventStart) * 100);
    $("#section8 .item1").css("transform",`translateX(-${section8Width}%)`)
    $("#section8 .item2").css("transform",`translateX(${section8Width}%)`)
  }


  

  

}




