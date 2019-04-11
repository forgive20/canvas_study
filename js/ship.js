function Ship(){
	this.x = 0;
	this.y = 0;
	this.width = 25;
	this.height = 20;
	this.rotation = 0;
	this.showFlame = false;
}

Ship.prototype.draw = function(content){
	content.save();
	content.translate(this.x, this.y);
	content.rotate(this.rotation);
	content.lineWidth = 2;
	content.strokeStyle = '#ffffff';
	content.beginPath();
	content.moveTo(10, 0);
	content.lineTo(-10, 10);
	content.lineTo(-5, 0);
	content.lineTo(-10, -10);
	content.lineTo(10, 0);
	content.stroke();
	if(this.showFlame){
		content.beginPath();
		content.moveTo(-7.5, -5);
		content.lineTo(-15, 0);
		content.lineTo(-7.5, 5);
		content.stroke();
	}
	content.restore();
}