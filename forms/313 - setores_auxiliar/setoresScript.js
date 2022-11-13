function setSelectedZoomItem(selectedItem) {

    if(selectedItem.inputId.split('___')[0] == 'responsavel') {

        let inputName = selectedItem.inputId.split('___')[0]
        let row = selectedItem.inputId.split('___')[1]

        setZoomData("responsavel", selectedItem['colleagueName']);

        // $(selectedItem.inputId).val(selectedItem['CODCOLIGADA'])
        // $('#' + inputName + '___'+ row).val(selectedItem['CODCOLIGADA'])
    }

    if(selectedItem.inputId.split('___')[0] == 'unidade' ) {

        let inputName = selectedItem.inputId.split('___')[0]
        let row = selectedItem.inputId.split('___')[1]

        setZoomData("unidade", selectedItem['groupDescription']);

        // $(selectedItem.inputId).val(selectedItem['CODCOLIGADA'])
        // $('#' + inputName + '___'+ row).val(selectedItem['CODCOLIGADA'])
    }
}

// Função para inserir um valor específico em um campo zoom
function setZoomData(instance, value) {
    window[instance].setValue(value);
}

