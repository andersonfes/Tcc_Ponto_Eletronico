$(document).ready(function() {
    dataInit();

    dataFin();

    dataComp()

    data1()
    data2()
    data3()

    // setTimeout(() => {
    //     // carregaGestor()
    //     interval()
    // }, 150);

    if (getState() == 8 || getState() == "8") {

        interval()
    }

    mostrarPainel()

});

//  function carregaGestor(){
function interval() {
    var setor = $("#setor").val()
    var unidade = $("#unidade").val()
    var teste = setInterval(() => {
        if ($(setor != '' && unidade != '')) {

            reloadZoomFilterValues("gestorImediato", "unidade," + unidade);
            clearInterval(teste);
        }
    }, 100);
}

//  }

//  function carregaGestor(){
//     var setor = $("#setor").val()
//     var unidade = $("#unidade").val()

//     if(setor != '' && unidade != ''){
//         reloadZoomFilterValues("gestorImediato", "unidade," + unidade[0])
//     }
//  }

function setSelectedZoomItem(selectedItem) {

    // if (selectedItem.inputId.indexOf("COLIGADA") != -1) { 

    if (selectedItem.inputId == 'setor') {

        // exemplo para setar no campo formulario apartir do campo data do selectItem do campo zoom escolhido 
        // document.getElementById('CampoColigada').value =  selectedItem['CODCOLIGADA'];

        // exemplo de Jquery
        // $('#CampoColigada').val(selectedItem['CODCOLIGADA'])

        // reload zoom

        // unidade é a nome docampo zoom
        // setor é o nome da constraints 
        // selectedItem é o valor da constraints
        reloadZoomFilterValues("unidade", "setor," + selectedItem['setor']);
    }

    // if (selectedItem.inputId == 'unidade') {

    //     // $('#gestorImediato').val(selectedItem['responsavel'])

    //     reloadZoomFilterValues("gestorImediato", "unidade," + selectedItem['unidade'])
    // }

    // esse exemplo de if é pra usar com pai e filho 

    // if(selectedItem.inputId.split('___')[0] == 'valor') {

    //     let inputName = selectedItem.inputId.split('___')[0]
    //     let row = selectedItem.inputId.split('___')[1]

    //     $(selectedItem.inputId).val(selectedItem['CODCOLIGADA'])
    //     $('#' + inputName + '___'+ row).val(selectedItem['CODCOLIGADA'])
    // }

}

/* VERIFICA SE PRECISA DA APROVAÇÃO DO GESTOR OU NÃO  */

$('#radio-1').click(function() {
    if ($('#radio-1').is(':checked')) {
        $('#pulaGestor').val('true')
    }
})

$('#radio-5').click(function() {
    if ($('#radio-5').is(':checked')) {
        $('#pulaGestor').val('true')
    }
})

/* limite de dias da data  */
var dataInit = function() {
    var dia = new Date();
    dia.setDate(dia.getDate() - 8);

    FLUIGC.calendar("#dataocorrenciaIni", {
        language: 'pt-br',
        minDate: dia,
        maxDate: new Date(),
        pickDate: true,
        pickTime: false
    });
}

var dataFin = function() {
    var dia = new Date();
    dia.setDate(dia.getDate() - 8);

    FLUIGC.calendar("#dataocorrenciaFin", {
        language: 'pt-br',
        minDate: dia,
        maxDate: new Date(),
        pickDate: true,
        pickTime: false
    });
}

var dataComp = function() {
    var dia = new Date();
    dia.setDate(dia.getDate());

    FLUIGC.calendar("#dataCompensacao", {
        language: 'pt-br',
        minDate: dia,
        maxDate: new Date(),
        pickDate: true,
        pickTime: false
    });
}

var data1 = function() {
    var dia = new Date();
    dia.setDate(dia.getDate());

    FLUIGC.calendar("#data1", {
        language: 'pt-br',
        minDate: dia,
        maxDate: new Date(),
        pickDate: true,
        pickTime: false
    });
}

var data2 = function() {
    var dia = new Date();
    dia.setDate(dia.getDate());

    FLUIGC.calendar("#data2", {
        language: 'pt-br',
        minDate: dia,
        maxDate: new Date(),
        pickDate: true,
        pickTime: false
    });
}

var data3 = function() {
    var dia = new Date();
    dia.setDate(dia.getDate());

    FLUIGC.calendar("#data3", {
        language: 'pt-br',
        minDate: dia,
        maxDate: new Date(),
        pickDate: true,
        pickTime: false
    });
}

function setZoomData(instance, value) {
    window[instance].setValue(value);
}

// captura indice de option selecionada (select)
function getIndexSelectItem(select) {
    return select.options.selectedIndex;
}