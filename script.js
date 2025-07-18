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

    // ... (kode yang sudah ada)

    let currentList = [];
    let currentIndex = 0;
    let comparisonsMade = 0;
    let totalComparisons = 0;
    let currentCategory = '';

    const categorySelectionSection = document.getElementById('category-selection');
    const sorterSection = document.getElementById('sorter-section');
    const resultsSection = document.getElementById('results-section');
    const categoryButtons = document.querySelectorAll('.category-buttons button');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const idol1Card = document.getElementById('idol-1');
    const idol2Card = document = document.getElementById('idol-2');
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
    const langButtons = document.querySelectorAll('.language-selector .lang-button'); // Ambil tombol bahasa
    const pageTitleElement = document.querySelector('title'); // Ambil elemen title

    // --- Fungsi Bantuan ---
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

    // --- Fungsi Terjemahan ---
    function setLanguage(lang) {
        currentLang = lang;
        // Hapus kelas 'active' dari semua tombol bahasa
        langButtons.forEach(button => button.classList.remove('active'));
        // Tambahkan kelas 'active' ke tombol yang dipilih
        document.querySelector(`.lang-button[data-lang="${lang}"]`).classList.add('active');

        // Terjemahkan semua elemen dengan data-key
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

        // Terjemahkan nama-nama anggota yang ditampilkan saat battle
        // Pastikan idol1Card.dataset.name dan idol2Card.dataset.name ada sebelum mencoba menerjemahkan
        if (!sorterSection.classList.contains('hidden') && idol1Card.dataset.name && idol2Card.dataset.name) {
             const idol1NameElement = idol1Card.querySelector('.idol-name');
             const idol2NameElement = idol2Card.querySelector('.idol-name');
             const name1Original = idol1Card.dataset.name;
             const name2Original = idol2Card.dataset.name;

             if (translations[currentLang][name1Original]) {
                 idol1NameElement.textContent = translations[currentLang][name1Original];
             }
             if (translations[currentLang][name2Original]) {
                 idol2NameElement.textContent = translations[currentLang][name2Original];
             }
        }

        // Terjemahkan nama anggota di daftar hasil akhir
        if (!resultsSection.classList.contains('hidden')) {
            updateResultsDisplay(); // Panggil ulang fungsi untuk memperbarui tampilan hasil
        }

        // Perbarui teks progres (jika ada)
        updateProgressBar();
    }


    // --- Inisialisasi Sorter ---
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

        // Pastikan nama member di sorter ditampilkan dengan bahasa yang benar
        startNextComparison();
    }

    // --- Update Progress Bar ---
    function updateProgressBar() {
        if (totalComparisons === 0) {
            progressBar.style.width = '100%';
            // Menggunakan terjemahan untuk "Proses:" dan menambahkan "Selesai!"
            progressText.textContent = `${translations[currentLang]['progressText']} Selesai!`;
            return;
        }
        const progressPercentage = (comparisonsMade / totalComparisons) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        progressText.textContent = `${translations[currentLang]['progressText']} ${comparisonsMade} / ${totalComparisons}`;
    }

    // --- Tampilkan Perbandingan Selanjutnya ---
    const comparedPairs = new Set();

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
        if (comparisonsMade >= totalComparisons) { // Cek apakah semua perbandingan sudah selesai
            finishSorting();
            return;
        }

        const [idol1, idol2] = getRandomUniquePair();
        if (idol1 && idol2) {
            displayBattle(idol1, idol2);
        } else {
            // Ini akan terjadi jika getRandomUniquePair tidak menemukan pasangan baru
            // yang berarti semua kombinasi unik telah dibandingkan.
            finishSorting();
        }
    }


    // --- Tampilkan Pertarungan Idola ---
    function displayBattle(idol1, idol2) {
        idol1Card.dataset.name = idol1.name;
        idol1Img.src = `images/${idol1.image}`;
        idol1Name.textContent = translations[currentLang][idol1.name] || idol1.name; // Terjemahkan nama

        idol2Card.dataset.name = idol2.name;
        idol2Img.src = `images/${idol2.image}`;
        idol2Name.textContent = translations[currentLang][idol2.name] || idol2.name; // Terjemahkan nama
    }

    // --- Logika Pemilihan Pemenang/Seri ---
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

    // --- Selesai Sorting ---
    function finishSorting() {
        sorterSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');

        currentList.sort((a, b) => {
            if (b.wins !== a.wins) return b.wins - a.wins;
            if (b.draws !== a.draws) return b.draws - a.draws;
            return a.name.localeCompare(b.name);
        });

        updateResultsDisplay(); // Panggil fungsi terpisah untuk menampilkan hasil
    }

    // Fungsi untuk memperbarui tampilan hasil (dipanggil saat sorting selesai atau bahasa berubah)
    function updateResultsDisplay() {
        let titleKey = '';
        switch (currentCategory) {
            case 'general':
                titleKey = 'resultsGeneral';
                break;
            case 'talent':
                titleKey = 'resultsTalent';
                break;
            case 'visual':
                titleKey = 'resultsVisual';
                break;
            case 'comedian':
                titleKey = 'resultsComedian';
                break;
            default:
                titleKey = 'resultsGeneral'; // Fallback
                break;
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
            `; // Terjemahkan nama anggota di sini
            resultsList.appendChild(resultItem);
        });
    }


    // --- Event Listeners ---
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
            link.download = `rain_tree_sorter_results_${currentLang}.png`; // Nama file sesuai bahasa
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
                    // Teks berbagi juga akan disesuaikan bahasanya
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
        resultsSection.classList.add('hidden');
        categorySelectionSection.classList.remove('hidden');
        resultsList.innerHTML = '';
        comparedPairs.clear();
        // Setel ulang teks progress bar ke bahasa saat ini
        updateProgressBar();
    });

    // Event listener untuk tombol bahasa
    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            setLanguage(e.target.dataset.lang);
        });
    });

    // Inisialisasi: setel bahasa default saat halaman dimuat
    setLanguage('id'); // Mulai dengan Bahasa Indonesia
    updateProgressBar();
});
