const version = "1.6";
const pageid = "1-1-p3";
const homebuttonids = ["bl-V-U15", "bl-V-U16", "bl-B-1-1-p3", "bl-P-1-1-p3-2", "bl-W-1-1-p3", "tr-T-1-1-p3"];
const homebuttonnames = ["Voc Unit 15", "Voc Unit 16", "Book U1 課文", "Pattern & Book 例句", "Writing", "Translate"];
const homehtml = '<div class="home-button-container"><button class="home-button" onclick="hbt(0, 1)">' + homebuttonnames[0] + '</button><button class="home-button" onclick="hbt(1, 1)">' + homebuttonnames[1] + '</button><button class="home-button" onclick="hbt(2, 1)">' + homebuttonnames[2] + '</button><button class="home-button" onclick="hbt(3, 1)">' + homebuttonnames[3] + '</button><button class="home-button" onclick="hbt(4, 1)">' + homebuttonnames[4] + '</button><button class="home-button" onclick="hbt(5, 5)">' + homebuttonnames[5] + '</button></div>';
const infobuttonhtml = '<button class="info-button" onclick="showinfo()"><object data="q.svg" class="q-svg svg" id="q-svg"></object></button>';
const configbuttonhtml = '<button class="config-button" onclick="showconfig()"><object data="c.svg" class="c-svg svg" id="c-svg"></object></button>';
const infotext = 'tgfotEt v1.6 preview<br><br>新的功能:<br>1. 進度指示器(每個單詞都要答對一次才算100%)<br>2. 刷新頁面後不會失去進度及資料<br>3. 空格的位置不再會跑掉<br>4. 空格可以被設置為提示第一個字母<br>5. 空格可以被設置為長度不定<br>6. 翻譯可被設定為提示答案有幾個字母、單詞<br>7. The, a, do 等常用單詞不會出現在空格裡<br><br>If you have found a bug or issue that you would like to report, or you have any inconvenieces using tgfotEt, please contact at yp11131112@yphs.tp.edu.tw';
const infohtml = '<button class="info-bg-bt" onclick="hideinfo()"></button><div class="info-content"><div class="info-text">' + infotext + '</div></div><button class="info-ex-bt" onclick="hideinfo()"><object data="x.svg" class="x-svg svg" id="x-svg"></object></button>';
const confightml = '<button class="config-bg-bt" onclick="hideconfig()"></button><div class="config-content"><div class="config-text"></div></div><button class="config-ex-bt" onclick="hideconfig()"><object data="x.svg" class="x-svg svg" id="x-svg"></object></button>';
const blconfigcontenthtml = '<div class="bl-config-grid"><button class="config-segment config-segment-t" onclick="blconfigseg(0)">Reset</button><button class="config-segment config-segment-m" onclick="blconfigseg(1)">Modes</button><button class="config-segment config-segment-b" onclick="blconfigseg(2)">Sentence Options</button><div class="config-innercontent"></div></div>';
const trconfigcontenthtml = '<div class="tr-config-grid"><button class="config-segment config-segment-t" onclick="trconfigseg(0)">Reset</button><button class="config-segment config-segment-m" onclick="trconfigseg(1)">Modes</button><button class="config-segment config-segment-b" onclick="trconfigseg(2)">Translate Options</button><div class="config-innercontent"></div></div>';
const translatehtml = '<button class="back" onclick="back()">Back</button><div class="tr-container"><div class="tr-chi"></div><textarea class="tr-textarea" wrap="hard" oninput="textareachange()"></textarea></div><div class="rates">Rates: 0.00%</div><div class="stats"><div class="progress"><div class="progress-filled"></div><span class="progress-text">0.00%</span></div></div>';
const blankwordshtml = '<button class="back" onclick="back()">Back</button><div class="bl-container"><canvas class="bl-textinput"></canvas></div><div class="rates">Rates: 0.00%</div><div class="stats"><div class="progress"><div class="progress-filled"></div><span class="progress-text">0.00%</span></div></div>';
const exceptions = ['', 'a', 'an', 'the', 'i', 'you', 'he', 'she', 'we', 'they', 'my', 'your', 'his', 'her', 'our', 'their', 'me', 'hers', 'them', 'us', 'and', 'too', 'do', 'say', 'said', 'says', 'but', 'not', 'yes', 'no', 'can', 'can\'t', 'will', 'won\'t', 'or', 'what', 'all', 'go', 'goes', 'going', 'went', 'gone', 'so'];
const punctuations = [' ', '.', ',', '!', '?', ';', ':', '/', '"', '(', ')', '[', ']', '{', '}'];
const infodiv = document.createElement("div");
infodiv.classList.add("info");
infodiv.innerHTML = infohtml;
const configdiv = document.createElement("div");
configdiv.classList.add("config");
configdiv.innerHTML = confightml;
const pointerimg = new Image();
pointerimg.src = './p.png';
const blconfiginnercontenthtml = [
    '<button class="reset-button" onclick="blresetbuttonclick()">Reset Progress</button>',
    '<div class="switch-container"><div class="switch-box"><div class="switch-text">Show the first letter of a blank</div><label class="switch"><input type="checkbox" id="fl-cb"><span class="slider"></span></label></div><div class="switch-box"><div class="switch-text">Randomized blank length</div><label class="switch"><input type="checkbox" id="rl-cb"><span class="slider"></span></label></div></div>',
    ''
];
const trconfiginnercontenthtml = [
    '<button class="reset-button" onclick="trresetbuttonclick()">Reset Progress</button>',
    '<div class="switch-container"><div class="switch-box"><div class="switch-text">Show how many characters/words are in the answer</div><label class="switch"><input type="checkbox" id="l-cb"><span class="slider"></span></label></div></div>',
    ''
];

const blank = [[], [], [], [], []];
const trans = [[]];


blank[0] = [
    "Wash your hands frequently to prevent infection.",
    "I felt ashamed of the things I'd said to him.",
    "It is a shameful deed to cut in line.",
    "It is shameless of him to make such a request.",
    "He is interested in all kinds of athletic activities.",
    "He can play any sport. He is naturally athletic.",
    "He made funny faces to amuse the children.",
    "I am amused; his joke is amusing.",
    "To my amusement, she sang while taking a shower.",
    "Tokyo Disneyland is the most famous amusement park in Japan.",
    "There should be flowers and candlelight in a romantic dinner.",
    "Her boyfriend is a romantic who often buys her flowers.",
    "The story concerns a romance between a young couple.",
    "After a long summer vacation, classrooms become very dusty.",
    "He sent a telegraph to his brother, asking him to come back at once.",
    "The governor telegraphed the president an urgent message.",
    "Don't be misled by his appearance. He is a good worker.",
    "The newspaper has apologized for its misleading article.",
    "The Swedish was the eventual winner of the tournament.",
    "He eventually escaped and made his way back to England.",
    "The pyramid is the tomb of a young pharaoh.",
    "The situation is grave.",
    "I promise you that I'll carry the secret to the grave. I won't tell anyone.",
    "He placed a bouquet of flowers in front of the gravestone.",
    "The graveyard looked ghostly, wrapped up in mist.",
    "I can't hear your murmur. Please speak louder.",
    "The girl murmured an apology and ran away.",
    "She wrote a biography of Benjamin Franklin.",
    "Jimmy's autobiography will be popular in the future.",
    "Providing more parking spaces is a partial solution to the traffic problem.",
    "The report in the papers is very partial, not objective at all.",
    "The referee was obviously partial to the home team.",
    "Judges have to be impartial when hearing a case.",
    "What he said is partially true.",
    "His parents are very busy. They seldom interact with him.",
    "The two chemicals interact with each other.",
    "Price is determined through the interaction of demand and supply.",
    "Many interactive online games are for multiple players.",
    "It was a gigantic mistake.",
    "Social disorder leads to high crime rates.",
    "Eating too much will result in stomach disorder.",
    "Many girls are disordered in their eating behaviors.",
    "Everything is in disorder and covered with dust.",
    "He takes a very passive attitude toward learning English.",
    "He is a freshman in Congress.",
    "He is a freshman at Stanford.",
    "Electronics is a scientific study of electric current.",
    "The hostages are being held in extremely harsh conditions.",
    "Please don't be too harsh on me.",
    "I hate the harsh sound of fingernails scratching on the blackboard.",
    "The two gyms have a partnership.",
    "We should respect the privacy of others.",
    "There is no ferry service now.",
    "The boat ferried the passengers back to the dock.",
    "The plan has more disadvantages than advantages.",
    "Many women feel seriously disadvantaged by their gender.",
    "Immigrants are at a disadvantage in the job market.",
    "The organization aims at helping disadvantaged families.",
    "A drunk was staggering and swaying unsteadily.",
    "Don't be swayed by your friends' opinions.",
    "I love to see the sway of water lilies in the breeze.",
    "Nowadays, few countries still have kings.",
    "The explorers went farther and farther into the dense forest.",
    "You can stay overnight if you want to.",
    "He became rich overnight.",
    "His new play is an overnight hit.",
    "Winning the championship was the most glorious moment in his life.",
    "The glorious palace is another must-see.",
    "The necklace is made of copper.",
    "She wears a copper bracelet.",
    "The new ambassador to Poland is an experienced diplomat.",
    "His hair has a natural curl.",
    "Does your hair curl naturally, or is it permed?",
    "She has curly long hair.",
    "The documents were delivered by a special messenger.",
    "The early settlers of America were mainly from England.",
    "Equality between men and women has not been achieved.",
    "He resigned as manager from the company.",
    "He has submitted his resignation letter and is determined to leave.",
    "He resigned himself to losing the money.",
    "They are resigned to their fate.",
    "Today, some widows in India still live a miserable life.",
    "She adores French perfume.",
    "She perfumed her hair.",
    "Charity begins at home.",
    "The old man lives on charity.",
    "The Red Cross is a charity."

];

blank[1] = [
    "Richard is studying civil engineering at Manchester University.",
    "Please write a 500-word summary of the story.",
    "We have to summarize the article in 200 words.",
    "To summarize, EQ is more important than IQ.",
    "Thousands of refugees fled across the border.",
    "Scientists want to expand the use of solar energy.",
    "People use the solar calendar more often than the lunar calendar.",
    "These shoes are a real bargain at such a low price.",
    "They made a bargain that they would split the cost.",
    "Jake haggled with the vendors to get a good bargain.",
    "I kept bargaining with the vendor.",
    "The great storm caused many wrecks.",
    "Divers explored the wreck, but found no gold coins.",
    "This illness left him a wreck.",
    "The mob wrecked five churches and burned sixteen cars.",
    "The affair wrecked their marriage and they divorced.",
    "Rescue teams are still searching the wreckage for survivors.",
    "Her grief over her son's death has almost driven her mad.",
    "He was a man of sincerity.",
    "Witches are said to be accompanied by black cats.",
    "The wizard cast a spell on the frog, turning it into a prince.",
    "Dogs have a keen sense of smell and hearing.",
    "They are keen to win the championship this year.",
    "It's hard to win in this keen competition.",
    "The movie is about an accidental encounter between two strangers.",
    "I owed it to my accountant for having saved a lot of money.",
    "He is just an acquaintance of mine, not a friend.",
    "I have some acquaintance with the culture of this country.",
    "It is my pleasure to make your acquaintance.",
    "His courage was admirable, but irrational.",
    "My admiration for our manager grows daily.",
    "Sales of arms to the Middle East have increased dramatically.",
    "The knight put on his armor.",
    "These artificial flowers look real.",
    "I usually save my audio files in MP3 format.",
    "Dad started going bald in his thirties.",
    "He was totally broke.",
    "The company went bankrupt during the depression.",
    "Many Americans are bankrupted by medical bills.",
    "Some dishonest bankrupts hide their assets.",
    "Financial difficulties led to his bankruptcy in 1947.",
    "Fill the basin with water.",
    "This city is located in a basin.",
    "Blend butter and flour to make paste.",
    "Oil and water do not blend.",
    "The punch is a blend of apple and orange juice.",
    "The bride and the bridegroom exchanged rings.",
    "I asked my best friend to be my best man.",
    "People killed the brutal king.",
    "You are a brute, bullying your little brother like that.",
    "The Memorial Wall reminds us of the brutality of war.",
    "An average potato has about ninety calories.",
    "The ship can carry a cargo of one thousand tons.",
    "He fell off the cliff.",
    "I was just congratulating Cindy on winning the race.",
    "The Romans conquered Egypt.",
    "Alexander the Great is a famous conqueror.",
    "Do you have an extension cord?",
    "Have you got some cords that I can tie this parcel up with?",
    "It's common courtesy to thank someone when they help you.",
    "These pages were reproduced by courtesy of that magazine.",
    "He adds ice cubes to the coke.",
    "The cube of 4 is 64.",
    "She stirred in the cubed potato and the cubed beef steak.",
    "A human being requires one hundred cubic meters of water per year.",
    "They started washing up. That was the cue for us to leave.",
    "I will cue you by nodding my head when it is your turn to speak.",
    "She sank back into the cushions.",
    "They tried to cushion the blow of the pandemic.",
    "I don't think I can meet the application deadline.",
    "I can't digest meat easily.",
    "Reader's Digest was a popular magazine.",
    "Digital photos last forever.",
    "The largest four-digit number is 9999.",
    "A college diploma doesn't guarantee a good job.",
    "He frowned in disgust at the terrible smell.",
    "Your hypocrisy disgusted us.",
    "I am disgusted with his hypocrisy.",
    "I find it disgusting to eat worms.",
    "She dyed her hair blonde.",
    "She dipped the fabric into the dye."
];

blank[2] = [
    "The starting gun sounds in the stadium with a loud bang! The crowd watches the UK's Derek Redmond take off, and many think he has a good chance of winning the race. Years of training and dedication have brought him to this moment: a four-hundred-meter race at the 1992 Olympics in front of a crowd of 65000.",
    "He has his heart set on winning a gold medal. Four years ago, he was forced to miss the Olympics due to an injury, but now this is his moment. This is his time to show the world what he can do.",
    "One hundred meters. He's hungry for success. Now he must speed up. He races ahead of the others, and the medal feels closer with every step. One hundred and fifty meters....",
    "Suddenly, the muscles in his leg feel like they are on fire. The pain is unbearable, and he grabs his powerless limb in horror. Immediately, he realizes what has happened: his right hamstring is completely torn.",
    "All eyes in the crowd are on him, watching him collapse to the ground in pain. In spite of starting off strong, he has now lost both the race and his dream.",
    "Arm in arm and in tears, the Redmonds struggle toward the finish line in one of the greatest moments in Olympic history. Pride, courage, and a father's love carry them through as 65000 emotional spectators watch in admiration and respect.",
    "The people of the world have seen someone fall and rise again -- despite the disappointment, despite the pain. They have seen the heart of a champion."
];

blank[3] = [
    "Despite Allen's young age, he runs an online game company.",
    "To our amazement, his company made twice as many profits as last year.",
    "In spite of all kinds of difficulties, I will not lose heart.",
    "I am deeply convinced that whoever persists to the end will have a chance to succeed.",
    "No matter what present you give to Mom, it is the thought that counts.",
    "She will still be very happy even though it is just a birthday card.",
    "No matter who tries to persuade me to give up, I will not listen.",
    "Difficult as this project is, I will work hard and persist to the end.",
    //########################################################################################################
    "Howard will be crowned the world chess champion after winning the final next Monday.",
    "Doctor Parker shows total dedication to this project.",
    "She has spent a lot of time doing detailed studies since she began the project two years ago.",
    "For eighteen months, this author has dedicated himself to writing a book about the snacks available in Taiwanese night markets.",
    "Liz dreamed of coming in first in the race and wearing a shiny gold medal around her neck.",
    "After suffering a serious injury in her last race, the cyclist has no chance of becoming a world champion this time.",
    "Aunt May crashed her car into a tree last night. Fortunately, she escaped without injury.",
    "Harry badly injured himself at the beach and was taken to the hospital.",
    "Monica had great success in her work and became a famous singer after years of dedication.",
    "Sally's first year at her university was a great success. She made lots of new friends and got high grades.",
    "Despite having faced many difficulties, Kevin still succeeded in starting his own company.",
    "If you want to be successful in your job, work hard and never give up.",
    "Once the dentist pulled out Alice's rotten tooth, she no longer suffered from the pain.",
    "Alex experienced a sharp pain in his leg while hiking.",
    "n spite of her sore wrist, Mrs. Davis painfully turned the tight handle until the door opened.",
    "Meg's right arm was injured last week and thus she found carrying heavy things a bit painful.",
    "The soldier wants to forget his painful memories of the war.",
    "I need to leave immediately, or I'll miss my plane.",
    "Upon getting the call, the police took immediate action and quickly arrived at the scene of the crime.",
    "The woman felt dizzy after the seven-hour train journey and suddenly collapsed in the station.",
    "The walls of our old house completely collapsed when a strong typhoon struck last week.",
    "A powerful earthquake led to the sudden collapse of many houses in the area.",
    "Lisa plans to attend medical school and become a doctor in the future.",
    "The hotel staff greets all guests in a polite way.",
    "The movie theater has a small staff of fifteen part-time workers.",
    "Although the backpacker had little money, he somehow managed to travel all over Africa.",
    "It takes courage for first-time swimmers to put their heads under the water.",
    "It's important for a player to have enough mental strength to handle the stress during competitions.",
    "Rachel tried to build up her strength by exercising every day.",
    "Spending holidays together greatly strengthens the bond between Henry and his family.",
    "The crowd cheered loudly to show their support for the tennis player every time she won a point.",
    "Clive's parents support him in his desire to become a pilot and will gladly pay his flight school fees.",
    "The bridge across the river is supported by two huge stone pillars.",
    "With a heavy load in back, the truck struggled slowly up the steep hill.",
    "Our neighbor was trapped in the fire and struggled for breath.",
    "Natalie missed a whole week of school, so it was quite a struggle for her to catch up.",
    "Neil took pride in his brother's determination when he saw him complete the marathon.",
    "Laura's parents were very proud of her excellent score in science class.",
    "Mr. Jones got very emotional and struggled to hold back the tears when his daughter graduated from law school.",
    "Amy's emotional support helped me a lot when my mother died.",
    "Danny is shy, so it's hard for him to express his emotions and let others know how he feels.",
    "The bride's voice was full of emotion when she smiled and answered, \"I do.\"",
    "Fans showed their admiration for the amazing actor by throwing flowers up onto the stage after the show.",
    "Debbie deeply admires Jimmy for his generosity and honesty.",
    "Mike had great respect for the wise old man and always treated him politely.",
    "Even if you don't agree with someone, it's still important to respect his or her opinions.",
    "As soon as these firefighters were ready, they took off at great speed toward the burning building.",
    "After racing down the runway, the large plane successfully took off into the air.",
    "Toby has his heart set on being an NBA player and trains for hours every day to improve his basketball skills.",
    "We are behind schedule, so we need to speed up and work more quickly.",
    "When the injured boxer rose to his feet after being knocked down, everyone clapped wildly.",
    "It was Evan's support that carried Mandy through when she lost her sister in a car accident.",
    "As soon as these firefighters were ready, they took off at great speed toward the burning building.",
    "After racing down the runway, the large plane successfully took off into the air.",
    "Toby has his heart set on being an NBA player and trains for hours every day to improve his basketball skills.",
    "We are behind schedule, so we need to speed up and work more quickly.",
    "When the injured boxer rose to his feet after being knocked down, everyone clapped wildly.",
    "It was Evan's support that carried Mandy through when she lost her sister in a car accident."
];

blank[4] = [
    'to be announced',
    'to be announced'
];

trans[0] = [
    ["n. 感染", "infection"],
    ["a. 感到羞愧", "ashamed"],
    ["a. 可恥的", "shameful"],
    ["a. 無恥的", "shameless"],
    ["a. 運動的", "athletic"],
    ["a. 有運動細胞的", "athletic"],
    ["n. 運動員", "athlete"],
    ["vt. 娛樂、使開懷", "amuse"],
    ["a. 覺得有趣的", "amused"],
    ["a. 令人發笑的", "amusing"],
    ["n. 娛樂", "amusement"],
    ["n. 遊樂場、兒童樂園", "amusement park"],
    ["a. 浪漫的", "romantic"],
    ["n. 浪漫愛幻想的人", "romantic"],
    ["n. 愛情故事、羅曼史", "romance"],
    ["a. 多灰塵的", "dusty"],
    ["n. 灰塵", "dust"],
    ["vt. 把灰塵撢掉", "dust"],
    ["n. 電報", "telegraph"],
    ["vt. 給~發電報", "telegraph"],
    ["vt. 誤導", "mislead"],
    ["a. 誤導的", "misleading"],
    ["a. 最終的", "eventual"],
    ["adv. 終於、終究", "eventually"],
    ["n. 陵墓(特指內有華麗墓室的大型墳墓)", "tomb"],
    ["a. 嚴重的", "grave"],
    ["n. 墳墓", "grave"],
    ["n. 墓碑", "gravestone"],
    ["n. 墓園、墳場", "graveyard"],
    ["n. 低語、輕聲細語(m-)", "murmur"],
    ["vi./vt. 低聲說、喃喃低語", "murmur"],
    ["n. 低語、耳語(w-)", "whisper"],
    ["n. 傳記", "biography"],
    ["n. 自傳", "autobiography"],
    ["a. 部分的", "partial"],
    ["a. 斷章取義的", "partial"],
    ["a. 偏袒的", "partial"],
    ["a. 公正不偏袒的", "impartial"],
    ["adv. 部分地", "partially"],
    ["vi. 互動", "interact"],
    ["vi. 互相影響、作用", "interact"],
    ["n. 交互作用", "interaction"],
    ["a. 互動式的", "interactive"],
    ["a. 巨大的", "gigantic"],
    ["n. 混亂、失序", "disorder"],
    ["n. 小病、不適", "disorder"],
    ["vt. 使混亂、使失調罕見", "disorder"],
    ["phr. 紊亂、沒條理", "in disorder"],
    ["a. 被動的、消極的", "passive"],
    ["a. 主動的、活躍的", "active"],
    ["n. 初學者、新人", "freshman"],
    ["n. (大學或高中的)一年級新生", "freshman"],
    ["n. 電子學", "electronics"],
    ["a. 電子的", "electronic"],
    ["a. 艱困的、惡劣的", "harsh"],
    ["a. 嚴厲的、嚴苛的", "harsh"],
    ["a. 刺眼的、刺耳的", "harsh"],
    ["n. 合夥關係", "partnership"],
    ["n. 隱私", "privacy"],
    ["a. 私立的、私人的", "private"],
    ["n. 渡輪", "ferry"],
    ["vt. (短程定期的)運送", "ferry"],
    ["n. 缺點、弱點", "disadvantage"],
    ["vt. 使~處於不利地位", "disadvantage"],
    ["phr. 處於劣勢", "at a disadvantage"],
    ["a. 弱勢的", "disadvantaged"],
    ["n. 優點、優勢", "advantage"],
    ["vi./vt. 擺動、搖晃", "sway"],
    ["vt. 左右、影響", "sway"],
    ["n. 擺動、搖擺", "sway"],
    ["adv. 現今", "nowadays"],
    ["a. 稠密的", "dense"],
    ["adv. 整晚、一整夜", "overnight"],
    ["adv. 突然地", "overnight"],
    ["a. 一夜的、突然的", "overnight"],
    ["a. 光榮的", "glorious"],
    ["a. 壯麗的", "glorious"],
    ["n. 榮耀", "glory"],
    ["n. 銅、紅銅", "copepr"],
    ["a. 銅製的", "copper"],
    ["n. 黃銅、銅管樂器", "brass"],
    ["a. 黃銅製的、黃銅色的", "brass"],
    ["n. 外交官", "diplomat"],
    ["n. 捲髮", "curl"],
    ["vi./vt. 捲曲", "curl"],
    ["a. 捲曲的", "curly"],
    ["n. 信差、使者", "messenger"],
    ["n. 殖民者、移民", "settler"],
    ["vi. 定居", "settle"],
    ["n. 均等、平等", "equality"],
    ["a. 平等的、等於的", "equal"],
    ["vt. 等於", "equal"],
    ["n. 地位能力相當的人、重要性相等的事物", "equal"],
    ["vi./vt. 辭職", "resign"],
    ["n. 辭職", "resignation"],
    ["phr. 默默承受、無奈順從(r-)", "resign oneself to"],
    ["phr. 默默承受、無奈順從(be-)", "be resigned to"],
    ["a. 悲慘的", "miserable"],
    ["n. 香水", "perfume"],
    ["vt. 噴、灑香水", "perfume"],
    ["n. 慈善", "charity"],
    ["n. 救濟品、救濟金", "charity"],
    ["n. 慈善機構", "charity"],
    ["n. 工程學", "engineering"],
    ["n. 工程師", "engineer"],
    ["n. 引擎", "engine"],
    ["n. 摘要", "summary"],
    ["vt. 摘要、概述", "summarize"],
    ["phr. 總括來說、下結論", "to summarize"],
    ["n. 難民", "refugee"],
    ["a. 太陽的", "solar"],
    ["a. 根據太陽訂定的、陽曆的", "solar"],
    ["n. 特價品", "bargain"],
    ["n. 協議、交易", "bargain"],
    ["phr. 划算/吃虧的買賣", "a good / bad bargain"],
    ["vi. 討價還價", "bargain"],
    ["n. 船難", "wreck"],
    ["n. 船隻車輛、建築物殘骸(遭到毀損,但仍大致完整)", "wreck"],
    ["n. 嚴重受創的人、行屍走肉", "wreck"],
    ["vt. 使~毀損", "wreck"],
    ["vt. 破壞", "wreck"],
    ["n. 損壞到難以辨認的殘骸", "wreckage"],
    ["n. 哀傷(特別指因親友的逝世而哀傷)", "grief"],
    ["n. 真誠、誠懇", "sincerity"],
    ["a. 真誠的", "sincere"],
    ["n. 女巫", "witch"],
    ["n. 男巫、巫師", "wizard"],
    ["a. 激烈的", "keen"],
    ["a. 敏銳的", "keen"],
    ["a. 熱切的", "keen"],
    ["a. 偶然的、意外的", "accidental"],
    ["n. 會計師", "accountant"],
    ["n. 帳戶", "account"],
    ["n. 認識的人", "acquaintance"],
    ["n. 認識、知悉", "acquaintance"],
    ["phr. 與某人結識", "make one's acquaintance"],
    ["a. 可欽佩的", "admirable"],
    ["n. 欽佩", "admiration"],
    ["vt. 仰慕、佩服", "admire"],
    ["n. 武器(軍人用的劍、槍、兵器等)", "arms"],
    ["n. 鐵甲、盔甲", "armor"],
    ["vt. 幫A用B武裝、給A裝備B", "arm"],
    ["n. 軍隊", "army"],
    ["a. 武裝的", "armed"],
    ["a. 人造的", "artificial"],
    ["a. 聲音的、音頻的", "audio"],
    ["a. 禿的", "bald"],
    ["a. 破產的、一文不名的(口語)", "broke"],
    ["a. 破產的", "bankrupt"],
    ["vt. 使破產", "bankrupt"],
    ["n. 破產者", "bankrupt"],
    ["n. 破產", "bankruptcy"],
    ["n. 洗手臺", "basin"],
    ["n. 盆地", "basin"],
    ["vt. 混合", "blend"],
    ["vi. 調合、融合", "blend"],
    ["n. 混合、調合(物)", "blend"],
    ["n. 新郎", "bridegroom"],
    ["n. 男儐相、伴郎", "best man"],
    ["a. 殘暴的", "brutal"],
    ["n. 凶殘之人", "brute"],
    ["n. 殘酷、殘暴", "brutality"],
    ["n. 卡路里", "calorie"],
    ["n. (一整艘船或飛機所載運的)貨物", "cargo"],
    ["n. 懸崖", "cliff"],
    ["vt. 恭喜、祝賀", "congratulate"],
    ["vi. 征服", "conquer"],
    ["n. 征服者", "conqueror"],
    ["n. 電線", "cord"],
    ["n. 細繩(c-)", "cord"],
    ["n. 粗繩(r-)", "rope"],
    ["n. 細繩、粗線(s-)", "string"],
    ["n. 細線(t-)", "thread"],
    ["vt. 穿線於~", "thread"],
    ["n. 禮貌", "courtesy"],
    ["phr. 蒙~好意、蒙~提供或允許使用", "by courtesy of"],
    ["n. 立方體", "cube"],
    ["n. 立方", "cube"],
    ["vt. 切丁、切成小方塊", "cube"],
    ["a. 立方體的、立方的", "cubic"],
    ["n. 暗示、提示", "cue"],
    ["vt. 給~提示或打信號", "cue"],
    ["n. 軟墊", "cushion"],
    ["vt. 減輕、緩和", "cushion"],
    ["n. 最後期限", "deadline"],
    ["vi./vt. 消化", "digest"],
    ["n. 文摘", "digest"],
    ["a. 數位的", "digital"],
    ["n. 從零到九的數字", "digit"],
    ["n. 文憑", "diploma"],
    ["n. 厭惡", "disgust"],
    ["vt. 使~厭惡", "disgust"],
    ["a. 感到噁心", "disgusted"],
    ["a. 令人噁心的", "disgusting"],
    ["vt. 染色", "dye"],
    ["n. 染料", "dye"],
    ["n. 朝代", "dynasty"],

];

const start_dis = 1;
const trsi = 5;
let list = Array(6);
let bl = Array(5);
let tr = Array(1);
let ctype = -1;//-1:home, 1:bl 5:tr
let cpage = -1;//-1:home

//localStorage.clear() // REMOVE!!!!!!!!!!!
standardize();
retrievestoragedata();
console.log(list);

function standardize() {
    for (let i = 0; i < blank.length; i++) {
        for (let j = 0; j < blank[i].length; j++) {
            blank[i][j] = blank[i][j].replace(/\s+/g, ' ').trim();
        }
    }
}

function retrievestoragedata() {
    if (localStorage.length === 0) {// first time using
        update();
        return;
    }
    if (!!localStorage.getItem('pageid0')) {// old datastorage
        localStorage.clear();
        update();
        return;
    }
    if (localStorage.getItem('pageid') !== pageid) {// new sentences (possibly different list lengths)
        update();
        return;
    }
    const hbi = JSON.parse(localStorage.getItem('names'));
    if (hbi.length !== homebuttonids.length && localStorage.getItem('trsi') !== trsi.toString()) {
        alert("Something went wrong. Your progress will be resetted.");
        localStorage.clear();
        update();
        return;
    }

    list = JSON.parse(localStorage.getItem("list"));
    bl = JSON.parse(localStorage.getItem("bl"));
    tr = JSON.parse(localStorage.getItem("tr"));

    for (let i = 0; i < homebuttonids.length; i++) {
        if (hbi[i] !== homebuttonids[i]) {
            if (i < trsi) {
                resetblanks(i, 1);
            }
            else {
                resettranslate(i, 1);
            }
        }
    }
    setstoragedata();

    function update() {
        resetblanks(0, 1);
        resetblanks(1, 1);
        resetblanks(2, 1);
        resetblanks(3, 1);
        resetblanks(4, 1);
        resettranslate(5, 1);
        setstoragedata();
        localStorage.setItem('pageid', pageid);
        localStorage.setItem('version', version);
    }
}

function setstoragedata() {
    localStorage.setItem('list', JSON.stringify(list));
    localStorage.setItem('bl', JSON.stringify(bl));
    localStorage.setItem('tr', JSON.stringify(tr));
    localStorage.setItem('names', JSON.stringify(homebuttonids));
    localStorage.setItem('trsi', trsi.toString());
}

function delstoragedata() {
    const tmppageid = localStorage.getItem('pageid');
    localStorage.clear();
    localStorage.setItem('pageid', tmppageid);
}

function createblanks(l, n) {
    let firstUse = l[0][1].length === 0;
    l.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
          }
          return 1;
     });
    for (let sentenceNo = 0; sentenceNo < blank[n].length; sentenceNo++) {// for every sentence
        let sentence = blank[n][sentenceNo] + ' ';
        worddata = [];
        //seperating into words
        startindex = 0;
        dataindex = 0;
        for (let i = 0; i < sentence.length; i++) {// for every character in sentence
            if (punctuations.includes(sentence[i])) {
                if (!exceptions.includes(sentence.substring(startindex, i).toLowerCase()) && i - startindex > 1) {
                    worddata.push([startindex, i - startindex, 0, 0, firstUse ? start_dis : l[sentenceNo][1][dataindex][4]]);
                    dataindex++;
                }
                startindex = i + 1;
            }
        }
        //creating blanks
        let blankpositions = Array.apply(null, Array(worddata.length)).map(v => 0);
        blankpositions.fill(1, 0, Math.floor(worddata.length / 2));
        shuffle(blankpositions);
        for (let i = 0; i < worddata.length; i++) {
            worddata[i][2] = blankpositions[i];
            worddata[i][3] = 1 - blankpositions[i];
        }
        // disable blanks that have been typed
        if (l[sentenceNo][1].length !== 0) worddata.forEach((v, ind) => {
            if (l[sentenceNo][1][ind][4] <= 0) {
                v[2] = 0;
                v[3] = 0;
            }
        });
        l[sentenceNo][1] = worddata;
    }
    shuffle(l);
}

function resetblanks(n, m) {
    list[n] = blank[n].map((v, i) => [i, [], true]);
    bl[n] = {
        index: [0, 0, 0],
        sentencedata: [],
        enterskip: false,
        start: false,
        mode: m,
        tmpmode: m,
        datasize: 0,
        completeddata: 0,
        typeddata: 0
    };
    createblanks(list[n], n);

    let dsz = 0;
    list[n].forEach((val) => {
        dsz += val[1].length;
    });
    bl[n].datasize = dsz * start_dis;

    setstoragedata();
}

function resettranslate(n, m) {
    list[n] = trans[n - trsi].map(v => [[v[0], v[1]], start_dis, true]);
    tr[n - trsi] = {
        index: 0,
        enterskip: false,
        prevstate: "",
        mode: m,
        tmpmode: m,
        datasize: 0,
        completeddata: 0,
        typeddata: 0
    };
    shuffle(list[n]);
    setstoragedata();
}

function blankwords() {
    updaterates(bl[cpage].completeddata, bl[cpage].typeddata);
    updateprogressbar(bl[cpage].completeddata / bl[cpage].datasize * 100);

    //init measuretext
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.font = "2.5vmax monospace";

    //init sentence
    let csentenceindex = list[cpage][bl[cpage].index[1]][0];
    let csentence = blank[cpage][csentenceindex];
    let csentencedata = list[cpage][bl[cpage].index[1]][1];

    let blankinnerhtml = createblankinnerhtml(false);

    if (!bl[cpage].start) {
        bl[cpage].index[2] = findnextwordblank(0, bl[cpage].index[0]);
        bl[cpage].sentencedata = Array(csentencedata.length).fill(0);
        bl[cpage].start = true;
    }

    let cblankword = csentence.substring(csentencedata[bl[cpage].index[2]][0], csentencedata[bl[cpage].index[2]][0] + csentencedata[bl[cpage].index[2]][1]);

    document.querySelector(".bl-container").innerHTML = blankinnerhtml;

    for (let i = 0; i < bl[cpage].sentencedata.length; i++) {
        if (bl[cpage].sentencedata[i] === 1) {
            let inp_ele = document.getElementById("bl-textbox" + i.toString());
            inp_ele.value = csentence.substring(csentencedata[i][0], csentencedata[i][0] + csentencedata[i][1]);
            inp_ele.disabled = true;
        }
        else if (bl[cpage].sentencedata[i] === 2) {
            let inp_ele = document.getElementById("bl-textbox" + i.toString());
            inp_ele.value = csentence.substring(csentencedata[i][0], csentencedata[i][0] + csentencedata[i][1]);
            inp_ele.classList.add('incorrect');
            inp_ele.disabled = true;
        }
        else if (bl[cpage].sentencedata[i] === 0 && !!document.getElementById("bl-textbox" + i.toString()) && (bl[cpage].mode % 2) === 0) {
            document.getElementById("bl-textbox" + i.toString()).placeholder = csentence[csentencedata[i][0]];
        }
    }

    //init blank
    let inputboxid = "bl-textbox" + bl[cpage].index[2].toString();
    let inputboxelement = document.getElementById(inputboxid);
    inputboxelement.focus();

    document.onkeyup = (e) => {
        if (e.key === "Enter") {
            inputboxelement.disabled = true;
            nextblank(true);
        }
        else if (inputboxelement.value === cblankword && !bl[cpage].enterskip) {
            inputboxelement.disabled = true;
            nextblank(false);
        }
    }

    function nextblank(isenter) {
        if (isenter && !bl[cpage].enterskip) {
            bl[cpage].typeddata++;
            updaterates(bl[cpage].completeddata, bl[cpage].typeddata);
            updateprogressbar(bl[cpage].completeddata / bl[cpage].datasize * 100);
            inputboxelement.classList.add('incorrect');
            inputboxelement.value = cblankword;
            bl[cpage].sentencedata[bl[cpage].index[2]] = 2;
        }
        else if (!isenter) {
            bl[cpage].completeddata++;
            bl[cpage].typeddata++;
            updaterates(bl[cpage].completeddata, bl[cpage].typeddata);
            updateprogressbar(bl[cpage].completeddata / bl[cpage].datasize * 100);
            list[cpage][bl[cpage].index[1]][1][bl[cpage].index[2]][4]--;
            bl[cpage].sentencedata[bl[cpage].index[2]] = 1;
        }

        //if finished session
        if (bl[cpage].completeddata === bl[cpage].datasize) {
            resetblanks(cpage, bl[cpage].mode);
            back();
            return;
        }

        let nextblankindex = findnextwordblank(bl[cpage].index[2] + 1, bl[cpage].index[0]);

        if (nextblankindex === -1) {
            if (bl[cpage].enterskip) {
                if (nextsentence()) return;
                bl[cpage].enterskip = false;
            }
            else if (isenter) {
                bl[cpage].enterskip = true;
            }
            else {
                if (nextsentence()) return;
            }
        }
        else {
            bl[cpage].index[2] = nextblankindex;
        }

        cblankword = csentence.substring(csentencedata[bl[cpage].index[2]][0], csentencedata[bl[cpage].index[2]][0] + csentencedata[bl[cpage].index[2]][1]);

        inputboxid = "bl-textbox" + bl[cpage].index[2].toString();
        inputboxelement = document.getElementById(inputboxid);
        inputboxelement.focus();
        setstoragedata();
    }

    function nextsentence() {
        let repeated = 0;
        do {
            bl[cpage].index[1]++;
            repeated++;
            if (repeated > list[cpage].length * 4) {
                resetblanks(cpage, bl[cpage].mode);
                back();
                return true;
            }
            if (bl[cpage].index[1] === list[cpage].length) {
                bl[cpage].index[1] = 0;
                bl[cpage].index[0]++;
                if (bl[cpage].index[0] === 2) {
                    bl[cpage].index[0] = 0;
                    createblanks(list[cpage], cpage);
                }
            }
        } while (findnextwordblank(0, bl[cpage].index[0]) === -1 || !list[cpage][bl[cpage].index[1]][2])


        csentenceindex = list[cpage][bl[cpage].index[1]][0];
        csentence = blank[cpage][csentenceindex];
        csentencedata = list[cpage][bl[cpage].index[1]][1];

        // create sentence html
        blankinnerhtml = createblankinnerhtml(false);
        // find the first blank of sentence
        bl[cpage].index[2] = findnextwordblank(0, bl[cpage].index[0]);
        // set storage sentencedata to [0]
        bl[cpage].sentencedata = Array(csentencedata.length).fill(0);
        // set innerhtml
        document.querySelector(".bl-container").innerHTML = blankinnerhtml;
        //if hint first letter
        if (bl[cpage].mode % 2 === 0) {
            for (let i = 0; i < csentencedata.length; i++) {
                if (!!document.getElementById("bl-textbox" + i.toString())) {
                    document.getElementById("bl-textbox" + i.toString()).placeholder = csentence[csentencedata[i][0]];
                }
            }
        }
        return false;
    }

    function findnextwordblank(indexstart, turn) {
        for (let i = indexstart; i < list[cpage][bl[cpage].index[1]][1].length; i++) {
            if (list[cpage][bl[cpage].index[1]][1][i][2 + turn] === 1) {
                return i;
            }
        }
        return -1;
    }

    function createblankinnerhtml(x) {
        let blankinnerhtml = "";
        let prevblankindex = 0;
        for (let i = 0; i < csentencedata.length; i++) {
            if (csentencedata[i][2 + bl[cpage].index[0]] === 1) {
                const blankwordheader = csentence.substring(prevblankindex, csentencedata[i][0]);
                const currentblankword = csentence.substring(csentencedata[i][0], csentencedata[i][0] + csentencedata[i][1]);
                let wordwidth = getwordwidth(currentblankword);
                const addedwidth = (wordwidth / currentblankword.length) * (Math.floor(bl[cpage].mode / 2) ? Math.floor(Math.random() * 5) : 0);
                wordwidth += addedwidth;
                if(x){
                    document.getElementById("bl-textbox" + i.toString()).style = "width:" + wordwidth.toString() + "px;";
                    continue;
                }
                const inputboxhtml = '<input class="bl-textbox" id="bl-textbox' + i.toString() + '" type="text" style="width:' + wordwidth.toString() + 'px;" maxlength="' + currentblankword.length + '" autocomplete="off">';
                blankinnerhtml += blankwordheader;
                blankinnerhtml += inputboxhtml;
                prevblankindex = csentencedata[i][0] + csentencedata[i][1];
            }
        }
        blankinnerhtml += csentence.substring(prevblankindex);
        return blankinnerhtml;
    }

    function getwordwidth(string) {
        const metrics = ctx.measureText(string);
        return metrics.width;
    }

    document.body.onresize = () => {
        ctx.font = Math.max(innerWidth, innerHeight)/100*2.5 + 'px monospace';
        createblankinnerhtml(true);
    }
}

function translate() {
    tr[cpage - trsi].datasize = list[cpage].length * start_dis;
    document.querySelector('.tr-chi').innerHTML = list[cpage][tr[cpage - trsi].index][0][0];
    if (tr[cpage - trsi].mode === 0)
        document.querySelector('.tr-chi').innerHTML += hintcw(list[cpage][tr[cpage - trsi].index][0][1]);
    document.querySelector('.tr-textarea').focus();
    updaterates(tr[cpage - trsi].completeddata, tr[cpage - trsi].typeddata);
    updateprogressbar(tr[cpage - trsi].completeddata / tr[cpage - trsi].datasize * 100);
}

function textareachange() {
    let value = document.querySelector('.tr-textarea').value;
    if (value[value.length - 1] === '\n') {
        if (tr[cpage - trsi].enterskip) {
            tr[cpage - trsi].enterskip = false;
            next();
        }
        else {
            document.querySelector('.tr-textarea').value = list[cpage][tr[cpage - trsi].index][0][1];
            document.querySelector('.tr-textarea').classList.add("incorrect");
            tr[cpage - trsi].enterskip = true;
            tr[cpage - trsi].typeddata++;
            updaterates(tr[cpage - trsi].completeddata, tr[cpage - trsi].typeddata);
        }

    }
    else if (tr[cpage - trsi].enterskip) {
        document.querySelector('.tr-textarea').value = tr[cpage - trsi].prevstate;
    }
    else if (value === list[cpage][tr[cpage - trsi].index][0][1]) {
        list[cpage][tr[cpage - trsi].index][1]--;
        tr[cpage - trsi].completeddata++;
        tr[cpage - trsi].typeddata++;
        updaterates(tr[cpage - trsi].completeddata, tr[cpage - trsi].typeddata);
        updateprogressbar(tr[cpage - trsi].completeddata / tr[cpage - trsi].datasize * 100);
        if (next()) return;
    }
    tr[cpage - trsi].prevstate = document.querySelector('.tr-textarea').value;
    function next() {
        if (tr[cpage - trsi].completeddata === tr[cpage - trsi].datasize) {
            resettranslate(cpage, tr[cpage - trsi].mode);
            back();
            return true;
        }
        let repeated = 0;
        do {
            tr[cpage - trsi].index++;
            repeated++;
            if(repeated > list[cpage].length * 2){
                resettranslate(cpage, tr[cpage - trsi].mode);
                back();
                return true;
            }
            if (tr[cpage - trsi].index === list[cpage].length) {
                tr[cpage - trsi].index = 0;
                shuffle(list[cpage]);
            }
        }
        while (list[cpage][tr[cpage - trsi].index][1] <= 0 || !list[cpage][tr[cpage - trsi].index][2])
        document.querySelector('.tr-textarea').value = '';
        document.querySelector('.tr-textarea').classList.remove("incorrect");
        document.querySelector('.tr-chi').innerHTML = list[cpage][tr[cpage - trsi].index][0][0];
        if (tr[cpage - trsi].mode === 0)
            document.querySelector('.tr-chi').innerHTML += hintcw(list[cpage][tr[cpage - trsi].index][0][1]);
        setstoragedata();
        return false;
    }
}

function back() {
    document.body.innerHTML = homehtml + infobuttonhtml;
    document.onkeydown = null;
    document.onkeyup = null;
    document.body.onresize = null;
}

function hbt(n, t) {
    ctype = t;
    cpage = n;
    if(t===1){
        document.body.innerHTML = blankwordshtml + infobuttonhtml + configbuttonhtml;
        blankwords();
    }
    else if(t===5){
        document.body.innerHTML = translatehtml + infobuttonhtml + configbuttonhtml;
        translate();
    }
}

function showinfo() {
    document.body.append(infodiv);
}

function hideinfo() {
    document.querySelector(".info").remove();
}

function showconfig() {
    document.body.append(configdiv);
    if (ctype === 1) document.querySelector(".config-text").innerHTML = blconfigcontenthtml;
    else if (ctype === 5) document.querySelector(".config-text").innerHTML = trconfigcontenthtml;
}

function hideconfig() {
    if (!!document.getElementById("fl-cb")) {
        bl[cpage].tmpmode = (document.getElementById("fl-cb").checked ? 0 : 1) + (document.getElementById("rl-cb").checked ? 2 : 0);
    }
    if (ctype === 1 && bl[cpage].tmpmode !== bl[cpage].mode) {
        bl[cpage].mode = bl[cpage].tmpmode;
        blankwords();
    }
    if (!!document.getElementById("l-cb")) {
        tr[cpage - trsi].tmpmode = (document.getElementById("l-cb").checked ? 0 : 1);
    }
    if (ctype === 5 && tr[cpage - trsi].tmpmode !== tr[cpage - trsi].mode) {
        tr[cpage - trsi].mode = tr[cpage - trsi].tmpmode;
        if (tr[cpage - trsi].mode === 0)
            document.querySelector('.tr-chi').innerHTML += hintcw(list[cpage][tr[cpage - trsi].index][0][1]);
        else if (tr[cpage - trsi].mode === 1)
            document.querySelector('.tr-chi').innerHTML = list[cpage][tr[cpage - trsi].index][0][0];
    }
    if (document.querySelector(".config-grid") != undefined) document.querySelector(".config-grid").remove();
    document.querySelector(".config").remove();
}

function blconfigseg(n) {
    if (!!document.getElementById("fl-cb")) {//was in mode page of blank
        bl[cpage].tmpmode = (document.getElementById("fl-cb").checked ? 0 : 1) + (document.getElementById("rl-cb").checked ? 2 : 0);
    }
    blconfiginnercontenthtml[2] = createcheckboxes(cpage);
    document.querySelector(".config-innercontent").innerHTML = blconfiginnercontenthtml[n];
    if (!!document.getElementById("fl-cb")) {//now in mode page of blank
        document.getElementById("fl-cb").checked = bl[cpage].tmpmode % 2 === 0;
        document.getElementById("rl-cb").checked = Math.floor(bl[cpage].tmpmode / 2) === 1;
    }
    setstoragedata();
}

function trconfigseg(n) {
    if (!!document.getElementById("l-cb")) {
        tr[cpage - trsi].tmpmode = (document.getElementById("l-cb").checked ? 0 : 1);
    }
    trconfiginnercontenthtml[2] = createcheckboxes(cpage);
    document.querySelector(".config-innercontent").innerHTML = trconfiginnercontenthtml[n];
    if (!!document.getElementById("l-cb")) {
        document.getElementById("l-cb").checked = tr[cpage - trsi].tmpmode % 2 === 0;
    }
    setstoragedata();
}

function blresetbuttonclick() {
    resetblanks(cpage, bl[cpage].mode);
    document.onkeydown = null;
    document.onkeyup = null;
    document.body.onresize = null;
    blankwords();
}

function trresetbuttonclick() {
    resettranslate(cpage, tr[cpage - trsi].mode);
    setstoragedata();
    translate();
}

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}

function delCharAt(str, index) {
    if (index > str.length - 1) return str;
    if (index === 0) return str.substring(1);
    return str.substring(0, index) + str.substring(index + 1);
}

function append(str, index, chr, length) {
    if (index > str.length) return str;
    let aps = new Array(length + 1).join(chr);
    return str.substring(0, index) + aps + str.substring(index);
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}

function shuffle2(array, array2) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        [array2[currentIndex], array2[randomIndex]] = [
            array2[randomIndex], array2[currentIndex]];
    }
}

function updaterates(n, d) {
    if (d === 0)
        document.querySelector(".rates").innerHTML = "Rates: 0.00%";
    else
        document.querySelector(".rates").innerHTML = "Rates: " + (n / d * 100).toFixed(2) + "%";
}

function updateprogressbar(percentage) {
    document.querySelector(".progress-filled").style.width = percentage.toString() + "%";
    document.querySelector(".progress-text").innerHTML = percentage.toFixed(2) + "%";
}

function hintcw(ans) {
    let words = ans.split(' ').filter(v => v.match(/[a-zA-Z]/g) !== null);
    return (words.length === 1 ? " (Characters: " + words[0].length.toString() + ")" : " (Words: " + words.length.toString() + ")");
}

function createcheckboxes(n) {
    if (n < trsi) {
        let checkboxhtml = [];
        for (let i = 0; i < list[n].length; i++) {
            let checked = list[n][i][2] ? 'checked' : '';
            let stnce = blank[n][list[n][i][0]];
            checkboxhtml.push('<div><input type="checkbox" name="' + stnce + '" id="' + stnce + '" onclick="checkboxchange(' + n.toString() + ', ' + i.toString() + ')" ' + checked + '> <label for="' + stnce + '">' + stnce + '</label></div>');
        }
        checkboxhtml.sort();
        return checkboxhtml.join('');
    }
    else {
        let checkboxhtml = [];
        for (let i = 0; i < list[n].length; i++) {
            let checked = list[n][i][2] ? 'checked' : '';
            let stnce = list[n][i][0][0] + ': ' + list[n][i][0][1];
            checkboxhtml.push('<div><input type="checkbox" name="' + stnce + '" id="' + stnce + '" onclick="checkboxchange(' + n.toString() + ', ' + i.toString() + ')" ' + checked + '> <label for="' + stnce + '">' + stnce + '</label></div>');
        }
        checkboxhtml.sort();
        return checkboxhtml.join('');
    }
}

function checkboxchange(n, ind) {
    const stnce = (n < trsi) ? blank[n][list[n][ind][0]] : list[n][ind][0][0] + ': ' + list[n][ind][0][1];
    const checkboxelement = document.getElementById(stnce);
    list[n][ind][2] = checkboxelement.checked;
    setstoragedata();
}

back();