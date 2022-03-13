var sentences = [
    "This is a test to see if the code is working.", 
    "a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a"
];
var CurrentSentence = 0;
var NofBlanks = [];
var BlanksPosition = [];
var WordsInSentences = [];
var BlankWords = [];
var CurrentBlank = 0;
var mode = 0;
var enterskip = 0;
var enterskip2 = 0;


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
    for (let i = 0; i < s.length; i++) {
        var start=0, end=0;
        var words = [];
        for(let j = 0; j < s[i].length; j++){
            if(s[i][j] == " "){
                end = j;
                words.push(s[i].substring(start, end));
                start = j + 1;
            }
        }
        words.push(s[i].substring(start));
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
    var wclen=w[c].length;
    var blankindex=0;
    for(var i = 0; i < wclen; i++){
        if(b[c][i] == 1){
            var tbl = w[c][i].length;
            if(w[c][i][tbl-1] === '.'){
                document.getElementById("textline").innerHTML += '<input class="textbox" id="textbox' + blankindex + '" size="' + (tbl - 1) + '" maxlength="' + (tbl - 1) + '" autocomplete="off"></input>' + w[c][i][tbl-1];
            }
            else{
                document.getElementById("textline").innerHTML += '<input class="textbox" id="textbox' + blankindex + '" size="' + tbl + '" maxlength="' + tbl + '" autocomplete="off"></input>';
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

init(sentences, NofBlanks, BlanksPosition, WordsInSentences, BlankWords);
display(WordsInSentences, BlanksPosition, CurrentSentence);
document.getElementById("textbox0").focus();
document.addEventListener("keyup", (k) => {
    //console.log(CurrentBlankValue);
    //console.log(BlankWords[CurrentSentence][CurrentBlank][0]);
    var bcclen = BlankWords[CurrentSentence][CurrentBlank][0].length;
    var lastchar = BlankWords[CurrentSentence][CurrentBlank][0][bcclen - 1];
    if(k.code==='Tab'){
        var bcc0 = BlankWords[CurrentSentence][CurrentBlank][0];
        if(lastchar === '.') bcc0 = bcc0.substring(0, bcclen - 1);
        document.getElementById("textbox" + CurrentBlank).value = bcc0;
        document.getElementById("textbox" + CurrentBlank).classList.add("wrong");
    }
    if(k.code==='Enter'){
        var bcc0 = BlankWords[CurrentSentence][CurrentBlank][0];
        if(lastchar === '.') bcc0 = bcc0.substring(0, bcclen - 1);
        document.getElementById("textbox" + CurrentBlank).value = bcc0;
        document.getElementById("textbox" + CurrentBlank).classList.add("wrong");

    }
    var CurrentBlankValue=document.getElementById("textbox" + CurrentBlank).value;
    
    if(lastchar === '.') CurrentBlankValue += lastchar;
    if(CurrentBlankValue === BlankWords[CurrentSentence][CurrentBlank][0]){
        console.log("a");
        if((CurrentBlank !== BlankWords[CurrentSentence].length - 1) || (enterskip === 1 && k.code === 'Enter') || (enterskip === 0 && k.code !== 'Enter'))
            {CurrentBlank++; enterskip2 = 0;}
        else enterskip2 = 1;
        if(CurrentBlank === BlankWords[CurrentSentence].length){
            if(enterskip === 1 && k.code==='Enter'){
                enterskip = 0;
                CurrentBlank = 0;
                CurrentSentence++;
            }
            else if (enterskip === 0 && k.code !== 'Enter'){
                CurrentBlank = 0;
                CurrentSentence++;
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
    
})

console.log(WordsInSentences);
console.log(BlanksPosition);
console.log(NofBlanks);
console.log(BlankWords);



