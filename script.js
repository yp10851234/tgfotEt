var sentences = [
    "He reached his peak at the age of 30.",
    "The unemployment rate peaked at 7% this year.",
    "When he was young, he was labeled (as) selfish by other kids.",
    "Wherever I go, my little brother likes to tag along.",
    "We will tailor our services to your needs.",
    "The tenderness of beef is determined by breed and sex.",
    "I have been tutoring the boy in math for two years.",
    "He waxes his car twice a year.",
    "The gardener weeds the garden once a week.",
    "We have to weed out unqualified applicants.",
    "I need a clip to hold these papers in place.",
    "Legend has it that the tooth fairy will come and collect children's teeth at night.",
    "On Halloween, people hollow out pumpkins for carving.",
    "We stood there crying and hugging each other.",
    "It is sensible to keep a first-aid kit handy in your home.",
    "She likes to wear dresses trimmed with lace.",
    "he revealed that he had been in prison several times before.",
    "Who leaked the news to the press?",
    "He gave me tips for producing an eye-catching poster.",
    "I went to Marko's house, and he returned me to spaghetti.",
    "You can spice your life up by trying something new.",
    "What her boss said stung her so much that she burst into tears.",
    "You han't ride a zebra. Zebras are almost impossible to tame.",
    "Nothing can ease my thirst except water.",
    "He is thirsty for knowledge.",
    "He drags his feet over everything.",
    "The illegally packed car was towed away by a tow.",
    "This is the most bizzare thing I've ever seen in my lifetime.",
    "The job is a chance of the lifetime for those who like challenges.",
    "Lychees are scarce in this season, and thus, hard to get.",
    "Giving advice unasked is always a thankless job.",
    "News reporters should always give a truthful account of an event.",
    "It is so cold that my limbs get numb.",
    "It is queer to live in a place where the night never falls.",
    "This pouse pad has a padded wrist rest.",
    "He yelled angrily and banged his fist on the wall.",
    "During the Chinese New Year, firecrackers pop and bang to drive away evil spirits.",
    "The kids are splashing around in the wading pool.",
    "The doctor said that his wound might need a number of stitches.",
    "I have been scouting around for a cheaper house to rent."
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
var Successful = 0, Failed = 0;
const PMarks = ['.', ',', '!', '?', ';'];

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
            if(PMarks.includes(w[c][i][tbl-1])){
                document.getElementById("textline").innerHTML += '<input class="textbox" id="textbox' + blankindex + '" size="' + (tbl - 1) + '" maxlength="' + (tbl - 1) + '" autocomplete="off" onkeypress="return event.key != \' \'"></input>' + w[c][i][tbl-1] + ' ';
            }
            else{
                document.getElementById("textline").innerHTML += '<input class="textbox" id="textbox' + blankindex + '" size="' + tbl + '" maxlength="' + tbl + '" autocomplete="off" onkeypress="return event.key != \' \'"></input>';
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
document.getElementById("rates").innerHTML = 'Rates: 0.00%';
document.getElementById("textbox0").focus();
document.addEventListener("keyup", (k) => {
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
    if(k.code==='Enter'){
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
        if((CurrentBlank !== BlankWords[CurrentSentence].length - 1) || (enterskip === 1 && k.code === 'Enter') || (enterskip === 0 && k.code !== 'Enter'))
            {CurrentBlank++; enterskip2 = 0;}
        else {enterskip2 = 1;}
        if(CurrentBlank === BlankWords[CurrentSentence].length){
            if(enterskip === 1 && k.code==='Enter'){
                enterskip = 0;
                CurrentBlank = 0;
                CurrentSentence++;
                Failed--;
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
    if(Successful + Failed === 0)
        document.getElementById("rates").innerHTML = 'Rates: 0.00%';
    else document.getElementById("rates").innerHTML = 'Rates: ' + (Successful * 100 / (Successful + Failed)).toFixed(2) + '%';
})

// console.log(WordsInSentences);
// console.log(BlanksPosition);
// console.log(NofBlanks);
// console.log(BlankWords);



