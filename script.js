
const state = {
    activeTab: "news",
    activeLibraryCategory: "All",

    data: {
        news: [
            {
                id: 1,
                title: "📰 യൂണിറ്റിൽ ലൈബ്രെറിക്ക് തുടക്കം",
                author: "Arqam corner",
                date: "June 19, 2026",
                desc: "ജൂൺ 19 വായനാദിനവുമായി ബന്ധപ്പെട്ട് arqam unit ക്ലാസ്സിൽ ഒരു ലൈബ്രെറിക്ക് തുടക്കം കുറിച്ചു. ഉൽഘടനം hida സെക്രട്ടറി മിസ്ബാഹ് ഒറ്റപ്പാലം നിർവഹിച്ചു. വായനയുടെ ഗുണങ്ങളെപറ്റിയും അതിന്റെ പ്രാധാന്യവും വിദ്യാർത്ഥികൾക്ക് വിവരിച്ചുകൊടുത്തു. UC മുബഷിർ കുഞ്ഞിപ്പള്ളി സാന്നിധ്യം അറിയിച്ചു. ശാമിൽ കുട്ടോത്ത് സ്വാഗതവും ശാദി ഫർഹാൻ നന്ദിയും പറഞ്ഞ് പരിപാടി അവസാനിച്ചു. ലൈബ്രെറിയിൽ ഏതൊക്കെ പുസ്തകങ്ങൾ ഉണ്ടെന്ന് ലൈവായി arqamiz ൽ ലഭിക്കും.",
                color: "text-yellow-500",
                bg: "bg-yellow-50",
                image: "https://i.pinimg.com/736x/ae/38/0d/ae380d5f51bbb4ef58edcab2614b713f.jpg"
            }
        ],

        literary_works: [
            {
                id: 1,
                title: "നിഷ്കാസിതർ",
                author: "Shamil Kuttoth",
                date: "june 24, 2026",
                desc: `മരണത്തിനാർത്തി മൂത്ത്
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
മനുഷ്യരുടേതല്ലാത്ത സ്വഭാവം`,
                readTime: "5 min read",
                category: "Poem",
                image: "https://i.pinimg.com/1200x/17/0c/56/170c5630730f43cad42ea9de95fb02fe.jpg"
            },

            {
                id: 2,
                title: "فضائل محرم وخصوصياته",
                author: "shdi farhan padinjarathara",
                date: "june 25, 2026",
                desc: `مما يوضح لنا أوضح من الشمس في ضحاها أن شهر المحرم ليس مجرد شهر عادي، بل هو أحد الأشهر الحرم التي عظمها الله سبحانه وتعالى واهتم بها اهتماماً بالغاً؛ حيث قال في كتابه الكريم: {إِنَّ عِدَّةَ الشُّهُورِ عِندَ اللَّهِ اثْنَا عَشَرَ شَهْرًا فِي كِتَابِ اللَّهِ يَوْمَ خَلَقَ السَّمَاوَاتِ وَالأَرْضَ مِنْهَا أَرْبَعَةٌ حُرُمٌ}، وهذه الأربعة هي: المحرم، ورجب، وذو القعدة، وذو الحجة، ولكل شهر منها حكمة في تحريم القتال تعظيماً لحرمته.

ومن الجدير بالذكر، أن في هذا الشهر الذي يفتتح التقويم الهجري يوماً عظيم الفضل وهو "يوم عاشوراء". وإذا أمعنا النظر في تاريخنا، نجد أن هذا الشهر شهد أيضاً رحيل ثلة من علمائنا الأفاضل الذين عاشوا حياتهم مخلصين لله تعالى، ومنهم الشيخ "قرة سادات" رحمه الله وغيره. وفي المقابل، نجد أن الله تعالى قد خصّ أنبياءه الأفاضل في هذا اليوم بدرجات عليا من النصر والتمكين؛ فنجى الله فيه موسى عليه السلام وقومه الصالحين من طغيان فرعون، وجعل غرق فرعون في ذلك اليوم آية للعالمين.

وتتجلى عظمة القصة عندما نعلم أن كليم الله موسى عليه السلام كان يصوم يوم عاشوراء شكراً لله على نجاته من بطش فرعون وجنوده بعد أن عبر بنو إسرائيل البحر ويئس الكفار غرقاً. ولما قدم الرسول صلى الله عليه وسلم المدينة المنورة، سأل اليهود عن صيامهم في هذا اليوم، فأجابوا: "هذا يوم صالح، هذا يوم نجى الله بني إسرائيل من عدوهم، فصامه موسى"، فقال صلى الله عليه وسلم: "نحن أقرب إليه منكم"، فصامه وأمر بصيامه.

ففي نهاية المطاف، يعد شهر المحرم محطة إيمانية فريدة للاستعداد الروحي للمؤمن، فالوقت فيه له قيمة عظيمة، والأيام لا ينبغي أن تتشابه عند المؤمن دون زيادة في العمل الصالح. إن الحوادث التاريخية التي وقعت في هذا الشهر ليست مجرد ذكريات، بل هي عبر ثمينة تُعلمنا أن الصبر على الملمات والشدائد والمشكلات يرفع درجات المؤمن عند رب العالمين`,
                readTime: "5 min read",
                category: "Arabic article",
                image: "https://i.pinimg.com/736x/2d/4e/f5/2d4ef55e1cdf2879472f3ce83be8d1b1.jpg"
            }
        ],

        magazines: [
            {
                id: 1,
                title: "ഓർബിസ്",
                author: "Arqam unit",
                issue: "sep 2025",
                cover: "https://i.pinimg.com/736x/8b/2a/64/8b2a640d8d4e7f1691ce2540cc16b9d0.jpg",
                pdf: "https://drive.google.com/file/d/1WhHaNRtGC-TjLGDjvm3nSjPedEH8Kawm/view?usp=drive_link"
            },
            {
                id: 2,
                title: "إقرأ",
                author: "Arqam unit",
                issue: "feb 2026",
                cover: "https://i.pinimg.com/736x/c7/b4/f1/c7b4f127c878b5096c598817e3e3e369.jpg",
                pdf: "https://drive.google.com/file/d/1nNBgnbNlJeF59SLFYZFo1rhb-UKrzDJK/view?usp=drive_link"
            }
        ],

        library: [
            {
                id: 1,
                title: "ANNIHILATION OF CASTE",
                author: "Dr. B.R. AMBEDKAR",
                category: "Non-Fiction",
                review: "Unless you change your social order you can achieve little by way of progress. You cannot mobilize the community either for defence or for offence. You cannot build anything on the foundations of caste. You cannot build up a nation. You cannot build up a morality.",
                cover: "https://i.pinimg.com/736x/96/e0/b1/96e0b1c040ed1b1b33bb9f37095833f1.jpg"
            },

            {
                id: 2,
                title: "ഇടം വലം പാളുന്ന ഇടതുപക്ഷം",
                author: "കെ കെ ജോഷി",
                category: "essay",
                review: "കരുത്തുറ്റ പ്രതിപക്ഷവും തിരുത്തൽ ശക്തിയായ ഭരണമുന്നണിയുമായിരുന്ന ഇന്ത്യൻ സി പി എം ഇത്ര ഭയാനകമായി ഇല്ലാതായതിന്റെ കാരണങ്ങൾ എണ്ണിയെടുക്കുന്നു. ഇടതിനും വലതിനും ഇടയിൽ ഇടവഴികളില്ല എന്ന് തിരിച്ചറിയാതെ പോയതാണ് ഇടതുപക്ഷത്തിൻ്റെ തിരിച്ചടികൾക്ക് കാരണമെന്ന് സമർത്ഥിക്കുന്നു.",
                cover: "https://i.pinimg.com/736x/93/f8/c9/93f8c96a47088839b9f0a4380ad6f6d6.jpg"
            },

            {
                id: 3,
                title: "മുഹമ്മദ് നബി പാശ്ചാത്യചിന്തകരുടെ ദൃഷ്ടിയിൽ",
                author: "മൈക്കിൾ എച്ച്. ഹാർട്ട്",
                category: "essay",
                review: "ലോകത്ത് ഏറ്റവുമധികം സ്വാധീനം ചെലുത്തിയ നൂറ് വ്യക്തിത്വങ്ങളുടെ പട്ടികയിൽ ഒന്നാം സ്ഥാനത്തേക്ക് ഞാൻ മുഹമ്മദ് നബിയെ തെരഞ്ഞെടുത്തത് പലരെയും അമ്പരിപ്പിച്ചേക്കാം. പക്ഷേ, മതപരവും മതേതരവുമായ തലങ്ങളിൽ ചരിത്രത്തിൽ ഏറ്റവും വലിയ വിജയം നേടിയ ഏക മനുഷ്യൻ മുഹമ്മദാണ്.",
                cover: "https://i.pinimg.com/736x/7f/f5/56/7ff556eab5c11cebf5ff29bbe9360ec3.jpg"
            },

            {
                id: 4,
                title: "ഇസ്ല‌ാംബഹു സ്വരത",
                author: "ഡോ. ഉമറുൽ ഫാറൂഖ് സഖാഫി",
                category: "study",
                review: "മതകീയ ബഹുസ്വരത, സാംസ്‌കാരിക ബഹുസ്വരത, വർഗ ബഹുസ്വരത, പാരിസ്ഥിതിക ബഹുസ്വരത, നിയമ ബഹുസ്വരത, ലിംഗ ബഹുസ്വരത തുടങ്ങിയ ബഹുസ്വരതകളുടെ ഇസ്ലാമിക നിലപാടുകൾ വിശകലനം ചെയ്യുന്ന മലയാളത്തിലെ ആദ്യ പഠനം.",
                cover: "https://i.pinimg.com/736x/d7/2d/87/d72d8768c4b42df90b5c01b5855883c8.jpg"
            },

            {
                id: 5,
                title: "മുത്തുനബിയോടൊപ്പം 365 ദിനങ്ങൾ",
                author: "നൂർദാൻ ദംല",
                category: "story",
                review: "പ്രവാചക ജീവിതത്തിൻ്റെ അനശ്വര നിമിഷങ്ങൾ 365 അധ്യായങ്ങളിലായി മനോഹരമായി ആവിഷ്കരിക്കുന്ന ബൃഹദ് ഗ്രന്ഥം. പ്രമുഖ ടർക്കിഷ് എഴുത്തുകാരി നൂർദാൻ ദംലയുടെ 365 days with Prophet Muhammed പുസ്തകത്തിൻ്റെ മലയാള വിവർത്തനം.",
                cover: "https://i.pinimg.com/736x/86/ff/1e/86ff1e67cb09c1e0804ee2451a67f45c.jpg"
            },

            {
                id: 6,
                title: "ഒരു ജന്മം ഒരായിരം മരണം",
                author: "കബനി",
                category: "Essay",
                review: "ഓരോ മറുജീവിതത്തിന് പിന്നിലുമുള്ള നീറുന്ന യാഥാർത്ഥ്യങ്ങൾ സാമൂഹിക യാഥാർഥ്യങ്ങളുടെയും രാഷ്ട്രീയ യാഥാർഥ്യങ്ങളുടെയും പശ്ചാത്തലത്തിൽ വിശകലനം ചെയ്യുകയാണ് ഇതിലെ ഓരോ ലേഖനവും.",
                cover: "https://i.pinimg.com/736x/82/6b/72/826b72c19630dab9e20f9ec7a8d2e36f.jpg"
            },

            {
                id: 7,
                title: "ആസാദി",
                author: "അരുന്ധതി റോയി",
                category: "essay",
                review: "ആസാദി - സ്വാതന്ത്ര്യം. സ്വാതന്ത്ര്യത്തിനായുള്ള വിവിധ മുറവിളികളും ഉയർത്തുന്നത് ഭിന്നതയുടെ സ്വരമാണോ അതോ ഐക്യത്തിന്റേതാണോ എന്ന ചോദ്യത്തെക്കുറിച്ചുള്ള ചിന്തകൾ.",
                cover: "https://i.pinimg.com/736x/33/43/6d/33436da32330a9bda21bb5073aace222.jpg"
            },

            {
                id: 8,
                title: "ഉറക്കച്ചടവുള്ള ഓർമ്മകൾ",
                author: "പാട്രിക് മോദിയാനോ",
                category: "novel",
                review: "ഒരു കൊലപാതകത്തിൻ്റെ ചുരുൾ തേടുകയാണ് ആഖ്യാതാവ്. ജീവിതയാത്രയിൽ തൻ്റെയൊപ്പം സഞ്ചരിച്ച അനേകം സ്ത്രീകളുടെ കഥകൾ കടന്നുവരുന്നു. പാരീസിന്റെ നിഗൂഢതകൾ തുറന്നുവെയ്ക്കുന്ന ഒരു ക്ലാസിക്.",
                cover: "https://i.pinimg.com/736x/d7/b8/63/d7b863eca66a0fe41108e66e97ad7373.jpg"
            },

            {
                id: 9,
                title: "ചെമ്മീൻ",
                author: "തകഴി",
                category: "novel",
                review: "കടലോരം പാടിനടന്ന ഒരു ദുരന്തപ്രണയകഥ കേരളക്കരയാകെ അലയൊലികൊള്ളിച്ചു. ഈരേഴുകടലും കടന്ന് അതൊരു വിശ്വമഹാകാവ്യമായി.",
                cover: "https://i.pinimg.com/736x/c5/2f/d7/c52fd749bd0654db7d0fe4582d9ecb82.jpg"
            },

            {
                id: 10,
                title: "മുഖദ്ദിമത്തുസ്സുന്ന:ആദർശ പഠനം",
                author: "അഫ്‌സൽ സഖാഫി ചെറുമോത്ത്",
                category: "study",
                review: "ആദർശ വിഷയങ്ങളിൽ അടിസ്‌ഥാനപരമായി അറിയേണ്ട കാര്യങ്ങളെക്കുറിച്ചുള്ള ലളിതമായ രചനാ രീതി ഈ കൃതിയെ നിങ്ങൾക്ക് ഏറ്റവും പ്രിയപ്പെട്ടതാക്കുന്നു.",
                cover: "https://i.pinimg.com/736x/a8/7b/fd/a87bfdf1fce2ae07fa476a196890bcf9.jpg"
            },

            {
                id: 11,
                title: "ഉമറുൽ ഫാറൂഖ്(റ)",
                author: "സൈഫുദ്ദീൻ വാഫി അരീക്കോട്",
                category: "story",
                review: "ജയിക്കാൻ ജനിച്ചവരായിരുന്നു ഉമർ (റ). നീതിയും ധർമവുമായിരുന്നു മുഖമുദ്ര. വിശുദ്ധ ഖുർആൻ്റെ ദിവ്യപ്രകാശം കണ്ട് ഇസ്‌ലാമിലേക്കു വിരുന്നുവന്ന ധീരസ്വഹാബിയുടെ ഇതിഹാസ ജീവിതം.",
                cover: "https://i.pinimg.com/736x/49/08/10/49081047fff79fea2251630fb1e25e57.jpg"
            },

            {
                id: 12,
                title: "ഹൃദയം തൊട്ട പൂവ്",
                author: "സലാഹുദ്ധീൻ പരപ്പനങ്ങാടി",
                category: "poem",
                review: "നമ്മിലെ ആന്തരികമായ ഒരച്ചുടക്കത്തിന്റെ നാമമാണ് മുത്ത് നബി. അത്രമേൽ സുന്ദരമായ ജീവിതത്തിന്റെ വഴിയോരങ്ങളെ വരച്ചിടാൻ ശ്രമിക്കുകയാണിവിടം.",
                cover: "https://i.pinimg.com/736x/c8/80/52/c88052837d30a3431c2cfa11825b368a.jpg"
            },

            {
                id: 13,
                title: "തിരുനബി ജന്മ വിശേഷങ്ങൾ",
                author: "കെ.സി.സ്വാദിഖലി",
                category: "Study",
                review: "തിരുനബി (സ) ലോകോണ്മക്ക് നിദാനം അള്ളാഹുവും മാലാഖമാരും പ്രപഞ്ചമാകെയും അവിടുത്തെ അപദാനങ്ങൾ വാഴ്ത്തിക്കൊണ്ടേയിരിക്കുന്നു. തിരുനബിയുടെ പ്രകാശം, പിറവി കുടുംബമഹിമ, മക്കയിലായതിൻ്റെ പ്രാധാന്യം തുടങ്ങിയവയുടെ ഹൃസ്വവും സമഗ്രവുമായ പഠനമാണിത്.",
                cover: "https://i.pinimg.com/736x/01/e5/e8/01e5e82f85143a5e0754edc0e53fd0f8.jpg"
            },

            {
                id: 14,
                title: "തിരുനബിയുടെ കത്തുകൾ",
                author: "എ.കെ.അബ്‌ദുൽ മജീദ്",
                category: "study",
                review: "ഇസ്ലാമിക സന്ദേശത്തിൻ്റെ പ്രചരണാർത്ഥം സമകാലീനരായ രാജാക്കന്മാർക്കും ഗോത്രപ്രമുഖന്മാർക്കും ജനപദങ്ങൾക്കും പ്രവാചകൻ ദൂതുകൾ അയക്കുകയുണ്ടായി.",
                cover: "https://i.pinimg.com/736x/4d/43/1b/4d431b9e113cb2e9429562d74a82ac06.jpg"
            },

            {
                id: 15,
                title: "ലോകൈക ഗുരു",
                author: "മുഹമ്മദ് അനസ് അമാനി",
                category: "study",
                review: "നന്മ ചെയ്യണം, പക്ഷേ മിതത്വം വേണം. ധർമം ചെയ്യണം, പക്ഷേ കുടുംബത്തെ അനാഥരാക്കരുത്. തിരുദൂതരുടെ കാരുണ്യം നിറഞ്ഞ അധ്യാപനങ്ങൾ ലോകമിപ്പോഴും പകർത്തുന്നു.",
                cover: "https://i.pinimg.com/736x/4f/23/2a/4f232a40a0df4367d9c9cb495d3bd449.jpg"
            },

            {
                id: 16,
                title: "രചനയും സൗന്ദര്യവും",
                author: "പി എ നാസിമുദ്ദീൻ",
                category: "Non-Fiction",
                review: "ഒരു എഴുത്തുകാരന് ഏറ്റവും ആവശ്യമുള്ള ഒന്നാണ് ഭാഷയിലുള്ള വൈദഗ്‌ധ്യം. ഭാഷയുടെ അടിസ്ഥാന ഘടകം വാക്കാണ്.",
                cover: "https://i.pinimg.com/736x/4b/b8/51/4bb851dba0ef3eec3303985129031e48.jpg"
            },

            {
                id: 17,
                title: "ഇസ്ലാമിക് ഫൈനാൻസ് പ്രയോഗവും കർമശാസ്ത്രവും",
                author: "ഫൈസൽ നിയാസ് ഹുദവി",
                category: "study",
                review: "ഇസ്‌ലാമിക് ഫൈനാൻസ് ഉൽപന്നങ്ങളും സേവനങ്ങളും ശരീഅ അനുസൃതമാണെന്ന് ഉറപ്പുവരുത്തൽ മുസ്‌ലിമിന്റെ ബാധ്യതയാണ്.",
                cover: "https://i.pinimg.com/736x/92/4b/11/924b119f7bd6569697abf0ed6edf71b3.jpg"
            },

            {
                id: 18,
                title: "മൗദൂദിസം",
                author: "",
                category: "study",
                review: "മത നവീകരണ പ്രസ്ഥാനങ്ങളുടെ ഉള്ളുകള്ളികൾ തുറന്നുകാട്ടുന്ന സംശയാലുക്കളുടെ സംശയങ്ങൾക്ക് അളന്ന് മുറിച്ചുള്ള മറുപടികൾ നൽകുന്ന പഠനാർഹമായ ഒരു കൃതി.",
                cover: "https://i.pinimg.com/736x/a9/9b/40/a99b40c3cbf2b08343fb33cf0c6761e2.jpg"
            },

            {
                id: 19,
                title: "നവോത്ഥാനം:അട്ടിമറികൾ, ആൾമാറാട്ടങ്ങൾ",
                author: "മുഹമ്മദലി കിനാലൂർ",
                category: "Study",
                review: "കേരളത്തിൽ ഹിന്ദു, മുസ്‌ലിം സമുദായങ്ങളിലുണ്ടായ നവോത്ഥാനത്തിന്റെ സ്വഭാവം എന്തായിരുന്നു? ആരായിരുന്നു അതിൻ്റെ യഥാർത്ഥ നായകർ?",
                cover: "https://i.pinimg.com/736x/69/77/1b/69771b2415b834b67425fbde1966b3b0.jpg"
            },

            {
                id: 20,
                title: "നിങ്ങൾക്കും എഴുത്തുകാരാകാം",
                author: "ജൂലിയ കാസ്‌റ്റർട്ടൻ",
                category: "Non-Fiction",
                review: "എഴുതാൻ ആഗ്രഹിക്കുന്ന, ഉള്ളിൽ ഒരെഴുത്തുകാരൻ/എഴുത്തുകാരി ഉണ്ടെന്നറിയാവുന്ന, എന്നാൽ പലവിധ പ്രതിബന്ധങ്ങൾകൊണ്ട് എഴുത്ത് ഗൗരവമായെടുക്കാൻ കഴിയാതിരിക്കുന്നവർക്കു വേണ്ടി.",
                cover: "https://i.pinimg.com/736x/2f/f7/7c/2ff77cc8e6cd8408c2c0112e7991bd82.jpg"
            },

            {
                id: 21,
                title: "ഇമാം ബുഖാരി",
                author: "കെ.എ.കെ. ഫൈസി കൊട്ടപ്പുറം",
                category: "study",
                review: "ഹദീസ് സമാഹാരങ്ങളിൽ ഏറ്റവും സമഗ്രവും ആധികാരികവുമാണ് സ്വഹീഹുൽ ബുഖാരി. തിരുനബി(സ)യുടെ വചനങ്ങൾ കലർപ്പില്ലാതെ സംരക്ഷിച്ച മഹാനാണ് ഇമാം ബുഖാരി(റ).",
                cover: "https://i.pinimg.com/736x/f4/18/39/f41839022fb82ab0f0ae7a853b2a0ed1.jpg"
            },

            {
                id: 22,
                title: "ഒറ്റക്കിരുന്ന് ഒന്നുകൂടി ഓർത്തുനോക്ക്",
                author: "ഫൈസൽ അഹ്‌സനി ഉളിയിൽ",
                category: "essay",
                review: "അജ്ഞാത വേദനകളുടെ കാരണം കണ്ടെത്തി ചികിത്സിക്കുകയാണ് ഈ പുസ്‌തകം. വീടിനകത്ത് വിശ്രാന്തിയുടെ ഇടങ്ങൾ എങ്ങനെ കണ്ടെത്താം എന്ന ആലോചനകൾക്ക് മൗലികതയുണ്ട്.",
                cover: "https://i.pinimg.com/736x/f0/59/fe/f059fe4723ed350d4e1616f2cf721401.jpg"
            },

            {
                id: 23,
                title: "വീടുവിട്ടു പോയവർ",
                author: "റഹീം പൊന്നാട്",
                category: "poem",
                review: "കവിതകൾ നിരന്തരമായൊരു കലമ്പലാണ്. ഓർമകളോട്, ജീവിതത്തോട്, അനുഭവങ്ങളോട്, അനുഭൂതികളോട്, അനീതികളോട്, അക്രമങ്ങളോട്...",
                cover: "https://i.pinimg.com/736x/5f/70/3b/5f703b44f57c8d5f2be31bc18616fa37.jpg"
            },

            {
                id: 24,
                title: "ചെകുത്താനും ഒരു പെൺകിടാവും",
                author: "പൗലോ കൊയ്ലോ",
                category: "novel",
                review: "അത്യാഗ്രഹം, ഭീരുത്വം, ഭയം എന്നിവയാൽ വിഭജിക്കപ്പെട്ട ഒരു സമൂഹം. വേദനാജനകമായ ഭൂതകാലത്തിൻ്റെ പ്രേതം വേട്ടയാടുന്ന ഒരു മനുഷ്യൻ സന്തോഷം തേടി ഒരു യുവതി ഏഴ് ദിവസം.",
                cover: "https://i.pinimg.com/736x/d5/72/9b/d5729b9fbbe986bdfbe50a228c7238d3.jpg"
            }
        ]
    }
};


// ============================================================
// Rendering
// ============================================================

function renderNews() {
    const container = document.createElement("div");

    container.className =
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in";

    if (state.data.news.length === 0) {
        container.innerHTML =
            `<div class="col-span-full text-center py-12 text-gray-500">
                No news available.
            </div>`;

        return container;
    }

    state.data.news.forEach(item => {
        const imageHtml = item.image
            ? `<img src="${item.image}"
                    alt="${item.title}"
                    class="w-full h-40 object-cover rounded-lg mb-4">`
            : "";

        container.innerHTML += `
            <div class="bg-white rounded-xl shadow-sm border border-primary-200
                        hover:border-primary-400 p-6 hover:shadow-md transition-all
                        group flex flex-col h-full cursor-pointer"
                 onclick="openNewsModal(${item.id})">

                ${imageHtml}

                <div class="flex items-center gap-4 mb-4">

                    <div class="w-12 h-12 rounded-full ${item.bg} ${item.color}
                                flex items-center justify-center text-xl
                                group-hover:scale-110 transition-transform flex-shrink-0">

                        <i class="fas ${item.icon || "fa-newspaper"}"></i>

                    </div>

                    <div>
                        <h3 class="font-bold text-gray-800 line-clamp-2 leading-tight
                                   group-hover:text-primary-600 transition-colors">
                            ${item.title}
                        </h3>

                        <p class="text-xs text-gray-500 mt-1">
                            ${item.date} &bull; ${item.author}
                        </p>
                    </div>
                </div>

                <p class="text-gray-600 text-sm flex-grow line-clamp-3">
                    ${item.desc}
                </p>

                <div class="mt-4 pt-4 border-t border-gray-50 flex justify-end">
                    <button class="text-primary-600 text-sm font-medium
                                   hover:text-primary-800 flex items-center gap-1">
                        Read full story
                        <i class="fas fa-arrow-right text-xs"></i>
                    </button>
                </div>

            </div>
        `;
    });

    return container;
}


function renderLiteraryWorks() {
    const container = document.createElement("div");

    container.className = "flex flex-col gap-4 fade-in";

    if (state.data.literary_works.length === 0) {
        container.innerHTML =
            `<div class="text-center py-12 text-gray-500">
                No literary works available.
            </div>`;

        return container;
    }

    state.data.literary_works.forEach(item => {

        const imageHtml = item.image
            ? `<img src="${item.image}"
                    alt="${item.title}"
                    class="w-full sm:w-40 sm:h-32 object-cover
                           rounded-lg flex-shrink-0 shadow-sm border border-gray-100">`
            : "";

        container.innerHTML += `
            <div class="bg-white rounded-xl shadow-sm border border-primary-200
                        hover:border-primary-400 p-5 hover:shadow-md
                        transition-all flex flex-col sm:flex-row gap-5
                        items-start sm:items-center">

                ${imageHtml}

                <div class="flex-grow w-full">

                    <div class="flex items-center gap-2 mb-2">

                        <span class="bg-gray-100 text-gray-600 text-xs
                                     font-semibold px-2.5 py-0.5 rounded">
                            ${item.category}
                        </span>

                        <span class="text-gray-400 text-xs">
                            <i class="far fa-clock"></i>
                            ${item.readTime}
                        </span>

                    </div>

                    <h3 class="text-lg font-bold text-gray-900 mb-1
                               hover:text-primary-600 cursor-pointer"
                        onclick="openLiteraryWorkModal(${item.id})">
                        ${item.title}
                    </h3>

                    <p class="text-gray-600 text-sm line-clamp-2">
                        ${item.desc}
                    </p>

                    <p class="text-xs text-gray-500 mt-3 font-medium">
                        By ${item.author} &bull; ${item.date}
                    </p>

                </div>

                <button onclick="openLiteraryWorkModal(${item.id})"
                        class="w-full sm:w-auto px-4 py-2 border border-primary-200
                               text-primary-700 rounded-lg hover:bg-primary-50
                               transition font-medium text-sm flex items-center
                               justify-center gap-2 whitespace-nowrap">

                    Read Work
                    <i class="fas fa-arrow-right text-xs"></i>

                </button>

            </div>
        `;
    });

    return container;
}


function renderMagazines() {
    const container = document.createElement("div");

    container.className =
        "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 fade-in";

    if (state.data.magazines.length === 0) {
        container.innerHTML =
            `<div class="col-span-full text-center py-12 text-gray-500">
                No magazines available.
            </div>`;

        return container;
    }

    state.data.magazines.forEach(item => {

        const onclickAction = item.pdf
            ? `onclick="window.open('${item.pdf}', '_blank')"`
            : `onclick="showToast('PDF not available for this issue.', 'info')"`;

        container.innerHTML += `
            <div class="group cursor-pointer" ${onclickAction}>

                <div class="relative overflow-hidden rounded-lg shadow-md mb-3
                            aspect-square border border-gray-200
                            group-hover:shadow-xl transition-all duration-300
                            transform group-hover:-translate-y-1">

                    <img src="${item.cover}"
                         alt="${item.title}"
                         class="w-full h-full object-cover">

                    <div class="absolute inset-0 bg-black bg-opacity-0
                                group-hover:bg-opacity-40 transition-all
                                duration-300 flex items-center justify-center">

                        <button class="opacity-0 group-hover:opacity-100
                                       bg-white text-gray-900 rounded-full
                                       w-12 h-12 flex items-center justify-center
                                       transform scale-50 group-hover:scale-100
                                       transition-all duration-300 shadow-lg">

                            <i class="fas fa-book-open"></i>

                        </button>
                    </div>
                </div>

                <h3 class="font-bold text-gray-800 text-sm line-clamp-1
                           group-hover:text-primary-600">
                    ${item.title}
                </h3>

                <p class="text-xs text-gray-500">
                    ${item.issue}
                </p>

            </div>
        `;
    });

    return container;
}


// ============================================================
// Library
// ============================================================

function setLibraryCategory(category) {
    state.activeLibraryCategory = category;
    renderContent();
}


function renderLibrary() {

    const wrapper = document.createElement("div");
    wrapper.className = "fade-in";

    const categories = [
        "All",
        "Study",
        "Poem",
        "Essay",
        "Non-Fiction",
        "Story",
        "Novel",
        "Autobiography"
    ];

    let filterHtml =
        `<div class="flex flex-wrap gap-2 mb-6">`;

    categories.forEach(category => {

        const isActive =
            state.activeLibraryCategory.toLowerCase() ===
            category.toLowerCase();

        const bgClass = isActive
            ? "bg-primary-600 text-white shadow-md"
            : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50";

        filterHtml += `
            <button
                onclick="setLibraryCategory('${category}')"
                class="px-4 py-2 rounded-full text-sm font-semibold
                       transition-all ${bgClass}">
                ${category}
            </button>
        `;
    });

    filterHtml += `</div>`;

    const filteredBooks =
        state.activeLibraryCategory === "All"
            ? state.data.library
            : state.data.library.filter(book =>
                book.category.toLowerCase() ===
                state.activeLibraryCategory.toLowerCase()
            );

    const grid = document.createElement("div");

    grid.className =
        "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6";

    if (filteredBooks.length === 0) {

        grid.innerHTML = `
            <div class="col-span-full text-center py-12
                        text-gray-500 bg-white rounded-xl
                        border border-gray-100 shadow-sm">

                No books found in the
                "${state.activeLibraryCategory}" category.

            </div>
        `;

    } else {

        filteredBooks.forEach(item => {

            grid.innerHTML += `
                <div class="group cursor-pointer flex flex-col h-full"
                     onclick="openBookModal(${item.id})">

                    <div class="relative overflow-hidden rounded-lg shadow-md
                                mb-3 aspect-square border border-gray-200
                                group-hover:shadow-xl transition-all duration-300
                                transform group-hover:-translate-y-1">

                        <img src="${item.cover}"
                             alt="${item.title}"
                             class="w-full h-full object-cover">

                        <div class="absolute inset-0 bg-black bg-opacity-0
                                    group-hover:bg-opacity-40 transition-all
                                    duration-300 flex items-center justify-center">

                            <button
                                class="opacity-0 group-hover:opacity-100
                                       bg-white text-gray-900 rounded-full
                                       w-12 h-12 flex items-center justify-center
                                       transform scale-50 group-hover:scale-100
                                       transition-all duration-300 shadow-lg">

                                <i class="fas fa-book-reader"></i>

                            </button>

                        </div>

                    </div>

                    <span class="text-[10px] uppercase tracking-wider
                                 font-bold text-primary-500 mb-1">
                        ${item.category}
                    </span>

                    <h3 class="font-bold text-gray-800 text-sm line-clamp-1
                               group-hover:text-primary-600"
                        title="${item.title}">
                        ${item.title}
                    </h3>

                    <p class="text-xs text-gray-500 mb-2 line-clamp-1">
                        ${item.author}
                    </p>

                    <p class="text-xs text-gray-600 italic line-clamp-2">
                        "${item.review}"
                    </p>

                </div>
            `;
        });
    }

    wrapper.innerHTML = filterHtml;
    wrapper.appendChild(grid);

    return wrapper;
}


function renderContent() {

    const container =
        document.getElementById("content-container");

    if (!container) return;

    container.innerHTML = "";

    let contentElement;

    switch (state.activeTab) {

        case "news":
            contentElement = renderNews();
            break;

        case "literary_works":
            contentElement = renderLiteraryWorks();
            break;

        case "magazines":
            contentElement = renderMagazines();
            break;

        case "library":
            contentElement = renderLibrary();
            break;

        default:
            contentElement = renderNews();
    }

    container.appendChild(contentElement);
}


function switchTab(tabId) {

    state.activeTab = tabId;

    document.querySelectorAll(".tab-btn").forEach(btn => {

        if (btn.dataset.tab === tabId) {

            btn.classList.add(
                "bg-primary-50",
                "text-primary-700",
                "active"
            );

            btn.classList.remove(
                "text-gray-500",
                "hover:bg-gray-50",
                "hover:text-gray-700"
            );

        } else {

            btn.classList.remove(
                "bg-primary-50",
                "text-primary-700",
                "active"
            );

            btn.classList.add(
                "text-gray-500",
                "hover:bg-gray-50",
                "hover:text-gray-700"
            );
        }
    });

    renderContent();
}


const modal = document.getElementById("upload-modal");
const modalContent = document.getElementById("modal-content");


function openModal() {

    if (!modal || !modalContent) return;

    modal.classList.remove("hidden");

    setTimeout(() => {

        modalContent.classList.remove(
            "scale-95",
            "opacity-0"
        );

        modalContent.classList.add(
            "scale-100",
            "opacity-100"
        );

    }, 10);

    const resourceType =
        document.getElementById("resource-type");

    if (resourceType) {
        resourceType.value = state.activeTab;
    }
}


function closeModal() {

    if (!modal || !modalContent) return;

    modalContent.classList.remove(
        "scale-100",
        "opacity-100"
    );

    modalContent.classList.add(
        "scale-95",
        "opacity-0"
    );

    setTimeout(() => {

        modal.classList.add("hidden");

        const form =
            document.getElementById("upload-form");

        const fileDisplay =
            document.getElementById("file-name-display");

        if (form) form.reset();

        if (fileDisplay) {
            fileDisplay.classList.add("hidden");
        }

    }, 300);
}


if (modal) {

    modal.addEventListener("click", event => {

        if (event.target === modal) {
            closeModal();
        }

    });
}



const bookModal =
    document.getElementById("book-modal");

const bookModalContent =
    document.getElementById("book-modal-content");

const bookModalBody =
    document.getElementById("book-modal-body");


function openBookModal(id) {

    const book =
        state.data.library.find(item => item.id === id);

    if (!book || !bookModal) return;

    bookModalBody.innerHTML = `

        <div class="w-full sm:w-2/5 p-6 sm:p-8 bg-gray-50
                    flex items-center justify-center
                    border-b sm:border-b-0 sm:border-r border-gray-100">

            <img src="${book.cover}"
                 alt="${book.title}"
                 class="w-full max-w-[240px] aspect-square
                        object-cover rounded-xl shadow-lg
                        border border-gray-200">

        </div>

        <div class="w-full sm:w-3/5 p-6 sm:p-8
                    flex flex-col justify-center">

            <div class="mb-3">

                <span class="bg-primary-50 text-primary-700
                             text-xs font-bold px-3 py-1
                             rounded-full uppercase tracking-wide
                             border border-primary-100">

                    ${book.category}

                </span>

            </div>

            <h2 class="text-2xl sm:text-3xl font-extrabold
                       text-gray-900 leading-tight mb-2">

                ${book.title}

            </h2>

            <p class="text-gray-500 font-medium text-lg mb-6">

                <i class="fas fa-user-edit mr-2 text-gray-400"></i>
                ${book.author}

            </p>

            <div class="bg-gray-50 border-l-4 border-secondary
                        p-5 rounded-r-xl mb-8">

                <h4 class="text-sm font-bold text-gray-700 mb-2
                           flex items-center gap-2 uppercase tracking-wide">

                    <i class="fas fa-quote-left text-secondary"></i>
                    Our Review

                </h4>

                <p class="text-gray-600 italic leading-relaxed text-sm">
                    "${book.review}"
                </p>

            </div>

        </div>
    `;

    bookModal.classList.remove("hidden");

    setTimeout(() => {

        bookModalContent.classList.remove(
            "scale-95",
            "opacity-0"
        );

        bookModalContent.classList.add(
            "scale-100",
            "opacity-100"
        );

    }, 10);
}


function closeBookModal() {

    if (!bookModal) return;

    bookModalContent.classList.remove(
        "scale-100",
        "opacity-100"
    );

    bookModalContent.classList.add(
        "scale-95",
        "opacity-0"
    );

    setTimeout(() => {
        bookModal.classList.add("hidden");
    }, 300);
}



const newsModal =
    document.getElementById("news-modal");

const newsModalContent =
    document.getElementById("news-modal-content");

const newsModalBody =
    document.getElementById("news-modal-body");


function openNewsModal(id) {

    const newsItem =
        state.data.news.find(item => item.id === id);

    if (!newsItem || !newsModal) return;

    const imageHtml = newsItem.image
        ? `
            <img src="${newsItem.image}"
                 alt="${newsItem.title}"
                 class="w-full h-64 sm:h-80 object-cover
                        rounded-xl mb-6 shadow-sm">
          `
        : "";

    newsModalBody.innerHTML = `

        <div class="flex items-start sm:items-center
                    gap-4 mb-6">

            <div class="w-14 h-14 rounded-full
                        ${newsItem.bg} ${newsItem.color}
                        flex-shrink-0 flex items-center
                        justify-center text-2xl shadow-sm
                        border border-gray-50">

                <i class="fas ${newsItem.icon || "fa-newspaper"}"></i>

            </div>

            <div>

                <h2 class="text-xl sm:text-2xl font-extrabold
                           text-gray-900 leading-tight">

                    ${newsItem.title}

                </h2>

                <p class="text-sm text-gray-500 mt-2 font-medium">

                    <i class="far fa-calendar-alt mr-1"></i>
                    ${newsItem.date}

                    &nbsp;&bull;&nbsp;

                    <i class="far fa-user mr-1"></i>
                    ${newsItem.author}

                </p>

            </div>

        </div>

        ${imageHtml}

        <div class="text-gray-700 leading-relaxed
                    text-[15px] sm:text-base
                    whitespace-pre-line bg-gray-50
                    p-5 rounded-xl border border-gray-100">

            ${newsItem.desc}

        </div>
    `;

    newsModal.classList.remove("hidden");

    setTimeout(() => {

        newsModalContent.classList.remove(
            "scale-95",
            "opacity-0"
        );

        newsModalContent.classList.add(
            "scale-100",
            "opacity-100"
        );

    }, 10);
}


function closeNewsModal() {

    if (!newsModal) return;

    newsModalContent.classList.remove(
        "scale-100",
        "opacity-100"
    );

    newsModalContent.classList.add(
        "scale-95",
        "opacity-0"
    );

    setTimeout(() => {
        newsModal.classList.add("hidden");
    }, 300);
}


const literaryWorkModal =
    document.getElementById("literary-work-modal");

const literaryWorkModalContent =
    document.getElementById("literary-work-modal-content");

const literaryWorkModalBody =
    document.getElementById("literary-work-modal-body");


function openLiteraryWorkModal(id) {

    const work =
        state.data.literary_works.find(item => item.id === id);

    if (!work || !literaryWorkModal) return;

    const imageHtml = work.image
        ? `
            <img src="${work.image}"
                 alt="${work.title}"
                 class="w-full h-64 sm:h-80 object-cover
                        rounded-xl mb-6 shadow-sm
                        border border-gray-100">
          `
        : "";

    literaryWorkModalBody.innerHTML = `

        <div class="mb-6">

            <div class="flex items-center gap-2 mb-4">

                <span class="bg-primary-50 text-primary-700
                             text-xs font-bold px-3 py-1
                             rounded-full uppercase tracking-wide
                             border border-primary-100">

                    ${work.category}

                </span>

                <span class="text-gray-500 text-sm font-medium">

                    <i class="far fa-clock mr-1"></i>
                    ${work.readTime}

                </span>

            </div>

            <h2 class="text-2xl sm:text-4xl font-extrabold
                       text-gray-900 leading-tight mb-4">

                ${work.title}

            </h2>

            <p class="text-sm text-gray-500 font-medium
                      border-b border-gray-100 pb-6">

                <i class="fas fa-user-edit mr-2 text-gray-400"></i>
                By ${work.author}

                &nbsp;&bull;&nbsp;

                <i class="far fa-calendar-alt mx-1 text-gray-400"></i>
                ${work.date}

            </p>

        </div>

        ${imageHtml}

        <div class="text-gray-800 leading-relaxed
                    text-base sm:text-lg whitespace-pre-line">

            ${work.desc}

        </div>
    `;

    literaryWorkModal.classList.remove("hidden");

    setTimeout(() => {

        literaryWorkModalContent.classList.remove(
            "scale-95",
            "opacity-0"
        );

        literaryWorkModalContent.classList.add(
            "scale-100",
            "opacity-100"
        );

    }, 10);
}


function closeLiteraryWorkModal() {

    if (!literaryWorkModal) return;

    literaryWorkModalContent.classList.remove(
        "scale-100",
        "opacity-100"
    );

    literaryWorkModalContent.classList.add(
        "scale-95",
        "opacity-0"
    );

    setTimeout(() => {
        literaryWorkModal.classList.add("hidden");
    }, 300);
}



function updateFileName(input) {

    const display =
        document.getElementById("file-name-display");

    if (!display) return;

    if (input.files && input.files[0]) {

        display.innerHTML = `
            <i class="fas fa-check-circle"></i>
            ${input.files[0].name}
        `;

        display.classList.remove("hidden");

    } else {

        display.classList.add("hidden");

    }
}


function toggleMobileMenu() {

    const menu =
        document.getElementById("mobile-menu");

    const sidebar =
        document.getElementById("mobile-sidebar");

    if (!menu || !sidebar) return;

    if (menu.classList.contains("hidden")) {

        menu.classList.remove("hidden");

        setTimeout(() => {
            sidebar.classList.remove("-translate-x-full");
        }, 10);

    } else {

        sidebar.classList.add("-translate-x-full");

        setTimeout(() => {
            menu.classList.add("hidden");
        }, 300);
    }
}



function showToast(message, type = "success") {

    const toastContainer =
        document.getElementById("toast-container");

    if (!toastContainer) return;

    const toast =
        document.createElement("div");

    const icon =
        type === "success"
            ? `<i class="fas fa-check-circle text-secondary"></i>`
            : `<i class="fas fa-info-circle text-blue-500"></i>`;

    const border =
        type === "success"
            ? "border-secondary"
            : "border-blue-500";

    toast.className = `
        bg-white border-l-4 ${border}
        shadow-lg rounded-r-md px-4 py-3
        flex items-center gap-3 toast-enter
        min-w-[250px] pointer-events-auto
    `;

    toast.innerHTML = `
        <div class="text-xl">${icon}</div>

        <div class="text-sm font-medium text-gray-700">
            ${message}
        </div>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {

        toast.classList.replace(
            "toast-enter",
            "toast-exit"
        );

        setTimeout(() => {
            toast.remove();
        }, 300);

    }, 3000);
}



function handleUpload(event) {

    event.preventDefault();

    const type =
        document.getElementById("resource-type").value;

    const title =
        document.getElementById("resource-title").value.trim();

    const author =
        document.getElementById("resource-author").value.trim();

    const desc =
        document.getElementById("resource-desc").value.trim();

    const today =
        new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
        });

    const newItem = {
        id: Date.now(),
        title,
        author,
        date: today,
        desc
    };


    if (type === "news") {

        newItem.icon = "fa-bullhorn";
        newItem.color = "text-secondary";
        newItem.bg = "bg-green-50";

        state.data.news.unshift(newItem);

    }


    else if (type === "literary_works") {

        newItem.readTime = "1 min read";
        newItem.category = "New Contribution";

        newItem.image =
            `https://placehold.co/800x500/10b981/ffffff?text=${
                encodeURIComponent(title.substring(0, 10))
            }`;

        state.data.literary_works.unshift(newItem);

    }


    else if (type === "magazines") {

        newItem.issue = "New Release";

        newItem.cover =
            `https://placehold.co/500x500/1e293b/ffffff?text=${
                encodeURIComponent(title.substring(0, 10))
            }`;

        newItem.pdf = "";

        state.data.magazines.unshift(newItem);

    }


    else if (type === "library") {

        newItem.category = "Study";

        newItem.review =
            desc || "A newly added book recommendation.";

        newItem.cover =
            `https://placehold.co/500x500/ef4444/ffffff?text=${
                encodeURIComponent(title.substring(0, 10))
            }`;

        state.data.library.unshift(newItem);
    }


    closeModal();

    showToast(
        `${title} uploaded successfully!`
    );

    switchTab(type);
}


let currentSlide = 0;

const totalSlides = 2;

let slideInterval;


function updateCarousel() {

    const carousel =
        document.getElementById("hero-carousel");

    const indicators =
        document.querySelectorAll(".indicator");

    if (carousel) {

        carousel.style.transform =
            `translateX(-${currentSlide * 100}%)`;
    }

    if (indicators.length > 0) {

        indicators.forEach((indicator, index) => {

            if (index === currentSlide) {

                indicator.classList.remove(
                    "bg-white/50",
                    "hover:bg-white/80"
                );

                indicator.classList.add(
                    "bg-white"
                );

            } else {

                indicator.classList.remove(
                    "bg-white"
                );

                indicator.classList.add(
                    "bg-white/50",
                    "hover:bg-white/80"
                );
            }
        });
    }
}


function nextSlide() {

    currentSlide =
        (currentSlide + 1) % totalSlides;

    updateCarousel();

    resetInterval();
}


function prevSlide() {

    currentSlide =
        (currentSlide - 1 + totalSlides) %
        totalSlides;

    updateCarousel();

    resetInterval();
}


function goToSlide(index) {

    currentSlide = index;

    updateCarousel();

    resetInterval();
}


function resetInterval() {

    clearInterval(slideInterval);

    slideInterval =
        setInterval(nextSlide, 6000);
}


let touchStartX = 0;
let touchEndX = 0;

const heroHeader =
    document.querySelector("header");


if (heroHeader) {

    heroHeader.addEventListener(
        "touchstart",
        event => {

            touchStartX =
                event.changedTouches[0].screenX;

            clearInterval(slideInterval);

        },
        { passive: true }
    );


    heroHeader.addEventListener(
        "touchend",
        event => {

            touchEndX =
                event.changedTouches[0].screenX;

            handleSwipe();

            resetInterval();

        },
        { passive: true }
    );
}


function handleSwipe() {

    if (touchEndX < touchStartX - 50) {
        nextSlide();
    }

    if (touchEndX > touchStartX + 50) {
        prevSlide();
    }
}



let starsEnabled = true;


function createStars() {

    const numStars = 50;

    const body = document.body;

    for (let i = 0; i < numStars; i++) {
        spawnStar(body);
    }
}


function spawnStar(container) {

    if (!starsEnabled) return;

    const star =
        document.createElement("div");

    star.className = "star";

    star.innerHTML = "★";

    const startPosX =
        Math.random() * window.innerWidth;

    const size =
        Math.random() * 10 + 5;

    const duration =
        Math.random() * 5 + 5;

    const delay =
        Math.random() * 5;

    star.style.left =
        `${startPosX}px`;

    star.style.fontSize =
        `${size}px`;

    star.style.animationDuration =
        `${duration}s`;

    star.style.animationDelay =
        `${delay}s`;

    container.appendChild(star);


    star.addEventListener(
        "animationend",
        function respawn() {

            star.remove();

            if (starsEnabled) {
                spawnStar(container);
            }
        }
    );
}


function stopStars() {

    starsEnabled = false;

    const stars =
        document.querySelectorAll(".star");

    stars.forEach(star => {

        star.style.animationPlayState = "running";

        star.addEventListener(
            "animationend",
            () => star.remove(),
            { once: true }
        );
    });
}




document.addEventListener("keydown", event => {

    if (event.key !== "Escape") return;

    if (
        modal &&
        !modal.classList.contains("hidden")
    ) {
        closeModal();
    }

    if (
        bookModal &&
        !bookModal.classList.contains("hidden")
    ) {
        closeBookModal();
    }

    if (
        newsModal &&
        !newsModal.classList.contains("hidden")
    ) {
        closeNewsModal();
    }

    if (
        literaryWorkModal &&
        !literaryWorkModal.classList.contains("hidden")
    ) {
        closeLiteraryWorkModal();
    }

});



window.addEventListener("load", () => {

    renderContent();

    createStars();

    setTimeout(() => {
        stopStars();
    }, 30000);

    setTimeout(() => {
        resetInterval();
    }, 1000);

    updateCarousel();
});
