function adicionar(valor) {
    let visor = document.getElementById('visor');
    
    if (visor.value === '0') {
        visor.value = valor;
    } 
    else {
        visor.value = visor.value + valor;
    }
}

// 2. Funções matemáticas isoladas
function somar(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function div(a, b) {
    return a / b;
}
function mult(a, b) {
    return a * b;
}

// 3. Função para identificar a conta e calcular
function calcular() {
    let visor = document.getElementById('visor');
    let texto = visor.value;

    if (texto.includes('+')) {
        let partes = texto.split('+'); 
        
        let num1 = parseFloat(partes[0]);
        let num2 = parseFloat(partes[1]);
        
        visor.value = somar(num1, num2);
    } 
    
    // ====================================================
    // EXERCÍCIO 2: Continue a lógica abaixo
    // ====================================================
    if (texto.includes('-')) {
        let partes = texto.split('-'); 
        
        let num1 = parseFloat(partes[0]);
        let num2 = parseFloat(partes[1]);
        
        visor.value = sub(num1, num2);
    } 
   if (texto.includes('/')) {
        let partes = texto.split('/'); 
        
        let num1 = parseFloat(partes[0]);
        let num2 = parseFloat(partes[1]);
        
        visor.value = div(num1, num2);
    } 
       if (texto.includes('*')) {
        let partes = texto.split('*'); 
        
        let num1 = parseFloat(partes[0]);
        let num2 = parseFloat(partes[1]);
        
        visor.value = mult(num1, num2);
    } 
}

// ====================================================
// DESAFIO 3: Crie a função limpar()
// ================================================
function limpar() {
     document.getElementById('visor').value = ''

}