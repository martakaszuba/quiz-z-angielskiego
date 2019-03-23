
init();
function init(){
var count = 0;
var score = 0;
var answersArr = [];

var questions = [
      ["He went on boasting about his achievements, _____ annoyed everybody at the party", "what", "that", "which", "who","3"],
      ["_____ clever he was, he couldn't figure out the answer to this question", "Although", "However", "Despite","Much as", "2"],
      ["This is the first time they _____ to India", "have been", "had been", "were", "are","1"],
      ["The spokesman said that the change of plans was _____ financial considerations", "because", "since", "due to", "resulting", "3"],
      ["Congratulations _____ passing your driving test. Good job!", "of", "with", "on", "for", "3"],
      ["I'd rather you _____ so fast", "don't drive", "didn't drive", "won't drive", "not driving", "2"],
      ["I' ll call you as soon as I _____ his decision", "will know", "have known", "know", "will have known", "3"],
      ["I prefer quiet evenings at home _____ wild parties at my friends' place", "to", "than", "from", "over", "1"],
      ["I read two magazines _____ the flight to London", "across", "while", "in", "during", "4"],
      ["That _____ be Tom at the door - he is at school now.", "can't", "couldn't", "mustn't", "needn't", "1"]
      ];

function randomizeArr(arr){
    for (var i=0; i<arr.length; i++){
        var rand = Math.floor(Math.random()*arr.length)
        var temp = arr[rand];
        arr[rand] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

questions = randomizeArr(questions);
function Create(){
var quest = document.querySelector(".question");
var answers = document.querySelector(".answers");
if (count === 10){
    quest.innerHTML = `<h4 class="final">${finalStr(score)}</h4>
    `;
    answers.innerHTML = `<div id="colleft">
    <div class="ansdiv">1. ${answersArr[0]}</div>
    <div class="ansdiv">2. ${answersArr[1]}</div>
    <div class="ansdiv">3. ${answersArr[2]}</div>
    <div class="ansdiv">4. ${answersArr[3]}</div>
    <div class="ansdiv">5. ${answersArr[4]}</div>
    </div>
    <div id="colright">
    <div class="ansdiv">6. ${answersArr[5]}</div>
    <div class="ansdiv">7. ${answersArr[6]}</div>
    <div class="ansdiv">8. ${answersArr[7]}</div>
    <div class="ansdiv">9. ${answersArr[8]}</div>
    <div class="ansdiv">10. ${answersArr[9]}</div>
    </div>`;
     
}

else if (count<10){
quest.innerHTML = `${count+1}. ${questions[count][0]}`;
answers.innerHTML = `
<btn class="btn-success">${questions[count][1]}</btn>
<btn class="btn-success">${questions[count][2]}</btn>
<btn class="btn-success">${questions[count][3]}</btn>
<btn class="btn-success">${questions[count][4]}</btn>`
answers.innerHTML +=`<div class="btn btn-info">Dalej</div>`;
}
}

Create();
var answers = document.querySelector(".answers");
answers.addEventListener("click", function(e){
    if (e.target.classList.contains("btn-info")){

        if (count<10){
            var checked = document.querySelector(".checked") || "";
            var val = checked.innerHTML;
            var ind = questions[count].indexOf(val);
            if (ind === Number(questions[count][5])){
                score++;
                answersArr.push(`<span>${val}<i class="fas fa-check"></i></span>`)
            }
            else {
                if (val === undefined){
                    answersArr.push(`<span>brak<i class="fas fa-times"></i></span>`) 
                }
                else {
                answersArr.push(`<span>${val}<i class="fas fa-times"></i></span>`)
                }
            }
            count++;
            Create();
        }
    }
    else if (e.target.classList.contains("btn-success")){
        if (document.querySelector(".checked")){
            document.querySelector(".checked").classList.remove("checked");
        }
        e.target.classList.add("checked");
    }
})

function finalStr(num){
var str = "";
switch(num){
    case 0:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    str = `Odpowiedziałeś poprawnie na ${num} pytań`;
    break;
    case 1:
    str = "Odpowiedziałeś poprawnie na 1 pytanie";
    break;
    case 2:
    case 3:
    case 4:
    str =`Odpowiedziałeś poprawnie na ${num} pytania`;
    break;   
}
return str;
}
}