function createDataset(fields, constraints, sortFields) {

    var ds = DatasetBuilder.newDataset();

    ds.addColumn("nome")

    var filtroGrupo = DatasetFactory.createConstraint("colleagueGroupPK.groupId", "Recursos_Humanos_MT", "Recursos_Humanos_MT", ConstraintType.MUST);

    log.info("### Verificando oque tem no FiltroGrupo ###")
    log.dir(filtroGrupo)

    var datasetGrupo = DatasetFactory.getDataset("colleagueGroup", null, new Array(filtroGrupo), null);

    log.info('### Verificando oque vem no datasetGrupo ###')
    log.dir(datasetGrupo)

    for (i = 0; i < datasetGrupo.rowsCount; i++) {

        log.info("### entrou no For ###")

        var colabGrupo = datasetGrupo.getValue(i, "colleagueGroupPK.colleagueId");

        log.info("### verificando o valor do ColabGrupo ###")
        log.dir(colabGrupo)

        var datasetColaborador = DatasetFactory.getDataset("colleague", null, null, null);

        log.info("### Verificando o valor do datasetColaborador ###")
        log.dir(datasetColaborador)

        for (j = 0; j < datasetColaborador.rowsCount; j++) {

            log.info("### entrou no segundo For ###")

            var colabId = datasetColaborador.getValue(j, "colleaguePK.colleagueId");

            log.info("### entrou no segundo For ###")
            log.dir(colabId)

            if (colabGrupo == colabId) {

                log.info("### Verificando se entrou no if1 ###")

                // if(nameGrupo == "Recursos_Humanos_MT"){
                // 	log.info("### Verificando se entrou no if 2 ###")	

                // 	log.info("### Verificando o valor do colabNome ###")
                var colabNome = datasetColaborador.getValue(j, "colleagueName");
                log.dir(colabNome)

                // }

                ds.addRow(new Array(colabNome));

            }

        }
    }

    return ds;
}