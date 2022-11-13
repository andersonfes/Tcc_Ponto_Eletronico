function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();

    var setor
    log.info("Entrou na constraints")
    log.dir(constraints);

    dataset.addColumn('setor');

    var constraints = new Array();
    // constraints.push(DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST));

    var ds_cadastro_setores = DatasetFactory.getDataset('DSsetoresAuxiliar_Mt', null, null, null);

    log.info("Entrou no dataset")
    log.dir(ds_cadastro_setores);
    for (var i = 0; i < ds_cadastro_setores.rowsCount; i++) {
        var documentId = ds_cadastro_setores.getValue(i, 'metadata#id');
        var documentVersion = ds_cadastro_setores.getValue(i, 'metadata#version');

        var constraintsArray = new Array(
            DatasetFactory.createConstraint('tablename', 'table_documentos', 'table_documentos', ConstraintType.MUST),
            DatasetFactory.createConstraint('metadata#id', documentId, documentId, ConstraintType.MUST),
            DatasetFactory.createConstraint('metadata#version', documentVersion, documentVersion, ConstraintType.MUST),
            DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST)
        );

        log.info("Entrou no constraintsArray")
        log.dir(constraintsArray);

        var dsSetores = DatasetFactory.getDataset('DSsetoresAuxiliar_Mt', null, constraintsArray, null);

        for (var j = 0; j < dsSetores.rowsCount; j++) {
            var setor = dsSetores.getValue(j, 'setor');

            dataset.addRow(new Array(setor));

        }
    }

    log.info("Entrou no dsSetores")
    log.dir(dsSetores);

    return dataset;
}


function defineStructure() {
    dataset.addColumn('setor');


    setKey(["CHAVE", "setor"]);
    addIndex(["CHAVE"]);
    addIndex(["setor"]);
}

function onSync(lastSyncDate) {

}

function onMobileSync(user) {

}