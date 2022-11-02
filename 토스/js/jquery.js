$(function(){  
  setTimeout(headerEventOn,300) //헤더 실행 함수
  setTimeout(section1EventOn,700);//메인배너 실행 함수
  $(window).scroll(windowScrollEvent) // 스크롤시 실행 함수
  HomeSliderOn() // 섹션5 슬라이드 함수
  
  console.log(percent)
})

function HomeSliderOn(){ 
    let number = 1;    
    setInterval(function(){     
      $("#section5 .home img").attr("src",`./img/section5-img${number}.png`)
      number++;
      if(number == 4){
        number = 1;
      }
    },4000); 
}

function headerEventOn(){
  $("#header").addClass("active");
}

function section1EventOn(){
  $("#section1 .container").addClass("active")
}

function windowScrollEvent(){
  let wHeight = $(window).height();
  let NowHeight = $(this).scrollTop();
  let percent = (NowHeight / ($(document).height() - $(window).height())) * 100; //전체 스크롤 퍼센트
  console.log(`현재스크롤높이:${NowHeight}`) 
  console.log(`스크롤 : ${percent}`)

  if(NowHeight > 0){ //헤더 보더바텀 추가
    $("#header").addClass("fixedOn")
  }else{
    $("#header").removeClass("fixedOn")
  }

  $("section").each(function(index){ // 특정 높이에 도달하면 active 클래스 추가
    console.log(`${index + 1}번 섹션 : ${$(this).offset().top}`)
    if(($(this).offset().top - 600) < NowHeight){     
      $(this).addClass("active");
    }      
  })

  if(NowHeight > 8850 && NowHeight <= 9150){
    let opacityOn = NowHeight - 8850;
    $("chart-opacity1").css("opacity",`${opacityOn}`)
  }
  
  if(percent > 49 && percent < 53){
    $("#section8").css("width",`${percent}%`)
  }
  

}




