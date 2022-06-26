var VocS = [
    "Toss a sprinkle of salt over your left shoulder to avoid bad luck.",
    "We installed a sprinkler in our garden.",
    "He told such a funny joke that we were tickled to death.",
    "The UFO shot upward and out of sight in the blink/wink of an eye.",
    "He gave her a wink to reassure her that he was really okay.",
    "I didn't know that putting on a play involved so much work.",
    "You can click on the photo to view an enlargement of it.",
    "Practicing economy is important.",
    "Economically, capitalism has transformed societies.",
    "His only form of defense is offense.",
    "She is very defensive when asked about her income.",
    "I don't think the case is defensible.",
    "The police have tracked down his associates in the robbery.",
    "Of all the subjects, I like physical education best.",
    "He wants to major in physics.",
    "Roger is a famous physicist.",
    "The health authorities ask people to wash hands often with soap.",
    "No agreement has been reached between labor and management.",
    "I have been laboring on my thesis all year.",
    "We are surprised at the extent of the old man's knowledge / the old man's extensive knowledge.",
    "To what extent is he crazy about the computer game?",
    "The passengers proceeded to the Customs.",
    "The book is the author's reflection on Taiwan's westernization.",
    "I refer to him as my best friend.",
    "Prisoners can leave their cells only under certain circumstances.",
    "Only under certain circumstances can prisoners leave their cells.",
    "To interpret life, you must study every aspect of it.",
    "He was a reviewer of scientific publications.",
    "Parents need to be consistent in discipline.",
    "The policies of our government lack consistency.",
    "He said with assurance that he could do this for me.",
    "The Internet contributes to the wide spread of information.",
    "The book is within the capacity for remembering things.",
    "All communication was lost as the hurricane approached / hit / struck.",
    //"A sundial is a device using the position of the sun to indicate time.",
    //"He wanted to paint the room blue, but I thought otherwise.",
    //"The house is a bit old, but otherwise it's nice.",
    //"The growing / mounting racial tension could be eased / relieved after the election.",
    //"They campaigned against the violation of human rights in China.",
    //"The witness is asked to identify the suspect from a video.",
    //"It's wrong to identify wealth with success.",
    //"Your shoes are identical to mine.",
    //"The victim has no recall of what happened to him.",
    //"The company announced a worldwide recall of the defective toys.",
    //"A new difficulty arose in the second stage of our plan.",
    //"Christmas trees are an essential part of Christmas.",
    //"She is an accomplished pianist.",
    //"He intends to go to Australia next year for further study.",
    //"I have no intention of leaving my current position.",
    //"I didn't blame her for bumping into my car. It wasn't intentional.",
    //"The company is going to finance the research.",
    //"The youth should cultivate a positive philosophy of life.",
    //"His essays are philosophical and difficult to understand.",
    //"Thunder accompanies lightning.",
    //"Salt has long been used in food preservation.",
    //"Men are usually good at reading maps, but Jim is an exception.",
    //"Global warming has a great impact on the environment.",
    //"The case is currently under investigation.",
    //"I had an urge to call her.",
    //"Our social welfare system is in urgent need of improvement.",
    //"It is common practice to initial each page of a contract.",
    //"The teacher flunked Ray in consequence of his poor grades.",
    //"You have to pay attention to the consequent events.",
    //"The book will illustrate how life evolved from water.",
    //"We eliminated the possibility that it could have been an accident.",
    //"She spoke with a suggestion of anger in her voice.",
    //"Our constitution grants citizens the right to demonstrate.",
    //"They have adequate evidence to convict him.",
    //"I don't care in the slightest what he is doing.",
    //"Jill thought of marriage as a kind of bondage.",
    //"His comments were inappropriate on such a solemn occasion.",
    //"It is evident to me that you don't care about your customers.",
    //"The police found no evidence to prove him guilty.",
    //"He is a great actor, as (is) evidenced by his two Oscar awards.",
    //"A strong opposition is vital to a healthy democracy.",
    //"He received a letter concerning his job application.",
    //"The course offers intensive training in architecture.",
    //"We are faced with keen competition from other countries.",
    //"The government is widely criticized for the high unemployment rate.",
    //"The citizens are highly critical of their mayor's character.",
    //"Intellectuals should possess the ability of critical thinking.",
    //"Your performance leaves no room for criticism.",
    //"Dr. Henry committed / dedicated / devoted himself to education reform.",
    //"Many actors gain publicity by having love affairs.",
    //"I would like to rent a furnished apartment.",
    //"You may make an appointment online or by phone, and if you can't keep an appointment, please contact us in advance.",
    //"The boy pressed the buttons on the control panel curiously.",
    //"Sponsoring local events generates exposure for my business.",
    //"Possession doesn't necessarily mean happiness.",
    //"Most kids are possessive about their toys."
];

var MonthlySC = [
    "My mother went all out for this yearly event. She just loved putting together costumes and decorating things that were suitable for the event. One year she created a huge Easter basket. Another year she made an old-time train engine. And once she made a sailboat that we pushed and pulled through the grass. We were usually the center of attention."
];

var SentenceP = [
    "aa aa aa aa",
    "bb bb bb bb"
];

var list = [
    ["現在，未來篤定的推測", "must+VR"],
    ["現在，未來否定的推測", "cannot+VR"],
    ["過去篤定的推測", "must have+pp"],
    ["過去否定的推測", "cannot have+pp"],
    ["過去事實不確定的推測", "may have+pp"],
    ["過去事實很不確定的推測", "might have+pp"],
    ["過去該做卻沒做的事", "should have/ought to have+pp"],
    ["過去不該做卻做了的事", "should not have/ought not to have+pp"],
    ["過去有可能發生卻沒發生的事", "could have+pp"],
    ["原本會發生卻沒發生的事", "would have+pp"],
    ["寧可。。。不要。。。", "would rather/would sooner/had sooner...than..."],
    ["最好不要", "had better not+VR"],
    ["最好", "had better/had best+VR"],
    ["有理由, 大可以", "may well/have every reason to"],
    ["最好, 不妨", "may as well/had better+VR"],
    ["不得不", "cannot but/cannot help but/cannot choose but/have nothing to do but+VR/have no choice/option/alternative but to VR"],
    ["忍不住", "cannot help/avoid/resist/stop oneself from+Ving"]

];

var infoContent =
"Tool for reviewing English exams\n\
tgfotEt v1.5\n\
Instructions: Type in the blank words, press Enter to show the answer\n\n\
Change logs\n\n\
v1.5 (Released 29/04/22)\n\
Added configurations for easier management\n\
Added tool for phrases\n\n\
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

var menu_html = '<div class="buttons" id="buttons"><button class="bVoc" id="bVoc" onclick="TobVoc()">Voc U1, U2</button><button class="bMon" id="bMon" onclick="TobMon()">MSC x3 + Rvw x1</button><button class="bSeP" id="bSeP" onclick="TobSeP()">Sentence Pattern</button><button class="bPhr" id="bPhr" onclick="TobPhr()">Phrases</button></div>'
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
var Page = "m";
var phr_shownanswer = false;
var disabledSentences = [];
const PMarks = ['.', ',', '!', '?', ';'];

var phr_index = 0;

function showinfo(){
    document.getElementById("infocontainer").innerHTML = '<div class="infotab" id="infotab"><div class="infocontent">' + infoContent + '</div></div><button class="hideinfo" id="hideinfo" onclick="hideinfo()">x</button>';
    document.getElementById("info").classList.add("info");
    document.getElementById("info").classList.remove("hide");
}

function hideinfo(){
    document.getElementById("infocontainer").innerHTML = "";
    document.getElementById("info").classList.remove("info");
    document.getElementById("info").classList.add("hide");
}

function showconfig(){
    var configContent = "";
    if(Page=="sv" || Page=="sm" || Page=="sp"){
        const indices = Array.from(sentences.keys()).sort( (a,b) => sentences[a].localeCompare(sentences[b]));
        for(var i = 0; i < sentences.length; i++){
            configContent += makecheckbox(sentences[indices[i]], indices[i], disabledSentences[indices[i]]);
            configContent += '<br><br>';
        }
    }
    else if (Page=="p"){
        const indices = Array.from(list.keys()).sort( (a,b) => list[a][0].localeCompare(list[b][0]));
        for(var i = 0; i < list.length; i++){
            configContent += makecheckbox(list[indices[i]][0] + ' &nbsp ' + list[indices[i]][1], indices[i], disabledSentences[indices[i]]);
            configContent += '<br><br>';
        }
    }
    document.getElementById("configcontainer").innerHTML = '<div class="configtab" id="configtab"><div class="configcontent">' + configContent + '</div></div><button class="hideconfig" id="hideconfig" onclick="hideconfig()">x</button>';
    document.getElementById("config").classList.add("config");
    document.getElementById("config").classList.remove("hide");
}

function hideconfig(){
    document.getElementById("configcontainer").innerHTML = "";
    document.getElementById("config").classList.remove("config");
    document.getElementById("config").classList.add("hide");
    if(Page == 'p'){
        var TotalPhrases = remainingsentences(phr_index) + SessionCompletedSentences;
        document.getElementById("session").innerHTML = 'Session:' + session + ' &nbsp Completed:' + SessionCompletedSentences + '/' + TotalPhrases;
    }
    else{
        var TotalBlanks = remainingblanks() + SessionCompletedBlanks;
        var TotalSentences = remainingsentences(CurrentSentence) + SessionCompletedSentences;
        document.getElementById("session").innerHTML = 'Session:' + session + ' &nbsp Blanks Filled In:' + SessionCompletedBlanks + '/' + TotalBlanks + ' &nbsp Sentences Completed:' + SessionCompletedSentences + '/' + TotalSentences;
    }
}

function TobVoc(){
    document.querySelector("#UI").innerHTML = '<button class="back" id="back" onclick="GoBack()">Back</button><div class="rates" id="rates"></div><div class="session" id="session"></div><div class="sentence" id=sentence><div class="textline" id="textline"></div></div>';
    document.getElementById("configbutton").classList.remove("hide");
    sentences = VocS;
    init(sentences, NofBlanks, BlanksPosition, WordsInSentences, BlankWords);
    display(WordsInSentences, BlanksPosition, CurrentSentence);
    document.getElementById("rates").innerHTML = 'Rates: 0.00%';
    document.getElementById("textbox0").focus();
    Page = "sv";
    disabledSentences = Array(sentences.length).fill(1);
}

function TobMon(){
    document.querySelector("#UI").innerHTML = '<button class="back" id="back" onclick="GoBack()">Back</button><div class="rates" id="rates"></div><div class="session" id="session"></div><div class="sentence" id=sentence><div class="textline" id="textline"></div></div>';
    document.getElementById("configbutton").classList.remove("hide");
    sentences = MonthlySC;
    init(sentences, NofBlanks, BlanksPosition, WordsInSentences, BlankWords);
    display(WordsInSentences, BlanksPosition, CurrentSentence);
    document.getElementById("rates").innerHTML = 'Rates: 0.00%';
    document.getElementById("textbox0").focus();
    Page = "sm";
    disabledSentences = Array(sentences.length).fill(1);
}

function TobSeP(){
    document.querySelector("#UI").innerHTML = '<button class="back" id="back" onclick="GoBack()">Back</button><div class="rates" id="rates"></div><div class="session" id="session"></div><div class="sentence" id=sentence><div class="textline" id="textline"></div></div>';
    document.getElementById("configbutton").classList.remove("hide");
    sentences = SentenceP;
    init(sentences, NofBlanks, BlanksPosition, WordsInSentences, BlankWords);
    display(WordsInSentences, BlanksPosition, CurrentSentence);
    document.getElementById("rates").innerHTML = 'Rates: 0.00%';
    document.getElementById("textbox0").focus();
    Page = "sp";
    disabledSentences = Array(sentences.length).fill(1);
}

function TobPhr(){
    disabledSentences = Array(list.length).fill(1);
    document.getElementById("configbutton").classList.remove("hide");
    document.querySelector("#UI").innerHTML = '<button class="back" id="back" onclick="GoBack()">Back</button><div class="rates" id="rates"></div><div class="session" id="session"></div><div class="phr-problem" id="phr-problem"><div class="phr" id="phr"></div><textarea class="phr-input" id="phr-input" cols="30" rows="4" maxlength="120" oninput="phr_check()"></textarea></div>';
    shuffle(list, disabledSentences);
    document.getElementById("phr").innerHTML = list[0][0];
    document.getElementById("rates").innerHTML = 'Rates: 0.00%';
    document.getElementById("phr-input").focus();
    document.getElementById("session").innerHTML = 'Session:1 &nbsp Completed:0/' + list.length;
    Page = "p";
}

function GoBack(){
    document.querySelector("#UI").innerHTML = menu_html;
    document.getElementById("configbutton").classList.add("hide");
    if(!document.getElementById("refreshbutton").classList.contains("hide"))
        document.getElementById("refreshbutton").classList.add("hide");
    Page = "m";
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
    phr_index = 0;
}

function shuffle(array, array2) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        [array2[currentIndex], array2[randomIndex]] = [
            array2[randomIndex], array2[currentIndex]];
    }
    return array;
}

function shuffle1(array) {
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
    shuffle(s, disabledSentences);
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
        shuffle1(isblank);
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

function nextphr(b){
    SessionCompletedSentences++;
    do {
        phr_index++;
        if(phr_index == list.length){
            phr_index = 0;
            session++;
            shuffle(list, disabledSentences);
            SessionCompletedSentences = 0;
        }
    }
    while(disabledSentences[phr_index] == 0);
    var TotalPhrases = remainingsentences(phr_index) + SessionCompletedSentences;
    document.getElementById("phr").innerHTML = list[phr_index][0];
    document.getElementById("phr-input").value = "";
    document.getElementById("session").innerHTML = 'Session:' + session + ' &nbsp Completed:' + SessionCompletedSentences + '/' + TotalPhrases;
    if(b==0){
        Failed++;
        document.getElementById("phr-input").classList.remove("wrong");
    }
    else{
        Successful++;
    }
    if(Successful + Failed === 0)
        document.getElementById("rates").innerHTML = 'Rates: 0.00%';
    else
        document.getElementById("rates").innerHTML = 'Rates: ' + (Successful * 100 / (Successful + Failed)).toFixed(2) + '%';
}

function phr_check(){
    var val = document.getElementById("phr-input").value;
    if(val == list[phr_index][1] && !phr_shownanswer){
        nextphr(1);
    }
    else if(val[val.length-1]=='\n' && !phr_shownanswer){
        phr_shownanswer = true;
        document.getElementById("phr-input").value = list[phr_index][1];
        document.getElementById("phr-input").classList.add("wrong");
    }
    else if(val[val.length-1]=='\n' && phr_shownanswer){
        phr_shownanswer = false;
        nextphr(0);
    }
}

function makecheckbox(s, n, b){
    return '<input type="checkbox" id="configcheck' + n + '" name="configcheck' + n + '" onchange="checkboxchange(this, ' + n + ')"' + (b == 1 ? 'checked' : '') + '><label for="configcheck' + n + '"> '+ s + '</label>';
}

function checkboxchange(c, n){
    if(c.checked == false){
        disabledSentences[n] = 0;
    }
    else {
        disabledSentences[n] = 1;
    }
    if(document.getElementById("refreshbutton").classList.contains("hide"))
        document.getElementById("refreshbutton").classList.remove("hide");
}

function endofsentence(){
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
        SessionCompletedBlanks = 0;
        SessionCompletedSentences = 0;
    }
}

function remainingblanks(){
    var BlL = BlankWords[CurrentSentence].length - CurrentBlank;
    for(var i = CurrentSentence + 1; i < sentences.length; i++){
        if(disabledSentences[i] == 1)
            BlL+=BlankWords[i].length;
    }
    if(mode === 0){
        var fsessionblanks = 0;
        for(var i = 0; i < NofBlanks.length; i++){
            if(disabledSentences[i] == 1)
                fsessionblanks += WordsInSentences[i].length - NofBlanks[i];
        }
        BlL += fsessionblanks;
    }
    return BlL;
}

function remainingsentences(c){
    var SeL = 0;
    for(var i = c; i < disabledSentences.length; i++){
        if(disabledSentences[i] == 1) SeL++;
    }
    if(mode == 0 && Page != "m" && Page != "p"){
        for(var i = 0; i < disabledSentences.length; i++) {
            if(disabledSentences[i] == 1) SeL++;
        }
    }
    return SeL;
}

function refreshpage(){
    if(Page!="p"){
        mode = 0;
        NofBlanks = [];
        BlanksPosition = [];
        WordsInSentences = [];
        BlankWords = [];
        init(sentences, NofBlanks, BlanksPosition, WordsInSentences, BlankWords);
        SessionCompletedBlanks = 0;
        SessionCompletedSentences = 0;
        CurrentSentence = 0;
        while(disabledSentences[CurrentSentence] == 0){
            CurrentSentence++;
        }
        display(WordsInSentences, BlanksPosition, CurrentSentence);
        document.getElementById("session").innerHTML = 'Session:' + session + ' &nbsp Blanks Filled In:0/' + remainingblanks() + ' &nbsp Sentences Completed:0/' + remainingsentences(CurrentSentence);
    }
    else{
        phr_index = 0;
        shuffle(list, disabledSentences);
        SessionCompletedSentences = 0;
        while(disabledSentences[phr_index] == 0){
            phr_index++;
        }
        document.getElementById("phr").innerHTML = list[0][0];
        document.getElementById("session").innerHTML = 'Session:' + session + ' &nbsp Completed:0/' + remainingsentences(phr_index);
    }
    document.getElementById("refreshbutton").classList.add("hide");
}

document.addEventListener("keyup", (k) => {
    if(Page=="sv" || Page=="sm" || Page=="sp"){
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
                if ((enterskip === 0 && k.code !== 'Enter') || (enterskip === 1 && k.code === 'Enter')){
                    CurrentBlank = 0;
                    SessionCompletedSentences++;
                    if(!document.getElementById("refreshbutton").classList.contains("hide"))
                        document.getElementById("refreshbutton").classList.add("hide");
                    do{
                        CurrentSentence++;
                        if(CurrentSentence === sentences.length){
                            endofsentence();
                        }
                    }
                    while(disabledSentences[CurrentSentence] == 0);
                    if(enterskip === 1 && k.code === 'Enter'){
                        enterskip = 0;
                        Failed--;
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
        var TotalBlanks = remainingblanks() + SessionCompletedBlanks;
        var TotalSentences = remainingsentences(CurrentSentence) + SessionCompletedSentences;
        if(Successful + Failed === 0)
            document.getElementById("rates").innerHTML = 'Rates: 0.00%';
        else
            document.getElementById("rates").innerHTML = 'Rates: ' + (Successful * 100 / (Successful + Failed)).toFixed(2) + '%';
        document.getElementById("session").innerHTML = 'Session:' + session + ' &nbsp Blanks Filled In:' + SessionCompletedBlanks + '/' + TotalBlanks + ' &nbsp Sentences Completed:' + SessionCompletedSentences + '/' + TotalSentences;
    }
})

document.querySelector("#UI").innerHTML = menu_html;