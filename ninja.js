const coreectAnswer=['A','A','A','B'];
const result = document.querySelector('.result');
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e=>{
    e.preventDefault();
    let score=0;
   
    const userAnswer =[form.q1.value,form.q2.value,form.q3.value,form.q4.value ]

    userAnswer.forEach((answer,index) =>{
        if (answer=== coreectAnswer[index]){
            score+=25;
            
        }
    });
    
    scrollTo(0,0);
    result.innerHTML=`<p>you are <span class="text-primary">  </span> ninja </p>`
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output===score){
            clearInterval(timer);
        }else{
            output++;
        }
    }, 10);
    //show results on page
   
})
//setTimeout(()=>{
//  alert('hello')
//}, 9000)
// let i=0;
// const timer =setInterval(() => {
   
//     i++;
//     if(i===5){
//         clearInterval(timer);
//     }
// }, 1000);




