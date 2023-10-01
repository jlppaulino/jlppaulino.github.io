helpModal = document.getElementById("helpModal"); // Coleta o elemento do modal

function openModal() { //Abre o modal
  helpModal.style.display = "block";
}

function closeModal() { //Fecha o modal
  helpModal.style.display = "none";
}

window.onclick = function(event) { //Fecha o modal se clicar fora dele na tela
  if (event.target == helpModal) {
    helpModal.style.display = "none";
  }
}

function round(value, precision) { // Função de arredondamento
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

function hidescore() { //Esconder o campo da terceira unidade caso o usuário selecione dois créditos
  credit2 = document.getElementById("credit2");
  score3 = document.getElementById("score3");
  if(credit2.checked == true){ // Se a opção "Dois créditos" estiver selecionada, a nota da terceira unidade será desabilitada e retornada ao valor padrão.
    score3.disabled = true;
    score3.value = "";
  }else{ //Se  opção "Três créditos" for ativada novamente, a nota da terceira unidade será reativada.
    score3.disabled = false;
  }
}

function calc() { //Calcula nota do usuário
  // Zerar variáveis e restaurar campos
  score1 = "";
  score2 = "";
  score3 = "";
  result = "Por favor, preencha os campos corretamente."; //Mensagem padrão caso nenhuma condição seja atendida.
  
  // Coletar valores dos campos
  score1 = parseFloat(document.getElementById("score1").value);
  score2 = parseFloat(document.getElementById("score2").value);
  score3 = parseFloat(document.getElementById("score3").value);
  credit2 = document.getElementById("credit2");

  if(credit2.checked == true){ //Verificar se a a opção "Dois créditos" está selecionada para calcular a partir dessaa modalidade.
    if(isNaN(score2) == false){
      if(isNaN(score1) == false){ //Se as duas notas existirem, o cálculo será feito para saber se o aluno foi aprovado.
	media = ((score1*4) + (score2*5))/9; // Se as duas notas forem digitadas, será calculada a média do aluno.
	  media = round(media, 1);
	  if(media >= 7){ // Caso a média seja maior ou igual a sete, o aluno estará aprovado.
	    result = "Parabéns! Sua média foi " + media + " e você foi <b>aprovado</b> na disciplina!";
	  }else{
	    if(media < 4){ // Se a média do aluno for menor que 4, ele não poderá fazer a prova final.
	      result = "Que pena... Sua média foi " + media + " e você <b>não foi aprovado</b>. Infelizmente, você também não poderá realizar a prova final, pois sua média foi menor que 4.";
	    }else{ // Se a média for menor que sete e maior ou igual a quatro, o aluno irá para a prova final.
	      final = 12 - media;
	      result = "Que pena... Sua média foi " + media + " e você <b>não foi aprovado</b>. Para passar na prova final, você precisa tirar " + final + ".";
	    }
	  }
      }	else{ //Se o segundo número for digitado, mas o primeiro não, será solicitado ao usuário que o digite.
	result = "Por favor, digite a nota da primeira unidade para continuar.";
      }
    }else{
      if(isNaN(score1) == false){ // Se a segunda nota não existir, mas a primeira sim, será feito o cálculo para saber quanto o estudante precisar tirar para ser aprovado no semestre.
	media = (score1*4)/9;
	media = round(media, 1);
	score2goal = (63 - (score1*4))/5;
	score2goal = round(score2goal, 1);
	if(score2goal <= 10){ // Se a nota necessária para passar na segunda unidade for maior que dez, o aluno estará, automaticamente, na prova final.
	  result = "Sua média parcial é " + media + " e você precisa tirar " + score2goal + " na segunda  unidade para passar por média.";
	}else{
	  result = "Sua média parcial é " + media + " e você irá para a prova final mesmo que tire 10 na terceira unidade.";
	}
      }
    }
  }else{ // Se a apção "Dois créditos" não estiver ativada, significa que o cálculo é para três créditos.
    if(isNaN(score3) == false){
      if(isNaN(score2) == false){
	if(isNaN(score1) == false){
	  media = ((score1*4) + (score2*5) + (score3*6))/15; // Se as três notas forem digitadas, será calculada a média do aluno.
	  media = round(media, 1);
	  if(media >= 7){ // Caso a média seja maior ou igual a sete, o aluno estará aprovado.
	    result = "Parabéns! Sua média foi " + media + " e você foi <b>aprovado</b> na disciplina!";
	  }else{
	    if(media < 4){ // Se a média do aluno for menor que 4, ele não poderá fazer a prova final.
	      result = "Que pena... Sua média foi " + media + " e você <b>não foi aprovado</b>. Infelizmente, você também não poderá realizar a prova final, pois sua média foi menor que 4.";
	    }else{ // Se a média for menor que sete e maior ou igual a quatro, o aluno irá para a prova final.
	      final = 12 - media;
	      result = "Que pena... Sua média foi " + media + " e você <b>não foi aprovado</b>. Para passar na prova final, você precisa tirar " + final + ".";
	    }
	  }
	}else{// Se a nota da primeira unidade não for digitada, o programa irá requisitá-la.
	  result = "Por favor, digite a nota da primeira unidade para continuar.";
	}
      }else{
	if(isNaN(score1) == false){ // Se a nota da segunda unidade não for digitada, o programa irá requisitá-la
	  result = "Por favor, digite a nota da segunda unidade para continuar.";
	}else{ // Se as notas da primeira e da segunda unidade não forem digitadas, o programa irá requisitá-las.
	  result = "Por favor, digite as notas da primeira e da segunda unidade para continuar.";
	}
      }
    }else{
      if(isNaN(score2) == false){
	if(isNaN(score1) == false){ // Caso apenas as notas da primeira e da segunda unidade estiverm disponíveis, o programa irá calcular a média parical e seus desdobramentos.
	  media = ((score1*4) + (score2*5))/15;
	  media = round(media, 1);
	  score3goal = (105 - (score1*4) - (score2*5))/6;
	  score3goal = round(score3goal, 1);
	  if(score3goal <= 10){ // Se a nota necessária para passar na terceira unidade for maior que dez, o aluno estará, automaticamente, na prova final.
	    result = "Sua média parcial é " + media + " e você precisa tirar " + score3goal + " na terceira unidade para passar por média.";
	  }else{
	    result = "Sua média parcial é " + media + " e você irá para a prova final mesmo que tire 10 na terceira unidade.";
	  }
	}else{ // Se o aluno não digitar a primeira nota, ela será requisitada.
	  result = "Por favor, digite a nota da primeira unidade para continuar.";
	}
      }else{
	if(isNaN(score1) == false){ //Se apenas a primeira nota for digitada, será mostrada uma mensagem solicitando mais informações
	result = "Por favor, digite mais uma nota para continuar.";
	}
      }
    }
  }
  if((score1 > 10 || score1 < 0) || (score2 > 10 || score2 < 0) || (score3 > 10 || score3 < 0)){ //Verifica se a escala dos números está correta
    if(!result.includes("continuar")){ //Verifica se nenhum número está faltando
      result = "Por favor, insira os números na escala de 0 a 10. Use ponto ou vírgula para separar as casas decimais.";
    }
  }
  document.getElementById("result").innerHTML = result; //Coloca o resultado final no campo de resultados
}
