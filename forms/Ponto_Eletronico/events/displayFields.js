function displayFields(form, customHTML) {

    var WKNumState = getValue("WKNumState")

    var WKUser = getValue("WKUser")

    var verificaMobile = form.getMobile();

    var data = new Date()

    log.info("***verificando o valor do WKNumState e do WKUser e do data ***")
    log.dir(WKNumState)
    log.dir(WKUser)
    log.dir(data)

    /* DESABILITA O CAMPO NOME  */
    if (WKNumState == 0 || WKNumState == 4 || WKNumState == 8 || WKNumState == 17) {
        form.setValue("nome", WKUser);
        form.setValue("colaborador_professor", WKUser);
        
        form.setEnabled('nome', false);
             
    }

    if (WKNumState == 17){
        form.setValue("colaborador", WKUser);

        form.setEnabled('colaborador', false);
    }

    if (WKNumState == 4 || WKNumState == 8 || WKNumState == 17){

        form.setEnabled('setor', false);
        form.setEnabled('unidade', false);
        form.setEnabled('dataocorrenciaIni', false);
        form.setEnabled('dataocorrenciaFin', false);
    }

    // OCULTA OS BUTTON RADIO
    if (WKNumState != 0) {
        form.setEnabled('radioTypes', false);
    }

    // OCULTA OS PAINEIS
    if (WKNumState != 8) {
        form.setVisibleById('panelGestor', false); // desabilita o painel
    } 

    if (WKNumState != 4) {
        form.setVisibleById('panelRh', false); // desabilita o painel
    }

    if (WKNumState != 17) {
        form.setVisibleById('panelColaborador', false); // desabilita o painel
    } 
    
    // ABILITA OS PAINEIS E DEIXA READONLY
    if (WKNumState == 17){
        form.setVisibleById('panelGestor', true);
        form.setVisibleById('panelRh', true);
        form.setVisibleById('panelColaborador', true);
        form.setEnabled('gestorImediato', false);
        form.setEnabled('recursosHumanos', false);
        form.setEnabled('observacao1', false);
        form.setEnabled('observacao2', false);
        form.setEnabled('data1', false);
        form.setEnabled('data2', false);
    }

   

    customHTML.append("<script>     function getMobile(){ return '" + verificaMobile + "'}; </script>");

    customHTML.append("<script>     function getState(){ return '" + WKNumState + "'}; </script>");

}