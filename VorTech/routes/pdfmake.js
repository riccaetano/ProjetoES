//                                  RELATÓRIO MANUAL

const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user:user@ips-gwakx.gcp.mongodb.net/test?retryWrites=true";
const pdfMake = require('../pdfmake/pdfmake');
const vfsFonts = require('../pdfmake/vfs_fonts');

pdfMake.vfs = vfsFonts.pdfMake.vfs;

router.post('/pdf', (req, res, next) => {
    //res.send('PDF');
    const dataRelatorio = req.body.dataRelatorio;
    var tipoRelatorio = parseInt(req.body.tipoRelatorio);
    var name = "";
    var col = "";
    var query = "";
    var topTable=[];
    console.log(name);
    console.log(tipoRelatorio);

    if (tipoRelatorio == 1) {
        name = "Requisições";
        col = "Request";
        query = { startDate: dataRelatorio };
        const client = new MongoClient(uri, { useNewUrlParser: true });
        client.connect(err => {
            const collection = client.db("VorTech").collection("Request");
            collection.find({}).toArray((err, result) => {
                if (err) {
                    console.log(err);
                    client.close();
                } else {
                    console.log(result);
                    // resultado = result.classRoom;
                    var top1 = 0;
                    var salaTop1="";
                    var top2 = 0;
                    var salaTop2="";
                    var top3 = 0;
                    var salaTop3="";
                    var top4 = 0;
                    var salaTop4="";
                    var top5 = 0;
                    var salaTop5="";
                    var frequente = 0;
                    var classRoom ="";
                    console.log(result.length)
                    for (var i = 0; i < result.length; i++) {
                        classRoom = result[i].classRoom;
                        console.log(classRoom);
                        frequente = 0;
                        for (j = 0; j < result.length; j++) {

                            if (result[j].classRoom = classRoom) {
                                frequente++;
                            }
                            if (frequente > top1) {
                                top1 = frequente;
                                salaTop1 = classRoom;
                            } else if (frequente < top2 && salaTop2 !=salaTop1) {
                                top2 = frequente;
                                salaTop2 = classRoom;
                            } else if (frequente < top1 && frequente < top2 && salaTop3 !=salaTop1 && salaTop3 !=salaTop2) {
                                top3 = frequente;
                                salaTop3 = classRoom;
                            } else if (frequente < top1 && frequente < top2 && frequente < top3 && salaTop4 !=salaTop1 && salaTop4 !=salaTop2 && salaTop4 != salaTop3) {
                                top4 = frequente;
                                salaTop4 = classRoom;
                            } else if (frequente < top1 && frequente < top2 && frequente < top3 && frequente < top4 && salaTop5 !=salaTop1 && salaTop5 !=salaTop2 && salaTop5 != salaTop3 && salaTop5 !=salaTop1 && salaTop5 !=salaTop2) {
                                top5 = frequente;
                                salaTop5 = classRoom;
                            }
                        }
                    }
                    topTable = [
                        { Top: '1', Sala: salaTop1, Requisições: top1 },
                        { Top: '2', Sala: salaTop2, Requisições: top2 },
                        { Top: '3', Sala: salaTop3, Requisições: top3 },
                        { Top: '4', Sala: salaTop4, Requisições: top4 },
                        { Top: '5', Sala: salaTop5, Requisições: top5 }
                    ];
                    console.log(topTable);
            
                    client.close();
                }
            })
        });

       
        var documentDefinition = {
            content: [
                {
                    stack: [
                        `Relatório de ${name}`,
                        { text: `Relatório Diário das ${name} do dia ${dataRelatorio}`, style: 'subheader' },
                    ],
                    style: 'header'
                },
                {
                    text: [
                        `Este relatório contem informações sobre as requisições feitas no dia ${dataRelatorio}, assim como um resume sobre as salas e materiais mais requisitados`,
                    ]
                },
                'Salas mais requisitadas: ',
                {
                    style: 'tableExample',
                    table: {
                        headerRows: 1,
                        widths: [ '*', 'auto', 100, '*', '*' ],
                        body: topTable
                    }
                }
               
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    alignment: 'right',
                    margin: [0, 190, 0, 80]
                },
                subheader: {
                    fontSize: 14
                },
                superMargin: {
                    margin: [20, 0, 40, 0],
                    fontSize: 15
                }
            }
        };


    } else if (tipoRelatorio == 2) {
        name = "Ocorrências";
        col = "Incident";
        query = { incidentCreate: dataRelatorio };
    } else if (tipoRelatorio == 3) {
        name = "Eventos";
        col = "Event";
        query = { startDate: dataRelatorio };
    } else if (tipoRelatorio == 4) {
        name = "Entradas e Saídas";
        col = "Hours";
        query = { overtimeIn: dataRelatorio };
    } else if (tipoRelatorio == 5) {
        // name = "Estatísticas";
        // col = "Estatistica"
        // query = {startDate: dataRelatorio};
    }
    console.log(name);
    console.log(tipoRelatorio);
    console.log(query);
    console.log(col);




    // var documentDefinition = {
    //     content: [
    //         {
    //             stack: [
    //                 `Relatório de ${name}`,
    //                 { text: `Relatório Diário das ${name} do dia ${dataRelatorio}`, style: 'subheader' },
    //             ],
    //             style: 'header'
    //         },
    //         {
    //             text: [
    //                 'Relatórios requisições feitas de cada sala e material.\n',
    //             ]
    //         },
    //         {
    //             stack: [
    //                 `Salas requisitadas: ${resultado}`,
    //             ],
    //             margin: [0, 20, 0, 0],
    //             alignment: 'justify'
    //         }
    //     ],
    //     styles: {
    //         header: {
    //             fontSize: 18,
    //             bold: true,
    //             alignment: 'right',
    //             margin: [0, 190, 0, 80]
    //         },
    //         subheader: {
    //             fontSize: 14
    //         },
    //         superMargin: {
    //             margin: [20, 0, 40, 0],
    //             fontSize: 15
    //         }
    //     }

    // };

    var pdfname = "relatorio" + name + "_" + dataRelatorio + ".pdf"
    const pdfDoc = pdfMake.createPdf(documentDefinition);
    pdfDoc.getBase64((data) => {
        res.writeHead(200,
            {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment;filename=' + pdfname
            });

        const download = Buffer.from(data.toString('utf-8'), 'base64');
        res.end(download);
    });

});


module.exports = router;