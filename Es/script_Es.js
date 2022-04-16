var VocS = [
    "The plant has medicinal properties.",
    "We grew tired of his stale jokes.",
    "Cyber cafés mushroom after the first one opened in 1998.",
    "Julia has a large collection of beautiful teacup and saucer sets.",
    "The doctor had to operate on his spine.",
    "He has gone through three operations.",
    "It is wrong for you to assume him to be a thief.",
    "He became very emotional when we had to leave.",
    "The streets are like a maze. Only the locals won't get lost.",
    "I am anxious about the coming exam.",
    "In Taiwan, hundreds of people are waiting for organ transplants.",
    "It is increasingly difficult to get into a prestigious university.",
    "He is junior to me by two years.",
    "Good oral hygiene reduces the risk of tooth decay.",
    "I am on oral medication for acne.",
    "I pay a monthly visit to my grandparents.",
    "I haven't received the monthly that I subscribed to.",
    "Most foreigners are awkward with chopsticks.",
    "Your computer is far superior to mine.",
    "Their performance was inferior to that of the other teams.",
    "We need to address the underlying causes of poverty.",
    "This funny movie has a serious underlying theme.",
    "There has been ongoing debate about euthanasia.",
    "Children buzzed with excitement as they entered the zoo."
];

var MonthlySC = [
    "When we study history in school, it's easy to get preoccupied with the big events. We often forget that the people involved were just as real as you or me. Studying one's family history helps us connect the big historical events with the actual people behind them. It can also give us a deeper sense of who we are and where we came from. Difficult as researching our family history may be, it is a worthwhile pursuit.",
    "This Malaysian state on the island of Borneo entices some tourists but isn't very well known. But those who do visit experience amazing natural beauty. Sabah has more animals and plants in 10 square kilometers than North America and Europe combined. Steep trails wind up the mountain through moss-covered forests. It is not until the next morning that you can climb to the top. Once there you will be rewarded with a spectacular sunrise.",
    "Succulent plants usually have thick leaves or stems, are easy to care for and fun to look at. While it's true that all plants store water, none do it as efficiently as succulents. This ability makes succulents easy to care for. Even people without a green thumb find success with the popular plants."
];

var SentenceP = [
    "A successful enterprise should not take making profits as its main goal. It should take on social responsibilities in order to promote public welfare.",
    "The global food crisis has caused serious social problems in many regions around the world. Experts warn us not to take low food prices for granted.",
    "Fast fashion makes people buy too many unnecessary clothes without knowing the effects. Therefore, fast fashion is regarded as unfriendly to the environment.",
    "These pictures remind me of my childhood in the country. I consider it the happiest time of my life.",
    "Social media make it easy to spread disinformation. Therefore, we should not take the truthfulness of the news for granted.",
    "I find smartphones to be very distracting. So, I won't let my children have smartphones before they go to senior high school."
];

var infoContent=
"Tool for reviewing English exams\n\
tgfotEt v1.4\n\
Instructions: Type in the blank words, press Enter to show the answer\n\n\
Change logs\n\n\
v1.4 (Released 19/03/22)\n\
Added help tab\n\
Added change log\n\
Added session stats\n\n\
v1.3 (Released 16/03/22)\n\
Added monthly sc\n\
Added sentence pattern\n\
Added menu\n\n\
v1.2 (Released 12/03/22)\n\
Added rates tab\n\
Disabled user from pressing space bar\n\
Fixed bugs\n\n\
v1.1 (Released 11/03/22)\n\
Added style sheets\n\
Added show answer option\n\n\
v1.0 (Released 09/03/22)\n\
First version\n\
Created domain for tgfotEt\n\n\
If you have found a bug or issue that you would like to report,\n\
or you have any inconvenieces using tgfotEt,\n\
please contact at yp10851234@yphs.tp.edu.tw";

var sentences = [];
var CurrentSentence = 0;
var NofBlanks = [];
var BlanksPosition = [];
var WordsInSentences = [];
var BlankWords = [];
var NofWords = 0;
var SessionCompletedSentences = 0;
var SessionCompletedBlanks = 0;
var session = 1;
var CurrentBlank = 0;
var mode = 0;
var enterskip = 0;
var enterskip2 = 0;
var Successful = 0, Failed = 0;
var InMenu = true;
const PMarks = ['.', ',', '!', '?', ';'];

function showinfo(){
    document.getElementById("info").innerHTML = '<div class="infotab" id="infotab"><div class="infocontent">' + infoContent + '</div></div><button class="hideinfo" id="hideinfo" onclick="hideinfo()">x</button>';
    document.getElementById("info").classList.add("info");
    document.getElementById("info").classList.remove("hide");
}

function hideinfo(){
    document.getElementById("info").innerHTML = "";
    document.getElementById("info").classList.remove("info");
    document.getElementById("info").classList.add("hide");
}

function TobVoc(){
    document.querySelector("#UI").innerHTML = '<button class="back" id="back" onclick="GoBack()">Back</button><div class="rates" id="rates"></div><div class="session" id="session"></div><div class="sentence" id=sentence><div class="textline" id="textline"></div></div>';
    document.getElementById("div-toindex").innerHTML='';
    sentences = VocS;
    init(sentences, NofBlanks, BlanksPosition, WordsInSentences, BlankWords);
    display(WordsInSentences, BlanksPosition, CurrentSentence);
    document.getElementById("rates").innerHTML = 'Rates: 0.00%';
    document.getElementById("textbox0").focus();
    InMenu = false;
}

function TobMon(){
    document.querySelector("#UI").innerHTML = '<button class="back" id="back" onclick="GoBack()">Back</button><div class="rates" id="rates"></div><div class="session" id="session"></div><div class="sentence" id=sentence><div class="textline" id="textline"></div></div>';
    document.getElementById("div-toindex").innerHTML='';
    sentences = MonthlySC;
    init(sentences, NofBlanks, BlanksPosition, WordsInSentences, BlankWords);
    display(WordsInSentences, BlanksPosition, CurrentSentence);
    document.getElementById("rates").innerHTML = 'Rates: 0.00%';
    document.getElementById("textbox0").focus();
    InMenu = false;
}

function TobSeP(){
    document.querySelector("#UI").innerHTML = '<button class="back" id="back" onclick="GoBack()">Back</button><div class="rates" id="rates"></div><div class="session" id="session"></div><div class="sentence" id=sentence><div class="textline" id="textline"></div></div>';
    document.getElementById("div-toindex").innerHTML='';
    sentences = SentenceP;
    init(sentences, NofBlanks, BlanksPosition, WordsInSentences, BlankWords);
    display(WordsInSentences, BlanksPosition, CurrentSentence);
    document.getElementById("rates").innerHTML = 'Rates: 0.00%';
    document.getElementById("textbox0").focus();
    InMenu = false;
}

function GoBack(){
    document.querySelector("#UI").innerHTML = '<div class="buttons" id="buttons"><button class="bVoc" id="bVoc" onclick="TobVoc()">Voc U19, U20</button><button class="bMon" id="bMon" onclick="TobMon()">Monthly SC x4</button><button class="bSeP" id="bSeP" onclick="TobSeP()">Sentence Pattern</button></div>';
    document.getElementById("div-toindex").innerHTML='<button class="back" id="toindex" onclick="window.location.href=\'/\'">Back</button>';
    InMenu = true;
    sentences = [];
    NofBlanks = [];
    BlanksPosition = [];
    WordsInSentences = [];
    BlankWords = [];
    CurrentSentence = 0;
    CurrentBlank = 0;
    mode = 0;
    enterskip = 0;
    enterskip2 = 0;
    Successful = 0;
    Failed = 0;
    NofWords = 0;
    SessionCompletedSentences = 0;
    SessionCompletedBlanks = 0;
    session = 1;
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

function init(s, n, b, w, bw){
    shuffle(s);
    NofWords = 0;
    for (let i = 0; i < s.length; i++) {
        var start=0, end=0;
        var words = [];
        for(let j = 0; j < s[i].length; j++){
            if(s[i][j] == " "){
                end = j;
                words.push(s[i].substring(start, end));
                NofWords++;
                start = j + 1;
            }
        }
        words.push(s[i].substring(start));
        NofWords++;
        w.push(words);
    }
    for(let i = 0; i < s.length; i++){
        n.push(Math.round(w[i].length / 4 + Math.random() * (w[i].length / 2)));
    }
    for(let i = 0; i < s.length; i++){
        var isblank = [];
        for(let j = 0; j < n[i]; j++){
            isblank.push(1);
        }
        for(let j = n[i]; j < w[i].length; j++){
            isblank.push(0);
        }
        shuffle(isblank);
        b.push(isblank);
    }
    for(let i = 0; i < s.length; i++){
        var sbw = [];
        for(let j = 0; j < w[i].length; j++){
            if(b[i][j] === 1){
                sbw.push([w[i][j], j]);
            }
        }
        bw.push(sbw);
    }
}

function display(w, b, c){
    document.getElementById("textline").innerHTML = "";
    document.getElementById("session").innerHTML = 'Session:1 &nbsp Blanks Filled In:0/' + NofWords + ' &nbsp Sentences Completed:0/' + sentences.length * 2;
    var wclen=w[c].length;
    var blankindex=0;
    for(var i = 0; i < wclen; i++){
        if(b[c][i] == 1){
            var tbl = w[c][i].length;
            if(PMarks.includes(w[c][i][tbl-1])){
                if(tbl === 2)
                    document.getElementById("textline").innerHTML += '<input class="textbox borderline" id="textbox' + blankindex + '" size="' + (tbl - 1) + '" maxlength="' + (tbl - 1) + '" autocomplete="off" onkeypress="return event.key != \' \'"></input>' + w[c][i][tbl-1] + ' ';
                else
                    document.getElementById("textline").innerHTML += '<input class="textbox" id="textbox' + blankindex + '" size="' + (tbl - 2) + '" maxlength="' + (tbl - 1) + '" autocomplete="off" onkeypress="return event.key != \' \'"></input>' + w[c][i][tbl-1] + ' ';
            }
            else{
                document.getElementById("textline").innerHTML += '<input class="textbox borderline" id="textbox' + blankindex + '" size="' + tbl + '" maxlength="' + tbl + '" autocomplete="off" onkeypress="return event.key != \' \'"></input>';
            }
            blankindex++;
        }
        else{
            document.getElementById("textline").innerHTML += w[c][i] + ' ';
        }
    }
}

function flip(n, b, w){
    for(let i = 0; i < n.length; i++){
        n[i] = w[i].length - n[i];
    }
    for(let i = 0; i < b.length; i++){
        for(let j = 0; j < b[i].length; j++){
            if(b[i][j] == 1){
                b[i][j] = 0;
            }
            else{
                b[i][j] = 1;
            }
        }
    }
    
}


document.addEventListener("keyup", (k) => {
    if(!InMenu){
        //console.log(CurrentBlankValue);
        //console.log(BlankWords[CurrentSentence][CurrentBlank][0]);
        var bcclen = BlankWords[CurrentSentence][CurrentBlank][0].length;
        var lastchar = BlankWords[CurrentSentence][CurrentBlank][0][bcclen - 1];
        if(k.code==='Tab'){
            var bcc0 = BlankWords[CurrentSentence][CurrentBlank][0];
            if(PMarks.includes(lastchar)) bcc0 = bcc0.substring(0, bcclen - 1);
            document.getElementById("textbox" + CurrentBlank).value = bcc0;
            document.getElementById("textbox" + CurrentBlank).classList.add("wrong");
            Failed++;
            Successful--;
        }
        else if(k.code==='Enter'){
            var bcc0 = BlankWords[CurrentSentence][CurrentBlank][0];
            if(PMarks.includes(lastchar)) bcc0 = bcc0.substring(0, bcclen - 1);
            document.getElementById("textbox" + CurrentBlank).value = bcc0;
            document.getElementById("textbox" + CurrentBlank).classList.add("wrong");
            Failed++;
            Successful--;
        }
        var CurrentBlankValue=document.getElementById("textbox" + CurrentBlank).value;

        if(PMarks.includes(lastchar)) CurrentBlankValue += lastchar;
        if(CurrentBlankValue === BlankWords[CurrentSentence][CurrentBlank][0]){
            Successful++;
            SessionCompletedBlanks++;
            if((CurrentBlank !== BlankWords[CurrentSentence].length - 1) || (enterskip === 1 && k.code === 'Enter') || (enterskip === 0 && k.code !== 'Enter'))
                {CurrentBlank++; enterskip2 = 0;}
            else {enterskip2 = 1; SessionCompletedBlanks--;}
            if(CurrentBlank === BlankWords[CurrentSentence].length){
                if(enterskip === 1 && k.code==='Enter'){
                    enterskip = 0;
                    CurrentBlank = 0;
                    CurrentSentence++;
                    SessionCompletedSentences++;
                    Failed--;
                }
                else if (enterskip === 0 && k.code !== 'Enter'){
                    CurrentBlank = 0;
                    CurrentSentence++;
                    SessionCompletedSentences++;
                }
                if(CurrentSentence === sentences.length){
                    CurrentSentence = 0;
                    if(mode === 0){
                        mode = 1;
                        flip(NofBlanks, BlanksPosition, WordsInSentences);
                        BlankWords = [];
                        for(let i = 0; i < NofBlanks.length; i++){
                            var sbw = [];
                            for(let j = 0; j < WordsInSentences[i].length; j++){
                                if(BlanksPosition[i][j] == 1){
                                    sbw.push([WordsInSentences[i][j], j]);
                                }
                            }
                            BlankWords.push(sbw);
                        }
                    }
                    else{
                        mode = 0;
                        NofBlanks = [];
                        BlanksPosition = [];
                        WordsInSentences = [];
                        BlankWords = [];
                        init(sentences, NofBlanks, BlanksPosition, WordsInSentences, BlankWords);
                        session++;
                    }
                }
                display(WordsInSentences, BlanksPosition, CurrentSentence);

            }

            document.getElementById("textbox" + CurrentBlank).focus();
        }
        if(k.code==='Enter' && enterskip === 0 && enterskip2 === 1){
            enterskip = 1;
            enterskip2 = 0;
        }
        if(Successful + Failed === 0)
            document.getElementById("rates").innerHTML = 'Rates: 0.00%';
        else
            document.getElementById("rates").innerHTML = 'Rates: ' + (Successful * 100 / (Successful + Failed)).toFixed(2) + '%';
        document.getElementById("session").innerHTML = 'Session:' + session + ' &nbsp Blanks Filled In:' + SessionCompletedBlanks%NofWords + '/' + NofWords + ' &nbsp Sentences Completed:' + (SessionCompletedSentences % (sentences.length * 2)) + '/' + sentences.length * 2;
    }
})