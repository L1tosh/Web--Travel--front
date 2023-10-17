const transliterationMap = {
    'а': 'a',
    'б': 'b',
    'в': 'v',
    'г': 'h',
    'ґ': 'g',
    'д': 'd',
    'е': 'e',
    'є': 'ye',
    'ж': 'zh',
    'з': 'z',
    'и': 'y',
    'і': 'i',
    'ї': 'yi',
    'й': 'y',
    'к': 'k',
    'л': 'l',
    'м': 'm',
    'н': 'n',
    'о': 'o',
    'п': 'p',
    'р': 'r',
    'с': 's',
    'т': 't',
    'у': 'u',
    'ф': 'f',
    'х': 'kh',
    'ц': 'ts',
    'ч': 'ch',
    'ш': 'sh',
    'щ': 'shch',
    'ь': '',
    'ю': 'yu',
    'я': 'ya',
};

function transliterate() {
    const inputField = document.getElementById('ukrainianText');
    const outputField = document.getElementById('transliteratedText');

    const ukrainianText = inputField.value.toLowerCase();
    let transliteratedText = '';

    for (let i = 0; i < ukrainianText.length; i++) {
        const char = ukrainianText[i];

        if (transliterationMap[char] || transliterationMap[char] === '') {
            transliteratedText += transliterationMap[char];
        } else {
            transliteratedText += char;
        }

    }
    outputField.value = transliteratedText;
}

