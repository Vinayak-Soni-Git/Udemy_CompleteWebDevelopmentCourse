function sumOfN(n) {
    let sum = 0
    while(n > 0){
        sum+=n
        n--;
    }
    return sum
}

function printMultiplicationTable(n) {
    const table = [];
    for (let i = 1; i <= 10; i++) {
        table.push(`${n} * ${i} = ${n * i}`);
    }
    return table;
}

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}
