function validateForm(form) {

    var numstate = getValue('WKNumState');

    var mensagem = '';

    if (form.getValue('nome') == '') {
        mensagem += 'O campo, Nome do colaborador não foi preenchido <br>'
    };

    if (form.getValue('setor') == '') {
        mensagem += 'O campo, Setor não foi preenchido <br>'
    }

    if (form.getValue('unidade') == '') {
        mensagem += 'O campo, unidade não foi preenchido <br>'
    }

    if (form.getValue('dataocorrenciaIni') == '') {
        mensagem += 'O campo, Data da Ocorrência Inicial não foi preenchido <br>'
    }

    if (form.getValue('dataocorrenciaFin') == '') {
        mensagem += 'O campo, Data da Ocorrência Final não foi preenchido <br>'
    }


    if (numstate == 8 && form.getValue('aprovacao_Gestor') == '') {

        mensagem += 'O campo, Aprovação não foi selecionado <br>'
    }

    if (numstate == 8 && form.getValue('data1') == '') {

        mensagem += 'O campo, Data não foi selecionado <br>'
    }

    if (numstate == 8 && form.getValue('gestorImediato') == '') {

        mensagem += 'O campo, Assinatura do Gestor imediato não foi selecionado <br>'
    }

    if (numstate == 4 && form.getValue('aprovacao_Rh') == '') {

        mensagem += 'O campo, Aprovação não foi selecionado <br>'
    }

    if (numstate == 4 && form.getValue('data2') == '') {

        mensagem += 'O campo, Data não foi selecionado <br>'
    }

    if (numstate == 4 && form.getValue('recursosHumanos') == '') {

        mensagem += 'O campo, Assinatura do RH não foi selecionado <br>'
    }

    if (numstate == 17 && form.getValue('colaborador') == '') {

        mensagem += 'O campo, Aprovação não foi selecionado <br>'
    }

    if (numstate == 17 && form.getValue('data3') == '') {

        mensagem += 'O campo, Data não foi selecionado <br>'
    }

    if (numstate == 17 && form.getValue('recursosHumanos') == '') {

        mensagem += 'O campo, Assinatura do Colaborador não foi selecionado <br>'
    }



    if (form.getValue("radioTypes") == "radio1") {
        if (form.getValue('anexo_version') == null) {
            mensagem += 'Não foi anexado um arquivo<br>'
        }

        if (form.getValue('justificativa1') == "") {
            mensagem += 'O campo, Justificativa não foi preenchido <br>'
        }

    }

    if (form.getValue("radioTypes") == "radio2") {
        if (form.getValue('entrada2') == "") {
            mensagem += 'O campo, Entrada não foi preenchido<br>'
        }

        if (form.getValue('intervaloSaida2') == "") {
            mensagem += 'O campo, Intervalo(saida) não foi preenchido<br>'
        }

        if (form.getValue('intervaloEntrada2') == "") {
            mensagem += 'O campo, Intervalo(entrada) não foi preenchido <br>'
        }

        if (form.getValue('saida2') == "") {
            mensagem += 'O campo, Saída não foi preenchido<br>'
        }

        if (form.getValue('horarioNormal') == "") {
            mensagem += 'O campo, Reposição não foi preenchido<br>'
        }

        if (form.getValue('reposicao') == "") {
            mensagem += 'O campo, Reposição não foi preenchido<br>'
        }

        if (form.getValue('justificativa2') == "") {
            mensagem += 'O campo, Justificativa não foi preenchido <br>'
        }

    }

    if (form.getValue("radioTypes") == "radio3") {
        if (form.getValue('entrada3') == "") {
            mensagem += 'O campo, Entrada não foi preenchido<br>'
        }

        if (form.getValue('intervaloSaida3') == "") {
            mensagem += 'O campo, Intervalo(saida) não foi preenchido<br>'
        }

        if (form.getValue('intervaloEntrada3') == "") {
            mensagem += 'O campo, Intervalo(entrada) não foi preenchido <br>'
        }

        if (form.getValue('saida3') == "") {
            mensagem += 'O campo, Saída não foi preenchido<br>'
        }

        if (form.getValue('justificativa3') == "") {
            mensagem += 'O campo, Justificativa não foi preenchido <br>'
        }

    }

    if (form.getValue("radioTypes") == "radio4") {
        if (form.getValue('entrada4') == "") {
            mensagem += 'O campo, Entrada não foi preenchido<br>'
        }

        if (form.getValue('intervaloSaida4') == "") {
            mensagem += 'O campo, Intervalo(saida) não foi preenchido<br>'
        }

        if (form.getValue('intervaloEntrada4') == "") {
            mensagem += 'O campo, Intervalo(entrada) não foi preenchido <br>'
        }

        if (form.getValue('saida4') == "") {
            mensagem += 'O campo, Saída não foi preenchido<br>'
        }

        if (form.getValue('justificativa4') == "") {
            mensagem += 'O campo, Justificativa não foi preenchido <br>'
        }

    }

    if (form.getValue("radioTypes") == "radio5") {
        if (form.getValue('entrada5') == "") {
            mensagem += 'O campo, Entrada não foi preenchido<br>'
        }

        if (form.getValue('intervaloSaida5') == "") {
            mensagem += 'O campo, Intervalo(saida) não foi preenchido<br>'
        }

        if (form.getValue('intervaloEntrada5') == "") {
            mensagem += 'O campo, Intervalo(entrada) não foi preenchido <br>'
        }

        if (form.getValue('saida5') == "") {
            mensagem += 'O campo, Saída não foi preenchido<br>'
        }

        if (form.getValue('justificativa5') == "") {
            mensagem += 'O campo, Justificativa não foi preenchido <br>'
        }

    }

    if (form.getValue("radioTypes") == "radio6") {

        if (form.getValue('dataCompensacao') == "") {
            mensagem += 'O campo, Data de Compensação não foi preenchido<br>'
        }

        if (form.getValue('entrada6') == "") {
            mensagem += 'O campo, Entrada não foi preenchido<br>'
        }

        if (form.getValue('intervaloSaida6') == "") {
            mensagem += 'O campo, Intervalo(saida) não foi preenchido<br>'
        }

        if (form.getValue('intervaloEntrada6') == "") {
            mensagem += 'O campo, Intervalo(entrada) não foi preenchido <br>'
        }

        if (form.getValue('saida6') == "") {
            mensagem += 'O campo, Saída não foi preenchido<br>'
        }

        if (form.getValue('justificativa6') == "") {
            mensagem += 'O campo, Justificativa não foi preenchido <br>'
        }

    }

    if (form.getValue("radioTypes") == "radio7") {
        if (form.getValue('entrada7') == "") {
            mensagem += 'O campo, Entrada não foi preenchido<br>'
        }

        if (form.getValue('intervaloSaida7') == "") {
            mensagem += 'O campo, Intervalo(saida) não foi preenchido<br>'
        }

        if (form.getValue('intervaloEntrada8') == "") {
            mensagem += 'O campo, Intervalo(entrada) não foi preenchido <br>'
        }

        if (form.getValue('saida7') == "") {
            mensagem += 'O campo, Saída não foi preenchido<br>'
        }

        if (form.getValue('justificativa7') == "") {
            mensagem += 'O campo, Justificativa não foi preenchido <br>'
        }

    }


    if (mensagem != '') {
        throw mensagem
    }

}