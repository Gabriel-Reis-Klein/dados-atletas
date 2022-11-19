class Atleta{ 
constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas
    }
 calculaCategoria(){
if(this.idade > 8 && this.idade < 12 )
return "Infantil"
if(this.idade > 11 && this.idade < 14 )
return "Juvenil"
if(this.idade > 13 && this.idade < 16 )
return "Intermediário"
if(this.idade > 15 && this.idade < 31 )
return "Adulto"
} 
//para calcular a categoria do atleta

calculaIMC() {
return this.peso / (this.altura * this.altura)
} //para calcular o IMC do atleta

calculaMediaValida(){
      let notasGerais = this.notas; // primeiro armazenei as notas na variavel notasGerais
      let notasOrganizadas = notasGerais.sort(function comparaNumeros(a,b) {
                if (a == b) return 0; 
                if (a < b) return -1; 
                if (a > b) return 1;
                } ); 
// função para organizar as notas

      let notasComputadas = notasOrganizadas.slice(1,4)
      // retiro a menor e a maior nota pelo metodo slice
      let somaNotasComputadas = notasComputadas.reduce(function(total, atual){
                return total + atual
            },0)// somar as notas

           let media = (somaNotasComputadas/notasComputadas.length).toFixed(2);
           //calculo a média e toFixed(2) para mostra dois números depois da virgula
           return media;
    }
    
obtemNomeAtleta(){
return this.nome
    } // retornar o nome
    
    obtemIdadeAtleta(){
        return this.idade;
    } //retornar a idade

   obtemPesoAtleta(){
        return  this.peso;
    } //retornar o peso

   obtemNotasAtleta(){
        return  this.notas;
    } //retornar as notas

   obtemCategoria(){
        return atleta.calculaCategoria()
    } //retornar a categoria

   obtemIMC(){
        return atleta.calcularIMC()    } //retornar o imc

   obtemMediaValida(){
return atleta.calculaMediaValida()
    }//retornar a media valida

}



const atleta = new Atleta("Cesar Abascal",
   30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);


 console.log(atleta.calculaCategoria());
 console.log(atleta.calculaIMC());
console.log(atleta.calculaMediaValida());
 console.log(atleta.obtemNomeAtleta());
 console.log(atleta.obtemIdadeAtleta());
 console.log(atleta.obtemPesoAtleta());
 console.log(atleta.obtemNotasAtleta());
 console.log(atleta.obtemCategoria());
 console.log(atleta.obtemIMC());
 console.log(atleta.obtemMediaValida());
