document.addEventListener('DOMContentLoaded', () => {
    // Definisi anggota (nama asli/Romaji - ini adalah kunci untuk terjemahan)
    const members = [
        { name: 'Ayase Kotori', image: 'RT_Kotori.jpeg' },
        { name: 'Endo Rino', image: 'RT_Rino.jpeg' },
        { name: 'Yoshikawa Umi', image: 'RT_Umi.jpeg' },
        { name: 'Mizuno Noa', image: 'RT_Noa.jpeg' },
        { name: 'Ichihara Tsumugi', image: 'RT_Tsumugi.jpeg' },
        { name: 'Sato Rica', image: 'RT_Rica.jpeg' },
        { name: 'Katase Manaka', image: 'RT_Manaka.jpeg' },
        { name: 'Hayama Rico', image: 'RT_Rico.jpeg' },
        { name: 'Nino Fuka', image: 'RT_Fuka.jpeg' },
        { name: 'Momose Suzuna', image: 'RT_Suzuna.jpeg' },
        { name: 'Suzuno Mio', image: 'RT_Mio.jpeg' },
        { name: 'Nakamata Miki', image: 'RT_Miki.jpeg' },
        { name: 'Hashimoto Maki', image: 'RT_Maki.jpeg' },
        { name: 'Kurosawa Karen', image: 'RT_Karen.jpeg' },
        { name: 'Kato Shu', image: 'RT_Shu.jpeg' },
        { name: 'Nagase Mari', image: 'RT_Mari.jpeg' },
        { name: 'Asamiya Hinata', image: 'RT_Hinata.jpeg' },
    ];

    // --- Objek Terjemahan (Translations) ---
    const translations = {
        id: {
            pageTitle: 'Rain Tree Idola Sorter',
            mainTitle: 'Rain Tree Idola Sorter',
            chooseCategory: 'Pilih Kategori Sorter:',
            categoryGeneral: 'Umum',
            categoryVisual: 'Visual',
            categoryTalent: 'Bakat',
            categoryComedian: 'Pelawak',
            progressText: 'Proses:',
            vsText: 'VS',
            drawButton: 'Seri (Draw)',
            downloadResults: 'Unduh Hasil (Gambar)',
            shareResults: 'Bagikan',
            restartButton: 'Mulai Ulang',
            resultsGeneral: 'Member favoritmu adalah:',
            resultsTalent: 'Member paling berbakat versi kamu:',
            resultsVisual: 'Visual terbaik versi kamu:',
            resultsComedian: 'Member terlucu versi kamu:',
            senbatsuTitle: 'Buat Formasi Senbatsu',
            senbatsuSizeLabel: 'Jumlah Member dalam Formasi:',
            senbatsuSummaryTitle: 'Formasi Pilihanmu:',
            resetSenbatsuButton: 'Reset Formasi',
            alertMaxMembers: 'Jumlah member formasi sudah penuh ({maxMembers} member).',
            alertMinMembers: 'Pilih setidaknya satu member.',
            selectMemberPrompt: 'Pilih Member', // Tambahan untuk senbatsu
            noMemberSelected: 'Kosongkan Slot', // Tambahan untuk senbatsu
            noMemberSelectedInList: 'Tidak ada member yang dipilih.', // NEW
            // Terjemahan nama anggota (Romaji untuk ID)
            'Ayase Kotori': 'Ayase Kotori',
            'Endo Rino': 'Endo Rino',
            'Yoshikawa Umi': 'Yoshikawa Umi',
            'Mizuno Noa': 'Mizuno Noa',
            'Ichihara Tsumugi': 'Ichihara Tsumugi',
            'Sato Rica': 'Sato Rica',
            'Katase Manaka': 'Katase Manaka',
            'Hayama Rico': 'Hayama Rico',
            'Nino Fuka': 'Nino Fuka',
            'Momose Suzuna': 'Momose Suzuna',
            'Suzuno Mio': 'Suzuno Mio',
            'Nakamata Miki': 'Nakamata Miki',
            'Hashimoto Maki': 'Hashimoto Maki',
            'Kurosawa Karen': 'Kurosawa Karen',
            'Kato Shu': 'Kato Shu',
            'Nagase Mari': 'Nagase Mari',
            'Asamiya Hinata': 'Asamiya Hinata',
        },
        en: {
            pageTitle: 'Rain Tree Idol Sorter',
            mainTitle: 'Rain Tree Idol Sorter',
            chooseCategory: 'Choose Sorter Category:',
            categoryGeneral: 'General',
            categoryVisual: 'Visual',
            categoryTalent: 'Talent',
            categoryComedian: 'Comedian',
            progressText: 'Progress:',
            vsText: 'VS',
            drawButton: 'Draw',
            downloadResults: 'Download Results (Image)',
            shareResults: 'Share',
            restartButton: 'Restart',
            resultsGeneral: 'Your favorite member is:',
            resultsTalent: 'Your most talented member:',
            resultsVisual: 'Your best visual member:',
            resultsComedian: 'Your funniest member:',
            senbatsuTitle: 'Create Senbatsu Formation',
            senbatsuSizeLabel: 'Number of Members in Formation:',
            senbatsuSummaryTitle: 'Your Chosen Formation:',
            resetSenbatsuButton: 'Reset Formation',
            alertMaxMembers: 'Maximum formation members reached ({maxMembers} members).',
            alertMinMembers: 'Please select at least one member.',
            selectMemberPrompt: 'Select Member',
            noMemberSelected: 'Clear Slot',
            noMemberSelectedInList: 'No members selected.', // NEW
            // Terjemahan nama anggota (Romaji untuk EN)
            'Ayase Kotori': 'Ayase Kotori',
            'Endo Rino': 'Endo Rino',
            'Yoshikawa Umi': 'Yoshikawa Umi',
            'Mizuno Noa': 'Mizuno Noa',
            'Ichihara Tsumugi': 'Ichihara Tsumugi',
            'Sato Rica': 'Sato Rica',
            'Katase Manaka': 'Katase Manaka',
            'Hayama Rico': 'Hayama Rico',
            'Nino Fuka': 'Nino Fuka',
            'Momose Suzuna': 'Momose Suzuna',
            'Suzuno Mio': 'Suzuno Mio',
            'Nakamata Miki': 'Nakamata Miki',
            'Hashimoto Maki': 'Hashimoto Maki',
            'Kurosawa Karen': 'Kurosawa Karen',
            'Kato Shu': 'Kato Shu',
            'Nagase Mari': 'Nagase Mari',
            'Asamiya Hinata': 'Asamiya Hinata',
        },
        jp: {
            pageTitle: 'Rain Tree アイドルソーター',
            mainTitle: 'Rain Tree アイドルソーター',
            chooseCategory: 'ソーターカテゴリを選択してください:',
            categoryGeneral: '総合',
            categoryVisual: 'ビジュアル',
            categoryTalent: '才能',
            categoryComedian: 'おもしろい',
            progressText: '進行状況:',
            vsText: 'VS',
            drawButton: '引き分け',
            downloadResults: '結果をダウンロード (画像)',
            shareResults: '共有',
            restartButton: 'やり直す',
            resultsGeneral: 'あなたのお気に入りのメンバーは:',
            resultsTalent: 'あなたの最も才能のあるメンバー:',
            resultsVisual: 'あなたの最高のビジュアルメンバー:',
            resultsComedian: 'あなたの最も面白いメンバー:',
            senbatsuTitle: '選抜フォーメーションを作成',
            senbatsuSizeLabel: 'フォーメーション人数:',
            senbatsuSummaryTitle: 'あなたの選んだフォーメーション:',
            resetSenbatsuButton: 'フォーメーションをリセット',
            alertMaxMembers: 'フォーメーションの最大人数に達しました（{maxMembers}人）。',
            alertMinMembers: '少なくとも一人メンバーを選択してください。',
            selectMemberPrompt: 'メンバーを選択',
            noMemberSelected: 'スロットをクリア',
            noMemberSelectedInList: 'メンバーが選択されていません。', // NEW
            // Terjemahan nama anggota dalam Kanji/Kana yang benar
            'Asamiya Hinata': '朝宮日向',
            'Ayase Kotori': '綾瀬ことり',
            'Endo Rino': '遠藤莉乃',
            'Sato Rica': '佐藤莉華',
            'Suzuno Mio': '鈴野みお',
            'Nino Fuka': '新野楓果',
            'Yoshikawa Umi': '吉川海未',
            'Ichihara Tsumugi': '市原紬希',
            'Katase Manaka': '片瀬真花',
            'Kato Shu': '加藤柊',
            'Kurosawa Karen': '黒澤禾恋',
            'Nagase Mari': '永瀬真梨',
            'Nakamata Miki': '仲俣美希',
            'Hashimoto Maki': '橋本真希',
            'Hayama Rico': '葉山莉瑚',
            'Mizuno Noa': '水野乃愛',
            'Momose Suzuna': '百瀬紗菜',
        }
    };

    let currentLang = 'id'; // Bahasa default saat ini

    // --- DOM Elements Umum (yang ada di kedua halaman) ---
    const pageTitleElement = document.querySelector('title');
    const langButtons = document.querySelectorAll('.language-selector .lang-button');

    // Tambahkan event listener untuk tombol bahasa di sini, karena tombol ini ada di kedua halaman
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            setLanguage(button.dataset.lang);
        });
    });


    // --- General Functions ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function calculateTotalComparisons(n) {
        if (n <= 1) return 0;
        return (n * (n - 1)) / 2;
    }

    // --- Translation Function ---
    function setLanguage(lang) {
        console.log(`Setting language to: ${lang}`);
        currentLang = lang;
        langButtons.forEach(button => button.classList.remove('active'));
        document.querySelector(`.lang-button[data-lang="${lang}"]`)?.classList.add('active'); // Gunakan optional chaining

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            if (translations[currentLang] && translations[currentLang][key]) {
                if (element.tagName === 'TITLE') {
                    if (window.location.pathname.includes('sorter.html')) {
                        element.textContent = translations[currentLang]['pageTitle'];
                    } else if (window.location.pathname.includes('senbatsu.html')) {
                        element.textContent = translations[currentLang]['pageTitle'].replace('Idola Sorter', 'Formasi Senbatsu'); // Sesuaikan judul halaman senbatsu
                    } else {
                        element.textContent = translations[currentLang][key]; // Untuk halaman lain (misal index.html)
                    }
                } else {
                    element.textContent = translations[currentLang][key];
                }
            }
        });

        // Logika spesifik untuk halaman sorter (jika elemen-elemennya ada di DOM)
        if (window.location.pathname.includes('sorter.html')) {
            const sorterSection = document.getElementById('sorter-section');
            const idol1Card = document.getElementById('idol-1');
            const idol2Card = document.getElementById('idol-2');
            if (sorterSection && idol1Card && idol2Card) { // Pastikan elemen ada sebelum mencoba mengakses
                const idol1Name = idol1Card.querySelector('.idol-name');
                const idol2Name = idol2Card.querySelector('.idol-name');
                const resultsSection = document.getElementById('results-section');

                if (!sorterSection.classList.contains('hidden') && idol1Card.dataset.name && idol2Card.dataset.name) {
                    // Update names in battle if visible
                    if(idol1Name) idol1Name.textContent = translations[currentLang][idol1Card.dataset.name] || idol1Card.dataset.name;
                    if(idol2Name) idol2Name.textContent = translations[currentLang][idol2Card.dataset.name] || idol2Card.dataset.name;
                }
                if (resultsSection && !resultsSection.classList.contains('hidden')) {
                    updateResultsDisplay(); // Re-render results to update names
                }
                updateProgressBar();
            }
        }
        // Logika spesifik untuk halaman senbatsu (jika elemen-elemennya ada di DOM)
        else if (window.location.pathname.includes('senbatsu.html')) {
            const senbatsuFormationGrid = document.getElementById('senbatsu-formation-grid');
            if (senbatsuFormationGrid) { // Pastikan elemen ada sebelum mencoba mengakses
                // Re-render formation grid to update names
                generateFormationGrid(parseInt(document.getElementById('senbatsu-size').value));
                // updateSelectedSenbatsuDisplay(); // Ini akan dipanggil di generateFormationGrid
            }

            // Juga perbarui teks pop-up
            const popupTitle = document.querySelector('.member-selector-popup h3');
            if (popupTitle) {
                popupTitle.textContent = translations[currentLang]['selectMemberPrompt'];
            }
            // Perbarui teks opsi kosongkan slot di pop-up
            const clearOptionInPopup = document.querySelector('.member-selector-popup .member-item.clear-slot-option span');
            if (clearOptionInPopup) {
                clearOptionInPopup.textContent = translations[currentLang]['noMemberSelected'];
            }
            // Perbarui teks di bawah grid jika tidak ada member terpilih
            const noMemberSelectedInListText = document.querySelector('#members-below-grid p[data-key="noMemberSelectedInList"]');
            if (noMemberSelectedInListText) {
                noMemberSelectedInListText.textContent = translations[currentLang]['noMemberSelectedInList'];
            }
        }
    }

    // --- Logic for Sorter Page (`sorter.html`) ---
    if (window.location.pathname.includes('sorter.html')) {
        console.log("Loading Sorter Page script...");
        let currentList = [];
        let comparisonsMade = 0;
        let totalComparisons = 0;
        const comparedPairs = new Set();
        let currentCategory = ''; // Pindahkan deklarasi ke lingkup sorter

        // Dapatkan elemen DOM sorter
        const categorySelectionSection = document.getElementById('category-selection');
        const sorterSection = document.getElementById('sorter-section');
        const resultsSection = document.getElementById('results-section');
        const categoryButtons = document.querySelectorAll('.category-buttons button');
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-text');
        const idol1Card = document.getElementById('idol-1');
        const idol2Card = document.getElementById('idol-2');
        const idol1Img = idol1Card?.querySelector('img'); // Gunakan optional chaining
        const idol1Name = idol1Card?.querySelector('.idol-name'); // Gunakan optional chaining
        const idol2Img = idol2Card?.querySelector('img'); // Gunakan optional chaining
        const idol2Name = idol2Card?.querySelector('.idol-name'); // Gunakan optional chaining
        const drawButton = document.getElementById('draw-button');
        const resultsTitle = document.getElementById('results-title');
        const resultsList = document.getElementById('results-list');
        const downloadResultsButton = document.getElementById('download-results');
        const shareResultsButton = document.getElementById('share-results');
        const restartSorterButton = document.getElementById('restart-sorter');

        // Pastikan semua elemen penting ditemukan sebelum menambahkan event listener
        if (!categorySelectionSection || !sorterSection || !resultsSection || categoryButtons.length === 0 || !idol1Card || !idol2Card || !idol1Img || !idol1Name || !idol2Img || !idol2Name || !drawButton || !resultsTitle || !resultsList || !downloadResultsButton || !shareResultsButton || !restartSorterButton) {
            console.error("ERROR: One or more critical Sorter DOM elements not found. Sorter script might not function correctly.");
            // Jangan `return` di sini, biarkan script mencoba berjalan, tapi perhatikan error di konsol
        }

        function initializeSorter(category) {
            console.log(`Initializing Sorter for category: ${category}`);
            currentCategory = category;
            currentList = members.map(member => ({ ...member, wins: 0, losses: 0, draws: 0 }));
            shuffleArray(currentList);
            comparisonsMade = 0;
            totalComparisons = calculateTotalComparisons(currentList.length);
            updateProgressBar();

            if(categorySelectionSection) categorySelectionSection.classList.add('hidden');
            if(sorterSection) sorterSection.classList.remove('hidden');
            console.log("Category selection hidden, sorter section shown.");

            startNextComparison();
        }

        function updateProgressBar() {
            if (totalComparisons === 0) {
                if (progressBar) progressBar.style.width = '100%';
                if (progressText) progressText.textContent = `${translations[currentLang]['progressText']} Selesai!`;
                return;
            }
            const progressPercentage = (comparisonsMade / totalComparisons) * 100;
            if (progressBar) progressBar.style.width = `${progressPercentage}%`;
            if (progressText) progressText.textContent = `${translations[currentLang]['progressText']} ${comparisonsMade} / ${totalComparisons}`;
        }

        function getRandomUniquePair() {
            const availablePairs = [];
            for (let i = 0; i < currentList.length; i++) {
                for (let j = i + 1; j < currentList.length; j++) {
                    const pairKey1 = `${currentList[i].name}-${currentList[j].name}`;
                    const pairKey2 = `${currentList[j].name}-${currentList[i].name}`;
                    if (!comparedPairs.has(pairKey1) && !comparedPairs.has(pairKey2)) {
                        availablePairs.push([currentList[i], currentList[j]]);
                    }
                }
            }
            if (availablePairs.length > 0) {
                const randomIndex = Math.floor(Math.random() * availablePairs.length);
                const pair = availablePairs[randomIndex];
                comparedPairs.add(`${pair[0].name}-${pair[1].name}`);
                return pair;
            }
            return [null, null];
        }

        function startNextComparison() {
            if (comparisonsMade >= totalComparisons) {
                finishSorting();
                return;
            }
            const [idol1, idol2] = getRandomUniquePair();
            if (idol1 && idol2) {
                displayBattle(idol1, idol2);
            } else {
                finishSorting();
            }
        }

        function displayBattle(idol1, idol2) {
            if (!idol1Card || !idol2Card || !idol1Img || !idol1Name || !idol2Img || !idol2Name) {
                console.error("Display Battle: One or more idol elements are null, cannot display battle.");
                return;
            }
            idol1Card.dataset.name = idol1.name;
            idol1Img.src = `images/${idol1.image}`;
            idol1Name.textContent = translations[currentLang][idol1.name] || idol1.name;

            idol2Card.dataset.name = idol2.name;
            idol2Img.src = `images/${idol2.image}`;
            idol2Name.textContent = translations[currentLang][idol2.name] || idol2.name;
            console.log(`Displaying battle: ${idol1.name} VS ${idol2.name}`);
        }

        function handleChoice(winnerName) {
            const idol1 = currentList.find(m => m.name === idol1Card?.dataset.name); // Optional chaining
            const idol2 = currentList.find(m => m.name === idol2Card?.dataset.name); // Optional chaining
            if (!idol1 || !idol2) {
                console.error('Idol not found for comparison in handleChoice. Skipping...');
                return;
            }
            comparisonsMade++;
            if (winnerName === 'draw') {
                idol1.draws++;
                idol2.draws++;
            } else if (winnerName === idol1.name) {
                idol1.wins++;
                idol2.losses++;
            } else if (winnerName === idol2.name) {
                idol2.wins++;
                idol1.losses++;
            }
            updateProgressBar();
            startNextComparison();
        }

        function finishSorting() {
            if (sorterSection) sorterSection.classList.add('hidden');
            if (resultsSection) resultsSection.classList.remove('hidden');
            console.log("Sorting finished, showing results.");

            currentList.sort((a, b) => {
                if (b.wins !== a.wins) return b.wins - a.wins;
                if (b.draws !== a.draws) return b.draws - a.draws;
                return a.name.localeCompare(b.name);
            });
            updateResultsDisplay();
        }

        function updateResultsDisplay() {
            if (!resultsTitle || !resultsList) {
                console.error("Results display elements not found, cannot update results.");
                return;
            }
            let titleKey = '';
            switch (currentCategory) {
                case 'general': titleKey = 'resultsGeneral'; break;
                case 'talent': titleKey = 'resultsTalent'; break;
                case 'visual': titleKey = 'resultsVisual'; break;
                case 'comedian': titleKey = 'resultsComedian'; break;
                default: titleKey = 'resultsGeneral'; break;
            }
            resultsTitle.textContent = translations[currentLang][titleKey];

            resultsList.innerHTML = '';
            currentList.forEach((member, index) => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');
                resultItem.innerHTML = `
                    <span>${index + 1}.</span>
                    <img src="images/${member.image}" alt="${member.name}">
                    <p>${translations[currentLang][member.name] || member.name} (W:${member.wins} D:${member.draws} L:${member.losses})</p>
                `;
                resultsList.appendChild(resultItem);
            });
            console.log("Sorter results display updated.");
        }

        // --- Sorter Event Listeners ---
        categoryButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                initializeSorter(e.target.dataset.category);
            });
        });
        idol1Card?.addEventListener('click', () => handleChoice(idol1Card.dataset.name));
        idol2Card?.addEventListener('click', () => handleChoice(idol2Card.dataset.name));
        drawButton?.addEventListener('click', () => handleChoice('draw'));
        downloadResultsButton?.addEventListener('click', () => {
            if (resultsSection) {
                html2canvas(resultsSection, {
                    useCORS: true,
                    scale: 2,
                    backgroundColor: '#ffffff'
                }).then(canvas => {
                    const link = document.createElement('a');
                    link.download = `rain_tree_sorter_results_${currentLang}.png`;
                    link.href = canvas.toDataURL('image/png');
                    link.click();
                });
            } else {
                console.error("Results section not found for download.");
            }
        });
        shareResultsButton?.addEventListener('click', () => {
            if (navigator.share && resultsSection) {
                html2canvas(resultsSection, {
                    useCORS: true,
                    scale: 2,
                    backgroundColor: '#ffffff'
                }).then(canvas => {
                    canvas.toBlob(function(blob) {
                        const filesArray = [
                            new File([blob], `rain_tree_sorter_results_${currentLang}.png`, {
                                type: 'image/png',
                                lastModified: new Date().getTime()
                            })
                        ];
                        const shareText = `Lihat hasil sorting Rain Tree saya untuk kategori ${translations[currentLang][`category${currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}`]}!`;
                        navigator.share({
                            files: filesArray,
                            title: translations[currentLang]['pageTitle'],
                            text: shareText,
                            url: window.location.href,
                        }).then(() => console.log('Share successful'))
                        .catch((error) => console.log('Sharing failed', error));
                    }, 'image/png');
                });
            } else {
                alert('Fitur berbagi tidak didukung di browser ini. Anda bisa mengunduh gambar dan membagikannya secara manual.');
                console.error("Share feature not supported or results section not found.");
            }
        });
        restartSorterButton?.addEventListener('click', () => {
            if (categorySelectionSection) categorySelectionSection.classList.remove('hidden');
            if (sorterSection) sorterSection.classList.add('hidden');
            if (resultsSection) resultsSection.classList.add('hidden');
            if (resultsList) resultsList.innerHTML = '';
            comparedPairs.clear();
            updateProgressBar();
            console.log("Sorter restarted.");
        });

        // Initialize sorter specific language settings
        setLanguage('id'); // Default language for sorter page
        console.log("Sorter page script fully executed.");
    }

    // --- Logic for Senbatsu Page (`senbatsu.html`) ---
    else if (window.location.pathname.includes('senbatsu.html')) {
        console.log("Loading Senbatsu Page script...");
        let senbatsuFormation = []; // Akan menyimpan objek member di setiap slot, atau null jika kosong
        let maxSenbatsuMembers;
        let currentEditingSlotIndex = null; // Menyimpan index slot yang sedang diedit melalui pop-up

        // Dapatkan elemen DOM senbatsu
        const senbatsuSizeInput = document.getElementById('senbatsu-size');
        const senbatsuFormationGrid = document.getElementById('senbatsu-formation-grid');
        const senbatsuSummary = document.querySelector('.senbatsu-summary');
        const selectedSenbatsuList = document.getElementById('selected-senbatsu-list');
        const resetSenbatsuButton = document.getElementById('reset-senbatsu');
        const downloadSenbatsuButton = document.getElementById('download-senbatsu');
        const membersBelowGrid = document.getElementById('members-below-grid'); // NEW element

        // Pop-up elements
        const memberSelectorPopupOverlay = document.getElementById('member-selector-popup-overlay');
        const popupCloseButton = memberSelectorPopupOverlay?.querySelector('.popup-close-button');
        const memberListInPopup = memberSelectorPopupOverlay?.querySelector('.member-list');
        const popupTitle = memberSelectorPopupOverlay?.querySelector('h3');


        // Pastikan semua elemen penting ditemukan sebelum menambahkan event listener
        if (!senbatsuSizeInput || !senbatsuFormationGrid || !senbatsuSummary || !selectedSenbatsuList || !resetSenbatsuButton || !downloadSenbatsuButton || !memberSelectorPopupOverlay || !popupCloseButton || !memberListInPopup || !popupTitle || !membersBelowGrid) {
            console.error("ERROR: One or more critical Senbatsu DOM elements not found. Senbatsu script might not function correctly.");
            // Jangan `return` di sini, biarkan script mencoba berjalan, tapi perhatikan error di konsol
        } else {
             // Set initial maxSenbatsuMembers from input, hanya jika input ditemukan
            maxSenbatsuMembers = parseInt(senbatsuSizeInput.value);
            // Inisialisasi formasi dengan slot kosong
            senbatsuFormation = Array(maxSenbatsuMembers).fill(null);
        }

        function generateFormationGrid(size) {
            if (!senbatsuFormationGrid) return;
            senbatsuFormationGrid.innerHTML = ''; // Bersihkan grid sebelumnya

            if (size <= 0) {
                senbatsuFormation = [];
                updateSelectedSenbatsuDisplay(); // Juga akan mengosongkan list di bawah grid
                updateMembersBelowGrid(); // Pastikan ini juga di-update
                return;
            }

            // Pastikan senbatsuFormation memiliki ukuran yang benar dan mempertahankan member yang sudah ada
            const newFormation = Array(size).fill(null);
            for(let i=0; i < Math.min(senbatsuFormation.length, size); i++) {
                newFormation[i] = senbatsuFormation[i];
            }
            senbatsuFormation = newFormation;

            for (let i = 0; i < size; i++) {
                const slotDiv = document.createElement('div');
                slotDiv.classList.add('formation-slot');
                slotDiv.dataset.index = i; // Simpan index slot

                const memberInSlot = senbatsuFormation[i];

                if (memberInSlot) {
                    slotDiv.classList.add('filled');
                    slotDiv.innerHTML = `
                        <img src="images/${memberInSlot.image}" alt="${memberInSlot.name}">
                        <p class="member-name">${translations[currentLang][memberInSlot.name] || memberInSlot.name}</p>
                    `;
                } else {
                    slotDiv.innerHTML = `<p>${translations[currentLang]['selectMemberPrompt']}</p>`;
                }

                slotDiv.addEventListener('click', () => {
                    currentEditingSlotIndex = i; // Simpan index slot yang sedang diklik
                    showMemberSelectorPopup();
                });
                senbatsuFormationGrid.appendChild(slotDiv);
            }
            console.log("Formation grid generated with size:", size);
            updateSelectedSenbatsuDisplay(); // Update ringkasan bawah
            updateMembersBelowGrid(); // NEW: Update daftar di bawah grid
        }

        function showMemberSelectorPopup() {
            if (!memberSelectorPopupOverlay || !memberListInPopup || !popupTitle) return;

            // Perbarui judul pop-up
            popupTitle.textContent = translations[currentLang]['selectMemberPrompt'];

            memberListInPopup.innerHTML = ''; // Bersihkan daftar sebelumnya

            // Opsi untuk mengosongkan slot
            const clearOption = document.createElement('div');
            clearOption.classList.add('member-item', 'clear-slot-option');
            clearOption.innerHTML = `<img src="images/placeholder_clear.png" alt="Clear Slot"> <span>${translations[currentLang]['noMemberSelected']}</span>`; // Tambahkan gambar placeholder
            clearOption.addEventListener('click', () => {
                if (currentEditingSlotIndex !== null) {
                    senbatsuFormation[currentEditingSlotIndex] = null;
                    generateFormationGrid(maxSenbatsuMembers);
                    hideMemberSelectorPopup();
                }
            });
            memberListInPopup.appendChild(clearOption);


            // Tambahkan semua member ke pop-up
            members.forEach(member => {
                const item = document.createElement('div');
                item.classList.add('member-item');
                item.dataset.name = member.name;

                // Tandai member yang sudah terpilih di formasi (kecuali di slot yang sedang diedit)
                const isSelected = senbatsuFormation.some((selectedMember, index) =>
                    selectedMember && selectedMember.name === member.name && index !== currentEditingSlotIndex
                );
                if (isSelected) {
                    item.classList.add('selected');
                    item.style.pointerEvents = 'none'; // Nonaktifkan klik untuk member yang sudah terpilih di slot lain
                    item.style.opacity = '0.6';
                }

                item.innerHTML = `<img src="images/${member.image}" alt="${member.name}"> <span>${translations[currentLang][member.name] || member.name}</span>`;

                item.addEventListener('click', () => {
                    if (!isSelected && currentEditingSlotIndex !== null) { // Pastikan tidak memilih member yang sudah ada
                        senbatsuFormation[currentEditingSlotIndex] = member; // Isi slot dengan member yang dipilih
                        generateFormationGrid(maxSenbatsuMembers); // Regenerate grid untuk update
                        hideMemberSelectorPopup();
                    }
                });
                memberListInPopup.appendChild(item);
            });

            memberSelectorPopupOverlay.classList.add('active'); // Tampilkan pop-up
            console.log("Member selector popup shown.");
        }

        function hideMemberSelectorPopup() {
            if (memberSelectorPopupOverlay) {
                memberSelectorPopupOverlay.classList.remove('active'); // Sembunyikan pop-up
                currentEditingSlotIndex = null; // Reset index slot yang diedit
                console.log("Member selector popup hidden.");
            }
        }

        function updateSelectedSenbatsuDisplay() {
            if (!selectedSenbatsuList || !senbatsuSummary) return;

            selectedSenbatsuList.innerHTML = '';
            const filledMembers = senbatsuFormation.filter(m => m !== null);

            if (filledMembers.length > 0) {
                senbatsuSummary.classList.remove('hidden');
                // Urutkan member yang dipilih berdasarkan index di formasi
                senbatsuFormation.forEach((member, index) => { // Loop melalui senbatsuFormation agar urutan terjaga
                    if (member) { // Hanya tambahkan yang tidak null
                        const selectedItem = document.createElement('div');
                        selectedItem.classList.add('selected-member-item');
                        selectedItem.innerHTML = `
                            <img src="images/${member.image}" alt="${member.name}">
                            ${translations[currentLang][member.name] || member.name}
                        `;
                        selectedSenbatsuList.appendChild(selectedItem);
                    }
                });
            } else {
                senbatsuSummary.classList.add('hidden');
            }
            console.log("Selected senbatsu summary updated. Filled slots:", filledMembers.length);
        }

        // NEW: Fungsi untuk memperbarui daftar member di bawah grid
        function updateMembersBelowGrid() {
            if (!membersBelowGrid) return;

            membersBelowGrid.innerHTML = ''; // Bersihkan isi sebelumnya
            const filledMembers = senbatsuFormation.filter(m => m !== null);

            if (filledMembers.length > 0) {
                // Urutkan member berdasarkan index mereka di formasi
                senbatsuFormation.forEach((member, index) => {
                    if (member) {
                        const memberItem = document.createElement('div');
                        memberItem.classList.add('member-display-item');
                        memberItem.innerHTML = `
                            <img src="images/${member.image}" alt="${member.name}">
                            <span>${index + 1}. ${translations[currentLang][member.name] || member.name}</span>
                        `;
                        membersBelowGrid.appendChild(memberItem);
                    }
                });
            } else {
                membersBelowGrid.innerHTML = `<p data-key="noMemberSelectedInList">${translations[currentLang]['noMemberSelectedInList']}</p>`;
            }
            console.log("Members below grid updated.");
        }


        function resetSenbatsuFormation() {
            senbatsuFormation = Array(maxSenbatsuMembers).fill(null); // Kosongkan semua slot
            generateFormationGrid(maxSenbatsuMembers); // Regenerasi grid, yang akan memicu update lainnya
            // updateSelectedSenbatsuDisplay(); // Ini dipanggil oleh generateFormationGrid
            // updateMembersBelowGrid(); // Ini juga dipanggil oleh generateFormationGrid
            console.log("Senbatsu formation reset.");
        }

        // --- Senbatsu Event Listeners ---
        senbatsuSizeInput?.addEventListener('change', (e) => {
            const newSize = parseInt(e.target.value);
            if (!isNaN(newSize) && newSize >= 1 && newSize <= members.length) {
                maxSenbatsuMembers = newSize;
                generateFormationGrid(maxSenbatsuMembers); // Regenerasi grid dengan ukuran baru
            } else {
                e.target.value = maxSenbatsuMembers; // Reset ke nilai sebelumnya jika tidak valid
                alert(`Jumlah member harus antara 1 dan ${members.length}.`);
            }
            console.log("Senbatsu size changed to:", maxSenbatsuMembers);
        });
        resetSenbatsuButton?.addEventListener('click', resetSenbatsuFormation);

        downloadSenbatsuButton?.addEventListener('click', () => {
            if (senbatsuFormationGrid) {
                // Buat elemen sementara yang akan di-capture untuk menyatukan grid dan daftar di bawahnya
                const tempContainer = document.createElement('div');
                tempContainer.style.display = 'flex';
                tempContainer.style.flexDirection = 'column';
                tempContainer.style.alignItems = 'center';
                tempContainer.style.backgroundColor = '#ffffff'; // Pastikan background putih
                tempContainer.style.padding = '20px'; // Beri sedikit padding

                const gridClone = senbatsuFormationGrid.cloneNode(true);
                const listBelowGridClone = membersBelowGrid.cloneNode(true);

                // Hapus event listener dari clone agar tidak ada interaksi saat di-capture
                gridClone.querySelectorAll('.formation-slot').forEach(slot => {
                    slot.replaceWith(slot.cloneNode(true)); // Kloning ulang node untuk hapus event listeners
                });
                // Pastikan pesan "Pilih Member" diganti menjadi kosong jika tidak ada yang dipilih di slot kosong
                gridClone.querySelectorAll('.formation-slot:not(.filled)').forEach(slot => {
                    slot.innerHTML = ''; // Kosongkan teks "Pilih Member"
                    slot.style.border = '1px solid #ddd'; // Beri border lebih solid
                });


                tempContainer.appendChild(gridClone);
                tempContainer.appendChild(listBelowGridClone);

                document.body.appendChild(tempContainer); // Tambahkan ke DOM sementara untuk capture

                html2canvas(tempContainer, {
                    useCORS: true,
                    scale: 2,
                    backgroundColor: '#ffffff'
                }).then(canvas => {
                    const link = document.createElement('a');
                    link.download = `rain_tree_senbatsu_formation_${currentLang}.png`;
                    link.href = canvas.toDataURL('image/png');
                    link.click();
                    tempContainer.remove(); // Hapus elemen sementara
                });
            } else {
                console.error("Senbatsu formation grid not found for download.");
            }
        });


        popupCloseButton?.addEventListener('click', hideMemberSelectorPopup);
        // Sembunyikan pop-up jika mengklik di luar area pop-up
        memberSelectorPopupOverlay?.addEventListener('click', (event) => {
            if (event.target === memberSelectorPopupOverlay) {
                hideMemberSelectorPopup();
            }
        });


        // Initialize senbatsu specific language settings and render grid
        setLanguage('id'); // Default language for senbatsu page
        generateFormationGrid(parseInt(senbatsuSizeInput.value)); // Initial render of the grid
        console.log("Senbatsu page script fully executed.");
    }

    // Set initial language for any common elements (like language buttons themselves)
    // This will also trigger the page-specific setLanguage logic due to the if/else if blocks
    // Jika tidak di halaman sorter atau senbatsu (misal index.html), setLanguage akan tetap jalan untuk elemen umum.
    if (!window.location.pathname.includes('sorter.html') && !window.location.pathname.includes('senbatsu.html')) {
        setLanguage('id'); // Ini hanya akan dipanggil jika ini bukan sorter/senbatsu page (misal index.html)
    }
});
