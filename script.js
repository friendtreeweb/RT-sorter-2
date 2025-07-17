document.addEventListener('DOMContentLoaded', () => {
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

    // --- Fungsi Bantuan ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function calculateTotalComparisons(n) {
        // Rumus untuk jumlah perbandingan dalam turnamen eliminasi
        if (n <= 1) return 0;
        return (n * (n - 1)) / 2; // Ini jika setiap orang dibandingkan dengan setiap orang (lebih dari eliminasi langsung)
                                 // Untuk sorter berbasis bracket, jumlahnya lebih dekat ke N-1 * log2(N)
                                 // Namun, untuk kesederhanaan dan progress bar yang lebih terlihat, kita gunakan ini.
    }

    // --- Inisialisasi Sorter ---
    function initializeSorter(category) {
        currentCategory = category;
        currentList = members.map(member => ({ ...member, wins: 0, losses: 0, draws: 0 }));
        shuffleArray(currentList); // Acak daftar untuk perbandingan awal yang adil
        currentIndex = 0;
        comparisonsMade = 0;
        totalComparisons = calculateTotalComparisons(currentList.length); // Perhitungan total perbandingan
        updateProgressBar();

        categorySelectionSection.classList.add('hidden');
        sorterSection.classList.remove('hidden');

        startNextComparison();
    }

    // --- Update Progress Bar ---
    function updateProgressBar() {
        if (totalComparisons === 0) {
            progressBar.style.width = '100%';
            progressText.textContent = `Selesai!`;
            return;
        }
        const progressPercentage = (comparisonsMade / totalComparisons) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        progressText.textContent = `Proses: ${comparisonsMade} dari ${totalComparisons} perbandingan`;
    }

    // --- Tampilkan Perbandingan Selanjutnya ---
    function startNextComparison() {
        if (currentIndex >= currentList.length - 1) {
            // Jika sudah mencapai akhir daftar, mungkin perlu putaran lagi atau selesaikan
            // Untuk metode sederhana, kita bisa anggap selesai jika sudah dibandingkan semua
            // atau implementasi algoritma pengurutan yang lebih kompleks seperti Merge Sort Tournament
            // Untuk saat ini, kita akan membuat algoritma sederhana:
            // Setelah satu putaran, jika belum ada pemenang tunggal, acak ulang dan mulai lagi
            // Atau, lebih baik, gunakan sistem ELO/rating atau QuickSort-like.

            // Untuk demonstrasi sederhana: lakukan satu putaran penuh perbandingan acak
            // Lalu tampilkan hasil berdasar jumlah kemenangan (atau implementasi quicksort-like)
            if (comparisonsMade < totalComparisons) { // Masih ada perbandingan yang bisa dilakukan
                const [idol1, idol2] = getRandomUniquePair();
                if (idol1 && idol2) {
                    displayBattle(idol1, idol2);
                } else {
                    // Semua kemungkinan pasangan sudah dibandingkan
                    finishSorting();
                }
            } else {
                finishSorting();
            }
            return;
        }

        const [idol1, idol2] = getRandomUniquePair(); // Pastikan pasangan unik dan belum dibandingkan
        if (idol1 && idol2) {
            displayBattle(idol1, idol2);
        } else {
            // Ini bisa terjadi jika semua pasangan sudah habis.
            finishSorting();
        }
    }

    const comparedPairs = new Set(); // Untuk melacak pasangan yang sudah dibandingkan

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
        return [null, null]; // Tidak ada pasangan unik yang tersisa
    }


    // --- Tampilkan Pertarungan Idola ---
    function displayBattle(idol1, idol2) {
        idol1Card.dataset.name = idol1.name;
        idol1Img.src = `images/${idol1.image}`;
        idol1Name.textContent = idol1.name;

        idol2Card.dataset.name = idol2.name;
        idol2Img.src = `images/${idol2.image}`;
        idol2Name.textContent = idol2.name;
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

        // Urutkan hasil berdasarkan kemenangan, lalu seri, lalu abjad nama
        currentList.sort((a, b) => {
            if (b.wins !== a.wins) return b.wins - a.wins;
            if (b.draws !== a.draws) return b.draws - a.draws;
            return a.name.localeCompare(b.name);
        });

        // Set judul hasil berdasarkan kategori
        let titleText = '';
        switch (currentCategory) {
            case 'general':
                titleText = 'Member favoritmu adalah:';
                break;
            case 'talent':
                titleText = 'Member paling berbakat versi kamu:';
                break;
            case 'visual':
                titleText = 'Visual terbaik versi kamu:';
                break;
            case 'comedian':
                titleText = 'Member terlucu versi kamu:';
                break;
            default:
                titleText = 'Hasil Sorting Rain Tree:';
                break;
        }
        resultsTitle.textContent = titleText;

        resultsList.innerHTML = '';
        currentList.forEach((member, index) => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `
                <span>${index + 1}.</span>
                <img src="images/${member.image}" alt="${member.name}">
                <p>${member.name} (W:${member.wins} D:${member.draws} L:${member.losses})</p>
            `;
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
        // Menggunakan html2canvas untuk menangkap tampilan hasil
        html2canvas(resultsSection, {
            useCORS: true, // Penting jika gambar dimuat dari domain yang berbeda (walaupun di sini sama)
            scale: 2, // Meningkatkan kualitas gambar
            backgroundColor: '#ffffff' // Set background putih untuk bagian yang kosong
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'rain_tree_sorter_results.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });

    shareResultsButton.addEventListener('click', () => {
        // Fungsi share di browser (Web Share API)
        if (navigator.share) {
            html2canvas(resultsSection, {
                useCORS: true,
                scale: 2,
                backgroundColor: '#ffffff'
            }).then(canvas => {
                canvas.toBlob(function(blob) {
                    const filesArray = [
                        new File([blob], 'rain_tree_sorter_results.png', {
                            type: 'image/png',
                            lastModified: new Date().getTime()
                        })
                    ];
                    navigator.share({
                        files: filesArray,
                        title: 'Hasil Sorting Rain Tree',
                        text: `Lihat hasil sorting Rain Tree saya untuk kategori ${currentCategory}!`,
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
        resultsList.innerHTML = ''; // Bersihkan hasil sebelumnya
        comparedPairs.clear(); // Bersihkan daftar pasangan yang sudah dibandingkan
    });

    // Inisialisasi awal
    updateProgressBar(); // Setel progress bar ke 0% saat awal dimuat
});
