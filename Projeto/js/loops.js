var nomes = ['Marta', 'Clara', 'Douglas', 'Bruno', 'Cristiane', 'Lucas'];

console.log('Loop com do...while:');
var i = 0;
do {
    console.log(`Nome: ${nomes[i]}`);
    i++; //contador
} while (i < nomes.length); 

console.log('Loop com while{...}:');
i = 0;
while (i < nomes.length) {
    console.log(`Nome: ${nomes[i]}`);
    i++; //contador
} 

console.log('Loop com for{...}:');
for (i = 0; i < nomes.length; i++) {
    console.log(`Nome: ${nomes[i]}`);
} 