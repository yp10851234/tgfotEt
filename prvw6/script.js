const pageid = ['1-1-w3', '0'];
const homebuttonnames = ["Voc Unit 13", "Voc Unit 14", "Review 3", "Pattern", "Translate"];
const homehtml = '<div class="home-button-container"><button class="home-button" onclick="hbt1()">' + homebuttonnames[0] + '</button><button class="home-button" onclick="hbt2()">' + homebuttonnames[1] + '</button><button class="home-button" onclick="hbt3()">' + homebuttonnames[2] + '</button><button class="home-button" onclick="hbt4()">' + homebuttonnames[3] + '</button><button class="home-button" onclick="hbt5()">' + homebuttonnames[4] + '</button></div>';
const infobuttonhtml = '<button class="info-button" onclick="showinfo()"><object data="q.svg" class="q-svg svg" id="q-svg"></object></button>';
const configbuttonhtml = '<button class="config-button" onclick="showconfig()"><object data="c.svg" class="c-svg svg" id="c-svg"></object></button>';
const infotext = 'tgfotEt v1.6 preview<br><br>新的功能:<br>1. 進度指示器(每個單詞都要答對一次才算100%)<br>2. 刷新頁面後不會失去進度及資料<br>3. 空格的位置不再會跑掉<br>4. 空格可以被設置為提示第一個字母<br>5. 空格可以被設置為長度不定<br>6. 翻譯可被設定為提示答案有幾個字母、單詞<br>7. The, a, do 等常用單詞不會出現在空格裡<br><br>If you have found a bug or issue that you would like to report, or you have any inconvenieces using tgfotEt, please contact at yp11131112@yphs.tp.edu.tw';
const infohtml = '<button class="info-bg-bt" onclick="hideinfo()"></button><div class="info-content"><div class="info-text">' + infotext + '</div></div><button class="info-ex-bt" onclick="hideinfo()"><object data="x.svg" class="x-svg svg" id="x-svg"></object></button>';
const confightml = '<button class="config-bg-bt" onclick="hideconfig()"></button><div class="config-content"><div class="config-text"></div></div><button class="config-ex-bt" onclick="hideconfig()"><object data="x.svg" class="x-svg svg" id="x-svg"></object></button>';
const blconfigcontenthtml = '<div class="bl-config-grid"><button class="config-segment config-segment-t" onclick="blconfigseg(0)">Reset</button><button class="config-segment config-segment-b" onclick="blconfigseg(1)">Modes</button><div class="config-innercontent"></div></div>';
const trconfigcontenthtml = '<div class="tr-config-grid"><button class="config-segment config-segment-t" onclick="trconfigseg(0)">Reset</button><button class="config-segment config-segment-b" onclick="trconfigseg(1)">Modes</button><div class="config-innercontent"></div></div>';
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
    '<div class="switch-container"><div class="switch-box incorrect">Note that changing values below will reset your progress</div><div class="switch-box"><div class="switch-text">Show the first letter of a blank</div><label class="switch"><input type="checkbox" id="fl-cb"><span class="slider"></span></label></div><div class="switch-box"><div class="switch-text">Randomized blank length</div><label class="switch"><input type="checkbox" id="rl-cb"><span class="slider"></span></label></div></div>'
];
const trconfiginnercontenthtml = [
    '<button class="reset-button" onclick="trresetbuttonclick()">Reset Progress</button>',
    '<div class="switch-container"><div class="switch-box"><div class="switch-text">Show how many characters/words are in the answer</div><label class="switch"><input type="checkbox" id="l-cb"><span class="slider"></span></label></div></div>'
];

const blank = [[], [], [], []];
const trans = [[]];

blank[0] = [
    "Learning by repetition is a very useful method of memorizing facts.",
    "I don't like dull and repetitive work.",
    "Repeated failures made him lose confidence.",
    "He was repeatedly reminded not to be late again.",
    "Lucy is an intimate friend of mine.",
    "He is quite relaxed with his intimates.",
    "She is on intimate terms with the royal family.",
    "Plastic is flexible and doesn't break easily.",
    "She has a flexible schedule.",
    "Amy boasted of the luxurious car she had just bought.",
    "This country boasts the world's tallest building.",
    "He is the boast of his parents.",
    "He made an earnest attempt to communicate with his father.",
    "Are you (speaking) in earnest? Do you really mean what you say?",
    "She is talking earnestly with her son about his career planning.",
    "Magnetic objects are attracted by a magnet.",
    "He has such a magnetic voice.",
    "There is a magnetic field around the earth.",
    "The train came to a halt just in time.",
    "The government has failed to halt the falling birth rate.",
    "To get a table by the window, you have to make a reservation first.",
    "She is a chemistry professor.",
    "Gavin majored in biochemistry in university.",
    "He's the best biology teacher.",
    "Richard Carson is a famous marine biologist.",
    "I hired an interior designer to do the decoration for our house.",
    "Children hung various decorations on the Christmas tree.",
    "His refusal to come to the court got him into more trouble.",
    "Linda is an ambitious and hard-working girl.",
    "He is ambitious for fame and wealth.",
    "His business was ruined because of his unwise investment.",
    "He did research on the ruin of ancient Mayan civilization.",
    "These ruins were once a beautiful castle.",
    "Dragons are imaginary creatures only existing in myths.",
    "Rushdie is a very imaginative writer.",
    "Modern technology is not imaginable for our ancestors.",
    "I have only an elementary knowledge of physics.",
    "Children go to elementary school at the age of six or seven.",
    "Fingerprints are usually circular loops.",
    "The new air circular system produces no exhaust.",
    "Exercise helps the blood circulate around your body.",
    "Rumors began to circulate that the president was seriously ill.",
    "Exercise is the best way to improve your blood circulation.",
    "There are a lot of fake $1,000 notes in circulation.",
    "This magazine has a circulation of nine million worldwide.",
    "Those people work at the French Embassy.",
    "He was reluctant to help strangers.",
    "He reluctantly accepted the terrible job offer since he was in desperate need of money.",
    "I cannot understand his reluctance to tell the truth.",
    "Many people spend their lives seeking fame and fortune.",
    "The politician is an infamous racist.",
    "There is a worried frown on his face.",
    "Don't frown. You look a lot more attractive when smiling.",
    "The teacher frowns on his laziness.",
    "You can take notes in the margin of the book.",
    "The bill was passed by a margin of only five votes.",
    "I like the mild climate here.",
    "The internet is a dynamic world.",
    "The new manager is a dynamic and capable man.",
    "Dynamics is a branch of physics.",
    "He tried to enhance team dynamics in the office.",
    "The popularity of smartphones is increasing at an amazing speed.",
    "The mayor's popularity has declined in recent months.",
    "The accent of the word \"naive\" falls on the second syllable.",
    "He speaks English with a French accent.",
    "The artist portrayed himself as a melancholy man.",
    "The novel portrays the life of a family of four.",
    "I am suspicious of his motive.",
    "Have you noticed anything suspicious?",
    "They sent us a book catalogue.",
    "The manuscripts have been catalogued and digitized.",
    "What is new on the bulletin board?",
    "It's a mother's instinct to protect her child.",
    "Fish can swim by instinct.",
    "The artifacts give us a glimpse of the past.",
    "I only got a glimpse of the thief.",
    "I glimpsed the room to see if I left anything.",
    "A gas explosion caused the big fire.",
    "The decision caused an explosion of anger from union members.",
    "Explosive materials are extremely dangerous.",
    "My father has an explosive temper.",
    "Racial issues are always explosive in elections.",
    "An explosive was found at the train station.",
    "The floor is damp because of the humid weather.",
    "He damped a towel and wiped his face.",
    "Though the rain wet their clothes, it did not damp their spirits.",
    "The smell of damp is usually unpleasant.",
    "Inside the clock tower, we can see the movement of gears.",
    "Be sure to shift to neutral gear when going through the car wash tunnel.",
    "I have prepared all the climbing gear.",
    "They geared the service to the needs of elderly people.",
    "Hotels have geared up for the coming holiday season.",
    "When my father saw my school report, he got into a rage.",
    "My father flew into a rage.",
    "The rage of the tornado sweeps to destruction all that lies in its path.",
    "The boss raged at his absent-minded secretary.",
    "The typhoon raged across southern Japan.",
    "The subject of this painting is the cruelty of war.",
    "They rushed to rescue those buried under the rubble.",
    "Helicopters also took part in the rescue.",
    "On hearing her call for help, Superman came to her rescue.",
    "I put a glass globe around the rose to protect it.",
    "The globe seems smaller with modern transportation.",
    "The teacher used a globe to show the location of Mexico.",
    "Shrimp farming is a profitable business.",
    "Hsinchu has prospered and grown in population.",
    "India has a prosperous economy.",
    "Ghana reaped the fruit of economic prosperity."
];

blank[1] = [
    "There is an infant sleeping soundly in the cradle.",
    "Intuitive social skills actually start in infancy.",
    "In my opinion, artificial intelligence is still in its infancy.",
    "America recently launched a satellite into space.",
    "Both sauces contain similar ingredients: eggs, oil and lemon juice.",
    "Many young men were prompted by patriotism to fight in the war.",
    "A teleprompter provides visual text of a script that prompts the speaker.",
    "This worksheet has prompts to help students answer the questions.",
    "When I asked him the question, he gave me a prompt answer.",
    "When the alarm clock went off, she got out of bed promptly.",
    "We have to handle the task in a more systematic way.",
    "All the books are rearranged systematically.",
    "We saw a herd of zebras.",
    "Shepherd dogs are trained to help farmers herd sheep.",
    "A check is enclosed.",
    "This garden is enclosed with a wooden fence.",
    "Please enclose a check with your order.",
    "The enclosure of land is the first step of farming.",
    "In her haste to stand up, she knocked over a cup.",
    "He left in haste.",
    "She hastened home to make dinner for her family.",
    "The cold autumn hastened the departure of those birds.",
    "He talks a lot of nonsense in his speech.",
    "Li Po was an extremely gifted poet.",
    "Stomach acid helps us digest our food.",
    "Acid rain has done a lot of damage to the earth.",
    "He motivates his employees by offering better benefits.",
    "What was your motivation for becoming a teacher?",
    "I think he is a good student. He just lacks motivation.",
    "What is in the container?",
    "They use cranes to load and unload the containers from the ships.",
    "He made a farewell speech on his last day at work.",
    "I bid farewell to my family and flew to Japan.",
    "We have books of basic, intermediate and advanced levels.",
    "The broker will intermediate between your company and the marketplace.",
    "Which of the following is an intermediate of this chemical reaction?",
    "She loved to imitate Lady Gaga.",
    "Children learn by imitation and repetition.",
    "Juliet disguised herself as a man by wearing a false beard.",
    "She wore a disguise to keep herself from being recognized.",
    "The sheep was a wolf in disguise.",
    "The word \"woman\" is singular, while \"women\" is plural.",
    "\"Media\" in the singular is \"medium.\"",
    "Americans' ancestors came from all over the world.",
    "She worked for an influential newspaper.",
    "I will not tolerate that sort of behavior.",
    "Terrorists' activities are beyond tolerance.",
    "We shouldn't be tolerant of the abuse of power.",
    "His performance was not good, but tolerable.",
    "The food in the newly-opened restaurant is tolerably good, but the service is lousy.",
    "Not many Europeans immigrate to Taiwan.",
    "Japan has extremely strict immigration policies.",
    "After you leave the plane, you have to go through immigration.",
    "Illegal immigrants are to be sent back if they are caught.",
    "You can use a portable generator to power appliances.",
    "Thanksgiving is a day for Americans to have a family reunion.",
    "Can I bring my boyfriend to the class reunion?",
    "Old friends reunited after decades of separation.",
    "He is an electrical technician.",
    "They went through lots of hardships.",
    "In British usage, \"lorry\" means \"truck.\"",
    "Tom teaches sculpture at the local art school.",
    "I decided to build a sculpture out of clay.",
    "The artist sculptured a statue out of stone.",
    "The cherry blossoms were in full bloom.",
    "These flowers will bloom all through the summer.",
    "I adore peach blossoms.",
    "The cherry tree was in full blossom.",
    "The mango trees are blossoming.",
    "He misunderstood what she meant.",
    "I don't want there to be any misunderstanding between us.",
    "Remember to back up your data before upgrading your hardware.",
    "I bought a screwdriver in the hardware store.",
    "A computer without software is like a book full of blank pages.",
    "Because nobody hires us, we have been idle for a long time.",
    "I hope my son can stop idling.",
    "He regrets idling away his youth.",
    "You need a durable pair of shoes for running.",
    "The design is very elegant, typical Italian style.",
    "She walked down the stairs with elegance.",
    "The herb is used as a folk remedy for colds.",
    "Nothing can be done to remedy this failure.",
    "Eyeglasses help to remedy poor eyesight.",
    "College students volunteered to teach free remedial lessons.",
    "I like his thoughtful look.",
    "It is really thoughtful of you to remember my birthday.",
    "He gazes thoughtfully into the distance.",
    "He is eating sandwiches thoughtfully prepared by his wife. ",
    "The best part of the trip was the fantastic scenery.",
    "She has managed to maintain her youthful appearance.",
    "Rabbits breed quickly.",
    "I was born and bred in Taiwan.",
    "What breed of dog is the best for little kids?",
    "There are many technological advances in computer science."
];

blank[2] = [
    "Mr. Chi Po-lin, the late director of the memorable documentary Beyond Beauty: Taiwan from Above, didn't start out in the movie industry.",
    "He was just a photographer who loved aerial views.",
    "As an aerial photographer who worked for the government, he spent years taking pictures from the air both on the job and during his free time.",
    "Like many other photographers, he wanted to capture high mountains, grand rivers, and beautiful beaches.",
    "Things took a turn in 1998. Chi's photographs attracted the attention of The Earth Geographic Monthly, and the magazine began printing his pictures with their articles.",
    "It was by reading these articles that Chi realized that some of his beautiful photographs actually offered visual proof of man-made pollution and damage to the environment.",
    "He learned, for example, that high-mountain farming has a harmful effect on soil and water conservation.",
    "Over time, the aerial photographer began to care more and more about his homeland.",
    "He no longer looked only for the pretty side of it.",
    "On the contrary, he was inspired to focus on and record the island's actual state.",
    "Eleven years later, Typhoon Morakot hit Taiwan, and Chi flew over the disaster areas to check the destruction soon after the sky cleared.",
    "He was completely horrified by all the damage that he saw. Mud and rocks were sliding down the mountains.",
    "Large sections of roads were gone.",
    "The worst thing was that Xiaolin Village in Kaohsiung was buried and barely visible.",
    "These depressing sights tore at his heart and, for the very first time, he shed tears while he was still in the air.",
    "He started to think about how to help prevent such tragedies.",
    "After much thinking, Chi decided that he had to do something to make people more aware of environmental matters and urge everyone to change.",
    "Therefore, he quit his job and gave up his pension so that he could start working on a documentary.",
    "After four hundred hours of shooting in the air, Chi's efforts finally paid off when he completed his masterpiece, Beyond Beauty.",
    "This impressive film manages to celebrate Taiwan's spectacular scenery.",
    "At the same time, it also shows the damaging impact human activity can have on nature.",
    "This makes Beyond Beauty a very important and valuable film.",
    "Millions are therefore grateful to Chi for sharing his views of our homeland from above."
];

blank[3] = [
    "The subways in London make traveling in the city very easy and convenient.",
    "Actually, the MRT in Taipei is just as convenient as London.",
    "Every time I go out, I take the MRT or the bus as often as I can.",
    "Taking mass transportation saves me a lot of money and time.",
    "Jason has recently got a well-paying job doing big data analysis.",
    "Now he makes three times as much money as he used to.",
    "Henry sold his old house downtown and moved to the country.",
    "The house he lives in now is two times as big as his old house.",
    "It is very often the case that the more you buy, the more you want.",
    "However, overconsumption is very unfriendly to the environment.",
    "Thanks to my friends' suggestions, I have recently started to practice minimalism.",
    "That's because I found that having too much stuff makes my life chaotic.",
    "Ever since I practiced minimalism, my life has become easier and better-organized than before.",
    "It has dawned on me that we actually do not need too much to lead a happy life.",
    "Henry is a gifted student and attends university although he's only fifteen.",
    "To everyone's surprise, his younger brother is even more intelligent than he is."
];

trans[0] = [
    ["n. 重複、反覆", "repetition"],
    ["a. 不斷持續重複發生的", "repetitive"],
    ["a. 反覆發生過很多次的", "repeated"],
    ["adv. 反覆地", "repeatedly"],
    ["a. 親密的", "intimate"],
    ["n. 至交", "intimate"],
    ["phr. 關係密切、很親近", "on intimate terms"],
    ["a. 有彈性的(不易折斷)", "flexible"],
    ["a. 有彈性的(可以調整)", "flexible"],
    ["vi./vt. 誇耀、吹嘘", "boast"],
    ["vt. 以擁有~自豪", "boast"],
    ["n. 引以為傲的事物", "boast"],
    ["a. 認真誠懇的", "earnest"],
    ["n. 認真、誠摯", "earnest"],
    ["adv. 認真誠懇地", "earnestly"],
    ["a. 有磁力的", "magnetic"],
    ["a. 有磁性的", "magnetic"],
    ["n. 磁場", "magnetic field"],
    ["n. 磁鐵", "magnet"],
    ["n. 停止", "halt"],
    ["vi./vt. 停止、阻止", "halt"],
    ["n. 預訂、預約", "reservation"],
    ["vt. 預訂、保留", "reserve"],
    ["n. 化學", "chemistry"],
    ["n. 生物化學", "biochemistry"],
    ["n. 生物學", "biology"],
    ["n. 生物學家", "biologist"],
    ["n. 裝潢、裝飾", "decoration"],
    ["n. 裝飾品", "decoration"],
    ["n. 拒絕", "refusal"],
    ["a. 有野心的、有企圖心的", "ambitious"],
    ["phr. 對~野心勃勃", "be ambitious for N / to V"],
    ["n. 野心", "ambition"],
    ["vt. 毀壞", "ruin"],
    ["n. 毀滅、瓦解", "ruin "],
    ["n. 廢墟", "ruins"],
    ["a. 想像中的、不真實的", "imaginary"],
    ["a. 富有想像力的", "imaginative"],
    ["a. 可想像的", "imaginable"],
    ["vt. 想像", "imagine"],
    ["n. 影像、形象、意象", "image"],
    ["n. 想像力", "imagination"],
    ["a. 基本的、初步的", "elementary"],
    ["n. 小學", "elementary school"],
    ["n. 要素", "element"],
    ["a. 圓形的", "circular"],
    ["a. 循環的", "circular"],
    ["vi./vt. 循環", "circulate"],
    ["vi./vt. 散布、傳播", "circulate"],
    ["n. 循環", "circulation"],
    ["n. 流通", "circulation"],
    ["n. 發行量", "circulation"],
    ["n. 大使館", "embassy"],
    ["n. 大使", "ambassador"],
    ["a. 不情願的", "reluctant"],
    ["adv. 不情願地", "reluctantly"],
    ["n. 勉強、不情願", "reluctance"],
    ["n. 名聲", "fame"],
    ["a. 惡名昭彰的", "infamous"],
    ["n. 皺眉、愁眉苦臉", "frown"],
    ["vi. 皺眉", "frown"],
    ["vi. 對~表不滿、不悅、不贊成", "frown"],
    ["n. 邊緣、空白處", "margin"],
    ["n. (時間、得票等的)差距", "margin"],
    ["a. 溫和的、緩和的", "mild"],
    ["a. 動態的、不斷變動的", "dynamic"],
    ["a. 活力充沛的", "dynamic"],
    ["n. 動力學", "dynamics"],
    ["n. (群體內相互影響的)動態、動力", "dynamics"],
    ["n. 普及", "popularity"],
    ["n. 受歡迎或支持的程度", "popularity"],
    ["a. 受歡迎的", "popular"],
    ["n. 重音", "accent"],
    ["n. 口音、腔調", "accent"],
    ["vt. 畫(肖像)", "portray"],
    ["vt. 描繪、描寫", "portray"],
    ["n. 肖像、生動的描寫", "portrait"],
    ["a. 多疑的、起疑的", "suspicious"],
    ["a. 可疑的", "suspicious"],
    ["vt. 懷疑", "suspect"],
    ["n. 嫌疑犯", "suspect"],
    ["n. 懷疑", "suspicion"],
    ["n. 目錄", "catalogue"],
    ["vt. 製作目錄、編入目錄", "catalogue"],
    ["n. 布告、告示", "bulletin"],
    ["n. 本能", "instinct"],
    ["phr. 本能地", "by instinct"],
    ["n. 一瞥", "glimpse"],
    ["phr. 警見", "get / catch a glimpse"],
    ["vt. 瞥了一眼", "glimpse"],
    ["n. 爆炸", "explosion"],
    ["n. 爆發、發作", "explosion"],
    ["a. 會爆炸的", "explosive"],
    ["a. 火爆的", "explosive"],
    ["a. 易引起爭論的", "explosive"],
    ["n. 爆裂物", "explosive"],
    ["vi./vt. 爆炸", "explode"],
    ["a. 潮溼的", "damp"],
    ["vt. 弄溼、打溼", "damp"],
    ["vt. 潑冷水、減弱氣勢", "damp"],
    ["n. 溼氣、水分", "damp"],
    ["n. 齒輪", "gear"],
    ["n. 汽車排檔", "gear"],
    ["n. 整套裝備或用具", "gear"],
    ["vi./vt. 調整、(使)適合", "gear"],
    ["phr. 為~做好準備", "gear up for"],
    ["n. 憤怒", "rage"],
    ["phr. 勃然大怒", "fly into a rage"],
    ["n. 狂暴、猛烈(指風或浪)", "rage"],
    ["vi. 暴怒、怒斥", "rage"],
    ["vi. 猛攻、肆虐", "rage"],
    ["n. 殘酷", "cruelty"],
    ["vt. 救援", "rescue"],
    ["n. 救援", "rescue"],
    ["phr. 來解救~", "come to one's rescue"],
    ["n. 球狀體", "globe"],
    ["n. 地球", "globe"],
    ["n. 地球儀", "globe"],
    ["a. 有獲利的", "profitable"],
    ["n. 利潤", "profit"],
    ["vi. 獲利、得益、有利", "profit"],
    ["vt. 有利於", "profit"],
    ["vi. 興盛、繁榮", "prosper"],
    ["a. 繁榮的", "prosperous"],
    ["n. 繁榮", "prosperity"],
    //#############
    ["n. 嬰兒", "infant"],
    ["n. 嬰兒期", "infancy"],
    ["n. 初期", "infancy"],
    ["n. 衛星", "satellite"],
    ["n. 成分、原料", "ingredient"],
    ["vt. 激發、驅使", "prompt"],
    ["vt. 給~提示臺詞", "prompt"],
    ["n. 提詞、提示文", "prompt"],
    ["a. 即時的、迅速的", "prompt"],
    ["adv. 立即地、迅速地", "promptly"],
    ["a. 有系統的", "systematic"],
    ["adv. 有系統地", "systematically"],
    ["n. 獸群(草食性動物)", "herd"],
    ["vt. 放牧", "herd"],
    ["n. 牧羊人", "shepherd"],
    ["vt. 附寄(於信封、包裹之內)", "enclose"],
    ["vt. 圍住", "enclose"],
    ["phr. 將A與B裝在一起附寄", "enclose A with B"],
    ["n. 圍繞", "enclosure"],
    ["n. 匆忙", "haste"],
    ["phr. 匆匆忙忙地", "in haste"],
    ["adv. 匆匆忙忙地", "hastily"],
    ["vi. 急忙", "hasten"],
    ["vt. 催促、促進", "hasten"],
    ["a. 匆忙的", "hasty"],
    ["n. 胡說八道、無意義的話", "nonsense"],
    ["n. 領悟(~感)、意義、常識", "sense"],
    ["a. 敏感的", "sensitive"],
    ["a. 明理的、明智的", "sensible"],
    ["a. 有天賦的", "gifted"],
    ["n. 酸", "acid"],
    ["a. 酸的", "acid"],
    ["vt. 引起動機", "motivate"],
    ["n. 動機", "motivation"],
    ["n. 動力", "motivation"],
    ["n. 容器", "container"],
    ["n. 貨櫃", "container"],
    ["n. 再會、告別", "farewell"],
    ["phr. 向~告別", "bid/say farewell to sb."],
    ["a. 中級的", "intermediate"],
    ["vi. 擔任中間人", "intermediate"],
    ["n. 中間物、中間階段", "intermediate"],
    ["vt. 模仿", "imitate"],
    ["n. 模仿", "imitation"],
    ["vt. 偽裝", "disguise"],
    ["n. 偽裝", "disguise"],
    ["phr. 偽裝的", "in disguise"],
    ["a. 單數的", "singular"],
    ["n. 單數", "singular"],
    ["a. 單一的、單身的、單人的", "single"],
    ["n. 單曲", "single"],
    ["n. 祖先", "ancestor"],
    ["a. 有影響力的", "influential"],
    ["vt. 容忍", "tolerate"],
    ["n. 容忍", "tolerance"],
    ["a. 容忍的、寬容的", "tolerant"],
    ["a. 可容忍的、尚可的", "tolerable"],
    ["adv. 尚可地、可容忍地", "tolerably"],
    ["vi. 移民(由他國移入)", "immigrate"],
    ["n. 移民(由他國移入)", "immigration"],
    ["n. 海關入境管理處", "immigration"],
    ["n. 移民(由他國移入者)", "immigrant"],
    ["a. 可攜帶的", "portable"],
    ["n. 重聚,再結合", "reunion"],
    ["n. 同學會", "class reunion"],
    ["vt. 重聚、再結合", "reunite"],
    ["vt. 結合", "unite"],
    ["n. 聯合、結合", "union"],
    ["n. 統一、團結", "unity"],
    ["n. 技術人員、技師", "technician"],
    ["n. 技巧、技術", "technique"],
    ["a. 技術的、專業的", "technical"],
    ["n. 苦難", "hardship"],
    ["n. 用法", "usage"],
    ["n. 雕刻", "sculpture"],
    ["n. 雕塑品、雕刻品", "sculpture"],
    ["vt. 雕刻、製作雕像", "sculpture"],
    ["n. 開花(期)", "bloom"],
    ["vi. 開花", "bloom"],
    ["n. (果樹)花", "blossom"],
    ["n. 花開、盛開(的時期)", "blossom"],
    ["vi. 開花(特指果樹)", "blossom"],
    ["vi./vt. 誤會", "misunderstand"],
    ["n. 誤會", "misunderstanding"],
    ["n. 硬體", "hardware"],
    ["n. 五金", "hardware"],
    ["n. 軟體", "software"],
    ["a. 閒散的、無工作的、不做事的", "idle"],
    ["vi. 懶散、閒混", "idle"],
    ["phr. 虛度(時間)", "idle away"],
    ["a. 耐久的、耐用的", "durable"],
    ["a. 高雅的、優雅的", "elegant"],
    ["n. 高雅", "elegance"],
    ["n. 治療法", "remedy"],
    ["vi. 補救", "remedy"],
    ["vt. 治療、矯正", "remedy"],
    ["a. 治療的、補救的", "remedial"],
    ["a. 思索的、深思的", "thoughtful"],
    ["a. 體貼的、貼心的", "thoughtful"],
    ["adv. 深思地", "thoughtfully"],
    ["adv. 體貼地", "thoughtfully"],
    ["n. 思考、思想", "thought"],
    ["n. 風景(不可數)", "scenery"],
    ["a. 青春的", "youthful"],
    ["vi./vt. 繁殖", "breed"],
    ["vt. 教養、養育", "breed"],
    ["n. (牲畜的)品種", "breed"],
    ["a. 科技的", "technological"],
    ["n. 科技", "technology"],
    //#######################################
    ["n. 導演", "director"],
    ["n. 紀錄片", "documentary"],
    ["n. 產業", "industry"],
    ["n. 攝影師", "photographer"],
    ["vt. 拍攝", "capture"],
    ["n. 證據", "proof"],
    ["n. 損害、傷害", "damage"],
    ["n. 影響", "effect"],
    ["n. 保護", "conservation"],
    ["vt. 記錄", "record"],
    ["n. 災難", "disaster"],
    ["vt. 掩埋", "bury"],
    ["vt. 流下", "shed"],
    ["vt. 預防、阻止", "prevent"],
    ["n. 悲劇", "tragedy"],
    ["n. 傑作", "masterpiece"],
    ["n. 風景、景色", "scenery"],
    ["n. 影響", "impact"],
    ["adj. 感激的", "grateful"],
    ["phr. 開始", "start out"],
    ["phr. 不再", "no longer"],
    ["phr. 相反地", "on the contrary"],
    ["phr. 使某人傷心欲絕", "tear at one's heart"],
    ["phr. 得到回報", "pay off"],

];

const start_dis = 1;
const trsi = 4;
let list = Array(5);
let bl = Array(4);
let tr = Array(1);
let ctype = -1;//-1:home, 1:bl 5:tr
let cpage = -1;//-1:home

//localStorage.clear() // REMOVE!!!!!!!!!!!
retrievestoragedata();
console.log(list);

function retrievestoragedata() {
    if (localStorage.length === 0 || (localStorage.getItem("pageid0") !== pageid[0] && confirm("The sentences in this website have updated. Do you want to reset your progress?"))) {
        update();
        return;
    }
    else if (localStorage.getItem("pageid1") !== pageid[1]) {
        alert("The sentences in this website have changed. Your progress will be resetted.");
        update();
        return;
    }
    list = JSON.parse(localStorage.getItem("list"));
    bl = JSON.parse(localStorage.getItem("bl"));
    tr = JSON.parse(localStorage.getItem("tr"));

    function update() {
        resetblanks(0, 1);
        resetblanks(1, 1);
        resetblanks(2, 1);
        resetblanks(3, 1);
        resettranslate(4, 1);
        setstoragedata();
        localStorage.setItem("pageid0", pageid[0]);
        localStorage.setItem("pageid1", pageid[1]);
    }
}

function setstoragedata() {
    localStorage.setItem("list", JSON.stringify(list));
    localStorage.setItem("bl", JSON.stringify(bl));
    localStorage.setItem("tr", JSON.stringify(tr));
}

function delstoragedata() {
    localStorage.removeItem("list");
    localStorage.removeItem("bl");
    localStorage.removeItem("tr");
}

function createblanks(l, n) {
    shuffle(l);
    for (let i = 0; i < l.length; i++) {
        let worddata = [];
        let sindex = 0;
        let dataindex = 0;
        l[i][0] = l[i][0].replace(/\s+/g, ' ').trim();
        if (bl[n].mode === 0 || bl[n].mode === 1) {
            for (let j = 0; j < l[i][0].length; j++) {
                if (punctuations.includes(l[i][0][j])) {
                    if (!exceptions.includes(l[i][0].substring(sindex, j).toLowerCase()) && j - sindex > 1) {
                        // 0: start-index 1: word-length 2: isblankfirst 3: isblanksecond 4: progress
                        if (bl[n].mode === 0) worddata.push([sindex + 1, j - sindex - 1, 0, 0, (l[i][1].length === 0) ? start_dis : l[i][1][dataindex][4], 0]);
                        else worddata.push([sindex, j - sindex, 0, 0, (l[i][1].length === 0) ? start_dis : l[i][1][dataindex][4], 0]);
                        dataindex++;
                    }
                    sindex = j + 1;
                }
            }
            if (!exceptions.includes(l[i][0].substring(sindex, l[i][0].length).toLowerCase()) && l[i][0].length > sindex + 1) {
                if (bl[n].mode === 0) worddata.push([sindex + 1, l[i][0].length - sindex - 1, 0, 0, (l[i][1].length === 0) ? start_dis : l[i][1][dataindex][4], 0]);
                else worddata.push([sindex, l[i][0].length - sindex, 0, 0, (l[i][1].length === 0) ? start_dis : l[i][1][dataindex][4], 0]);
            }
        }
        else if (bl[n].mode === 2 || bl[n].mode === 3) {
            //let addedchars = 0;
            for (let j = 0; j < l[i][0].length; j++) {
                if (punctuations.includes(l[i][0][j])) {//end of word+1
                    if (!exceptions.includes(l[i][0].substring(sindex, j).toLowerCase()) && j - sindex > 1) {
                        // 0: start-index 1: word-length 2: isblankfirst 3: isblanksecond 4: progress
                        let addl = Math.round(Math.random() * 5);
                        //addedchars+=addl;
                        l[i][0] = append(l[i][0], j, ' ', addl);
                        if (bl[n].mode === 2) worddata.push([sindex + 1, j + addl - sindex - 1, 0, 0, (l[i][1].length === 0) ? start_dis : l[i][1][dataindex][4], addl]);
                        else worddata.push([sindex, j + addl - sindex, 0, 0, (l[i][1].length === 0) ? start_dis : l[i][1][dataindex][4], addl]);
                        dataindex++;
                    }
                    sindex = j + 1;
                }
            }
            if (!exceptions.includes(l[i][0].substring(sindex, l[i][0].length).toLowerCase()) && l[i][0].length > sindex + 1) {
                let addl = Math.round(Math.random() * 5);
                l[i][0] = append(l[i][0], l[i][0].length, ' ', addl);
                if (bl[n].mode === 2) worddata.push([sindex + 1, l[i][0].length - sindex - 1, 0, 0, (l[i][1].length === 0) ? start_dis : l[i][1][dataindex][4], addl]);
                else worddata.push([sindex, l[i][0].length - sindex, 0, 0, (l[i][1].length === 0) ? start_dis : l[i][1][dataindex][4], addl]);
            }
        }

        let blankpositions = Array.apply(null, Array(worddata.length)).map(v => 0);
        let numberofblanks = Math.round((Math.random() / 4 + 0.375) * worddata.length);
        blankpositions = blankpositions.fill(1, 0, numberofblanks);
        shuffle(blankpositions);
        for (let j = 0; j < worddata.length; j++) {
            worddata[j][2] = blankpositions[j];
            worddata[j][3] = 1 - blankpositions[j];
        }
        if (l[i][1].length !== 0) worddata.forEach((v, ind) => {// disable blanks that have been typed
            if (l[i][1][ind][4] <= 0) {
                v[2] = 0;
                v[3] = 0;
            }
        });
        if (worddata.every(v => v[2] === 0 && v[3] === 0)) {// every blank in sentence is completed
            l[i][2] = 0;
        }
        else {
            if (worddata.every(v => v[2] === 0)) worddata.forEach(v => v[2] = v[3]);
            if (worddata.every(v => v[3] === 0)) worddata.forEach(v => v[3] = v[2]);
        }
        l[i][1] = worddata;
    }
}

function resetblanks(n, m) {
    list[n] = blank[n].map(v => [v, [], 1]);
    bl[n] = {
        index: [0, 0, 0],
        typed: [],
        entered: [],
        blankstart: 0,
        enterskip: false,
        start: false,
        mode: m,
        tmpmode: m,
        datasize: 0,
        completeddata: 0,
        typeddata: 0
    };
    createblanks(list[n], n);
    setstoragedata();
}

function resettranslate(n, m) {
    list[n] = trans[n - trsi].map(v => [[v[0], v[1]], start_dis]);
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
    const canvas = document.querySelector(".bl-textinput");
    let ctx = canvas.getContext("2d");
    const scale = 2;
    window.devicePixelRatio = scale;
    let w = 80, h = 60;
    canvas.style.width = w + "vw";
    canvas.style.height = h + "vh";
    canvas.width = Math.floor(w * 0.01 * innerWidth * scale);
    canvas.height = Math.floor(h * 0.01 * innerHeight * scale);
    let realw = canvas.width / scale, realh = canvas.height / scale;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = "3vmax Consolas";
    ctx.scale(scale, scale);
    let csentence = list[cpage][bl[cpage].index[1]][0];
    let csentencedata = list[cpage][bl[cpage].index[1]][1];
    let sb = Array.apply(null, Array(csentence.length)).map(v => 0);
    let nobi = 0;
    changesb();
    if (!bl[cpage].start) {
        bl[cpage].start = true;
        let dsz = 0;
        list[cpage].forEach((val) => {
            dsz += val[1].length;
        });
        bl[cpage].datasize = dsz * start_dis;
        initsentence();
    }
    let out = createout(csentence);
    let textdata = ctx.measureText(csentence);
    let textheight = textdata.fontBoundingBoxAscent + textdata.fontBoundingBoxDescent;
    let sentencewidth = (out.length === 1) ? ctx.measureText(out[0]).width : realw - 50;
    let sentenceheight = textheight * out.length;
    let sentencex = (realw - sentencewidth) / 2, sentencey = (realh - sentenceheight) / 2;
    drawsentence(bl[cpage].typed.join(''), bl[cpage].entered.join(''));
    updaterates(bl[cpage].completeddata, bl[cpage].typeddata);
    updateprogressbar(bl[cpage].completeddata / bl[cpage].datasize * 100);


    document.onkeydown = e => {
        if (e.key === 'Enter') {
            if (sb[bl[cpage].index[2]] === nobi || ((bl[cpage].index[2] === sb.length || sb[bl[cpage].index[2]] === 0) && sb[bl[cpage].index[2] - 1] === nobi)) {
                if (bl[cpage].enterskip) {
                    nextsentence();
                    setstoragedata();
                    return;
                }
                else {
                    bl[cpage].enterskip = true;
                    let wdata = csentencedata.findLast(v => v[bl[cpage].index[0] + 2] === 1);
                    for (let i = 0; i < wdata[1]; i++) {
                        bl[cpage].entered[i + wdata[0]] = csentence[i + wdata[0]];
                        bl[cpage].typed[i + wdata[0]] = ' ';
                    }
                    drawsentence(bl[cpage].typed.join(''), bl[cpage].entered.join(''));
                }
            }
            else {
                let wdata = csentencedata[csentencedata.findIndex(v => v[0] > bl[cpage].index[2]) - 1];
                bl[cpage].index[2] = csentencedata[csentencedata.findIndex(v => (v[0] > bl[cpage].index[2] && v[bl[cpage].index[0] + 2] === 1))][0];
                bl[cpage].blankstart = bl[cpage].index[2];
                for (let i = 0; i < wdata[1]; i++) {
                    bl[cpage].entered[i + wdata[0]] = csentence[i + wdata[0]];
                    bl[cpage].typed[i + wdata[0]] = ' ';
                }
                drawsentence(bl[cpage].typed.join(''), bl[cpage].entered.join(''));
            }
            bl[cpage].typeddata++;
            updaterates(bl[cpage].completeddata, bl[cpage].typeddata);
            setstoragedata();
            return;
        }
        if (e.key === ' ' || e.key === 'Shift' || bl[cpage].enterskip)
            return;
        if (e.key === 'Backspace') {
            if (bl[cpage].blankstart !== bl[cpage].index[2]) {
                bl[cpage].index[2]--;
                bl[cpage].typed[bl[cpage].index[2]] = ' ';
                drawsentence(bl[cpage].typed.join(''), bl[cpage].entered.join(''));
            }
            return;
        }
        if (bl[cpage].index[2] === sb.length || sb[bl[cpage].index[2]] === 0 || e.key.length > 1) {
            return;
        }
        let tc = bl[cpage].index[2];
        bl[cpage].typed[tc] = e.key;

        let wdata = findwdata(tc);
        let correctword = csentence.substring(wdata[0], wdata[0] + wdata[1]);
        let typedword = bl[cpage].typed.slice(wdata[0], wdata[0] + wdata[1]).join('');
        if (correctword === typedword) {
            let csi = csentencedata.findIndex(v => v[0] === bl[cpage].blankstart);
            if (list[cpage][bl[cpage].index[1]][1][csi][4] > 0) {
                list[cpage][bl[cpage].index[1]][1][csi][4]--;
                bl[cpage].completeddata++;
                bl[cpage].typeddata++;
            }
            updaterates(bl[cpage].completeddata, bl[cpage].typeddata);
            updateprogressbar(bl[cpage].completeddata / bl[cpage].datasize * 100);
            if (findnextwdi(tc) === csentencedata.length) nextsentence();
            else {
                bl[cpage].blankstart = csentencedata[findnextwdi(tc)][0];
                bl[cpage].index[2] = bl[cpage].blankstart;
                drawsentence(bl[cpage].typed.join(''), bl[cpage].entered.join(''));
            }
            setstoragedata();
        }
        else {
            bl[cpage].index[2] = tc + 1;
            drawsentence(bl[cpage].typed.join(''), bl[cpage].entered.join(''));
        }
    };

    function findwdata(ind) {
        let tmpcsentencedataindex = csentencedata.findIndex(v => v[0] > ind);
        if (tmpcsentencedataindex === -1) return csentencedata[csentencedata.length - 1];
        else return csentencedata[tmpcsentencedataindex - 1];
    }

    function findwdataindex(ind) {
        let tmpcsentencedataindex = csentencedata.findIndex(v => v[0] > ind);
        if (tmpcsentencedataindex === -1) return csentencedata.length - 1;
        else return tmpcsentencedataindex - 1;
    }

    function findnextwdi(ind) {
        let tmpcsentencedataindex = csentencedata.findIndex(v => v[0] > ind && v[bl[cpage].index[0] + 2] === 1);
        if (tmpcsentencedataindex === -1) return csentencedata.length; // last blank
        else return tmpcsentencedataindex;
    }

    function drawsentence(tout, tout2) {
        ctx.clearRect(0, 0, realw, realh);
        ctx.fillStyle = "rgb(82, 82, 82)";
        roundRect(ctx, sentencex - (realw * 0.01), sentencey - (realh * 0.01), sentencewidth + (realw * 0.02), sentenceheight + (realh * 0.02), 20);
        ctx.fillStyle = "white";
        let ren = [...out];
        let outy = (realh / 2) - ((ren.length - 1) * textheight / 2);
        for (let i = 0; i < ren.length; i++) {
            ctx.fillText(ren[i], realw / 2, outy);
            outy += textheight;
        }
        let toutindex = 0;
        outy = (realh / 2) - ((ren.length - 1) * textheight / 2);

        let tmpwindex = 0;
        let deletedchars = 0;
        let deletedcharstopointer = 0;
        while (true) {
            if (tmpwindex === csentencedata.length) break;
            let wdata = csentencedata[tmpwindex];
            if (wdata[bl[cpage].index[0] + 2] === 1) {
                tmpwindex++;
                continue;
            }
            else {
                for (let i = 0; i < wdata[5]; i++) {
                    tout = delCharAt(tout, wdata[0] + wdata[1] - wdata[5] - deletedchars + i);
                    tout2 = delCharAt(tout2, wdata[0] + wdata[1] - wdata[5] - deletedchars + i);
                    deletedchars++;
                    if (wdata[0] < bl[cpage].index[2]) {
                        deletedcharstopointer++;
                    }
                }
                tmpwindex++;
            }
        }

        for (let i = 0; i < ren.length; i++) {
            ctx.fillText(tout.substring(toutindex, toutindex + ren[i].length), realw / 2, outy);
            ctx.fillStyle = "rgb(255, 115, 0)";
            ctx.fillText(tout2.substring(toutindex, toutindex + ren[i].length), realw / 2, outy);
            ctx.fillStyle = "white";
            outy += textheight;
            toutindex += ren[i].length;
        }
        let lineno = 0;
        let tmpcindex = bl[cpage].index[2] - deletedcharstopointer;
        while (tmpcindex > 0) {
            if (tmpcindex - ren[lineno].length < 0 || lineno === ren.length - 1)
                break;
            tmpcindex -= ren[lineno].length;
            lineno++;
        }
        let pointery = (realh / 2) - ((ren.length / 2 - lineno) * textheight);
        let pointerx = (realw / 2) - (ctx.measureText(ren[lineno]).width / 2) + ctx.measureText(ren[lineno].substring(0, tmpcindex)).width;
        ctx.fillStyle = "lime";
        ctx.drawImage(pointerimg, pointerx - realw * 0.005, pointery - realh * 0.005, realw * 0.01, realh * 0.04);
    }

    function nextsentence() {
        if (bl[cpage].completeddata === bl[cpage].datasize) {
            resetblanks(cpage, bl[cpage].mode);
            back();
            return;
        }
        do {
            bl[cpage].index[1]++;
            if (bl[cpage].index[1] === list[cpage].length) {
                bl[cpage].index[1] = 0;
                bl[cpage].index[0]++;
                if (bl[cpage].index[0] === 2) {
                    bl[cpage].index[0] = 0;
                    createblanks(list[cpage], cpage);
                }
            }
        }
        while (list[cpage][bl[cpage].index[1]][2] === 0);

        csentence = list[cpage][bl[cpage].index[1]][0];
        csentencedata = list[cpage][bl[cpage].index[1]][1];
        sb = Array.apply(null, Array(csentence.length)).map(v => 0);
        changesb();
        initsentence();
        out = createout(csentence);
        textdata = ctx.measureText(csentence);
        textheight = textdata.fontBoundingBoxAscent + textdata.fontBoundingBoxDescent;
        sentencewidth = (out.length === 1) ? ctx.measureText(out[0]).width : realw - 50;
        sentenceheight = textheight * out.length;
        sentencex = (realw - sentencewidth) / 2, sentencey = (realh - sentenceheight) / 2;
        drawsentence(bl[cpage].typed.join(''), bl[cpage].entered.join(''));
    }

    function initsentence() {
        bl[cpage].index[2] = sb.findIndex(v => v !== 0);
        bl[cpage].blankstart = bl[cpage].index[2];
        bl[cpage].enterskip = false;
        bl[cpage].typed = Array.apply(null, Array(csentence.length)).map(v => ' ');
        bl[cpage].entered = Array.apply(null, Array(csentence.length)).map(v => ' ');
    }

    function changesb() {
        nobi = 0;
        for (let v = 0; v < csentencedata.length; v++) {
            if (csentencedata[v][bl[cpage].index[0] + 2] === 1) {
                nobi++;
                for (let i = 0; i < csentencedata[v][1]; i++) {
                    sb[csentencedata[v][0] + i] = nobi;
                }
            }
        }
    }

    function createout(s) {
        for (let i = 0; i < s.length; i++) {
            if (sb[i] !== 0) s = setCharAt(s, i, '_');
        }

        //getting rid of extra spaces
        let tmpwindex = 0;
        let deletedchars = 0;
        while (true) {
            if (tmpwindex === csentencedata.length) break;
            let wdata = csentencedata[tmpwindex];
            if (wdata[bl[cpage].index[0] + 2] === 1) {
                tmpwindex++;
                continue;
            }
            else {
                for (let i = 0; i < wdata[5]; i++) {
                    s = delCharAt(s, wdata[0] + wdata[1] - wdata[5] - deletedchars + i);
                    deletedchars++;
                }
                tmpwindex++;
            }
        }

        const words = s.split(' ');
        let linebreaks = [];
        let isendofsentence = false;
        let i = 0, wi = 0, lastlinebreak = 0;
        while (!isendofsentence) {
            let j = i + words[wi].length + 1;
            if (ctx.measureText(s.substring(lastlinebreak, j)).width > realw - 50) {
                linebreaks.push(s.substring(lastlinebreak, i));
                lastlinebreak = i;
            }
            i = j;
            wi++;
            if (wi === words.length) {
                linebreaks.push(s.substring(lastlinebreak));
                isendofsentence = true;
            }
        }
        return linebreaks;
    }

    function roundRect(c, x, y, w, h, r) {
        if (w < 2 * r) r = w / 2;
        if (h < 2 * r) r = h / 2;
        c.beginPath();
        c.moveTo(x + r, y);
        c.arcTo(x + w, y, x + w, y + h, r);
        c.arcTo(x + w, y + h, x, y + h, r);
        c.arcTo(x, y + h, x, y, r);
        c.arcTo(x, y, x + w, y, r);
        c.closePath();
        c.fill();
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
        if (tr[cpage - trsi].completeddata == tr[cpage - trsi].datasize) {
            resettranslate(cpage, tr[cpage - trsi].mode);
            back();
            return true;
        }
        do {
            tr[cpage - trsi].index++;
            if (tr[cpage - trsi].index === list[cpage].length) {
                tr[cpage - trsi].index = 0;
                shuffle(list[cpage]);
            }
        }
        while (list[cpage][tr[cpage - trsi].index][1] <= 0)
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
}

function hbt1() {
    document.body.innerHTML = blankwordshtml + infobuttonhtml + configbuttonhtml;
    ctype = 1;
    cpage = 0;
    blankwords();
}

function hbt2() {
    document.body.innerHTML = blankwordshtml + infobuttonhtml + configbuttonhtml;
    ctype = 1;
    cpage = 1;
    blankwords();
}

function hbt3() {
    document.body.innerHTML = blankwordshtml + infobuttonhtml + configbuttonhtml;
    ctype = 1;
    cpage = 2;
    blankwords();
}

function hbt4() {
    document.body.innerHTML = blankwordshtml + infobuttonhtml + configbuttonhtml;
    ctype = 1;
    cpage = 3;
    blankwords();
}

function hbt5() {
    document.body.innerHTML = translatehtml + infobuttonhtml + configbuttonhtml;
    ctype = 5;
    cpage = 4;
    translate();
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
        resetblanks(cpage, bl[cpage].tmpmode);
        document.onkeydown = null;
        document.onkeyup = null;
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
    if (!!document.getElementById("fl-cb")) {
        bl[cpage].tmpmode = (document.getElementById("fl-cb").checked ? 0 : 1) + (document.getElementById("rl-cb").checked ? 2 : 0);
    }
    document.querySelector(".config-innercontent").innerHTML = blconfiginnercontenthtml[n];
    if (!!document.getElementById("fl-cb")) {
        document.getElementById("fl-cb").checked = bl[cpage].tmpmode % 2 === 0;
        document.getElementById("rl-cb").checked = Math.floor(bl[cpage].tmpmode / 2) === 1;
    }
}

function trconfigseg(n) {
    if (!!document.getElementById("l-cb")) {
        tr[cpage - trsi].tmpmode = (document.getElementById("l-cb").checked ? 0 : 1);
    }
    document.querySelector(".config-innercontent").innerHTML = trconfiginnercontenthtml[n];
    if (!!document.getElementById("l-cb")) {
        document.getElementById("l-cb").checked = tr[cpage - trsi].tmpmode % 2 === 0;
    }
}

function blresetbuttonclick() {
    resetblanks(cpage, bl[cpage].mode);
    document.onkeydown = null;
    document.onkeyup = null;
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

back();