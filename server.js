const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const hiraganas = [
    { char: 'あ', romaji: 'a' },
    { char: 'い', romaji: 'i' },
    { char: 'う', romaji: 'u' },
    { char: 'え', romaji: 'e' },
    { char: 'お', romaji: 'o' },
    { char: 'か', romaji: 'ka' },
    { char: 'き', romaji: 'ki' },
    { char: 'く', romaji: 'ku' },
    { char: 'け', romaji: 'ke' },
    { char: 'こ', romaji: 'ko' },
    { char: 'が', romaji: 'ga' },
    { char: 'ぎ', romaji: 'gi' },
    { char: 'ぐ', romaji: 'gu' },
    { char: 'げ', romaji: 'ge' },
    { char: 'ご', romaji: 'go' },
    { char: 'さ', romaji: 'sa' },
    { char: 'し', romaji: 'shi' },
    { char: 'す', romaji: 'su' },
    { char: 'せ', romaji: 'se' },
    { char: 'そ', romaji: 'so' },
    { char: 'ざ', romaji: 'za' },
    { char: 'じ', romaji: 'ji' },
    { char: 'ず', romaji: 'zu' },
    { char: 'ぜ', romaji: 'ze' },
    { char: 'ぞ', romaji: 'zo' },
    { char: 'た', romaji: 'ta' },
    { char: 'ち', romaji: 'chi' },
    { char: 'つ', romaji: 'tsu' },
    { char: 'て', romaji: 'te' },
    { char: 'と', romaji: 'to' },
    { char: 'だ', romaji: 'da' },
    //{ char: 'ぢ', romaji: 'ji' },
    //{ char: 'づ', romaji: 'zu' },
    { char: 'で', romaji: 'de' },
    { char: 'ど', romaji: 'do' },
    { char: 'な', romaji: 'na' },
    { char: 'に', romaji: 'ni' },
    { char: 'ぬ', romaji: 'nu' },
    { char: 'ね', romaji: 'ne' },
    { char: 'の', romaji: 'no' },
    { char: 'は', romaji: 'ha' },
    { char: 'ひ', romaji: 'hi' },
    { char: 'ふ', romaji: 'fu' },
    { char: 'へ', romaji: 'he' },
    { char: 'ほ', romaji: 'ho' },
    { char: 'ば', romaji: 'ba' },
    { char: 'び', romaji: 'bi' },
    { char: 'ぶ', romaji: 'bu' },
    { char: 'べ', romaji: 'be' },
    { char: 'ぼ', romaji: 'bo' },
    { char: 'ぱ', romaji: 'pa' },
    { char: 'ぴ', romaji: 'pi' },
    { char: 'ぷ', romaji: 'pu' },
    { char: 'ぺ', romaji: 'pe' },
    { char: 'ぽ', romaji: 'po' },
    { char: 'ま', romaji: 'ma' },
    { char: 'み', romaji: 'mi' },
    { char: 'む', romaji: 'mu' },
    { char: 'め', romaji: 'me' },
    { char: 'も', romaji: 'mo' },
    { char: 'や', romaji: 'ya' },
    { char: 'ゆ', romaji: 'yu' },
    { char: 'よ', romaji: 'yo' },
    { char: 'ら', romaji: 'ra' },
    { char: 'り', romaji: 'ri' },
    { char: 'る', romaji: 'ru' },
    { char: 'れ', romaji: 're' },
    { char: 'ろ', romaji: 'ro' },
    { char: 'わ', romaji: 'wa' },
    { char: 'を', romaji: 'wo' },
    { char: 'ん', romaji: 'n' }
];

app.get(/^(?!\/app).*/, (req, res) => {
    res.render('home');
  });

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/app', (req, res) => {
    const correctIndex = Math.floor(Math.random() * hiraganas.length);
    const correctHiragana = hiraganas[correctIndex];
    
    let options = [];
    
    while (options.length < 3) {
        const randomIndex = Math.floor(Math.random() * hiraganas.length);
        if (randomIndex !== correctIndex && !options.includes(hiraganas[randomIndex].romaji)) {
            options.push(hiraganas[randomIndex].romaji);
        }
    }

    options.push(hiraganas[correctIndex].romaji);
    options = options.sort(() => Math.random() - 0.5);
    
    res.render('app', {
        hiragana: correctHiragana.char,
        options: options,
        correctAnswer: correctHiragana.romaji
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Estamos em: http://localhost:${PORT}`);
});

module.exports = app;