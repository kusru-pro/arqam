// State Management
const state = {
    activeTab: 'news',
    activeLibraryCategory: 'All', // Added category state
    data: {
        news: [
            { id: 1, title: "📰 യൂണിറ്റിൽ ലൈബ്രെറിക്ക് തുടക്കം", author: "Arqam corner", date: "June 19, 2026", desc: "ജൂൺ 19 വായനാദിനവുമായി ബന്ധപ്പെട്ട് arqam unit ക്ലാസ്സിൽ ഒരു ലൈബ്രെറിക്ക് തുടക്കം കുറിച്ചു. ഉൽഘടനം hida സെക്രട്ടറി മിസ്ബാഹ് ഒറ്റപ്പാലം നിർവഹിച്ചു. വായനയുടെ ഗുണങ്ങളെപറ്റിയും അതിന്റെ പ്രാധാന്യങ്ങളും വിദ്യാർത്ഥികൾക്ക് വിവരിച്ചുകൊടുത്തു. സാനിദ്യം അറിയിക്കാൻ uc മുബഷിർ കുഞ്ഞിപ്പള്ളിയും പങ്കെടുത്തു. ശാമിൽ കൊട്ടോത് സ്വാഗതവും ശാദി ഫർഹാൻ നന്ദിയും പറഞ്ഞു. ലൈബ്രെറിയിൽ ഏതൊക്കെ പുസ്തകങ്ങൾ ഉണ്ടെന്ന് ലൈവായി arqamiz ൽ ലഭിക്കും.",  color: "text-yellow-500", bg: "bg-yellow-50", image: "https://i.pinimg.com/736x/ae/38/0d/ae380d5f51bbb4ef58edcab2614b713f.jpg" },
            
        ],
        literary_works: [
            { id: 1, title: "നിഷ്കാസിതർ ", author: "Shamil Kuttoth", date: "june 24, 2026", desc: `മരണത്തിനാർത്തി മൂത്ത്
കടലിന്റെ മാറോട്
 ചേർന്ന് കിടപ്പുണ്ടാവും
സ്വപ്‌നങ്ങൾ ദ്രവിച്ച
ഒരു വഞ്ചി

തുരുമ്പടിച്ച നിറം
ചുമലിലൊതുക്കി
ചിതറിക്കിടപ്പുണ്ടാവും
 ലക്ഷ്യം മറന്ന ഭാണ്ഡക്കെട്ടുകൾ

തീരത്തോടടുക്കുന്തോറും
 തിരയോടൊപ്പം
 ആട്ടപ്പെടുന്നുണ്ടാവും
 മെലിഞ്ഞൊട്ടിയ
ഒരു നിസ്സഹായത

അതിർത്തി കടന്ന്
 അടിവസ്ത്രമുടുത്ത്
നിൽപുണ്ടാവും
മൗനം പിളർത്തിയ
ഒരു ജീവിതം

 നിശബ്ദമായി
 നിർത്താതെ
 തേങ്ങുന്നുണ്ടാവും
പ്രതീക്ഷയറ്റ ഒരമ്മ
 തിരയിലാടിയുലയുന്നുണ്ടാവും
 അഭയാർത്ഥിയെന്ന
അടിക്കുറിപ്പോടെ
 വൈറലായ ഒരു
 ഐലൻ കുർദി

 കണ്ണ് കലങ്ങിക്കരയുന്നുണ്ടാവും
കാമുകനെത്തേടി
 ഒരു പ്രേമക്കണ്ണ്

 എല്ലാം നോക്കി
ഊ'ച്ചിരിക്കുന്നുണ്ടാകും
ഒരുപറ്റം
കഴുകക്കണ്ണുകൾ 
മൗനത്തിലുറച്ച നമ്മുടെ 
മനുഷ്യരുടേതല്ലാത്ത സ്വഭാവം`, readTime: "5 min read", category: "poem", image: "https://i.pinimg.com/1200x/17/0c/56/170c5630730f43cad42ea9de95fb02fe.jpg" },
           { id: 2, title: "فضائل محرم وخصوصياته ", author: "shdi farhan padinjarathara", date: "june 25, 2026", desc: ` مما يوضح لنا أوضح من الشمس في ضحاها أن شهر المحرم ليس مجرد شهر عادي، بل هو أحد الأشهر الحرم التي عظمها الله سبحانه وتعالى واهتم بها اهتماماً بالغاً؛ حيث قال في كتابه الكريم: {إِنَّ عِدَّةَ الشُّهُورِ عِندَ اللَّهِ اثْنَا عَشَرَ شَهْرًا فِي كِتَابِ اللَّهِ يَوْمَ خَلَقَ السَّمَاوَاتِ وَالأَرْضَ مِنْهَا أَرْبَعَةٌ حُرُمٌ}، وهذه الأربعة هي: المحرم، ورجب، وذو القعدة، وذو الحجة، ولكل شهر منها حكمة في تحريم القتال تعظيماً لحرمته.
 
     ومن الجدير بالذكر، أن في هذا الشهر الذي يفتتح التقويم الهجري يوماً عظيم الفضل وهو "يوم عاشوراء". وإذا أمعنا النظر في تاريخنا، نجد أن هذا الشهر شهد أيضاً رحيل ثلة من علمائنا الأفاضل الذين عاشوا حياتهم مخلصين لله تعالى، ومنهم الشيخ "قرة سادات" رحمه الله وغيره. وفي المقابل، نجد أن الله تعالى قد خصّ أنبياءه الأفاضل في هذا اليوم بدرجات عليا من النصر والتمكين؛ فنجى الله فيه موسى عليه السلام وقومه الصالحين من طغيان فرعون، وجعل غرق فرعون في ذلك اليوم آية للعالمين. كما أنقذ الله سبحانه وتعالى نبيّه إبراهيم عليه السلام من النار المستعرة، فلم يمسه سوء من لهيبها. إن فضائل المحرم لا تُعد ولا تُحصى، ولا تُحد ولا تُستقصى.

         وتتجلى عظمة القصة عندما نعلم أن كليم الله موسى عليه السلام كان يصوم يوم عاشوراء شكراً لله على نجاته من بطش فرعون وجنوده بعد أن عبر بنو إسرائيل البحر ويئس الكفار غرقاً. ولما قدم الرسول صلى الله عليه وسلم المدينة المنورة، سأل اليهود عن صيامهم في هذا اليوم، فأجابوا: "هذا يوم صالح، هذا يوم نجى الله بني إسرائيل من عدوهم، فصامه موسى"، فقال صلى الله عليه وسلم: "نحن أقرب إليه منكم"، فصامه وأمر بصيامه. وحرصاً منه على تميز الأمة الإسلامية قال: "لئن بقيت إلى قابل لأصومن التاسع" أي مع العاشر مخالفة التشبه بهم، وهذا هو التاريخ الكامن وراء صيام تاسوعاء. علاوة على ذلك، فإن الصيام في هذا الشهر له مزية خاصة، كما قال المصطفى صلى الله عليه وسلم: "أفضل الصيام بعد رمضان شهر الله المحرم".

ففي نهاية المطاف، يعد شهر المحرم محطة إيمانية فريدة للاستعداد الروحي للمؤمن، فالوقت فيه له قيمة عظيمة، والأيام لا ينبغي أن تتشابه عند المؤمن دون زيادة في العمل الصالح. إن الحوادث التاريخية التي وقعت في هذا الشهر ليست مجرد ذكريات، بل هي عبر ثمينة تُعلمنا أن الصبر على الملمات والشدائد والمشكلات يرفع درجات المؤمن عند رب العالمين`, readTime: "5 min read", category: "arabic article", image: "https://i.pinimg.com/736x/2d/4e/f5/2d4ef55e1cdf2879472f3ce83be8d1b1.jpg" }
        ],
         magazines: [
            { id: 1, title: "ഓർബിസ്", author: "Arqam unit", issue: "sep 2025", cover: "https://i.pinimg.com/736x/8b/2a/64/8b2a640d8d4e7f1691ce2540cc16b9d0.jpg", pdf: "https://drive.google.com/file/d/1WhHaNRtGC-TjLGDjvm3nSjPedEH8Kawm/view?usp=drive_link" },
            { id: 2, title: "إقرأ", author: "Arqam unit", issue: "feb 2026", cover: "https://i.pinimg.com/736x/c7/b4/f1/c7b4f127c878b5096c598817e3e3e369.jpg", pdf: "https://drive.google.com/file/d/1nNBgnbNlJeF59SLFYZFo1rhb-UKrzDJK/view?usp=drive_link" },
        ],
        library: [
             { id: 1, title: "ANNIHILATION OF CASTE", author: "Dr. B.R. AMBEDKAR", category: "Non-Fiction", review: "Unless you change your social order you can achieve little by way of progress. You cannot mobilize the community either for defence or for offence. You cannot build anything on the foundations of caste You cannot build up a nation  you cannot build up a morality. Anything that you will build on the foundations of caste will crack  and will never be a whole.", cover: "https://i.pinimg.com/736x/96/e0/b1/96e0b1c040ed1b1b33bb9f37095833f1.jpg" },
                    { id: 2, title: "ഇടം വലം പാളുന്ന ഇടതുപക്ഷം", author: "കെ കെ ജോഷി", category: "essay", review: "കരുത്തുറ്റ പ്രതിപക്ഷവും തിരുത്തൽ ശക്തിയായ ഭരണമുന്നണിയുമായിരുന്ന ഇന്ത്യൻ സി പി എം ഇത്ര ഭയാനകമായി ഇല്ലാതായതിന്റെ കാരണങ്ങൾ എണ്ണിയെടുക്കുന്നു. ഇടതിനും വലതിനും ഇടയിൽ ഇടവഴികളില്ല എന്ന് തിരിച്ചറിയാതെ പോയതാണ് ഇടതുപക്ഷത്തിൻ്റെ തിരിച്ചടികൾക്ക് കാരണമെന്ന് സമർത്ഥിക്കുന്നു.", cover: "https://i.pinimg.com/736x/93/f8/c9/93f8c96a47088839b9f0a4380ad6f6d6.jpg" },
                    { id: 3, title: "മുഹമ്മദ് നബി പാശ്ചാത്യചിന്തകരുടെ ദൃഷ്ടിയിൽ", author: "മൈക്കിൾ എച്ച്. ഹാർട്ട്", category: "essay", review: "ലോകത്ത് ഏറ്റവുമധികം സ്വാധീനം ചെലുത്തിയ നൂറ് വ്യക്തിത്വങ്ങളുടെ പട്ടികയിൽ ഒന്നാം സ്ഥാനത്തേക്ക് ഞാൻ മുഹമ്മദ് നബിയെ തെരഞ്ഞെടുത്തത് പലരെയും അമ്പരിപ്പിച്ചേക്കാം. ചിലരതിനെ ചോദ്യം ചെയ്യുകയും ചെയ്യും. പക്ഷേ, മതപരവും മതേതരവുമായ തലങ്ങളിൽ ചരിത്രത്തിൽ ഏറ്റവും വലിയ വിജയം നേടിയ ഏക മനുഷ്യൻ മുഹമ്മദാണ്...", cover: "https://i.pinimg.com/736x/7f/f5/56/7ff556eab5c11cebf5ff29bbe9360ec3.jpg" },
                    { id: 4, title: "ഇസ്ല‌ാംബഹു സ്വരത", author: "ഡോ. ഉമറുൽ ഫാറൂഖ് സഖാഫി", category: "study", review: "മതകീയ ബഹുസ്വരത, സാംസ്‌കാരിക ബഹുസ്വരത, വർഗ ബഹുസ്വരത, പാരിസ്ഥിതിക ബഹുസ്വരത, നിയമ ബഹുസ്വരത, ലിംഗ ബഹുസ്വരത തുടങ്ങിയ ബഹുസ്വരതകളുടെ ഇസ്ലാമിക നിലപാടുകൾ വിശകലനം ചെയ്യുന്ന മലയാളത്തിലെ ആദ്യ പഠനം. ഇസ് ലാമിക ബഹുസ്വരതയെ വിമർശിക്കാനുപയോഗിക്കുന്ന ഖിലാഫത്, ജിഹാദ്, ജിസ്‌യ തുടങ്ങിയവകളുടെ യഥാർത്ഥ വശങ്ങൾ കൂടെ ഈ കൃതി ഉൾകൊള്ളുന്നു. ബഹുസ്വരതയെയും അതിനോടുള്ള ഇസ്ലാമിന്റെ നിലപാടുകളെയും അടുത്തറിയാനാഗ്രഹിക്കുന്ന ആർക്കും ഈ കൃതി കൂട്ടാവുമെന്നു തീർച്ച", cover: "https://i.pinimg.com/736x/d7/2d/87/d72d8768c4b42df90b5c01b5855883c8.jpg" },
                    { id: 5, title: "മുത്തുനബിയോടൊപ്പം 365 ദിനങ്ങൾ", author: "നൂർദാൻ ദംല", category: "story", review: "പ്രവാചക ജീവിതത്തിൻ്റെ അനശ്വര നിമിഷങ്ങൾ 365 അധ്യായങ്ങളിലായി മനോഹരമായി ആവിഷ്കരിക്കുന്ന ബൃഹദ് ഗ്രന്ഥം. പ്രമുഖ ടർക്കിഷ് എഴുത്തുകാരി നൂർദാൻ ദംലയുടെ 365 days with Prophet Muhammed  പുസ്‌തകത്തിൻ്റെ മലയാള വിവർത്തനം. ഫാത്വിമ, അലി, ഹസൻ, ഹുസൈൻ, അനസ്, സൈദ്, ഉസാമ, അബ്ദുല്ല ബ്ൻ സുബൈർ തുടങ്ങി തിരുജീവിതത്തിൻ്റെ വിവിധ ഘട്ടങ്ങളിൽ അവിടുത്തെ കൂടെയുണ്ടായിരുന്ന കുട്ടികളോട് പ്രവാചകർ അനുവർത്തിച്ച പെരുമാറ്റവും അവർക്ക് നൽകിയിരുന്ന ഉപദേശനിർദേശങ്ങളും പ്രത്യേകം അവതരിപ്പിക്കുന്നുണ്ടിതിൽ.തിരുനബി കാണിച്ചുതന്ന വഴിയിൽ ജീവിതം ചിട്ടപ്പെടുത്തുന്നതിന് മക്കൾക്ക് സമ്മാനിക്കാവുന്ന മികച്ചൊരു സമ്മാനമാവും ഈ പുസ്‌തകം", cover: "https://i.pinimg.com/736x/86/ff/1e/86ff1e67cb09c1e0804ee2451a67f45c.jpg" },
                    { id: 6, title: "ഒരു ജന്മം ഒരായിരം മരണം", author: "കബനി", category: "Essay", review: "ഓരോ മറുജീവിതത്തിന് പിന്നിലുമുള്ള നീറുന്ന യാഥാർത്ഥ്യങ്ങൾ സാമൂഹിക യാഥാർഥ്യങ്ങളുടെയും രാഷ്ട്രീയ യാഥാർഥ്യങ്ങളുടെയും പശ്ചാത്തലത്തിൽ വിശകലനം ചെയ്യുകയാണ് ഇതിലെ ഓരോ ലേഖനവും. ഹർഷ് മന്ദർ പറയുന്നു: “ഇവയൊരിക്കലും എൻ്റെ കഥകളാകാനോ നിങ്ങളുടേതാകാനോ സാദ്ധ്യതയില്ല. പക്ഷേ നാം ചെവിയോർക്കേണ്ട, ശ്രദ്ധിക്കേണ്ട കഥകളാണിവയെല്ലാം. നാം അവയിൽ നിന്ന് മുഖം തിരിച്ചു നിൽക്കാൻ തുടങ്ങിയിട്ട് കാലമേറെയായി. എത്ര തവണ ഒരാൾക്ക് താനൊന്നും കണ്ടില്ലെന്നു നടിച്ച് മുഖം തിരിക്കാനാകും?. അതെ,ഏറെപ്പേർ മരിച്ചുപോയെന്ന്", cover: "https://i.pinimg.com/736x/82/6b/72/826b72c19630dab9e20f9ec7a8d2e36f.jpg" },
                    { id: 7, title: "ആസാദി", author: "അരുന്ധതി റോയി", category: "essay", review: "ആസാദി'- സ്വാതന്ത്ര്യം. ഇന്ത്യൻ ഭരണകൂടത്തിന്റെ സാന്നിദ്ധ്യത്തെ അധിനിവേശമായിക്കാണുന്ന കാശ്‌മീരികൾക്കിടയിൽ മുഴങ്ങിക്കേട്ട ഐതി ഹാസികമായ മന്ത്രം. വിരോധാഭാസമെന്നു പറയാം. ഹിന്ദു ദേശീയതയ്ക്കെതിരെ ഇന്ന് ഇന്ത്യൻ തെരു വുകളിൽ ലക്ഷക്കണക്കിന് കണ്‌ഠങ്ങളിൽനിന്നും ഉയരുന്നതും ഇതേ വാക്ക് തന്നെയാണ്. സ്വാതന്ത്ര്യത്തിനായുള്ള ഈ രണ്ടു മുറവിളികളും ഉയർത്തുന്നത് ഭിന്നതയുടെ സ്വരമാണോ അതോ ഐക്യത്തിൻ്റേതാണോ? അതിനുത്തരം കിട്ടുന്നതിനു മുൻപായി മറ്റൊരു ഭീകരാവസ്ഥ 'ആസാദി' എന്ന വാക്കിൻ്റെ മറ്റൊരു തലം നമുക്കു വെളിവാക്കി കോവീഡ് 19. അന്താരാഷ്ട്ര അതിർത്തികളെ അസംബന്ധമാക്കിക്കൊണ്ട്. ലക്ഷക്കണക്കിന് ജനങ്ങളെ ഇല്ലാതാക്കിക്കൊണ്ട് മറ്റൊന്നിനും സാധ്യ മല്ലാത്തവിധം ആധുനിക ലോകത്തെ ഈ മഹാമാരി നിശ്ചലാവസ്ഥയി ലാക്കി. ഭരണകൂടത്തിൻ്റെ അടിച്ചമർത്തലുകൾ വർധിച്ചുവരുന്ന ഈ കാലത്ത് സ്വാതന്ത്ര്യം എന്ന വാക്കിൻ്റെ പുതിയ അർത്ഥതലങ്ങൾ കണ്ടെത്താൻ നമ്മെ വെല്ലുവിളിക്കുകയാണ് അരുന്ധതി റോയി.", cover: "https://i.pinimg.com/736x/33/43/6d/33436da32330a9bda21bb5073aace222.jpg" },
                    { id: 8, title: "ഉറക്കച്ചടവുള്ള ഓർമ്മകൾ", author: "പാട്രിക് മോദിയാനോ", category: "novel", review: "ഒരു കൊലപാതകത്തിൻ്റെ ചുരുൾ തേടുകയാണ് ആഖ്യാതാവ്. ജീവിതയാത്രയിൽ തൻ്റെയൊപ്പം സഞ്ചരിച്ച അനേകം സ്ത്രീകളുടെ കഥകൾ കടന്നുവരുന്നു. സ്റ്റേഷൻ ബുളേവാഡിലെ കഫേ. മോഷ് റോഡിലെ ഹോട്ടൽ. ബുളേവാഡിലെ കഫേയിൽ പ്രഭാതസന്ദർശക ജനവീവ് ഡലാം. സുഹൃത്ത് മന്ത്രവാദിനി മെഡിലൻ പെറോ, സംഭ്രമജനകമായ ലൂഡോ എഫിൻ്റെ കൊലപാതകം. ഒട്ടേറെ കഥാപാത്രങ്ങൾ പാരീസിന്റെ നിഗൂഢതകൾ തുറന്നുവെയ്ക്കുന്നു. ആരാണ് ലൂഡോ എഫിനെ കൊലപ്പെടുത്തിയത്? താനായിരുന്നുവോ? അതോ സുഹൃത്തോ? കാലത്തിൻ്റെ കനത്ത ഹിമപാളികളെ ഭേദിച്ചുകൊണ്ട് കടന്നുവരുന്നത്, ഉറക്കച്ചടവുകളുള്ള ഓർമ്മകളാണ്. അവ തെളിഞ്ഞുവരികയാണ്. പാട്രിക് മോദിയാനോവിന്റെ മറ്റൊരു ക്ലാസ്സിക്.", cover: "https://i.pinimg.com/736x/d7/b8/63/d7b863eca66a0fe41108e66e97ad7373.jpg" },
                    { id: 9, title: "ചെമ്മീൻ", author: "തകഴി", category: "novel", review: "കടലോരം പാടിനടന്ന ഒരു ദുരന്തപ്രണയകഥ കേരളക്കരയാകെ അലയൊലികൊള്ളിച്ചു. ഈരേഴുകടലും കടന്ന് അതൊരു വിശ്വമഹാകാവ്യമായി", cover: "https://i.pinimg.com/736x/c5/2f/d7/c52fd749bd0654db7d0fe4582d9ecb82.jpg" },
                    { id: 10, title: "മുഖദ്ദിമത്തുസ്സുന്ന:ആദർശ പഠനം",  author: "അഫ്‌സൽ സഖാഫി ചെറുമോത്ത്", category: "study", review: "ആദർശ വിഷയങ്ങളിൽ അടിസ്‌ഥാനപരമായി അറിയേണ്ട കാര്യങ്ങളെക്കുറിച്ചുള്ള ലളിതമായ രചനാ രീതി ഈ കൃതിയെ നിങ്ങൾക്ക് ഏറ്റവും പ്രിയപ്പെട്ടതാക്കുന്നു. മലയാളി വായനക്കാർക്കിടയിൽ ആദർശ രംഗത്തെ പ്രാരംഭക്കാർക്ക് ഇതൊരു പുതിയ അനുഭവമായിരിക്കും", cover: "https://i.pinimg.com/736x/a8/7b/fd/a87bfdf1fce2ae07fa476a196890bcf9.jpg" },
                    { id: 11, title: "ഉമറുൽ ഫാറൂഖ്(റ)", author: "സൈഫുദ്ദീൻ വാഫി അരീക്കോട്", category: "story", review: "ജയിക്കാൻ ജനിച്ചവരായിരുന്നു ഉമർ (റ).നീതിയും ധർമവുമായിരുന്നു മുഖമുദ്ര.വിശുദ്ധ ഖുർആൻ്റെ ദിവ്യപ്രകാശം കണ്ട് ഇസ്‌ലാമിലേക്കു വിരുന്നുവന്ന ധീരസ്വഹാബിയുടെ ഇതിഹാസ ജീവിതം", cover: "https://i.pinimg.com/736x/49/08/10/49081047fff79fea2251630fb1e25e57.jpg" },
                    { id: 12, title: "ഹൃദയം തൊട്ട പൂവ്", author: "സലാഹുദ്ധീൻ പരപ്പനങ്ങാടി", category: "poem", review: "നമ്മിലെ ആന്തരികമായ ഒരച്ചുടക്കത്തിന്റെ നാമമാണ് മുത്ത് നബി. അത്രമേൽ സുന്ദരമായ ജീവിതത്തിന്റെ വഴിയോരങ്ങളെ വരച്ചിടാൻ ശ്രമിക്കുകയാണിവിടം. ഈ നിയോഗത്തെ ഒരു ഭാഗ്യമായി കരുതുന്നു. താളുകളിൽ ഖബറടക്കപ്പെട്ടു അക്ഷരങ്ങളും അക്ഷരങ്ങളിൽ കൂട്ടുകിടക്കാൻ കാണിച്ച സത്യവും എത്രമേൽ മനോഹരമാണ്.", cover: "https://i.pinimg.com/736x/c8/80/52/c88052837d30a3431c2cfa11825b368a.jpg" },
                    { id: 13, title: "തിരുനബി ജന്മ വിശേഷങ്ങൾ", author: "കെ.സി.സ്വാദിഖലി", category: "Study", review: "തിരുനബി (സ) ലോകോണ്മക്ക് നിദാനം അള്ളാഹുവും മാലാഖമാരും പ്രപഞ്ചമാകെയും അവിടുത്തെ അപദാനങ്ങൾ വാഴ്ത്തിക്കൊണ്ടേയിരിക്കുന്നു. തിരുനബിയുടെ പ്രകാശം, പിറവി കുടുംബമഹിമ, മക്കയിലായതിൻ്റെ പ്രാധാന്യം തുടങ്ങിയവയുടെ ഹൃസ്വവും സമഗ്രവുമായ പഠനമാണിത്. തുടർ പഠനത്തിന് ഉപോൽബലകമാകും വിധം ആധികാരിക അവലംബങ്ങൾ കൂടി കൃതിയിൽ ചേർത്തിട്ടുണ്ട്.", cover: "https://i.pinimg.com/736x/01/e5/e8/01e5e82f85143a5e0754edc0e53fd0f8.jpg" },
                    { id: 14, title: "തിരുനബിയുടെ കത്തുകൾ", author: "എ.കെ.അബ്‌ദുൽ മജീദ്", category: "study", review: "ഇസ്ലാമിക സന്ദേശത്തിൻ്റെ പ്രചരണാർത്ഥം സമകാലീനരായ രാജാക്കന്മാർക്കും ഗോത്രപ്രമുഖന്മാർക്കും ജനപദങ്ങൾക്കും പ്രവാചകൻ ദൂതുകൾ അയക്കുകയുണ്ടായി. അറേബ്യയിലെ വിവിധ ഗോത്രങ്ങളുമായി നബി സന്ധി ചെയ്യുകയും കരാറുകൾ ഒപ്പുവെക്കുകയും ചെയ്തിട്ടുണ്ട്. പ്രവാചക ചരിത്ര ഗ്രന്ഥങ്ങളിൽ ഈ കത്തുകളും കരാറുകളും പ്രമാണപത്രങ്ങളും അതേപടി ഉദ്ധരിച്ചതു കാണാം. നബിതിരുമേനിയുടെ ഉദാര സമീപനവും നയതന്ത്രജ്ഞതയും സൈര്യവും തുറന്ന നിലപാടുകളും ഈ രേഖകളിൽ തെളിഞ്ഞു കിടപ്പുണ്ട്. ഇസ്ലാമിന്റെ സന്ദേശവും സൗന്ദര്യവും തുടിക്കുന്ന വിശുദ്ധ കുറിമാനങ്ങളുടെ അമൂല്യ ശേഖരം.", cover: "https://i.pinimg.com/736x/4d/43/1b/4d431b9e113cb2e9429562d74a82ac06.jpg" },
                    { id: 15, title: "ലോകൈക ഗുരു", author: "മുഹമ്മദ് അനസ് അമാനി", category: "study", review: "ഒരു കാരക്കച്ചീന്തെങ്കിലും നൽകി നരകം കാക്കണേ എന്ന് തിരുദൂതർ. അന്ന് മനുഷ്യർ കൈയിലുള്ളതെല്ലാം പെറുക്കിയെടുത്ത് തിരുമുമ്പിലെത്തി. അവിടുന്ന് ചിരിച്ചു കൊണ്ട് അതെല്ലാം വാങ്ങിവെക്കുകയല്ല ചെയ്ത‌ത്. അവിടുന്ന് ചോദിച്ചു: കുടുംബത്തിനെന്താണ് ബാക്കിയുള്ളത്? ഈ ചോദ്യം ലോകത്തോടാണ്. നന്മ ചെയ്യണം, പക്ഷേ മിതത്വം വേണം. ധർമം ചെയ്യണം, പക്ഷേ കുടുംബത്തെ അനാഥരാക്കരുത്. തിരുദൂതരുടെ കാരുണ്യം നിറഞ്ഞ അധ്യാപനങ്ങൾ ലോകമിപ്പോഴും പകർത്തുന്നു. അനന്തമായ ദയാവായ്‌പിൻ്റെ അനേകരംഗങ്ങൾ ചേർത്തുവെച്ച എഴുത്ത്.", cover: "https://i.pinimg.com/736x/4f/23/2a/4f232a40a0df4367d9c9cb495d3bd449.jpg" },
                    { id: 16, title: "രചനയും സൗന്ദര്യവും", author: "പി എ നാസിമുദ്ദീൻ", category: "Non-Fiction", review: "ഒരു എഴുത്തുകാരന് ഏറ്റവും ആവശ്യമുള്ള ഒന്നാണ് ഭാഷയിലുള്ള വൈദഗ്‌ധ്യം. ഭാഷയുടെ അടിസ്ഥാന ഘടകം വാക്കാണ്. വാക്കുകളുടെ കൃത്യമായ തെരഞ്ഞെടുപ്പ്, അതു മറ്റു വാക്കുകളുമായുണ്ടാക്കുന്ന ഘടന, അതിന്റെ ധ്വനനശേഷിയും തീക്ഷ്ണതയും ഇതൊക്കെയാണ് ഓരോ രചനയുടെയും സൗന്ദര്യം. എഴുത്തുകാരാവാൻ ആഗ്രഹിക്കുന്നവർക്ക് ഉപകാരപ്രദമാകും വിധം രിസാല പ്രസിദ്ധീകരിച്ച സർഗവേദിയുടെ സമാഹാരമാണീ പുസ്തകം.", cover: "https://i.pinimg.com/736x/4b/b8/51/4bb851dba0ef3eec3303985129031e48.jpg" },
                    { id: 17, title: "ഇസ്ലാമിക് ഫൈനാൻസ് പ്രയോഗവും കർമശാസ്ത്രവും", author: "ഫൈസൽ നിയാസ് ഹുദവി", category: "study", review: "ഇസ്‌ലാമിക് ഫൈനാൻസ് ഉൽപന്നങ്ങളും സേവനങ്ങളും ശരീഅ അനുസൃതമാണെന്ന് ഉറപ്പുവരുത്തൽ മുസ്‌ലിമിന്റെ ബാധ്യതയാണ്. ഇസ്ലാമിക ചട്ടക്കൂടിനുള്ളിൽ നിന്നുകൊണ്ടുള്ള നവീകരണവും പുതുമകളും തേടുന്ന പഠനമേഖലയും കൂടിയാണിത്. ഈ രംഗത്തെ പ്രധാന ചർച്ചകളെ മുസ്‌ലിം ലോകം ഒരുപോലെ അംഗീകരിക്കുന്ന നാലു മദ്ഹബുകളിലെ ക്ലാസിക് ഗ്രന്ഥങ്ങളുടെ വെളിച്ചത്തിൽ പഠനവിധേയമാക്കാനും അതിലെ വിവിധ നിലപാടുകളും ഫിഖ്ഹ് തുറക്കുന്ന അനന്ത സാധ്യതകളും വിശദീകരിക്കാനും ശ്രമിക്കുകയാണ് ഈ കൃതി. ബാങ്കിംഗ്, കാപിറ്റൽ മാർക്കറ്റ്, ഇൻഷുറൻസ് എന്നീ മേഖലകളിലെ ഇസ്ല‌ാമിക നിയമങ്ങളും ഫിഖ്‌ഹ് മുന്നോട്ടു വക്കുന്ന ബദലുകളും അന്വേഷിക്കുന്നു.", cover: "https://i.pinimg.com/736x/92/4b/11/924b119f7bd6569697abf0ed6edf71b3.jpg" },
                    { id: 18, title: "മൗദൂദിസം", author: " ", category: "study", review: "മത നവീകരണ പ്രസ്ഥാനങ്ങളുടെ ഉള്ളുകള്ളികൾ തുറന്നുകാട്ടുന്ന സംശയാലുക്കളുടെ സംശയങ്ങൾക്ക് അളന്ന് മുറിച്ചുള്ള മറുപടികൾ നൽകുന്ന പഠനാർഹമായ ഒരു കൃതി", cover: "https://i.pinimg.com/736x/a9/9b/40/a99b40c3cbf2b08343fb33cf0c6761e2.jpg" },
                    { id: 19, title: "നവോത്ഥാനം:അട്ടിമറികൾ, ആൾമാറാട്ടങ്ങൾ", author: "മുഹമ്മദലി കിനാലൂർ", category: "Study", review: "കേരളത്തിൽ ഹിന്ദു, മുസ്‌ലിം സമുദായങ്ങളിലുണ്ടായ നവോത്ഥാനത്തിന്റെ സ്വഭാവം എന്തായിരുന്നു? ആരായിരുന്നു അതിൻ്റെ യഥാർത്ഥ നായകർ? അവർ എങ്ങനെയാണ് ചരിത്രത്തിൽ നിന്നു പുറത്താക്കപ്പെട്ടത്? നവോത്ഥാനത്തിന് എന്തുകൊണ്ട് തുടർച്ച സാധ്യമായില്ല? ഇത്യാദി ചോദ്യങ്ങൾക്ക് ഉത്തരം കണ്ടെത്താൻ ശ്രമിക്കുകയാണ് ഈ കൃതി.", cover: "https://i.pinimg.com/736x/69/77/1b/69771b2415b834b67425fbde1966b3b0.jpg" },
                    { id: 20, title: "നിങ്ങൾക്കും എഴുത്തുകാരാകാം", author: "ജൂലിയ കാസ്‌റ്റർട്ടൻ", category: "Non-Fiction", review: "എഴുതാൻ ആഗ്രഹിക്കുന്ന, ഉള്ളിൽ ഒരെഴുത്തുകാരൻ/എഴുത്തുകാരി ഉണ്ടെന്നറിയാവുന്ന, എന്നാൽ പലവിധ പ്രതിബന്ധങ്ങൾകൊണ്ട് എഴുത്ത് ഗൗരവമായെടുക്കാൻ കഴിയാതിരിക്കുന്ന, എഴുതാൻ ശ്രമിക്കുകയും അതിനാവാതെ വരികയും ചെയ്യുന്നവർക്കു വേണ്ടി... എഴുത്ത് ഉപേക്ഷിച്ച് നിശബ്ദത പാലിക്കുന്നവർക്കു വേണ്ടിയും...", cover: "https://i.pinimg.com/736x/2f/f7/7c/2ff77cc8e6cd8408c2c0112e7991bd82.jpg" },
                    { id: 21, title: "ഇമാം ബുഖാരി", author: "കെ.എ.കെ. ഫൈസി കൊട്ടപ്പുറം", category: "study", review: "ഹദീസ് സമാഹാരങ്ങളിൽ ഏറ്റവും സമഗ്രവും ആധികാരികവുമാണ് സ്വഹീഹുൽ ബുഖാരി. തിരുനബി(സ)യുടെ വചനങ്ങൾ കലർപ്പില്ലാതെ സംരക്ഷിച്ച മഹാനാണ് ഇമാം ബുഖാരി(റ). ത്യാഗോജ്വലമായ അദ്ദേഹത്തിൻ്റെ ജീവിതം ഇസ്‌ലാമിക ചരിത്രപഠനത്തിൽ തൽപരരായ ഏവരും വായിച്ചിരിക്കേണ്ട ഒന്നാണ്.", cover: "https://i.pinimg.com/736x/f4/18/39/f41839022fb82ab0f0ae7a853b2a0ed1.jpg" },
                    { id: 22, title: "ഒറ്റക്കിരുന്ന് ഒന്നുകൂടി ഓർത്തുനോക്ക്", author: "ഫൈസൽ അഹ്‌സനി ഉളിയിൽ", category: "essay", review: "അജ്ഞാത വേദനകളുടെ കാരണംകണ്ടെത്തി ചികിത്സിക്കുകയാണ് ഈ പുസ്‌തകം.വീടിനകത്ത് വിശ്രാന്തിയുടെ ഇടങ്ങൾ എങ്ങനെ കണ്ടെത്താം എന്ന ആലോചനകൾക്ക് മൗലികതയുണ്ട്. ആ നിലക്ക് വീണ്ടും വീണ്ടും പാരായണം ചെയ്യേണ്ട പുസ്‌തകമാണിത്. ഒത്തിരി പോസിറ്റീവ് എനർജി ഈ പുസ്‌തകം നമുക്ക് നൽകും. ജീവിത പ്രശ്‌നങ്ങളെ ജീവിതം വെടിഞ്ഞുകൊണ്ട് നേരിടാനാവില്ല. ജീവിച്ചുകൊണ്ടുതന്നെ നേരിടണം. ജീവിക്കാൻ പ്രേരിപ്പിക്കുന്ന പുസ്‌തകമാണിത്.", cover: "https://i.pinimg.com/736x/f0/59/fe/f059fe4723ed350d4e1616f2cf721401.jpg" },
                    { id: 23, title: "വീടുവിട്ടു പോയവർ", author: "റഹീം പൊന്നാട്", category: "poem", review: "കവിതകൾ നിരന്തരമായൊരു കലമ്പലാണ്. ഓർമകളോട്, ജീവിതത്തോട്, അനുഭവങ്ങളോട്, അനുഭൂതികളോട്, അനീതികളോട്, അക്രമങ്ങളോട്... ഭാവനകളേക്കാൾ യാഥാർഥ്യങ്ങളെ വരച്ചിടുന്നതാണ് ഈ സമാഹാരത്തിലെ കവിതകളധികവും, പ്രണയിച്ചും കലഹിച്ചും ഓർമകളയവിറക്കിയും വർത്തമാന സംഭവങ്ങളോട് പ്രതിഷേധിച്ചും ഇതിലെ ഓരോ കവിതയും നേരെ നമ്മുടെ ഹൃദയത്തിലേക്ക് കയറിപ്പോകും. വാക്കുകൾ കൊണ്ടവ നമ്മെ ചുറ്റിവരിയും. ഗൃഹാതുരത്വത്തിൻ്റെ കയങ്ങളിൽ നമ്മെ മുക്കിക്കളയും. എത്ര കുടഞ്ഞിട്ടാലും അവ കൂടെപ്പോരും.", cover: "https://i.pinimg.com/736x/5f/70/3b/5f703b44f57c8d5f2be31bc18616fa37.jpg" },
                    { id: 24, title: "ചെകുത്താനും ഒരു പെൺകിടാവും  ", author: "പൗലോ കൊയ്ലോ", category: "novel", review: "അത്യാഗ്രഹം, ഭീരുത്വം. ഭയം എന്നിവയാൽ വിഭജിക്കപ്പെട്ട ഒരു സമൂഹം. വേദനാജനകമായ ഭൂതകാലത്തിൻ്റെ പ്രേതം വേട്ടയാടുന്ന ഒരു മനുഷ്യൻ സന്തോഷം തേടി ഒരു യുവതി ഏഴ്‌ ദിവസം: നന്മയും തിന്മയും നിർണായ കമായ ഒരു യുദ്ധം നടത്തുന്ന ഒരു ചെറിയ കാലയളവ്. ഏത് പക്ഷത്തു നിലകൊള്ളും എന്ന് ഓരോ കഥാപാത്രവും തീരുമാനിക്കുന്നു. വിസ്കോസ് എന്ന ചെറിയ ഗ്രാമമാണ് ഈ അസ്വസ്ഥമായ പോരാട്ടത്തിന് വേദിയാകു ന്നത്. ഒരു വിദേശിയുടെ വരവോടെ. നഗരം മുഴുവൻ അതിലെ നിവാസിക ളുടെ ചരിത്രത്തെ എന്നെന്നേക്കുമായി അടയാളപ്പെടുത്തുന്ന ഒരു വികൃത മായ ഗൂഢാലോചനയിൽ പങ്കാളികളാകുന്നു. കാതങ്ങൾ താണ്ടി ആ വിദേശി അവിടെയെത്തിയത് തന്നെ അലട്ടിക്കൊണ്ടി രുന്ന ഒരു ചോദ്യത്തിന് ഉത്തരം തേടിയാണ് മനുഷ്യൻ യഥാർത്ഥത്തിൽ നല്ലവരോ ചെകുത്താന്മാരോ? ഒരേ സമയം വായനക്കാരെ ഉണർത്തുകയും ആകാംക്ഷാഭരിതരാക്കുകയും ചെയ്യുന്ന ചെകുത്താനും ഒരു പെൺകിടാവും' ആത്മജ്ഞാനത്തിനായുള്ള നമ്മുടെ ശാശ്വത പോരാട്ടത്തിലെ ഒരു നിമിഷം പിടിച്ചെടുക്കുന്നു. ഒരു ഘട്ടത്തിൽ നമ്മളേവരും ചിന്തിക്കാൻ മറന്ന ഒരു ചോദ്യം ചോദിച്ചുകൊണ്ട്: എന്താണ് മനുഷ്യൻ്റെ സാരാംശം?", cover: "https://i.pinimg.com/736x/d5/72/9b/d5729b9fbbe986bdfbe50a228c7238d3.jpg" },
                    
                ]
            }
        };

// --- Rendering Logic ---
function renderNews() {
    const container = document.createElement('div');
    container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in';
    
    if(state.data.news.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-12 text-gray-500">No news available.</div>`;
        return container;
    }

    state.data.news.forEach(item => {
        const imageHtml = item.image ? `<img src="${item.image}" alt="${item.title}" class="w-full h-40 object-cover rounded-lg mb-4">` : '';
        
        container.innerHTML += `
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow group flex flex-col h-full cursor-pointer" onclick="openNewsModal(${item.id})">
                ${imageHtml}
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 rounded-full ${item.bg} ${item.color} flex items-center justify-center text-xl group-hover:scale-110 transition-transform flex-shrink-0">
                        <i class="fas ${item.icon || 'fa-newspaper'}"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-gray-800 line-clamp-2 leading-tight group-hover:text-primary-600 transition-colors">${item.title}</h3>
                        <p class="text-xs text-gray-500 mt-1">${item.date} &bull; ${item.author}</p>
                    </div>
                </div>
                <p class="text-gray-600 text-sm flex-grow line-clamp-3">${item.desc}</p>
                <div class="mt-4 pt-4 border-t border-gray-50 flex justify-end">
                    <button class="text-primary-600 text-sm font-medium hover:text-primary-800 flex items-center gap-1 transition-colors">
                        Read full story <i class="fas fa-arrow-right text-xs mt-0.5"></i>
                    </button>
                </div>
            </div>
        `;
    });
    return container;
}

function renderLiteraryWorks() {
    const container = document.createElement('div');
    container.className = 'flex flex-col gap-4 fade-in';
    
    if(state.data.literary_works.length === 0) {
        container.innerHTML = `<div class="text-center py-12 text-gray-500">No literary works available.</div>`;
        return container;
    }

    state.data.literary_works.forEach(item => {
        const imageHtml = item.image ? `<img src="${item.image}" alt="${item.title}" class="w-full sm:w-40 sm:h-32 object-cover rounded-lg flex-shrink-0 shadow-sm border border-gray-100">` : '';

        container.innerHTML += `
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                ${imageHtml}
                <div class="flex-grow w-full">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="bg-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-0.5 rounded">${item.category}</span>
                        <span class="text-gray-400 text-xs"><i class="far fa-clock"></i> ${item.readTime}</span>
                    </div>
                    <h3 class="text-lg font-bold text-gray-900 mb-1 hover:text-primary-600 cursor-pointer transition-colors" onclick="openLiteraryWorkModal(${item.id})">${item.title}</h3>
                    <p class="text-gray-600 text-sm line-clamp-2">${item.desc}</p>
                    <p class="text-xs text-gray-500 mt-3 font-medium">By ${item.author} &bull; ${item.date}</p>
                </div>
                <button onclick="openLiteraryWorkModal(${item.id})" class="w-full sm:w-auto px-4 py-2 border border-primary-200 text-primary-700 rounded-lg hover:bg-primary-50 transition font-medium text-sm flex items-center justify-center gap-2 whitespace-nowrap group flex-shrink-0">
                    Read Work <i class="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                </button>
            </div>
        `;
    });
    return container;
}

function renderMagazines() {
    const container = document.createElement('div');
    container.className = 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 fade-in';
    
    if(state.data.magazines.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-12 text-gray-500">No magazines available.</div>`;
        return container;
    }

    state.data.magazines.forEach(item => {
        // Determine onclick action: if a PDF exists, open it in a new tab
        const onclickAction = item.pdf ? `onclick="window.open('${item.pdf}', '_blank')"` : `onclick="showToast('PDF not available for this issue.', 'info')"`;

        container.innerHTML += `
            <div class="group cursor-pointer" ${onclickAction}>
                <div class="relative overflow-hidden rounded-lg shadow-md mb-3 aspect-square border border-gray-200 group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                    <img src="${item.cover}" alt="${item.title}" class="w-full h-full object-cover">
                    <!-- Overlay -->
                    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                        <button class="opacity-0 group-hover:opacity-100 bg-white text-gray-900 rounded-full w-12 h-12 flex items-center justify-center transform scale-50 group-hover:scale-100 transition-all duration-300 shadow-lg">
                            <i class="fas fa-book-open"></i>
                        </button>
                    </div>
                </div>
                <h3 class="font-bold text-gray-800 text-sm line-clamp-1 group-hover:text-primary-600 transition-colors">${item.title}</h3>
                <p class="text-xs text-gray-500">${item.issue}</p>
            </div>
        `;
    });
    return container;
}

// Global function to set the library category
function setLibraryCategory(category) {
    state.activeLibraryCategory = category;
    renderContent();
}

function renderLibrary() {
    const wrapper = document.createElement('div');
    wrapper.className = 'fade-in';

    // Category Filter Buttons
    const categories = ['All', 'Study', 'Poem', 'Essay', 'Non-Fiction', 'Story', 'Novel', 'Autobiography'];
    let filterHtml = '<div class="flex flex-wrap gap-2 mb-6">';
    categories.forEach(cat => {
        const isActive = state.activeLibraryCategory === cat;
        const bgClass = isActive ? 'bg-primary-600 text-white shadow-md' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50';
        filterHtml += `<button onclick="setLibraryCategory('${cat}')" class="px-4 py-2 rounded-full text-sm font-semibold transition-all ${bgClass}">${cat}</button>`;
    });
    filterHtml += '</div>';

    // Filter the books based on the active category
    const filteredBooks = state.activeLibraryCategory === 'All' 
        ? state.data.library 
        : state.data.library.filter(b => b.category.toLowerCase() === state.activeLibraryCategory.toLowerCase());

    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6';
    
    if(filteredBooks.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-12 text-gray-500 bg-white rounded-xl border border-gray-100 shadow-sm">No books found in the "${state.activeLibraryCategory}" category.</div>`;
    } else {
        filteredBooks.forEach(item => {
            grid.innerHTML += `
                <div class="group cursor-pointer flex flex-col h-full" onclick="openBookModal(${item.id})">
                    <div class="relative overflow-hidden rounded-lg shadow-md mb-3 aspect-square border border-gray-200 group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                        <img src="${item.cover}" alt="${item.title}" class="w-full h-full object-cover">
                        <!-- Overlay -->
                        <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                            <button class="opacity-0 group-hover:opacity-100 bg-white text-gray-900 rounded-full w-12 h-12 flex items-center justify-center transform scale-50 group-hover:scale-100 transition-all duration-300 shadow-lg" title="Read Review">
                                <i class="fas fa-book-reader"></i>
                            </button>
                        </div>
                    </div>
                    <span class="text-[10px] uppercase tracking-wider font-bold text-primary-500 mb-1">${item.category}</span>
                    <h3 class="font-bold text-gray-800 text-sm line-clamp-1 group-hover:text-primary-600 transition-colors" title="${item.title}">${item.title}</h3>
                    <p class="text-xs text-gray-500 mb-2 line-clamp-1">${item.author}</p>
                    <p class="text-xs text-gray-600 italic line-clamp-2">"${item.review}"</p>
                </div>
            `;
        });
    }

    wrapper.innerHTML = filterHtml;
    wrapper.appendChild(grid);
    return wrapper;
}


// --- Core Interactions ---
function renderContent() {
    const container = document.getElementById('content-container');
    container.innerHTML = ''; // Clear current

    let contentElement;
    switch(state.activeTab) {
        case 'news': contentElement = renderNews(); break;
        case 'literary_works': contentElement = renderLiteraryWorks(); break;
        case 'magazines': contentElement = renderMagazines(); break;
        case 'library': contentElement = renderLibrary(); break;
    }
    container.appendChild(contentElement);
}

function switchTab(tabId) {
    state.activeTab = tabId;
    
    // Update button styles
    document.querySelectorAll('.tab-btn').forEach(btn => {
        if(btn.dataset.tab === tabId) {
            btn.classList.add('bg-primary-50', 'text-primary-700', 'active');
            btn.classList.remove('text-gray-500', 'hover:bg-gray-50', 'hover:text-gray-700');
        } else {
            btn.classList.remove('bg-primary-50', 'text-primary-700', 'active');
            btn.classList.add('text-gray-500', 'hover:bg-gray-50', 'hover:text-gray-700');
        }
    });

    renderContent();
}

// --- Modal Logic ---
const modal = document.getElementById('upload-modal');
const modalContent = document.getElementById('modal-content');

function openModal() {
    modal.classList.remove('hidden');
    // Slight delay to allow display:block to apply before animating opacity/transform
    setTimeout(() => {
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
    
    // Auto-select current tab in the dropdown
    document.getElementById('resource-type').value = state.activeTab;
}

function closeModal() {
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
        document.getElementById('upload-form').reset();
        document.getElementById('file-name-display').classList.add('hidden');
    }, 300); // Wait for transition
}

// Handle clicking outside modal to close
modal.addEventListener('click', (e) => {
    if(e.target === modal) closeModal();
});

// --- Book Details Modal Logic ---
const bookModal = document.getElementById('book-modal');
const bookModalContent = document.getElementById('book-modal-content');
const bookModalBody = document.getElementById('book-modal-body');

function openBookModal(id) {
    const book = state.data.library.find(b => b.id === id);
    if(!book) return;

    bookModalBody.innerHTML = `
        <div class="w-full sm:w-2/5 p-6 sm:p-8 bg-gray-50 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-gray-100">
            <img src="${book.cover}" alt="${book.title}" class="w-full max-w-[240px] aspect-square object-cover rounded-xl shadow-lg border border-gray-200">
        </div>
        <div class="w-full sm:w-3/5 p-6 sm:p-8 flex flex-col justify-center">
            <div class="mb-3">
                <span class="bg-primary-50 text-primary-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide border border-primary-100">${book.category}</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-2">${book.title}</h2>
            <p class="text-gray-500 font-medium text-lg mb-6"><i class="fas fa-user-edit mr-2 text-gray-400"></i>${book.author}</p>
            
            <div class="bg-gray-50 border-l-4 border-secondary p-5 rounded-r-xl mb-8">
                <h4 class="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2 uppercase tracking-wide"><i class="fas fa-quote-left text-secondary"></i> Our Review</h4>
                <p class="text-gray-600 italic leading-relaxed text-sm">"${book.review}"</p>
            </div>
        </div>
    `;

    bookModal.classList.remove('hidden');
    setTimeout(() => {
        bookModalContent.classList.remove('scale-95', 'opacity-0');
        bookModalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeBookModal() {
    bookModalContent.classList.remove('scale-100', 'opacity-100');
    bookModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        bookModal.classList.add('hidden');
    }, 300);
}

// --- News Details Modal Logic ---
const newsModal = document.getElementById('news-modal');
const newsModalContent = document.getElementById('news-modal-content');
const newsModalBody = document.getElementById('news-modal-body');

function openNewsModal(id) {
    const newsItem = state.data.news.find(n => n.id === id);
    if(!newsItem) return;

    const imageHtml = newsItem.image ? `<img src="${newsItem.image}" alt="${newsItem.title}" class="w-full h-64 sm:h-80 object-cover rounded-xl mb-6 shadow-sm">` : '';

    newsModalBody.innerHTML = `
        <div class="flex items-start sm:items-center gap-4 mb-6">
            <div class="w-14 h-14 rounded-full ${newsItem.bg} ${newsItem.color} flex-shrink-0 flex items-center justify-center text-2xl shadow-sm border border-gray-50">
                <i class="fas ${newsItem.icon || 'fa-newspaper'}"></i>
            </div>
            <div>
                <h2 class="text-xl sm:text-2xl font-extrabold text-gray-900 leading-tight">${newsItem.title}</h2>
                <p class="text-sm text-gray-500 mt-2 font-medium"><i class="far fa-calendar-alt mr-1"></i> ${newsItem.date} &nbsp;&bull;&nbsp; <i class="far fa-user mr-1"></i> ${newsItem.author}</p>
            </div>
        </div>
        ${imageHtml}
        <div class="text-gray-700 leading-relaxed text-[15px] sm:text-base whitespace-pre-line bg-gray-50 p-5 rounded-xl border border-gray-100">
            ${newsItem.desc}
        </div>
    `;

    newsModal.classList.remove('hidden');
    setTimeout(() => {
        newsModalContent.classList.remove('scale-95', 'opacity-0');
        newsModalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeNewsModal() {
    newsModalContent.classList.remove('scale-100', 'opacity-100');
    newsModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        newsModal.classList.add('hidden');
    }, 300);
}

// --- Literary Works Details Modal Logic ---
const literaryWorkModal = document.getElementById('literary-work-modal');
const literaryWorkModalContent = document.getElementById('literary-work-modal-content');
const literaryWorkModalBody = document.getElementById('literary-work-modal-body');

function openLiteraryWorkModal(id) {
    const work = state.data.literary_works.find(a => a.id === id);
    if(!work) return;

    const imageHtml = work.image ? `<img src="${work.image}" alt="${work.title}" class="w-full h-64 sm:h-80 object-cover rounded-xl mb-6 shadow-sm border border-gray-100">` : '';

    literaryWorkModalBody.innerHTML = `
        <div class="mb-6">
            <div class="flex items-center gap-2 mb-4">
                <span class="bg-primary-50 text-primary-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide border border-primary-100">${work.category}</span>
                <span class="text-gray-500 text-sm font-medium"><i class="far fa-clock mr-1"></i> ${work.readTime}</span>
            </div>
            <h2 class="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">${work.title}</h2>
            <p class="text-sm text-gray-500 font-medium border-b border-gray-100 pb-6"><i class="fas fa-user-edit mr-2 text-gray-400"></i>By ${work.author} &nbsp;&bull;&nbsp; <i class="far fa-calendar-alt mx-1 text-gray-400"></i>${work.date}</p>
        </div>
        ${imageHtml}
        <div class="text-gray-800 leading-relaxed text-base sm:text-lg whitespace-pre-line">
            ${work.desc}
        </div>
    `;

    literaryWorkModal.classList.remove('hidden');
    setTimeout(() => {
        literaryWorkModalContent.classList.remove('scale-95', 'opacity-0');
        literaryWorkModalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeLiteraryWorkModal() {
    literaryWorkModalContent.classList.remove('scale-100', 'opacity-100');
    literaryWorkModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        literaryWorkModal.classList.add('hidden');
    }, 300);
}

function updateFileName(input) {
    const display = document.getElementById('file-name-display');
    if(input.files && input.files[0]) {
        display.innerHTML = `<i class="fas fa-check-circle"></i> ${input.files[0].name}`;
        display.classList.remove('hidden');
    } else {
        display.classList.add('hidden');
    }
}

// --- Mobile Menu Logic ---
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const sidebar = document.getElementById('mobile-sidebar');
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        setTimeout(() => {
            sidebar.classList.remove('-translate-x-full');
        }, 10);
    } else {
        sidebar.classList.add('-translate-x-full');
        setTimeout(() => {
            menu.classList.add('hidden');
        }, 300);
    }
}

// --- Custom Toast Notification ---
function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    
    const icon = type === 'success' ? '<i class="fas fa-check-circle text-secondary"></i>' : '<i class="fas fa-info-circle text-blue-500"></i>';
    const border = type === 'success' ? 'border-secondary' : 'border-blue-500';

    toast.className = `bg-white border-l-4 ${border} shadow-lg rounded-r-md px-4 py-3 flex items-center gap-3 toast-enter min-w-[250px] pointer-events-auto`;
    toast.innerHTML = `
        <div class="text-xl">${icon}</div>
        <div class="text-sm font-medium text-gray-700">${message}</div>
    `;

    toastContainer.appendChild(toast);

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.replace('toast-enter', 'toast-exit');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --- Form Submission Logic ---
function handleUpload(event) {
    event.preventDefault();
    
    const type = document.getElementById('resource-type').value;
    const title = document.getElementById('resource-title').value;
    const author = document.getElementById('resource-author').value;
    const desc = document.getElementById('resource-desc').value;
    
    const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    // Create new item based on type
    const newItem = {
        id: Date.now(),
        title: title,
        author: author,
        date: today,
        desc: desc
    };

    // Type-specific logic
    if(type === 'news') {
        newItem.icon = "fa-bullhorn";
        newItem.color = "text-secondary";
        newItem.bg = "bg-green-50";
        state.data.news.unshift(newItem); // Add to beginning
    } else if (type === 'literary_works') {
        newItem.readTime = "1 min read";
        newItem.category = "New Contribution";
        newItem.image = `https://placehold.co/800x500/10b981/ffffff?text=${encodeURIComponent(title.substring(0,10))}`;
        state.data.literary_works.unshift(newItem);
    } else if (type === 'magazines') {
        newItem.issue = "New Release";
        newItem.cover = `https://placehold.co/500x500/1e293b/ffffff?text=${encodeURIComponent(title.substring(0,10))}`;
        newItem.pdf = ""; // Uploading real PDFs would require a backend, so this is blank by default
        state.data.magazines.unshift(newItem);
    } else if (type === 'library') {
        newItem.category = "Study"; // Defaulting new uploads to Study
        newItem.review = desc || "A newly added book recommendation.";
        newItem.cover = `https://placehold.co/500x500/ef4444/ffffff?text=${encodeURIComponent(title.substring(0,10))}`;
        state.data.library.unshift(newItem);
    }

    closeModal();
    showToast(`${title} uploaded successfully!`);
    
    // Switch to the tab where the item was uploaded and re-render
    switchTab(type);
}

// Initialize App on load
window.onload = () => {
    renderContent();
};
