var express = require('express');
var app = express();


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
};



 
app.use(allowCrossDomain);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
 response.json({status: 200, msg: "Periodo de prueba terminado, favor cancelar factura"});
});

app.post('/santander', function(request, response) {
 response.json([

{
                "idMessage": "102630",
                "type": 1,
                "shortMessage": "Alerta de transacción internacional: Visa-5623",
                "longMessage": "Se denegó una transacción internacional por $1650, ya que excede el monto definido en su perfil.",
                "postdate": "2020-10-10T00:00:00.000Z",
                "state": 3,
                "bulb": 4,
                "idEntity": 1,
                "appends": [{
                                "id": "1011",
                                "fields": [{
                                                "tag": "Comercio",
                                                "value": "Macy's",
                                                "type": "STRING",
                                                "symbol": ""
                                },
                                {
                                                "tag": "Monto",
                                                "value": "1650.0",
                                                "type": "FLOAT",
                                                "symbol": "$"
                                },
                                {
                                                "tag": "Hora",
                                                "value": "2017-05-19 12:18:15",
                                                "type": "DATE",
                                                "symbol": ""
                                }]
                }],
                "services": {
                                "E1-MA02": "Modificar Perfil",
                                "E1-MA03": "Llamarme",
                                "E1-MN03": "Transacción no Reconocida"
                }
},
{
                "idMessage": "1024444",
                "type": 1,
                "shortMessage": "Alerta de transacción internacional: Visa-5623",
                "longMessage": "Se denegó una transacción internacional por $1650, ya que excede el monto definido en su perfil.",
                "postdate": "2020-10-10T00:00:00.000Z",
                "state": 2,
                "bulb": 4,
                "idEntity": 1,
                "appends": [{
                                "id": "1011",
                                "fields": [{
                                                "tag": "Comercio",
                                                "value": "Macy's",
                                                "type": "STRING",
                                                "symbol": ""
                                },
                                {
                                                "tag": "Monto",
                                                "value": "1650.0",
                                                "type": "FLOAT",
                                                "symbol": "$"
                                },
                                {
                                                "tag": "Hora",
                                                "value": "2017-05-19 12:18:15",
                                                "type": "DATE",
                                                "symbol": ""
                                }]
                }],
                "services": {
                                "CAMBIAR---FASE 2: Visa 5623---R7": "Modificar Perfil",
                                "E1-MA03": "Llamarme",
                                "E1-MN03": "Transacción no Reconocida"
                }
},
{
                "idMessage": "102632",
                "type": 1,
                "shortMessage": "Alerta de transacción en ATM: Súper Nómina-2084",
                "longMessage": "Se denegó una transacción realizada en un ATM de Plaza Delta por $2000, por su configuración del perfil de su producto en este canal.",
                "postdate": "2020-10-10T00:00:00.000Z",
                "state": 2,
                "bulb": 4,
                "idEntity": 1,
                "appends": [{
                                "id": "1011",
                                "fields": [{
                                                "tag": "ATM",
                                                "value": "Plaza Delta",
                                                "type": "STRING",
                                                "symbol": ""
                                },
                                {
                                                "tag": "Monto",
                                                "value": "2000.0",
                                                "type": "FLOAT",
                                                "symbol": "$"
                                },
                                {
                                                "tag": "Hora",
                                                "value": "2017-05-20 18:40:10",
                                                "type": "DATE",
                                                "symbol": ""
                                }]
                }],
                "services": {
                                "CAMBIAR---FASE 3: Súper Nómina---R13": "Modificar Perfil",
                                "E1-MA03": "Llamarme",
                                "E1-MN03": "Transacción no Reconocida"
                }
},
{
                "idMessage": "102634",
                "type": 1,
                "shortMessage": "Alerta de transacción en Casino: Amex-2514",
                "longMessage": "Se denegó una transacción realizada en el Casino El Juego $45000, ya que tiene bloqueado en su perfil el uso de su producto en Casinos.",
                "postdate": "2020-10-10T00:00:00.000Z",
                "state": 2,
                "bulb": 4,
                "idEntity": 1,
                "appends": [{
                                "id": "1011",
                                "fields": [{
                                                "tag": "Comercio",
                                                "value": "Casino El Juego",
                                                "type": "STRING",
                                                "symbol": ""
                                },
                                {
                                                "tag": "Monto",
                                                "value": "45000.0",
                                                "type": "FLOAT",
                                                "symbol": "$"
                                },
                                {
                                                "tag": "Hora",
                                                "value": "2017-05-23 15:35:20",
                                                "type": "DATE",
                                                "symbol": ""
                                }]
                }],
                "services": {
                                "CAMBIAR---FASE 1: Amex 2514---R5": "Modificar Perfil",
                                "E1-MA03": "Llamarme",
                                "E1-MN03": "Transacción no Reconocida"
                }
},


  {
    "idMessage": "102391",
    "type": 3,
    "shortMessage": "Su salario ha sido depositado",
    "longMessage": "Estimado Sr. Williams, le notificamos que su salario fue depositado a la cuenta #24516787643 por un total de $1100,000. Gracias",
    "postdate": "2020-09-07T19:45:09.600Z",
    "state": 2,
    "bulb": 4,
    "idEntity": 1,
    "appends": [],
    "services": {
      "E1-MP01": "Enviarme más Información",
      "E1-MP03": "Activar",
      "E1-MP04": "No estoy interesado"
    }
  },
  {
    "idMessage": "102392",
    "type": 3,
    "shortMessage": "Recordatorio: pago de préstamo vehicular",
    "longMessage": "Estimado Sr. Williams, queremos recordarle  que el pago de su préstamo vehicular de $13,500 vence el 28/05/2017 ",
    "postdate": "2020-09-07T19:45:09.630Z",
    "state": 2,
    "bulb": 4,
    "idEntity": 1,
    "appends": [],
    "services": {
      "E1-MP01": "Enviarme más Información",
      "E1-MP03": "Activar",
      "E1-MP04": "No estoy interesado"
    }
  },
  {
    "idMessage": "102551",
    "type": 1,
    "shortMessage": "Alerta de transacciones: Mi Visa-5623",
    "longMessage": "Durante los últimos 40 minutos se han realizado un total de 3 transacciones con su tarjeta en Plaza Comercial Caracoles.",
    "postdate": "2020-10-10T00:00:00.000Z",
    "state": 2,
    "bulb": 4,
    "idEntity": 1,
    "appends": [
      {
        "id": "1654",
        "fields": [
          {
            "tag": "Comercio",
            "value": "Gasolinera Pinares",
            "type": "STRING",
            "symbol": ""
          },
          {
            "tag": "Monto",
            "value": "900.0",
            "type": "FLOAT",
            "symbol": "$"
          },
          {
            "tag": "Hora",
            "value": "2017-05-10 17:21:15",
            "type": "DATE",
            "symbol": ""
          }
        ]
      },
      {
        "id": "1655",
        "fields": [
          {
            "tag": "Comercio",
            "value": "Walmart",
            "type": "STRING",
            "symbol": ""
          },
          {
            "tag": "Monto",
            "value": "12132.0",
            "type": "FLOAT",
            "symbol": "$"
          },
          {
            "tag": "Hora",
            "value": "2017-05-10 17:33:55",
            "type": "DATE",
            "symbol": ""
          }
        ]
      },
      {
        "id": "1656",
        "fields": [
          {
            "tag": "Comercio",
            "value": "Best Buy",
            "type": "STRING",
            "symbol": ""
          },
          {
            "tag": "Monto",
            "value": "22410.0",
            "type": "FLOAT",
            "symbol": "$"
          },
          {
            "tag": "Hora",
            "value": "2017-05-10 17:41:39",
            "type": "DATE",
            "symbol": ""
          }
        ]
      }
    ],
    "services": {
      "E1-MA03": "Llamarme",
      "E1-MA04": "Reconozco Transacciones",
      "E1-MM01": "Bloquear Tarjeta"
    }
  },
  {
    "idMessage": "102561",
    "type": 1,
    "shortMessage": "Alerta de transacciones: Súper Nómina-2084",
    "longMessage": "Una transacción de $900 se efectuó en una gasolinera, seguida de otra transacción de $24,300 en una tienda electrónica.",
    "postdate": "2020-10-10T00:00:00.000Z",
    "state": 2,
    "bulb": 4,
    "idEntity": 1,
    "appends": [
      {
        "id": "1345",
        "fields": [
          {
            "tag": "Comercio",
            "value": "Gasolinera El Arroyo",
            "type": "STRING",
            "symbol": ""
          },
          {
            "tag": "Monto",
            "value": "900.0",
            "type": "FLOAT",
            "symbol": "$"
          },
          {
            "tag": "Hora",
            "value": "2017-05-11 09:52:15",
            "type": "DATE",
            "symbol": ""
          }
        ]
      },
      {
        "id": "1346",
        "fields": [
          {
            "tag": "Comercio",
            "value": "Best Buy",
            "type": "STRING",
            "symbol": ""
          },
          {
            "tag": "Monto",
            "value": "24300.0",
            "type": "FLOAT",
            "symbol": "$"
          },
          {
            "tag": "Hora",
            "value": "2017-05-11 09:54:55",
            "type": "DATE",
            "symbol": ""
          }
        ]
      }
    ],
    "services": {
      "E1-MA03": "Llamarme",
      "E1-MA04": "Reconozco Transacciones",
      "E1-MM01": "Bloquear Tarjeta"
    }
  },
  {
    "idMessage": "102569",
    "type": 1,
    "shortMessage": "Alerta de transacciones: Cajero automático",
    "longMessage": "Durante la última hora se han realizado 3 retiros de efectivo en cajeros automáticos por un monto superior a los $16,200.",
    "postdate": "2020-10-10T00:00:00.000Z",
    "state": 3,
    "bulb": 4,
    "idEntity": 1,
    "appends": [
      {
        "id": "1056",
        "fields": [
          {
            "tag": "ATM",
            "value": "SmartBank",
            "type": "STRING",
            "symbol": ""
          },
          {
            "tag": "Monto",
            "value": "3000.0",
            "type": "FLOAT",
            "symbol": "$"
          },
          {
            "tag": "Hora",
            "value": "2017-05-12 11:11:15",
            "type": "DATE",
            "symbol": ""
          }
        ]
      },
      {
        "id": "1057",
        "fields": [
          {
            "tag": "ATM",
            "value": "Banco Universal",
            "type": "STRING",
            "symbol": ""
          },
          {
            "tag": "Monto",
            "value": "5500.0",
            "type": "FLOAT",
            "symbol": "$"
          },
          {
            "tag": "Hora",
            "value": "2017-05-12 11:22:03",
            "type": "DATE",
            "symbol": ""
          }
        ]
      },
      {
        "id": "1058",
        "fields": [
          {
            "tag": "ATM",
            "value": "Banco Central",
            "type": "STRING",
            "symbol": ""
          },
          {
            "tag": "Monto",
            "value": "7700.0",
            "type": "FLOAT",
            "symbol": "$"
          },
          {
            "tag": "Hora",
            "value": "2017-05-12 11:34:19",
            "type": "DATE",
            "symbol": ""
          }
        ]
      }
    ],
    "services": {
      "E1-MA03": "Llamarme",
      "E1-MA04": "Reconozco Transacciones",
      "E1-MM01": "Bloquear Tarjeta",
      "E1-MM02": "Bloquear ATM"
    }
  },
  {
    "idMessage": "102577",
    "type": 2,
    "shortMessage": "Alerta de transacciones: Mi Amex-2514",
    "longMessage": "En las últimas 2 horas se han efectuado 2 transacciones dentro de Estados Unidos, una en Los Ángeles y otra en New York.",
    "postdate": "2020-10-10T00:00:00.000Z",
    "state": 2,
    "bulb": 4,
    "idEntity": 1,
    "appends": [
      {
        "id": "1001",
        "fields": [
          {
            "tag": "Comercio",
            "value": "Microsoft Store California",
            "type": "STRING",
            "symbol": ""
          },
          {
            "tag": "Monto",
            "value": "1840.0",
            "type": "FLOAT",
            "symbol": "$"
          },
          {
            "tag": "Hora",
            "value": "2017-05-14 10:14:19",
            "type": "DATE",
            "symbol": ""
          }
        ]
      },
      {
        "id": "1002",
        "fields": [
          {
            "tag": "Comercio",
            "value": "Macys New York",
            "type": "STRING",
            "symbol": ""
          },
          {
            "tag": "Monto",
            "value": "965.0",
            "type": "FLOAT",
            "symbol": "$"
          },
          {
            "tag": "Hora",
            "value": "2017-05-14 11:04:05",
            "type": "DATE",
            "symbol": ""
          }
        ]
      }
    ],
    "services": {
      "E1-MA01": "Bloquear Tarjeta",
      "E1-MA03": "Llamarme",
      "E1-MA04": "Reconozco Transacciones"
    }
  },
  {
    "idMessage": "102592",
    "type": 2,
    "shortMessage": "Alerta de transferencia por banca electrónica: Súper Cuenta-4810",
    "longMessage": "Una transferencia fue realizada a través de la banca electrónica a un beneficiario que no se encuentra registrado dentro de su lista de favoritos.",
    "postdate": "2020-10-10T00:00:00.000Z",
    "state": 2,
    "bulb": 4,
    "idEntity": 1,
    "appends": [
      {
        "id": "1011",
        "fields": [
          {
            "tag": "Cuenta",
            "value": "200-03-170-002876-9",
            "type": "STRING",
            "symbol": ""
          },
          {
            "tag": "Monto",
            "value": "10800.0",
            "type": "FLOAT",
            "symbol": "$"
          },
          {
            "tag": "Hora",
            "value": "2017-05-16 16:11:15",
            "type": "DATE",
            "symbol": ""
          }
        ]
      }
    ],
    "services": {
      "E1-MA02": "Bloquear Cuenta",
      "E1-MA03": "Llamarme",
      "E1-MN03": "Reconozco Transferencia"
    }
  },
  {
    "idMessage": "102630",
    "type": 2,
    "shortMessage": "Alerta de transacción internacional: Visa-5623",
    "longMessage": "Se denegó una transacción internacional por $1650, ya que excede el monto definido en su perfil.",
    "postdate": "2020-10-10T00:00:00.000Z",
    "state": 2,
    "bulb": 4,
    "idEntity": 1,
    "appends": [
      {
        "id": "1011",
        "fields": [
          {
            "tag": "Comercio",
            "value": "Macy’s",
            "type": "STRING",
            "symbol": ""
          },
          {
            "tag": "Monto",
            "value": "1650.0",
            "type": "FLOAT",
            "symbol": "$"
          },
          {
            "tag": "Hora",
            "value": "2017-05-19 12:18:15",
            "type": "DATE",
            "symbol": ""
          }
        ]
      }
    ],
    "services": {
      "E1-MA02": "Modificar Perfil",
      "E1-MA03": "Llamarme",
      "E1-MN03": "Transacción no Reconocida"
    }
  },
  {
    "idMessage": "102632",
    "type": 2,
    "shortMessage": "Alerta de transacción en ATM: Súper Nómina-2084",
    "longMessage": "Se denegó una transacción realizada en un ATM de Plaza Delta por $2000, ya que tiene bloqueado en su perfil el uso de su producto en este canal.",
    "postdate": "2020-10-10T00:00:00.000Z",
    "state": 2,
    "bulb": 4,
    "idEntity": 1,
    "appends": [
      {
        "id": "1011",
        "fields": [
          {
            "tag": "ATM",
            "value": "Plaza Delta",
            "type": "STRING",
            "symbol": ""
          },
          {
            "tag": "Monto",
            "value": "2000.0",
            "type": "FLOAT",
            "symbol": "$"
          },
          {
            "tag": "Hora",
            "value": "2017-05-20 18:40:10",
            "type": "DATE",
            "symbol": ""
          }
        ]
      }
    ],
    "services": {
      "E1-MA02": "Modificar Perfil",
      "E1-MA03": "Llamarme",
      "E1-MN03": "Transacción no Reconocida"
    }
  },
  {
    "idMessage": "102634",
    "type": 2,
    "shortMessage": "Alerta de transacción en Casino: Amex-2514",
    "longMessage": "Se denegó una transacción realizada en el Casino El Juego $45000, ya que tiene bloqueado en su perfil el uso de su producto en Casinos.",
    "postdate": "2020-10-10T00:00:00.000Z",
    "state": 2,
    "bulb": 4,
    "idEntity": 1,
    "appends": [
      {
        "id": "1011",
        "fields": [
          {
            "tag": "Comercio",
            "value": "Casino El Juego",
            "type": "STRING",
            "symbol": ""
          },
          {
            "tag": "Monto",
            "value": "45000.0",
            "type": "FLOAT",
            "symbol": "$"
          },
          {
            "tag": "Hora",
            "value": "2017-05-23 15:35:20",
            "type": "DATE",
            "symbol": ""
          }
        ]
      }
    ],
    "services": {
      "E1-MA02": "Modificar Perfil",
      "E1-MA03": "Llamarme",
      "E1-MN03": "Transacción no Reconocida"
    }
  },
  {
    "idMessage": "102596",
    "type": 5,
    "shortMessage": "¿Deseas saber cuándo ocurren cambios en la tasa de ahorro?",
    "longMessage": "¿Deseas saber cuándo ocurren cambios en la tasa de ahorro? Presione el botón \"Opciones\" para activarlo.",
    "postdate": "2020-10-10T00:00:00.000Z",
    "state": 2,
    "bulb": 4,
    "idEntity": 1,
    "appends": [],
    "services": {
      "E1-MP01": "Enviarme más Información",
      "E1-MP03": "Activar",
      "E1-MP04": "No estoy interesado"
    }
  },
  {
    "idMessage": "102597",
    "type": 5,
    "shortMessage": "¿Deseas saber cuándo ocurren cambios en la tasa de ahorro?",
    "longMessage": "¿Deseas saber cuándo ocurren cambios en la tasa de ahorro? Presione el botón \"Opciones\" para activarlo.",
    "postdate": "2020-10-10T00:00:00.000Z",
    "state": 2,
    "bulb": 4,
    "idEntity": 1,
    "appends": [],
    "services": {
      "E1-MP01": "Enviarme más Información",
      "E1-MP03": "Activar",
      "E1-MP04": "No estoy interesado"
    }
  },
  {
    "idMessage": "102600",
    "type": 2,
    "shortMessage": "Alerta de transacciones: Mi Visa",
    "longMessage": "Se realizó una transacción en un comercio que se encuentra fuera de su horario de servicio.",
    "postdate": "2020-10-10T00:00:00.000Z",
    "state": 3,
    "bulb": 4,
    "idEntity": 1,
    "appends": [
      {
        "id": "1022",
        "fields": [
          {
            "tag": "Cuenta",
            "value": "Pandora",
            "type": "STRING",
            "symbol": ""
          },
          {
            "tag": "Monto",
            "value": "17370.0",
            "type": "FLOAT",
            "symbol": "$"
          },
          {
            "tag": "Hora",
            "value": "2017-05-16 23:52:00",
            "type": "DATE",
            "symbol": ""
          }
        ]
      }
    ],
    "services": {
      "E1-MA01": "Bloquear Tarjeta",
      "E1-MA03": "Llamarme",
      "E1-MA04": "Reconozco Transacciones"
    }
  },
  {
    "idMessage": "102606",
    "type": 4,
    "shortMessage": "¿Deseas saber cuándo ocurren cambios en la tasa de ahorro?",
    "longMessage": "¿Deseas saber cuándo ocurren cambios en la tasa de ahorro? Presione el botón \"Opciones\" para activarlo.",
    "postdate": "2020-10-10T00:00:00.000Z",
    "state": 2,
    "bulb": 4,
    "idEntity": 1,
    "appends": [],
    "services": {
      "E1-MP01": "Enviarme más Información",
      "E1-MP03": "Activar",
      "E1-MP04": "No estoy interesado"
    }
  },
  {
    "idMessage": "102610",
    "type": 4,
    "shortMessage": "Recibe un 30% de descuento en tu próxima compra en Burger Kingdom.",
    "longMessage": "Matías, debido a tus compras recientes con la SmartCard Black, recibe un 30% de descuento en tu próxima compra en Burger Kingdom.",
    "postdate": "2020-10-10T00:00:00.000Z",
    "state": 3,
    "bulb": 4,
    "idEntity": 1,
    "appends": [],
    "services": {
      "E1-MP01": "Enviarme más Información",
      "E1-MP04": "No estoy interesado",
      "E1-MP05": "Canjerar descuento"
    }
  },
  {
    "idMessage": "102615",
    "type": 4,
    "shortMessage": "¡Consigue el auto de tus sueños hoy con el SmartPlan!",
    "longMessage": "<html><div style='width:100%;height:100%;overflow:scroll !important;-webkit-overflow-scrolling:touch !important'><iframe src='http://apprizmobile.com/html/maximo-smartbank/' scrolling='yes' style='width:100%;height:100%' frameborder='0'></iframe></div>",
    "postdate": "2020-10-10T00:00:00.000Z",
    "state": 3,
    "bulb": 4,
    "idEntity": 1,
    "appends": [],
    "services": {
      "E1-MP01": "Enviarme más Información",
      "E1-MP04": "No estoy interesado",
      "E1-MP07": "Aplicar"
    }
  },
  {
    "idMessage": "102619",
    "type": 4,
    "shortMessage": "Compra tu vestido de graduación y recibe 20% de descuento en otros artículos.",
    "longMessage": "Por la compra de tu vestido de graduación en Boutique Moda con tu SmartCard Black, recibe un 20% de descuento en artículos seleccionados.",
    "postdate": "2020-10-10T00:00:00.000Z",
    "state": 3,
    "bulb": 4,
    "idEntity": 1,
    "appends": [],
    "services": {
      "E1-MP01": "Enviarme más Información",
      "E1-MP04": "No estoy interesado",
      "E1-MP05": "Canjerar descuento"
    }
  },
  {
    "idMessage": "102622",
    "type": 4,
    "shortMessage": "Adquiere hasta en 12 cuotas los artículos escolares sin intereses.",
    "longMessage": "<html><div style='width:100%;height:100%;overflow:scroll !important;-webkit-overflow-scrolling:touch !important'><iframe src='http://apprizmobile.com/html/maximo-tarjeta/' scrolling='yes' style='width:100%;height:100%' frameborder='0'></iframe></div>",
    "postdate": "2020-10-10T00:00:00.000Z",
    "state": 3,
    "bulb": 4,
    "idEntity": 1,
    "appends": [],
    "services": {
      "E1-MP01": "Enviarme más Información",
      "E1-MP02": "Llamada Servicio al Cliente",
      "E1-MP03": "Activar"
    }
  },
  {
    "idMessage": "102623",
    "type": 4,
    "shortMessage": "Gana $5 cash back en todas las compras realizadas con tu SmartCard Black.",
    "longMessage": "Gana $5 de cash back en todas las compras realizadas con tu SmartCard Black en este mes.",
    "postdate": "2020-10-10T00:00:00.000Z",
    "state": 3,
    "bulb": 4,
    "idEntity": 1,
    "appends": [],
    "services": {
      "E1-MP01": "Enviarme más Información",
      "E1-MP02": "Llamada Servicio al Cliente",
      "E1-MP07": "Aplicar"
    }
  },
  {
    "idMessage": "102624",
    "type": 4,
    "shortMessage": "Matías, en tu próxima compra en Burger Kingdom, recibe 2 entradas al cine.",
    "longMessage": "<html><div style='width:100%;height:100%;overflow:scroll !important;-webkit-overflow-scrolling:touch !important'><iframe src='http://apprizmobile.com/html/matias/' scrolling='yes' style='width:100%;height:100%' frameborder='0'></iframe></div>",
    "postdate": "2020-10-10T00:00:00.000Z",
    "state": 3,
    "bulb": 4,
    "idEntity": 1,
    "appends": [],
    "services": {
      "E1-MP01": "Enviarme más Información",
      "E1-MP04": "No estoy interesado",
      "E1-MP06": "Activar oferta"
    }
  }
  ]);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


