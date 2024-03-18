// 빈 객체 선언

var calc ={};

// 맴버 변수 추가

calc.x = 0;
calc.y = 0;


//멤버 변수에 값을 설정하기 위한 메소드(함수)추가
calc.setValue = function(p1, p2){
    this.x=p1
    this.y=p2
    console.log("1");
}


//멤버 변수끼리 더하기 하여 리턴하는 함수
calc.add =function(){


    return this.x  + this.y;
}

//멤버 변수끼리 뺼샘하여 리턴하는 함수
calc.sub =function(){


    return this.x -this.y;
}

//덧셈과 뺄셈의 결과를 출력하는 함수 
calc.result = function(){
    var plus = this.add();
    var minus = this.sub();

    document.write("<h1>덧셈 결과 :"+ plus+"</h1>")
    document.write("<h1>뺄셈 결과 :"+ minus+"</h1>")
}


