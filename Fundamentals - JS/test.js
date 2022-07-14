function solve(input, word) {
    let splitedInput = input.split(word);
    let res = splitedInput.length - 1;
    console.log(res);
}
solve('This is a word and it also is a sentence',
'is'
)