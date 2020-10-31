var pacientes = []; //vetor vazio
var botao = document.getElementById("calcular"); //<button type="button" id="calcular" ...
botao.addEventListener('click', function() {
                                    var paciente = lePaciente(); //lê e retorna o objeto
                                    pacientes.push( paciente );
                                    mostraPaciente( paciente );
                                });

var botao = document.getElementById("relatorio");
botao.addEventListener('click', function() {
                                    gerarRelatorio( pacientes );
                                });