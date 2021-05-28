const correctAnswers = ['B' , 'B' , 'B' , 'B' , 'B'];

const formOne = document.querySelector('.quiz-form');
// console.log(formOne);

const scoreBoard = document.querySelector('.result');
// console.log(scoreBoard);

const scorePercentage = document.querySelector('.result > div > p > span');
// console.log(scorePercentage);

///////////cheking/////////////

formOne.addEventListener('submit' , function(e){
	e.preventDefault();
	// console.log(formOne.q1.value);
	let score = 0;
	let userAnswers = [formOne.q1.value , formOne.q2.value , formOne.q3.value , formOne.q4.value , formOne.q5.value];

	userAnswers.forEach(function(useranswer , index){
		// console.log(useranswer , index);
		if (useranswer === correctAnswers[index]) {
			score += 20;
		}
	});
	// console.log(score);
	scrollTo(0,0);
	scoreBoard.classList.remove('d-none');
	

	//animation of result
	let output = 0;
	let timer = setInterval(function(e){
			scorePercentage.textContent = `${output}%`;
			
		if(output == score){
			clearInterval(timer);
		}
		else{
			output ++;
		}
	} , 50);


}); 


