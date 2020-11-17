class Car{
	
constructor(model, color){ 	
		this.company = "현대 자동차";
		this.model = model;
		this.color = color;
		this.speed = 0;
	}
	//메소드  클래스가 생성되었을때
	start(){
		console.log("시동을 겁니다.")
	}
	stop(){
		this.setSpeed(0);
		console.log("멈춥니다.");
	}
	setSpeed(speed){
		this.speed = speed;	
	}
	run(){
		console.log(this.speed + "로 달립니다.");
	}
}