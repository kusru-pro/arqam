// State Management
const state = {
    activeTab: 'news',
    activeLibraryCategory: 'All', // Added category state
    data: {
        news: [
            { id: 1, title: "📰 യൂണിറ്റിൽ   ലൈബ്രെറിക്ക് തുടക്കം ", author: "arqam corner", date: "june 19, 2026", desc: "ജൂൺ 19 വായനാദിനവുമായി ബന്ധപ്പെട്ട് arqam unit ക്ലാസ്സിൽ ഒരു ലൈബ്രെറിക്ക് തുടക്കം കുറിച്ചു .ഉൽഘടനം hida സെക്രട്ടറി മിസ്ബാഹ് ഒറ്റപ്പാലം നിർവഹിച്ചു.വായനയുടെ ഗുണങ്ങളെപറ്റിയും അതിന്റെ പ്രാധാന്യങ്ങളും വിദ്യാർത്ഥികൾക്ക് വിവരിച്ചുകൊടുത്തു.സാനിദ്യം അറിയിക്കാൻ uc മുബഷിർ കുഞ്ഞിപ്പള്ളിയും പങ്കെടുത്തു.ശാമിൽ കൊട്ടോത് സ്വാഗതവും ശാദി ഫർഹാൻ നന്ദിയും പറഞ്ഞു.ലൈബ്രെറിയിൽ ഏതൊക്കെ പുസ്തകങ്ങൾ ഉണ്ടെന്ന് ലൈവായി arqamiz ൽ ലഭിക്കും  ", color: "text-yellow-500", bg: "bg-yellow-50", image: "https://i.pinimg.com/736x/ae/38/0d/ae380d5f51bbb4ef58edcab2614b713f.jpg" },
           
      literaryworks: [
            { id: 1, title: "ഇസ്ലാമിന്റെ സന്ദേശവും മൂല്യങ്ങളും", author: "amenn cheruveri", date: "May 28, 2026", desc: `ഇസ്ലാം ലോകത്തിലെ പ്രധാന മതങ്ങളിൽ ഒന്നാണ്. ഇസ്ലാം എന്ന പദത്തിന് സമർപ്പണം, സമാധാനം എന്നിങ്ങനെ അർത്ഥങ്ങളുണ്ട്. അല്ലാഹുവിന് പൂർണ്ണമായി കീഴടങ്ങി ജീവിക്കുന്ന ജീവിതരീതിയാണ് ഇസ്ലാം പഠിപ്പിക്കുന്നത്. പ്രവാചകൻ മുഹമ്മദ് നബി (സ) ആണ് ഇസ്ലാമിന്റെ അവസാന ദൂതൻ. വിശുദ്ധ ഖുർആൻ ഇസ്ലാമിന്റെ പ്രധാന ഗ്രന്ഥമാണ്.

ഇസ്ലാം മനുഷ്യരെ സത്യസന്ധത, നീതി, കരുണ, സഹോദരത്വം എന്നിവ പാലിക്കാൻ പ്രേരിപ്പിക്കുന്നു. എല്ലാ മനുഷ്യരും തുല്യരാണെന്നും ജാതി, വർഗം, ഭാഷ എന്നിവയുടെ അടിസ്ഥാനത്തിൽ വിവേചനം പാടില്ലെന്നും ഇസ്ലാം പഠിപ്പിക്കുന്നു. ദരിദ്രരെയും അനാഥരെയും സഹായിക്കാനും സമൂഹത്തിൽ സമാധാനവും സൗഹാർദ്ദവും നിലനിർത്താനും ഇസ്ലാം പ്രാധാന്യം നൽകുന്നു.

ഇസ്ലാമിന്റെ അഞ്ച് അടിസ്ഥാന തൂണുകൾ ഷഹാദത്ത് (വിശ്വാസപ്രഖ്യാപനം), നമസ്കാരം, സകാത്ത്, റമദാൻ നോമ്പ്, ഹജ്ജ് എന്നിവയാണ്. ഈ കർമ്മങ്ങൾ മുസ്ലിംകളുടെ ആത്മീയ വളർച്ചയ്ക്കും സാമൂഹിക ഉത്തരവാദിത്തബോധത്തിനും സഹായിക്കുന്നു.

ലോകമെമ്പാടുമുള്ള കോടിക്കണക്കിന് ആളുകൾ ഇസ്ലാം മതം പിന്തുടരുന്നു. സമാധാനവും ധാർമ്മികതയും മനുഷ്യസ്നേഹവും പ്രോത്സാഹിപ്പിക്കുന്ന മതമാണ് ഇസ്ലാം. മനുഷ്യരുടെ ഈ ലോകജീവിതവും പരലോക വിജയവും ലക്ഷ്യമാക്കി ഒരു സമഗ്ര ജീവിത മാർഗ്ഗമാണ് ഇസ്ലാം.

ഉപസംഹാരം:
സത്യവും നീതിയും കരുണയും അടിസ്ഥാനമാക്കിയുള്ള ജീവിതം നയിക്കാൻ മനുഷ്യരെ പ്രേരിപ്പിക്കുന്ന മഹത്തായ മതമാണ് ഇസ്ലാം. സമൂഹത്തിൽ സമാധാനവും ഐക്യവും വളർത്തുന്നതിൽ ഇസ്ലാമിന്റെ ഉപദേശങ്ങൾ വലിയ പങ്കുവഹിക്കുന്നു.`, readTime: "5 min read", category: "Academics" }
        ],
        magazines: [
            { id: 1, title: "ഓർബിസ് ", author: "Arqam unit", issue: "sep 2025", cover: "https://i.pinimg.com/736x/8b/2a/64/8b2a640d8d4e7f1691ce2540cc16b9d0.jpg", pdf: "https://drive.google.com/file/d/1WhHaNRtGC-TjLGDjvm3nSjPedEH8Kawm/view?usp=drive_link" },
            { id: 2, title: "إقرأ", author: "Arqam unit", issue: "feb 2026", cover: "blob:https://in.pinterest.com/23008812-a5a4-4245-8a70-6ef335ef32a5", pdf: "https://drive.google.com/file/d/1nNBgnbNlJeF59SLFYZFo1rhb-UKrzDJK/view?usp=drive_link" },
        ],
        library: [
            { id: 1, title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", category: "Non-Fiction", review: "An enthralling and thought-provoking look at the history of our species.", cover: "https://drive.google.com/file/d/1R6SWnQ0rxWh7w4N41mbigZXE90Vab9mP/view?usp=sharing" },
            { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt, David Thomas", category: "Study", review: "Filled with practical advice and timeless wisdom for software developers.", cover: "https://m.media-amazon.com/images/I/71VStSjZmpL._AC_UF1000,1000_QL80_.jpg" },
            { id: 3, title: "Atomic Habits", author: "James Clear", category: "Study", review: "Practical strategies for forming good habits, breaking bad ones, and mastering tiny behaviors.", cover: "https://m.media-amazon.com/images/I/817HaeblezL.jpg" },
            { id: 4, title: "A Brief History of Time", author: "Stephen Hawking", category: "Non-Fiction", review: "A landmark volume in science writing by one of the great minds of our time.", cover: "https://m.media-amazon.com/images/I/71J+UnZdfdS._UF1000,1000_QL80_.jpg" },
            { id: 5, title: "Leaves of Grass", author: "Walt Whitman", category: "Poem", review: "A classic and definitive collection of American poetry.", cover: "https://placehold.co/500x500/10b981/ffffff?text=Leaves+of+Grass" },
            { id: 6, title: "Self-Reliance", author: "Ralph Waldo Emerson", category: "Essay", review: "A profound essay on the importance of individualism and self-trust.", cover: "https://placehold.co/500x500/8b5cf6/ffffff?text=Self-Reliance" },
            { id: 7, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Novel", review: "A tragic story of the Jazz Age and the American Dream.", cover: "https://placehold.co/500x500/f59e0b/ffffff?text=Great+Gatsby" },
            { id: 8, title: "Aesop's Fables", author: "Aesop", category: "Story", review: "A timeless collection of moral tales and fables.", cover: "https://placehold.co/500x500/3b82f6/ffffff?text=Aesop's+Fables" },
            { id: 9, title: "The Diary of a Young Girl", author: "Anne Frank", category: "Autobiography", review: "The poignant and powerful diary of a young Jewish girl during WWII.", cover: "https://placehold.co/500x500/ec4899/ffffff?text=Anne+Frank" },
            { id: 10,title: "hksdfkwyugkufyfgfyef",  author: "ameen", category: "Autobiography", review: "The poignant and powerful diary of a young Jewish girl during WWII.", cover: "https://placehold.co/500x500/ec4899/ffffff?text=Anne+Frank" },
            { id: 11, title: "To Kill a Mockingbird", author: "Harper Lee", category: "Novel", review: "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice.", cover: "https://placehold.co/500x500/3b82f6/ffffff?text=Mockingbird" },
            { id: 12, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", category: "Non-Fiction", review: "The renowned psychologist's explanation of the two systems that drive the way we think.", cover: "https://placehold.co/500x500/10b981/ffffff?text=Thinking" },
            { id: 13, title: "Deep Work", author: "Cal Newport", category: "Study", review: "Rules for focused success in a distracted world.", cover: "https://placehold.co/500x500/6366f1/ffffff?text=Deep+Work" },
            { id: 14, title: "The Waste Land", author: "T.S. Eliot", category: "Poem", review: "One of the most important poems of the 20th century.", cover: "https://placehold.co/500x500/8b5cf6/ffffff?text=Waste+Land" },
            { id: 15, title: "A Room of One's Own", author: "Virginia Woolf", category: "Essay", review: "A brilliant essay investigating both the history of women in literature and the conditions required for creating art.", cover: "https://placehold.co/500x500/ec4899/ffffff?text=A+Room" },
            { id: 16, title: "The Metamorphosis", author: "Franz Kafka", category: "Story", review: "A novella telling the story of salesman Gregor Samsa who wakes one morning to find himself inexplicably transformed into a huge insect.", cover: "https://placehold.co/500x500/f59e0b/ffffff?text=Metamorphosis" },
            { id: 17, title: "Long Walk to Freedom", author: "Nelson Mandela", category: "Autobiography", review: "The exhilarating story of an epic life; a story of hardship, resilience, and ultimate triumph.", cover: "https://placehold.co/500x500/ef4444/ffffff?text=Mandela" },
            { id: 18, title: "1984", author: "George Orwell", category: "Novel", review: "Among the seminal texts of the 20th century, 1984 is a rare work that grows more haunting as its futuristic purgatory becomes more real.", cover: "https://placehold.co/500x500/64748b/ffffff?text=1984" },
            { id: 19, title: "Make It Stick", author: "Peter C. Brown", category: "Study", review: "The science of successful learning.", cover: "https://placehold.co/500x500/14b8a6/ffffff?text=Make+It+Stick" },
            { id: 20, title: "Guns, Germs, and Steel", author: "Jared Diamond", category: "Non-Fiction", review: "A short history of everybody for the last 13,000 years.", cover: "https://placehold.co/500x500/84cc16/ffffff?text=Guns+Germs" },
            { id: 21, title: "Ariel", author: "Sylvia Plath", category: "Poem", review: "A collection of poetry that is both brilliant and devastating.", cover: "https://placehold.co/500x500/f43f5e/ffffff?text=Ariel" },
            { id: 22, title: "Notes of a Native Son", author: "James Baldwin", category: "Essay", review: "A collection of essays tackling issues of race in America and Europe.", cover: "https://placehold.co/500x500/d946ef/ffffff?text=Native+Son" },
            { id: 23, title: "Dubliners", author: "James Joyce", category: "Story", review: "A collection of fifteen short stories presenting a naturalistic depiction of Irish middle class life.", cover: "https://placehold.co/500x500/0ea5e9/ffffff?text=Dubliners" },
            { id: 24, title: "I Know Why the Caged Bird Sings", author: "Maya Angelou", category: "Autobiography", review: "A poetic and powerful memoir capturing the struggles and triumphs of the author's early years.", cover: "https://placehold.co/500x500/f97316/ffffff?text=Caged+Bird" },
            { id: 25, title: "Pride and Prejudice", author: "Jane Austen", category: "Novel", review: "A classic romance novel dealing with issues of manners, upbringing, and morality.", cover: "https://placehold.co/500x500/eab308/ffffff?text=Pride" },
            { id: 26, title: "How to Read a Book", author: "Mortimer J. Adler", category: "Study", review: "The classic guide to intelligent reading.", cover: "https://placehold.co/500x500/06b6d4/ffffff?text=How+to+Read" },
            { id: 27, title: "The Wright Brothers", author: "David McCullough", category: "Non-Fiction", review: "The dramatic story-behind-the-story about the courageous brothers who taught the world how to fly.", cover: "https://placehold.co/500x500/3b82f6/ffffff?text=Wright+Bros" },
            { id: 28, title: "The Sun and Her Flowers", author: "Rupi Kaur", category: "Poem", review: "A vibrant and transcendent journey about growth and healing.", cover: "https://placehold.co/500x500/fbbf24/ffffff?text=Sun+Flowers" },
            { id: 29, title: "Slouching Towards Bethlehem", author: "Joan Didion", category: "Essay", review: "An essential collection of essays exploring the mood of America in the 1960s.", cover: "https://placehold.co/500x500/94a3b8/ffffff?text=Slouching" },
            { id: 30, title: "Tenth of December", author: "George Saunders", category: "Story", review: "A brilliant collection of short stories touching on the human condition.", cover: "https://placehold.co/500x500/a855f7/ffffff?text=Tenth+of+Dec" },
            { id: 31, title: "abc", author: "abc", category: "Story", review: "A brilliant collection of short stories touching on the human condition.", cover: "https://placehold.co/500x500/a855f7/ffffff?text=Tenth+of+Dec" }
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

function renderArticles() {
    const container = document.createElement('div');
    container.className = 'flex flex-col gap-4 fade-in';
    
    if(state.data.articles.length === 0) {
        container.innerHTML = `<div class="text-center py-12 text-gray-500">No articles available.</div>`;
        return container;
    }

    state.data.articles.forEach(item => {
        container.innerHTML += `
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                <div class="flex-grow">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="bg-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-0.5 rounded">${item.category}</span>
                        <span class="text-gray-400 text-xs"><i class="far fa-clock"></i> ${item.readTime}</span>
                    </div>
                    <h3 class="text-lg font-bold text-gray-900 mb-1 hover:text-primary-600 cursor-pointer transition-colors" onclick="openArticleModal(${item.id})">${item.title}</h3>
                    <p class="text-gray-600 text-sm line-clamp-2">${item.desc}</p>
                    <p class="text-xs text-gray-500 mt-3 font-medium">By ${item.author} &bull; ${item.date}</p>
                </div>
                <button onclick="openArticleModal(${item.id})" class="w-full sm:w-auto px-4 py-2 border border-primary-200 text-primary-700 rounded-lg hover:bg-primary-50 transition font-medium text-sm flex items-center justify-center gap-2 whitespace-nowrap group">
                    Read Article <i class="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
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
        case 'articles': contentElement = renderArticles(); break;
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

// --- Article Details Modal Logic ---
const articleModal = document.getElementById('article-modal');
const articleModalContent = document.getElementById('article-modal-content');
const articleModalBody = document.getElementById('article-modal-body');

function openArticleModal(id) {
    const article = state.data.articles.find(a => a.id === id);
    if(!article) return;

    articleModalBody.innerHTML = `
        <div class="mb-6">
            <div class="flex items-center gap-2 mb-4">
                <span class="bg-primary-50 text-primary-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide border border-primary-100">${article.category}</span>
                <span class="text-gray-500 text-sm font-medium"><i class="far fa-clock mr-1"></i> ${article.readTime}</span>
            </div>
            <h2 class="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">${article.title}</h2>
            <p class="text-sm text-gray-500 font-medium border-b border-gray-100 pb-6"><i class="fas fa-user-edit mr-2 text-gray-400"></i>By ${article.author} &nbsp;&bull;&nbsp; <i class="far fa-calendar-alt mx-1 text-gray-400"></i>${article.date}</p>
        </div>
        <div class="text-gray-800 leading-relaxed text-base sm:text-lg whitespace-pre-line">
            ${article.desc}
        </div>
    `;

    articleModal.classList.remove('hidden');
    setTimeout(() => {
        articleModalContent.classList.remove('scale-95', 'opacity-0');
        articleModalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeArticleModal() {
    articleModalContent.classList.remove('scale-100', 'opacity-100');
    articleModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        articleModal.classList.add('hidden');
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
    } else if (type === 'articles') {
        newItem.readTime = "1 min read";
        newItem.category = "New Contribution";
        state.data.articles.unshift(newItem);
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
