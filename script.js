calcularBase = () => {
    const lado = document.getElementById('lado').value;
    const areaBase = document.getElementById('areaBase').value;
    const volume = document.getElementById('volume').value;
    const altura = document.getElementById('altura').value;
    let ladoFloat = parseFloat(lado);
    let areaFloat = parseFloat(areaBase);
    let volumeFloat = parseFloat(volume);
    let alturaFloat = parseFloat(altura);

    if (lado) {
        areaFloat = (ladoFloat * ladoFloat);

        document.getElementById('areaBase').value = areaFloat;
        return;
    }

    if (volume && altura) {
        areaFloat = (volumeFloat / (1 / 3).alturaFloat);

        document.getElementById('areaBase').value = areaFloat;
        return;
    }
}

calcularLado = () => {
    const lado = document.getElementById('lado').value;
    const areaBase = document.getElementById('areaBase').value;
    const volume = document.getElementById('volume').value;
    const altura = document.getElementById('altura').value;
    let ladoFloat = parseFloat(lado);
    let areaFloat = parseFloat(areaBase);
    let volumeFloat = parseFloat(volume);
    let alturaFloat = parseFloat(altura);

    if (areaBase) {
        ladoFloat = Math.sqrt(areaFloat);

        document.getElementById('lado').value = ladoFloat;
        return;
    }

    if (volume && altura) {
        ladoFloat = Math.sqrt(volumeFloat / (1 / 3) * alturaFloat)

        document.getElementById('lado').value = ladoFloat;
        return;
    }
}

calcularAltura = () => {
    const lado = document.getElementById('lado').value;
    const areaBase = document.getElementById('areaBase').value;
    const volume = document.getElementById('volume').value;
    const altura = document.getElementById('altura').value;
    let ladoFloat = parseFloat(lado);
    let areaFloat = parseFloat(areaBase);
    let volumeFloat = parseFloat(volume);
    let alturaFloat = parseFloat(altura);

    if (volume && areaBase && !lado && !altura) {
        alturaFloat = volumeFloat / (areaFloat / 3);

        document.getElementById('altura').value = alturaFloat;

    } else if (volume && !areaBase && lado && !altura) {

        areaFloat = Math.pow(ladoFloat, 2)
        alturaFloat = volumeFloat / (areaFloat / 3);

        document.getElementById('altura').value = alturaFloat;

    }
}

calcularVolume = () => {
    const lado = document.getElementById('lado').value;
    const areaBase = document.getElementById('areaBase').value;
    const volume = document.getElementById('volume').value;
    const altura = document.getElementById('altura').value;
    let ladoFloat = parseFloat(lado);
    let areaFloat = parseFloat(areaBase);
    let volumeFloat = parseFloat(volume);
    let alturaFloat = parseFloat(altura);

    if (areaBase && altura) {
        volumeFloat = (areaFloat * alturaFloat) / 3

        document.getElementById('volume').value = volumeFloat;
        return;
    }

    if (lado && altura) {
        areaFloat = Math.pow(lado, 2);
        volumeFloat = (areaFloat * alturaFloat) / 3

        document.getElementById('volume').value = volumeFloat;
        return;
    }
}



limpar = () => {
    const lado = document.getElementById('lado').value = '';
    const areaBase = document.getElementById('areaBase').value = '';
    const volume = document.getElementById('volume').value = '';
    const altura = document.getElementById('altura').value = '';
}
