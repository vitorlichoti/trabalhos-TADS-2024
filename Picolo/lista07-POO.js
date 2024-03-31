const readLine = require('readline')
// // Exercicio 1.1

class Carro {
  #marca
  #ano
  #modelo

  constructor(marca, modelo, ano) {
    this.#ano = ano
    this.#marca = marca
    this.#modelo = modelo
  }

  obterInformacoes() {
    return `Informações do carro \n Marca: ${this.#marca} \n Modelo: ${this.#modelo} \n Ano: ${this.#ano} \n`
  }

  anosDeUso() {
    return `O carro tem ${new Date().getFullYear - this.#ano} anos`
  }

}

const carro = new Carro('Fiat', 'Uno', 2010)

const idadeDoCarro = carro.anosDeUso()
const infosDoCarro = carro.obterInformacoes()

console.log(idadeDoCarro)
console.log(infosDoCarro)

// Exercício 1.2
class Membros {
  #nome
  #idade
  #peso
  #altura

  constructor(nome, idade, peso, altura) {
    this.#altura = altura
    this.#idade = idade
    this.#nome = nome
    this.#peso = peso
  }

  calcularIMC() {
    // eu sei a formula
    return this.#peso / this.#altura ** 2
  }
}

const joao = new Membros('João', 25, 80, 1.80)
const joaoIMC = joao.calcularIMC()

console.log(joaoIMC);

// Exercício 2.1

class Animal {
  nome
  idade
  somEmitido

  constructor() {
  }

  exibirInformacoes() {
    throw new Error('Método não implementado')
  }

}

class Mamifero extends Animal {
  #tipoDePelo

  constructor(nome, idade, somEmitido, tipoDePelo) {
    super()
    this.nome = nome
    this.idade = idade
    this.somEmitido = somEmitido
    this.#tipoDePelo = tipoDePelo
  }

  exibirInformacoes() {
    return `Nome: ${this.nome} \n Idade: ${this.idade} \n Tipo de pelo: ${this.#tipoDePelo}`
  }

  emitirSom() {
    return this.somEmitido
  }
}

class Ave extends Animal {
  #tipoDeBico
  #voa

  constructor(nome, idade, voa, tipoDeBico) {
    super(nome, idade)
    this.#voa = voa
    this.#tipoDeBico = tipoDeBico
  }

  exibirInformacoes() {
    return `Nome: ${this.nome} \n Idade: ${this.idade} \n Tipo de bico: ${this.#tipoDeBico}`
  }

  voaOuNao() {
    return this.#voa ? 'Voa' : 'Não voa'
  }
}

const cachorro = new Mamifero('Rex', 5, 'Au au', 'Curto')

console.log(cachorro.exibirInformacoes());
console.log(cachorro.emitirSom());

const papagaio = new Ave('Loro', 2, true, 'Curvo')
console.log(papagaio.exibirInformacoes());
console.log(papagaio.voaOuNao());

// Exercício 2.2

class Livro {
  titulo
  autor
  preco

  constructor() {
  }

  obterInformacoes() {
    throw new Error('Método não implementado')
  }
}

class LivroFisico extends Livro {
  #peso

  constructor(titulo, autor, preco, peso) {
    super()
    this.titulo = titulo
    this.autor = autor
    this.preco = preco
    this.#peso = peso
  }

  calcularFrete() {
    // custa 12.58 por kg
    return this.#peso * 12.58
  }
}

class Ebook extends Livro {
  #tamanhoMB

  constructor(titulo, autor, preco, tamanhoMB) {
    super()
    this.titulo = titulo
    this.autor = autor
    this.preco = preco
    this.#tamanhoMB = tamanhoMB
  }

  informarTamanhoDoEbook() {
    return `O tamanho do ebook é de ${this.#tamanhoMB} MB`
  }
}

const livroFisico = new LivroFisico('O Senhor dos Anéis', 'J.R.R. Tolkien', 50, 1.5)
console.log(livroFisico.calcularFrete());

const ebook = new Ebook('O Senhor dos Anéis', 'J.R.R. Tolkien', 50, 10)
console.log(ebook.informarTamanhoDoEbook());

// Exercício 3.1

class Calculadora {

  raizQuadrada(a) {
    return Math.sqrt(a)
  }

  potencia(a, b) {
    return a ** b
  }

  somar(a, b) {
    return a + b
  }

  subtrair(a, b) {
    return a - b
  }

  multiplicar(a, b) {
    return a * b
  }

  dividir(a, b) {
    return a / b
  }
}

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Digite a operação que deseja fazer: \n
    raiz quadrada -> sqrt
    potencia -> pow
    somar -> +
    subtrair -> -
    dividir -> /
    multiplicar -> * \n >>> `, (operacao) => {

  const calculadora = new Calculadora();

  switch (operacao) {
    case 'sqrt':
      rl.question('Digite o número: ', (a) => {
        const resultado = calculadora.raizQuadrada(Number(a));
        console.log(`O resultado da sqrt é: ${resultado}`);
        rl.close();
      });
      break;

    case 'pow':
      rl.question('Digite o número base: ', (a) => {
        rl.question('Digite o número da potência: ', (b) => {
          const resultado = calculadora.potencia(Number(a), Number(b));
          console.log(`O resultado da potência é: ${resultado}`);
          rl.close();
        });
      });
      break;
    case '+':
      rl.question('Digite o primeiro número: ', (a) => {
        rl.question('Digite o segundo número: ', (b) => {
          const resultado = calculadora.somar(Number(a), Number(b));
          console.log(`O resultado da soma é: ${resultado}`);
          rl.close();
        });
      });
      break;
    case '-':
      rl.question('Digite o primeiro número: ', (a) => {
        rl.question('Digite o segundo número: ', (b) => {
          const resultado = calculadora.subtrair(Number(a), Number(b));
          console.log(`O resultado da subtração é: ${resultado}`);
          rl.close();
        });
      });
      break;
    case '/':
      rl.question('Digite o primeiro número: ', (a) => {
        rl.question('Digite o segundo número: ', (b) => {
          const resultado = calculadora.dividir(Number(a), Number(b));
          console.log(`O resultado da divisão é: ${resultado}`);
          rl.close();
        });
      });
      break;
    case '*':
      rl.question('Digite o primeiro número: ', (a) => {
        rl.question('Digite o segundo número: ', (b) => {
          const resultado = calculadora.multiplicar(Number(a), Number(b));
          console.log(`O resultado da multiplicação é: ${resultado}`);
          rl.close();
        });
      });
      break;
    default:
      console.log('Operação inválida');
      rl.close();
      break;
  }
});

// Exercício 4

class ItemBiblioteca {
  titulo
  autor
  ano

  constructor() {
  }

  obterInformacoes() {
    throw new Error('Método não implementado')
  }
}

class Livro extends ItemBiblioteca {
  #numeroDePaginas

  constructor(titulo, autor, ano, numeroDePaginas) {
    super()
    this.titulo = titulo
    this.autor = autor
    this.ano = ano
    this.#numeroDePaginas = numeroDePaginas
  }

  obterInformacoes() {
    return `Título do Livro: ${this.titulo} \n Autor do Livro: ${this.autor} \n Ano do Livro: ${this.ano} \n Número de páginas do Livro: ${this.#numeroDePaginas}`
  }
}

class DVD extends ItemBiblioteca {
  #duracao

  constructor(titulo, autor, ano, duracao) {
    super()
    this.titulo = titulo
    this.autor = autor
    this.ano = ano
    this.#duracao = duracao
  }

  obterInformacoes() {
    return `Título do DVD: ${this.titulo} \n Autor do DVD: ${this.autor} \n Ano do DVD: ${this.ano} \n Duração do DVD: ${this.#duracao}`
  }
}

const livro = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954, 1000)
console.log(livro.obterInformacoes());

const dvd = new DVD('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954, 180)
console.log(dvd.obterInformacoes());