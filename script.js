var sentences = [
    "When you travel with someone else, you always have to compromise. You'd be together all the time. It would be easy to get on one another's nerves. But on the flip side, you wouldn't be totally alone. Instead, you'd have someone to share your experiences with. Someone who would be able to relate to what it's like to have an amazing time abroad! People tend to develop strong bonds after traveling together, the so-called lifetime friendships.",
    "The novelty of these toys soon wore off.",
    "There are constant complaints about the noise from our neighbors.",
    "I still have a ray of hope that he'll recover.",
    "It is a stereotype that all housewives like to gossip.",
    "Tons of garbage is dumped daily into the ocean.",
    "Stick to your goal; Never give up.",
    "Buying unnecessary things is like pouring money down the drain.",
    "Revisiting his hometown awoke his childhood memories.",
    "It is now a must for pet-keepers to put chips in their pets.",
    "There are all kinds of advertisements baiting prospective buyers.",
    "She has a budding talent for writing.",
    "Ben likes to make her laugh by clowning (around).",
    "Patients with minor disorders should go to local clinics.",
    "The woman cradled the baby in her arms.",
    "Once a river is dammed up, the biological communities in it will be affected.",
    "It is unhealthy to dam up your anger.",
    "Have you ever thought about why your presentation lacked depth.",
    "Be sure to wear a safety helmet when you ride a motorcycle.",
    "Most children like to play outdoors rather than stay indoors.",
    "He has always been very jealous of his brother's good looks.",
    "She loved dressing up and wearing priceless jewels.",
    "You should empty your junk mail every month.",
    "Many shops were trashed during the riot.",
    "The patient badly needs a kidney transplant.",
    "Do you know how to knot a bow tie?",
    "The park is littered with rubbish.",
    "The silver medal and the bronze medal go to Jane and Jack respectively.",
    "Government statistics show that hourly earnings of white-collar workers are about 30% higher than those of blue-collar workers.",
    "It's a pity that I cannot attend this conference.",
    "Stop indulging in self-pity for yourself.",
    "Exhaust fumes from vehicals are the major air pollutant.",
    "Remove decaying vegetables to prevent rot from spreading.",
    "The glass slipped out of my hand and smashed on the floor.",
    "It is not unusual to have a slip of the tougue when you talk really fast.",
    "Stickers allow people to express themselves in humorous ways.",
    "You must awake to the fact that only hard work brings success.",
    "The suspect ditched the car and ran into the woods.",
    "The two men harbor hatred toward each other.",
    "Our health insurance system is the envy of the world.",
    "Exploring outer space is no longer a fancy.",
    "The boy often fancies himself as a superhero.",
    "There is a grocery store around the corner from the hostel.",
    "I just read through the headlines of the paper.",
    "The Great Wall is a marvelous architectural feat.",
    "I spied my sister in the crowd at the entrance.",
    "Are you a tiger? According to the Chinese Zodiac, people born in the Year of the Tiger are kind, caring and energetic. That may be true, but those characteristics are not generally associated with real tigers. While we admire the handsome animals, we also fear them. But there are lessons everyone can learn from the lives of these striking cats.",
    "It's a holiday, and it's time to satisfy your sweet tooth with special candy and cookies! It's also time for families to gather around the table and enjoy traditional foods. One of those foods, which often shows up in a soup at the meal's end, is mustard greens. It joins the meal in the hope that those eating it will have a long life."
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



