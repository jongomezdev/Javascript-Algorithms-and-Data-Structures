// =====================================================================================
// First, print each vowel in 's' on a new line. The English vowels are a, e, i, o, and u,
// and each vowel must be printed in the same order as it appeared in 's'. Second, print each
// consonant (i.e., non-vowel) in 's' on a new line in the same order as it appeared in 's'.
// =====================================================================================
function vowelsAndConsonants(s) {
  var allVowels = 'aeiou';
  var vowels = '';
  var consonants = '';

  for (var i of s) {
    if (allVowels.indexOf(i) !== -1) {
      vowels += i;
    } else {
      consonants += i;
    }
  }
  var result = vowels + consonants;
  for (i of result) console.log(i);
}

vowelsAndConsonants('javascriptloops');
