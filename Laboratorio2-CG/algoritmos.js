//Na DDA a reta deve ser desenhada em qualquer oitante do plano cartesiano
//NaBresenham a reta deve ser desenhada no primeiro e segundo oitante do plano cartesiano

//#RETA#
function DDA(X1, Y1, X2, Y2, valor) {
    let Length, i;
    let X, Y, Xinc, Yinc;
    
    // Calcular a diferença absoluta nas coordenadas X e Y
    Length = Math.abs(X2 - X1);
    if (Math.abs(Y2 - Y1) > Length) {
        Length = Math.abs(Y2 - Y1);
    }

    // Calcular os incrementos para X e Y
    Xinc = (X2 - X1) / Length;
    Yinc = (Y2 - Y1) / Length;

    // Iniciar o desenho da linha usando o algoritmo DDA
    X = X1;
    Y = Y1;

    for (i = 0; i < Length; i++) {
        // desenha o ponto em (X, Y) com o valor especificado
        console.log(`(${X}, ${Y}) - valor: ${valor}`);
        
        // Incrementar X e Y
        X += Xinc;
        Y += Yinc;
    }
}

// Exemplo de uso
let X1 = 0, Y1 = 0, X2 = 10, Y2 = 5;
let valor = 1;
DDA(X1, Y1, X2, Y2, valor);

function bresenham(){

}

//#CINCUNFERENCIA#
function algEqExp(){

}

function algTrigono(){
    
}

function algPontMed(){

}

//#ELIPSE#

function elipse(){

}
