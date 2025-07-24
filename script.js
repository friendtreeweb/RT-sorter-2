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
            navSorter: 'Sorter Idola',
            navSenbatsu: 'Formasi Senbatsu',
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
            navSorter: 'Idol Sorter',
            navSenbatsu: 'Senbatsu Formation',
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
            navSorter: 'アイドルソーター',
            navSenbatsu: '選抜フォーメーション',
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

    // --- DOM Elements ---
    const pageTitleElement = document.querySelector('title');
    const langButtons = document.querySelectorAll('.language-selector .lang-button');
    const navButtons = document.querySelectorAll('.navigation-menu .nav-button');
    const flowSections = document.querySelectorAll('.flow-section');

    // Sorter Section Elements
    const sorterFlow = document.getElementById('sorter-flow');
    const categorySelectionSection = document.getElementById('category-selection');
    const sorterSection = document.getElementById('sorter-section');
    const resultsSection = document.getElementById('results-section');
    const categoryButtons = document.querySelectorAll('.category-buttons button');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const idol1Card = document.getElementById('idol-1');
    // PERBAIKAN: Menghapus duplikasi 'document ='
    const idol2Card = document.getElementById('idol-2');
    const idol1Img = idol1Card.querySelector('img');
    const idol1Name = idol1Card.querySelector('.idol-name');
    const idol2Img = idol2Card.querySelector('img');
    const idol2Name = idol2Card.querySelector('.idol-name');
    const drawButton = document.getElementById('draw-button');
    const resultsTitle = document.getElementById('results-title');
    const resultsList = document.getElementById('results-list');
    const downloadResultsButton = document.getElementById('download-results');
    const shareResultsButton = document.getElementById('share-results');
    const restartSorterButton = document.getElementById('restart-sorter');

    // Senbatsu Section Elements
    const senbatsuFlow = document.getElementById('senbatsu-flow');
    const senbatsuSizeInput = document.getElementById('senbatsu-size');
    const senbatsuMembersGrid = document.querySelector('.senbatsu-members-grid');
    const senbatsuSummary = document.querySelector('.senbatsu-summary');
    const selectedSenbatsuList = document.getElementById('selected-senbatsu-list');
    const resetSenbatsuButton = document.getElementById('reset-senbatsu');

    // --- Sorter Variables ---
    let currentList = [];
    let currentIndex = 0;
    let comparisonsMade = 0;
    let totalComparisons = 0;
    let currentCategory = '';
    const comparedPairs = new Set(); // Untuk melacak pasangan yang sudah dibandingkan

    // --- Senbatsu Variables ---
    let selectedSenbatsuMembers = [];
    let maxSenbatsuMembers = parseInt(senbatsuSizeInput.value);


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
        currentLang = lang;
        langButtons.forEach(button => button.classList.remove('active'));
        document.querySelector(`.lang-button[data-lang="${lang}"]`).classList.add('active');

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            if (translations[currentLang] && translations[currentLang][key]) {
                if (element.tagName === 'TITLE') {
                    element.textContent = translations[currentLang][key];
                } else {
                    element.textContent = translations[currentLang][key];
                }
            }
        });

        // Update dynamic text in Sorter Section
        if (!sorterSection.classList.contains('hidden') && idol1Card.dataset.name && idol2Card.dataset.name) {
             idol1Name.textContent = translations[currentLang][idol1Card.dataset.name] || idol1Card.dataset.name;
             idol2Name.textContent = translations[currentLang][idol2Card.dataset.name] || idol2Card.dataset.name;
        }

        // Update dynamic text in Senbatsu Section
        if (!senbatsuFlow.classList.contains('hidden')) {
            renderSenbatsuMembersGrid(); // Re-render grid to update names
            updateSelectedSenbatsuDisplay(); // Update selected names
        }

        if (!resultsSection.classList.contains('hidden')) {
            updateResultsDisplay();
        }

        updateProgressBar(); // Update progress text with current language
    }

    // --- Navigation Functions ---
    function showFlow(flowId) {
        flowSections.forEach(section => {
            section.classList.add('hidden');
        });
        document.getElementById(flowId).classList.remove('hidden');

        navButtons.forEach(button => {
            if (button.dataset.target === flowId) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        // Reset sorter state if navigating away
        if (flowId !== 'sorter-flow') {
            categorySelectionSection.classList.remove('hidden');
            sorterSection.classList.add('hidden');
            resultsSection.classList.add('hidden');
            comparedPairs.clear(); // Clear sorter state
        }
        // Reset senbatsu state if navigating away
        if (flowId !== 'senbatsu-flow') {
            resetSenbatsuFormation();
        }
    }

    // --- Sorter Functions ---
    function initializeSorter(category) {
        currentCategory = category;
        currentList = members.map(member => ({ ...member, wins: 0, losses: 0, draws: 0 }));
        shuffleArray(currentList);
        currentIndex = 0;
        comparisonsMade = 0;
        totalComparisons = calculateTotalComparisons(currentList.length);
        updateProgressBar();

        categorySelectionSection.classList.add('hidden');
        sorterSection.classList.remove('hidden');

        startNextComparison();
    }

    function updateProgressBar() {
        if (totalComparisons === 0) {
            progressBar.style.width = '100%';
            progressText.textContent = `${translations[currentLang]['progressText']} Selesai!`;
            return;
        }
        const progressPercentage = (comparisonsMade / totalComparisons) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        progressText.textContent = `${translations[currentLang]['progressText']} ${comparisonsMade} / ${totalComparisons}`;
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
        idol1Card.dataset.name = idol1.name;
        idol1Img.src = `images/${idol1.image}`;
        idol1Name.textContent = translations[currentLang][idol1.name] || idol1.name;

        idol2Card.dataset.name = idol2.name;
        idol2Img.src = `images/${idol2.image}`;
        idol2Name.textContent = translations[currentLang][idol2.name] || idol2.name;
    }

    function handleChoice(winnerName) {
        const idol1 = currentList.find(m => m.name === idol1Card.dataset.name);
        const idol2 = currentList.find(m => m.name === idol2Card.dataset.name);
        if (!idol1 || !idol2) {
            console.error('Idol not found for comparison.');
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
        sorterSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');

        currentList.sort((a, b) => {
            if (b.wins !== a.wins) return b.wins - a.wins;
            if (b.draws !== a.draws) return b.draws - a.draws;
            return a.name.localeCompare(b.name);
        });
        updateResultsDisplay();
    }

    function updateResultsDisplay() {
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
    }

    // --- Senbatsu Formation Functions ---
    function renderSenbatsuMembersGrid() {
        senbatsuMembersGrid.innerHTML = ''; // Clear previous grid
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('senbatsu-member-card');
            memberCard.dataset.name = member.name;

            const isSelected = selectedSenbatsuMembers.some(m => m.name === member.name);
            if (isSelected) {
                memberCard.classList.add('selected');
            }

            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <p class="member-name">${translations[currentLang][member.name] || member.name}</p>
            `;
            memberCard.addEventListener('click', () => toggleMemberSelection(member));
            senbatsuMembersGrid.appendChild(memberCard);
        });
    }

    function toggleMemberSelection(member) {
        const memberCard = senbatsuMembersGrid.querySelector(`[data-name="${member.name}"]`);
        const index = selectedSenbatsuMembers.findIndex(m => m.name === member.name);

        if (index === -1) {
            // Member not selected, try to add
            if (selectedSenbatsuMembers.length < maxSenbatsuMembers) {
                selectedSenbatsuMembers.push(member);
                memberCard.classList.add('selected');
            } else {
                alert(translations[currentLang]['alertMaxMembers'].replace('{maxMembers}', maxSenbatsuMembers));
            }
        } else {
            // Member is selected, remove it
            selectedSenbatsuMembers.splice(index, 1);
            memberCard.classList.remove('selected');
        }
        updateSelectedSenbatsuDisplay();
    }

    function updateSelectedSenbatsuDisplay() {
        selectedSenbatsuList.innerHTML = ''; // Clear previous list
        if (selectedSenbatsuMembers.length > 0) {
            senbatsuSummary.classList.remove('hidden');
            selectedSenbatsuMembers.forEach(member => {
                const selectedItem = document.createElement('div');
                selectedItem.classList.add('selected-member-item');
                selectedItem.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name}">
                    ${translations[currentLang][member.name] || member.name}
                `;
                selectedSenbatsuList.appendChild(selectedItem);
            });
        } else {
            senbatsuSummary.classList.add('hidden');
        }
    }

    function resetSenbatsuFormation() {
        selectedSenbatsuMembers = [];
        renderSenbatsuMembersGrid(); // Re-render to deselect all
        updateSelectedSenbatsuDisplay(); // Hide summary
    }

    // --- Event Listeners ---

    // Language Buttons
    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            setLanguage(e.target.dataset.lang);
        });
    });

    // Navigation Buttons
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            showFlow(e.target.dataset.target);
        });
    });

    // Sorter Events
    categoryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            initializeSorter(e.target.dataset.category);
        });
    });
    idol1Card.addEventListener('click', () => handleChoice(idol1Card.dataset.name));
    idol2Card.addEventListener('click', () => handleChoice(idol2Card.dataset.name));
    drawButton.addEventListener('click', () => handleChoice('draw'));
    downloadResultsButton.addEventListener('click', () => {
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
    });
    shareResultsButton.addEventListener('click', () => {
        if (navigator.share) {
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
        }
    });
    restartSorterButton.addEventListener('click', () => {
        categorySelectionSection.classList.remove('hidden');
        sorterSection.classList.add('hidden'); // Ensure sorter section is hidden
        resultsSection.classList.add('hidden');
        resultsList.innerHTML = '';
        comparedPairs.clear();
        updateProgressBar();
    });

    // Senbatsu Events
    senbatsuSizeInput.addEventListener('change', (e) => {
        maxSenbatsuMembers = parseInt(e.target.value);
        if (selectedSenbatsuMembers.length > maxSenbatsuMembers) {
            selectedSenbatsuMembers = selectedSenbatsuMembers.slice(0, maxSenbatsuMembers); // Truncate if size reduces
            updateSelectedSenbatsuDisplay();
            renderSenbatsuMembersGrid(); // Update card selected states
        }
    });
    resetSenbatsuButton.addEventListener('click', resetSenbatsuFormation);

    // Initial Setup
    setLanguage('id'); // Start with Bahasa Indonesia
    showFlow('sorter-flow'); // Show sorter by default
    renderSenbatsuMembersGrid(); // Render senbatsu grid on load
});
