var VocS = [
    "The dew sparkles like a diamond.",
    "The hero is an underdog who claws his way to the top.",
    "Widespread adoption of this method is unlikely.",
    "It is apparent that she likes him.",
    "The theory is founded on two basic propositions.",
    "Some people pursue wealth, while some pursue happiness.",
    "Please pull down the window shades.",
    "I'd like to take a walk on this shady path covered with fallen leaves.",
    "The seizure of power was accomplished with no blood shed.",
    "His lips started to tremble and then he burst out crying.",
    "Areas up to 100 miles away from the epicenter could feel the tremble of the quake.",
    "Many musicians were patronized by the nobility then.",
    "More and more people want to use clean, renewable energy such as solar power or wind power.",
    "She has a creepy feeling that someone is watching her.",
    "I try to choke back my tears.",
    "The little kid was choked to death with jelly.",
    "Prejudice often comes from ignorance of the unknown.",
    "Average people are ignorant of the law.",
    "I have to chew over the problem before I make the final decision.",
    "Make sure to fasten your seatbelt when the plane takes off.",
    "She lost her balance and tumbled backwards.",
    "When the fire alarm rang, many women ran out in nightgowns.",
    "I don't like cane furniture because it accumulates dust easily.",
    "Burglars broke into the office and stole several computers.",
    "There must always be enough life buoys or life jackets in the boat.",
    "The civil war has left many children orphans.",
    "It is shameful and cowardly to give somebody a stab in the back.",
    "I felt a stab of envy when I saw him awarded the prize.",
    "The days lengthen in summer.",
    "The statue was built to commemorate America's independence.",
    "Seeing a black cat with white paws is regarded as bad luck.",
    "He let out a big yawn.",
    "They had a bitter quarrel about/over money years ago.",
    "Living in the concrete jungle, people have become quarrelsome.",
    "He bandaged up his cuts.",
    "I like to crunch through the park on dry fallen leaves.",
    "He made a quick dodge to the left.",
    "A hawk hovered in the air before swooping on its prey.",
    "He lay down beneath a tree and found a huge hive hung above.",
    "He hushed the crowd by raising his hands and then gave his speech.",
    "Her neighbor is a Peeping Tom, who is always spying on her.",
    "Pickles go well with rice.",
    "The Chinese like to guess riddles attached to lanterns on the Lantern Festival.",
    "The police are searching for the robbers door by door.",
    "He scooped two balls of ice cream."
];

var MonthlySC = [
    "From late March to early May, tulip fields in the Netherlands burst into bloom. A riot of color carpets the land. Keukenhof Gardens, lying near the town of Lisse, possess the best display of not only tulips but also many other beautiful flowers. Visitors can enjoy a delightful flower parade of 800 varieties of tulips as it passes by the gardens. Gorgeous flower fields are not only found around Lisse. You can find elegant tulips in the Netherlands' capital, Amsterdam, as well. It hosts a phenomenal tulip festival, during which you can take in vibrant colors and the scent of tulips in all public areas and in the gardens of the city's museums and hotels.",
    "Few things are as wonderful as visiting a beautiful natural place, breathing the fresh air and marveling at the landscape. But enjoying nature comes at a price. People can love a place to death if they aren't careful. There should be rules to keep people from accidentally harming nature. Seven principles are thus introduced to encourage people to both enjoy and protect the great outdoors. Plan ahead, hike and camp on surfaces that don't damage easily, and throw away waste properly. Besides, leave what you find, reduce campfire danger, respect wildlife, and be kind to other visitors. Following these principles can help everyone share the outdoors comfortably. We all need to take care of the earth we know and love.",
    "Traveling is the perfect way to find amazement and inspiration in my life. I really enjoyed my memorable trip to France last year except for one thing - French greetings. Once, I was introduced to one of my cousin's girlfriends. Like most Taiwanese people I smiled and said hello, but the French girl grabbed both my shoulders and kissed me on the cheek! As it was happening, I was astonished and didn't know what I should do. I responded by just standing rooted to the spot and held my breath. I felt like a dummy! Such was the embarrassment that I came to the realization that foreign customs and habits could be strikingly different from my own. In order to have the best traveling experience, I have to be open to new things and embrace the feeling of culture shock. That can teach me so much more than books ever will!"
];

var SentenceP = [
    "In recent years, there have been more and more super typhoons, which often cause serious damage. When a typhoon strikes, we should prepare enough food and stay indoors. If necessary, we should quickly move to a safe place.",
    "Since the High Speed Rail started to run in 2007, it has become one of the most convenient and fastest means of transportation in Taiwan. For those who emphasize efficiency in the workplace, the High Speed Rail is definitely the first choice for business trips."
];

var list = [
    ["abc", "def"],
    ["123", "456"]
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