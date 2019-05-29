//                                  RELATÓRIO MANUAL

const express = require('express');
const router = express.Router();

const pdfMake = require('../pdfmake/pdfmake');
const vfsFonts = require('../pdfmake/vfs_fonts');

pdfMake.vfs = vfsFonts.pdfMake.vfs;

router.post('/pdf', (req, res, next)=>{
    //res.send('PDF');
    console.log(name);
    console.log(tipoRelatorio);

    const dataRelatorio = req.body.dataRelatorio;
    var tipoRelatorio = parseInt(req.body.tipoRelatorio);
    var name = "";
    var col = "";
    var query = "";
    var resultado = "";
    console.log(name);
    console.log(tipoRelatorio);

    if(tipoRelatorio == 1) {
        name = "Requisições";
        col = "Request";
        query = {startDate: dataRelatorio};
    } else if(tipoRelatorio == 2){
        name = "Ocorrências";
        col = "Incident";
        query = {incidentCreate: dataRelatorio};
    } else if(tipoRelatorio == 3){
        name = "Eventos";
        col = "Event";
        query = {startDate: dataRelatorio};
    } else if(tipoRelatorio == 4){
        name = "Entradas e Saídas";
        col = "Hours";
        query = {overtimeIn: dataRelatorio};
    } else if(tipoRelatorio == 5){
        // name = "Estatísticas";
        // col = "Estatistica"
        // query = {startDate: dataRelatorio};
    }
    console.log(name);
    console.log(tipoRelatorio);
    console.log(query);
    console.log(col);
   
    router.get('/', function (req, res, next) {
        res.render('index', { title: 'Express' });
      });
        router.post("/pdf", (req, res, next) => {
    
        const client = new MongoClient(uri, { useNewUrlParser: true });
        client.connect(err => {
          const collection = client.db("VorTech").collection(col);
          collection.find(query).toArray((err, result) => {
            if(err){
              console.log(err);
              res.send(500);
              client.close();
            } else {
              res.send(result);
              client.close();
            }
    
          })
        });
      });
      module.exports = router;
   
    console.log(resultado);

    console.log("resultado: " + resultado);


    
    var documentDefinition = {
        content: [
                    {
                        stack: [
                            `Relatório de ${name}` ,
                            {text: `Relatório Diário das ${name} do dia ${dataRelatorio}`, style: 'subheader'},
                        ],
                        style: 'header'
                    },
                    {
                        text: [
                            'Relatórios requisições feitas de cada sala e material.\n',
                        ]
                    },
                    {
                        stack: [
                            'I\'m not sure yet if this is the desired behavior. I find it a better approach however. One thing to be considered in the future is an explicit layout property called inheritMargin which could opt-in the inheritance.\n\n',
                            {
                                fontSize: 15,
                                text: [
                                    'Currently margins for ',
                                    /* the following margin definition doesn't change anything */
                                    {text: 'inlines', margin: 20},
                                    ' are ignored\n\n'
                                ],
                            },
                            ],
                        margin: [0, 20, 0, 0],
                        alignment: 'justify'
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

    var pdfname = "relatorio"+name+"_"+dataRelatorio+".pdf"
    const pdfDoc = pdfMake.createPdf(documentDefinition);
    pdfDoc.getBase64((data)=>{
        res.writeHead(200, 
        {
            'Content-Type': 'application/pdf',
            'Content-Disposition':'attachment;filename=' + pdfname
        });

        const download = Buffer.from(data.toString('utf-8'), 'base64');
        res.end(download);
    });

});


module.exports = router;