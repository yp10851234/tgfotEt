const pageid = ['1-1-p2', '3-1'];
const homebuttonnames = ["Voc Unit 12", "Voc Unit 13", "Nothing", "Translate(U12,U13)"];
const homehtml = '<div class="home-button-container"><button class="home-button" onclick="hbt1()">' + homebuttonnames[0] + '</button><button class="home-button" onclick="hbt2()">' + homebuttonnames[1] + '</button><button class="home-button" onclick="hbt3()">' + homebuttonnames[2] + '</button><button class="home-button" onclick="hbt4()">' + homebuttonnames[3] + '</button></div>';
const infobuttonhtml = '<button class="info-button" onclick="showinfo()"><object data="q.svg" class="q-svg svg" id="q-svg"></object></button>';
const configbuttonhtml = '<button class="config-button" onclick="showconfig()"><object data="c.svg" class="c-svg svg" id="c-svg"></object></button>';
const infotext = 'tgfotEt v1.6 preview<br><br>新的功能:<br>1. 進度指示器(每個單詞都要答對一次才算100%)<br>2. 刷新頁面後不會失去進度及資料<br>3. 空格的位置不再會跑掉<br>4. 空格可以被設置為提示第一個字母<br>5. 空格可以被設置為長度不定<br>6. 翻譯可被設定為提示答案有幾個字母、單詞<br><br>If you have found a bug or issue that you would like to report, or you have any inconvenieces using tgfotEt, please contact at yp11131112@yphs.tp.edu.tw';
const infohtml = '<button class="info-bg-bt" onclick="hideinfo()"></button><div class="info-content"><div class="info-text">' + infotext + '</div></div><button class="info-ex-bt" onclick="hideinfo()"><object data="x.svg" class="x-svg svg" id="x-svg"></object></button>';
const confightml = '<button class="config-bg-bt" onclick="hideconfig()"></button><div class="config-content"><div class="config-text"></div></div><button class="config-ex-bt" onclick="hideconfig()"><object data="x.svg" class="x-svg svg" id="x-svg"></object></button>';
const blconfigcontenthtml = '<div class="bl-config-grid"><button class="config-segment config-segment-t" onclick="blconfigseg(0)">Reset</button><button class="config-segment config-segment-b" onclick="blconfigseg(1)">Modes</button><div class="config-innercontent"></div></div>';
const trconfigcontenthtml = '<div class="tr-config-grid"><button class="config-segment config-segment-t" onclick="trconfigseg(0)">Reset</button><button class="config-segment config-segment-b" onclick="trconfigseg(1)">Modes</button><div class="config-innercontent"></div></div>';
const translatehtml = '<button class="back" onclick="back()">Back</button><div class="tr-container"><div class="tr-chi"></div><textarea class="tr-textarea" wrap="hard" oninput="textareachange()"></textarea></div><div class="rates">Rates: 0.00%</div><div class="stats"><div class="progress"><div class="progress-filled"></div><span class="progress-text">0.00%</span></div></div>';
const blankwordshtml = '<button class="back" onclick="back()">Back</button><div class="bl-container"><canvas class="bl-textinput"></canvas></div><div class="rates">Rates: 0.00%</div><div class="stats"><div class="progress"><div class="progress-filled"></div><span class="progress-text">0.00%</span></div></div>';
const exceptions = ['', 'a', 'an', 'the', 'i', 'you', 'he', 'she', 'we', 'they', 'my', 'your', 'his', 'her', 'our', 'their', 'me', 'hers', 'them', 'us'];
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

const blank = [[], [], []];
const trans = [[]];

blank[0] = [
    "The clerk behind the counter smiled at the customer.",
    "He countered that he was only following procedures.",
    "He countered with a right hook.",
    "I admit it is hard to listen to counter opinions.",
    "Though the outcome runs/goes counter to my expectation, I am still optimistic.",
    "The clock in the painting is a symbolic representation of the passage of time.",
    "You are very fortunate to have a friend like him.",
    "Fortunately, we got home before the rush hour.",
    "It was unfortunate that no one liked his new play.",
    "Friendship in misfortune lasts forever.",
    "Columbus returned home in triumph after he had reached India.",
    "Good will eventually triumph over evil.",
    "The whole city poured out for their triumphant homecoming.",
    "After the game, I felt exhausted, but also triumphant.",
    "There is no mutual trust between us.",
    "They finally reached a mutually agreed decision. ",
    "The world changed rapidly after the invention of the computer.",
    "What do you think is the most important invention of this century?",
    "The desk can be adapted to the height of the user.",
    "Children adapt themselves to new environments faster than adults.",
    "The book has been adapted for stage.",
    "The film is adapted from a science fiction novel.",
    "The novel has been adapted into a television series.",
    "I corresponded with my son when he studied in boarding school.",
    "The color of the real thing doesn't correspond with that of the sample.",
    "My hometown has scarcely changed for the last thirty years.",
    "Scarcity makes things valuable, while abundance makes things worthless.",
    "The man wishes to get a divorce from his wife.",
    "Her parents divorced after she was born.",
    "I want to divorce you.",
    "The divorced couple later became good friends.",
    "Students register for the new semester at the beginning of September.",
    "Mr. Wang registered the new house in his wife's name.",
    "You had better register this important letter.",
    "Guests write down their names in the hotel register.",
    "The robber forced the clerk to hand him all the money in the cash register.",
    "The registration of students for the course starts next Monday.",
    "The soldier received a reward for saving the king's daughter. ",
    "I will grant you three wishes in reward for your kindness.",
    "I felt I should reward her for her efforts.",
    "Teaching is a rewarding job.",
    "When the Roman Empire ended is up for debate.",
    "The man slowly turned his gaze to me.",
    "I like to gaze at the stars in the night sky.",
    "Korean teams always play in an aggressive style.",
    "You need to be more aggressive in marketing.",
    "Oxygen and hydrogen are both gases.",
    "Water is made up of oxygen and hydrogen.",
    "Those with a hatred of evil are fit to be policemen.",
    "FedEx is an international carrier.",
    "They tried to hit the enemy's carriers but failed.",
    "They are carriers of the lung disease, TB.",
    "For convenience, I moved to an apartment near the station.",
    "For me, a smartphone is a convenience, not a necessity.",
    "Taiwan Power Company apologized for the inconvenience caused by the power failure.",
    "Not having a cellphone will cause many inconveniences for modern people.",
    "To our great delight, our team won the game.",
    "Her performance delighted everyone in the house.",
    "Thank you for a delightful evening.",
    "We were all delighted to hear of the news of Victory.",
    "The dishes are all in the kitchen cabinet.",
    "The cabinet will be reshuffled soon.",
    "Many of our students do voluntary work in hospitals.",
    "These young men joined the military voluntarily.",
    "Employment insurance covers involuntary unemployment.",
    "He works as a volunteer to help deliver meals to the elderly.",
    "Those teachers volunteer to teach in the poorest rural schools.",
    "I volunteered for this activity.",
    "I volunteered to participate in this activity.",
    "There were lively New Year celebrations all over the town.",
    "We have a party in celebration of Women's Day.",
    "The two departments have distinct functional differences.",
    "He built a functional artificial intelligence robot.",
    "All the rooms facing the ocean have splendid views.",
    "It is splendid to have you back.",
    "They should classify the books by subject.",
    "The classification of the books here looks very systematic.",
    "He placed a classified ad in the local newspaper.",
    "WikiLeaks released numerous classified military documents.",
    "I had a major crush on him in high school.",
    "His car was crushed under a truck in the accident.",
    "The riot police crushed the demonstration in the capital.",
    "Allen is one of our most promising students.",
    "The sudden collapse of the tower frightened everyone there.",
    "Mass production resulted in the collapse of prices.",
    "The roof collapsed and crushed all the furniture inside.",
    "His health collapsed after the transplant surgery.",
    "We are striving to become a member of the United Nations.",
    "We have been striving for freedom of speech.",
    "The cruel murderer was sentenced to death.",
    "Einstein was a genius.",
    "She has a genius for music.",
    "A gay's sexual orientation is toward members of the same sex.",
    "There should be an orientation course for all the new employees.",
    "Nobody can violate the law without being punished.",
    "You don't have to worry that we will violate your privacy.",
    "What you did was in violation of our agreement.",
    "The violation of human rights cannot be tolerated.",
    "Sam wants to be a conductor.",
    "Iron is a good conductor of heat.",
    "Hsinchu Science Park is famous for its semiconductor industry.",
    "If it is not treated properly, the condition can be fatal.",
    "The fatality rate of this disease is approximately 2%.",
    "The organization aims at AIDS prevention and education.",
    "Prevention is better than cure.",
    "It is unwise to borrow money to invest in the stock market.",
    "Through careful investments, he made a lot of money.",
    "The government lowers taxes to attract foreign investors.",
    "The penalty for breaking the law is three years in prison.",
    "Some people argue that the death penalty should be abolished.",
    "Japan invaded China in 1937.",
    "The invasion of one's privacy is a serious problem.",
    "The invaders were finally driven out of our territory."
];

blank[1] = [
    "Japan invaded China in 1937.",
    "The invasion of one's privacy is a serious problem.",
    "The invaders were finally driven out of our territory.",
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
    "The rage of the tornado Sweeps to destruction all that lies in its path.",
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

blank[2] = [
    "aa aa aa aa",
    "bb bb bb bb",
    "cc cc cc cc"
];

trans[0] = [
    ["n. 櫃檯", "counter"],
    ["vt. 反駁、回嘴", "counter"],
    ["vi. 還擊、回擊", "counter"],
    ["a. 相反的", "counter"],
    ["adv. 相反地", "counter"],
    ["n. 代表、象徵", "representation"],
    ["vt. 代表", "represent"],
    ["n. 代表性的", "representative"],
    ["n. 代表", "representative"],
    ["a. 幸運的", "fortunate"],
    ["adv. 幸運地", "fortunately"],
    ["a. 不幸的", "unfortunate"],
    ["n. 不幸", "misfortune"],
    ["n. 命運、好運", "fortune"],
    ["n. 勝利、勝利的喜悦", "triumph"],
    ["vi. 戰勝", "triumph"],
    ["a. 勝利的", "triumphant"],
    ["a. 洋洋得意的", "triumphant"],
    ["a. 彼此的、共通的", "mutual"],
    ["adv. 彼此、互相", "mutually"],
    ["n. 發明", "invention"],
    ["n. 發明物", "invention"],
    ["vt. 發明", "invent"],
    ["n. 發明家", "inventor"],
    ["vt. 使適應", "adapt"],
    ["vt. 改編", "adapt"],
    ["phr. 改編自~", "be adapted from"],
    ["phr. 改編成~", "be adapted into"],
    ["vi. 通信", "correspond"],
    ["vi. 與~符合、一致", "correspond"],
    ["adv. 稀少地、幾乎不", "scarcely"],
    ["n. 稀少、罕見", "scarcity"],
    ["a. 缺乏的、不足的、罕見的、珍貴的", "scarce"],
    ["n. 離婚", "divorce"],
    ["vi./vt. 離婚", "divorce"],
    ["a. 離婚的", "divorced"],
    ["vi. 註冊", "register"],
    ["vt. 登記", " register"],
    ["vt. 以掛號寄", "register"],
    ["n. 登記簿、名單", "register"],
    ["n. 收銀機", "cash register"],
    ["n. 登記、註冊", "registration"],
    ["n. 獎賞、報酬", "reward"],
    ["phr. 做為報酬", "in reward"],
    ["vt. 獎賞、報酬", "reward"],
    ["a. 有成就感的、值得做的", " rewarding"],
    ["n. 帝國", "empire"],
    ["n. 帝王", "emperor"],
    ["n. 凝視的目光", "gaze"],
    ["vi. 凝視", "gaze"],
    ["a. 侵略性的、好鬥的", "aggressive"],
    ["a. 積極的、有幹勁的", "aggressive"],
    ["n. 氫氣", "hydrogen"],
    ["n. 氧氣", "oxygen"],
    ["n. 仇恨、憎恨", "hatred"],
    ["vt. 憎恨", "hate"],
    ["n. 恨", "hate"],
    ["a. 可憎的、可恨的、可惡的、充滿憎惡的", "hateful"],
    ["n. 貨運公司", "carrier"],
    ["n. 航空母艦", "carrier"],
    ["n. 帶原者", "carrier"],
    ["n. 便利", "convenience"],
    ["n. 帶來便利的事物", "convenience"],
    ["n. 不便(不可數)", "inconvenience"],
    ["n. 不便之處(可數)", "inconvenience"],
    ["n. 愉悦", "delight"],
    ["vt. 使~愉悅", "delight"],
    ["a. 令人愉悦的", "delightful"],
    ["a. 愉悅的、極為高興的", "delighted"],
    ["n. 櫃子", "cabinet"],
    ["n. 內閣", "cabinet"],
    ["a. 自願的", "voluntary"],
    ["adv. 自願地", "voluntarily"],
    ["a. 非自願的", "involuntary"],
    ["n. 義工、志工、自願者", "volunteer"],
    ["vi./vt. 自願", "volunteer"],
    ["phr. 自願(從事、參加)", "volunteer for N / to V"],
    ["n. 慶祝", "celebration"],
    ["phr. 以慶祝~", "in celebration of"],
    ["a. 功能上的", "functional"],
    ["a. 發揮功能的", "functional"],
    ["a. 壯觀的、華麗的", "splendid"],
    ["a. 絕佳的(口語)", "splendid"],
    ["vt. 分類", "classify"],
    ["n. 分類", "classification"],
    ["a. 分類的", "classified"],
    ["a. 機密的", "classified"],
    ["n. 迷戀、暗戀", "crush"],
    ["vt. 壓碎", "crush"],
    ["vt. 鎮壓", "crush"],
    ["a. 有前途的、有希望的", "promising"],
    ["n. 倒塌、崩潰", "collapse"],
    ["n. 暴跌、崩潰", "collapse"],
    ["vi. 倒塌、崩潰", "collapse"],
    ["vi. 急遽衰退", "collapse"],
    ["vi. 奮力爭取", "strive"],
    ["n. 凶手", "murderer"],
    ["n. 天才", "genius"],
    ["n. 天分、天賦", "genius"],
    ["n. 定位、取向", "orientation"],
    ["n. 職前訓練、新生訓練", "orientation"],
    ["vt. 違反", "violate"],
    ["vt. 侵犯、妨害", "violate"],
    ["n. 違反", "violation"],
    ["n. 侵犯、妨害", "violation"],
    ["n. 指揮家", "conductor"],
    ["n. 導體", "conductor"],
    ["n. 半導體", "semiconductor"],
    ["a. 致命的", "fatal"],
    ["n. 致命", "fatality"],
    ["n. 預防", "prevention"],
    ["vt. 預防", "prevent"],
    ["vi./vt. 投資", "invest"],
    ["n. 投資", "investment"],
    ["n. 投資人", "investor"],
    ["n. 刑罰", "penalty"],
    ["n. 死刑", "death penalty"],
    ["vt. 侵犯、侵略", "invade"],
    ["n. 侵犯、侵略", "invasion"],
    ["n. 侵略者、入侵者", "invader"],
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
    ["vi. /", "vt. 爆炸 explode"],
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
    ["n. 繁榮", "prosperity"]
];

const start_dis = 1;
const trsi = 3;
let list = Array(4);
let bl = Array(3);
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
        resettranslate(3, 1);
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
    document.body.innerHTML = translatehtml + infobuttonhtml + configbuttonhtml;
    ctype = 5;
    cpage = 3;
    translate();
    // document.querySelector(".tr-chi").innerHTML = list[0][0];
    // document.querySelector(".progress").innerHTML = "Session: 1 &nbsp; Completed: 0/" + tr.length;

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
        else if(tr[cpage - trsi].mode === 1)
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

function hintcw(ans){
    let words = ans.split(' ').filter(v => v.match(/[a-zA-Z]/g) !== null);
    return(words.length === 1 ? " (Characters: " + words[0].length.toString() + ")" : " (Words: " + words.length.toString() + ")");       
}

back();
showinfo();