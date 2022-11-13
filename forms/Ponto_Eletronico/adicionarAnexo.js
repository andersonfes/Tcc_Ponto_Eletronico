const PARENT_DOCUMENTID = '277';

const loading = FLUIGC.loading(window);

$("#anexo").fileupload({
    dataType: 'json',
    start: () => loading.show(),
    done: (e, data) => {
        console.log('done');

        const { files } = data;

        setTimeout(async() => {
            console.log("entrou no log");
            await saveDocument(files);
            loading.hide();
        }, 400);
    },

    fail: (e, data) => {
        console.log('fail')

        FLUIGC.toast({
            title: 'Anexo: ',
            message: `Falha ao anexar o arquivo ${data.files[0].name}`,
            type: 'danger'
        });

        loading.hide();
    }
});


async function saveDocument(files) {
    for (var i in files) {
        const { name } = files[i];

        try {
            const response = $.ajax({
                async: false,
                url: '/api/public/2.0/documents/createDocument',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    documentDescription: name,
                    parentDocumentId: PARENT_DOCUMENTID,
                    inheritSecurity: false,
                    internalVisualizer: true
                })
            });

            const { documentId, version } = response.responseJSON.content;
            setCardValues(name, documentId, version);


            FLUIGC.toast({
                title: 'Anexo: ',
                message: `Arquivo ${name} foi salvo com sucesso - ${documentId}`,
                type: 'success'
            });
        } catch (error) {
            console.log('Falha ao anexar o documento', error);

            FLUIGC.toast({
                title: 'Anexo: ',
                message: `Falha ao anexar o arquivo ${name}`,
                type: 'danger'
            });
        }
    }
}

function setCardValues(name, documentId, version) {
    const [anexo_id] = document.getElementsByName('docId');
    const [anexo_version] = document.getElementsByName('anexo_version');

    anexo_id.value = documentId;
    anexo_version.value = version;
}

function visualizar() {

    var idArquivo = $('#docId').val();
    console.log(idArquivo)

    const requestData = {
        url: window.location.origin + '/api/public/2.0/documents/getDownloadURL/' + idArquivo,
        method: 'GET',
    };

    console.log(requestData)

    if (getMobile() == "false") { /**Se for Desktop. */

        $.ajax({
            async: false,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            url: requestData.url,
            type: requestData.method,
            // headers: oauth.toHeader(oauth.authorize(requestData, token)),
        }).done((response) => {
            window.open(response.content);
        });

    } else { /**Se for Mobile. */

        $.ajax({
            async: false,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            url: requestData.url,
            type: requestData.method,
            // headers: oauth.toHeader(oauth.authorize(requestData, token)),
        }).done((response) => {
            window.open("googlechrome://navigate?url=" + response.content, "_system"); /**Forma de se abrir um anexo no mobile, utilizando o Chrome */
        });
    }
}

function deleteFile(idDoc) {


    var url = "/api/public/2.0/documents/deleteDocument/" + idDoc;

    $.ajax(url, {
        async: false,
        method: "POST",
        dataType: "json",
        contentType: "application/json",

        success: function(data) {
            FLUIGC.toast({
                title: 'Sucesso: ',
                message: "Arquivo Deletado",
                type: 'success'
            });
        },
        error: function(e) {
            FLUIGC.toast({
                title: 'Erro: ',
                message: "Erro ao deletar arquivo",
                type: 'danger'
            });
            console.log(e);
        }
    });
}