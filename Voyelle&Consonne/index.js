function vowelAndConsonnant(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    var vowel_counter = 0
    var consonant_counter = 0

    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str.charAt(i))) {
            vowel_counter = vowel_counter + 1
        } else {
            consonant_counter = consonant_counter + 1
        }
    }

    console.log('Il y a ' + vowel_counter + ' voyelles dans ' + str)
    console.log('Il y a ' + consonant_counter + ' consonnes dans ' + str)
}

vowelAndConsonnant("lemotlepluslongdumondeendeuxmilledixhuit")