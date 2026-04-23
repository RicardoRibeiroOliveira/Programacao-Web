const alunos = [
    {
        nome: 'Ricardo',
        nota1: 10.0,
        nota2: 2.0
    },
    {
        nome: 'Maria',
        nota1: 6.0,
        nota2: 8.0
    },
    {
        nome: 'Luis',
        nota1: 8.0,
        nota2: 2.0
    },
    {
        nome: 'Wilson',
        nota1: 10.0,
        nota2: 10.0
    },
    {
        nome: 'Verônica',
        nota1: 6.0,
        nota2: 6.0
    }
]

function calcularMedia(nota1, nota2){
    return (nota1 + nota2) / 2;
}

const adcMedia = alunos.map(alunos => ({
    ...alunos,
    media: calcularMedia(alunos.nota1,alunos.nota2) 
}));

const aprovados = adcMedia.filter(aluno => aluno.media >= 6);
const reprovados = adcMedia.filter(aluno => aluno.media < 6);
const mediaGeral = adcMedia.reduce((acc, aluno) => acc + aluno.media, 0) / adcMedia.length;
const ordenados = [...adcMedia].sort((a, b) => b.media - a.media);

console.log("----- Lista de Alunos -----");
adcMedia.forEach(aluno => {
  console.log(`Nome: ${aluno.nome} | Notas: ${aluno.nota1}, ${aluno.nota2} | Média: ${aluno.media.toFixed(2)}`);
});

console.log("\n----- Aprovados -----");
aprovados.forEach(aluno => {
  console.log(`${aluno.nome} - Média: ${aluno.media.toFixed(2)}`);
});

console.log("\n----- Reprovados -----");
reprovados.forEach(aluno => {
  console.log(`${aluno.nome} - Média: ${aluno.media.toFixed(2)}`);
});

console.log(`\nMédia geral da turma: ${mediaGeral.toFixed(2)}`);

console.log("\n----- Alunos ordenados por média -----");
ordenados.forEach((aluno, index) => {
  console.log(`${index + 1}º - ${aluno.nome} (Média: ${aluno.media.toFixed(2)})`);
});