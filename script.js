calcularBase = () => {
    const lado = document.getElementById('lado').value;
    const areaBase = document.getElementById('areaBase').value;
    let ladoFloat = parseFloat(lado);
    let areaFloat = parseFloat(areaBase);

    if (lado) {
        let areaFloat = ladoFloat * ladoFloat;
        
        document.getElementById('areaBase').value = areaFloat;
        return;
    }

    if (areaBase) {
        let ladoFloat = Math.sqrt(areaFloat);
        
        document.getElementById('lado').value = ladoFloat;
        return;
    }
}
