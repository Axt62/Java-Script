function calcul(formulaire){
    formulaire.res.value = eval(formulaire.op.value)
};

function calculer(form){
    let R1 = parseFloat (form.R1.value);
    const R2 = parseFloat (form.R2.value);

    let c = R1;
    form.res.value = toStr("+", R1 += R2);
    R1 = c;
    form.res.value += toStr("*", R1 *= R2);
    R1 = c;
    form.res.value += toStr("/", R1 /= R2);
    R1 = c;
    form.res.value += toStr("%", R1 %= R2);

}

function toStr(op, res){
    return `Àprès l'opération R1 ${op}= R2, R1 a pour valeur ${res}\n`;
} 