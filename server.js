const dgram = require('dgram')
const server = dgram.createSocket('udp4')

const config = {
	codPrim: 1,
	port: 10003
}

 // const config = {
 // 	codPrim: 3,
 // 	port: 10008
 // }

const paq = [
`|${config.codPrim}|53930|PREPARACIÓN|65535|Arreglo|71596 71596 - Filomena Espumante - Frente - 2648 mts lin |0,00|0,00|0,00|157,28|157,28|300|Guillermo Gonzalez|Mañana|17/11/2017 11:58:25|`,
`|${config.codPrim}|53930|PREPARACIÓN|65535|Carga de papel|71596 71596 - Filomena Espumante - Frente - 2648 mts lin |0,00|0,00|0,00|157,28|157,28|310|Guillermo Gonzalez|Mañana|17/11/2017 11:58:25|`,
`|${config.codPrim}|53930|PREPARACIÓN|65535|Cambio de tintas|71596 71596 - Filomena Espumante - Frente - 2648 mts lin |0,00|0,00|0,00|157,28|157,28|0|Guillermo Gonzalez|Mañana|17/11/2017 11:58:25|`,
`|${config.codPrim}|53930|PRODUCCIÓN|65280|No definido|71596 71596 - Filomena Espumante - Frente - 2648 mts lin |0,00|0,00|0,00|157,28|157,28|2501|Guillermo Gonzalez|Mañana|17/11/2017 11:58:25|`,
`|${config.codPrim}|53930|PRODUCCIÓN|65280|No definido|71596 71596 - Filomena Espumante - Frente - 2648 mts lin |0,00|0,00|0,00|157,28|157,28|2615|Guillermo Gonzalez|Mañana|17/11/2017 11:58:25|`,
`|${config.codPrim}|53930|PRODUCCIÓN|65280|No definido|71596 71596 - Filomena Espumante - Frente - 2648 mts lin |0,00|0,00|0,00|157,28|157,28|3888|Guillermo Gonzalez|Mañana|17/11/2017 11:58:25|`,
`|${config.codPrim}|53930|MAQUINA PARADA|255|Espera de chapas|71596 71596 - Filomena Espumante - Frente - 2648 mts lin |0,00|0,00|0,00|157,28|157,28|0|Guillermo Gonzalez|Mañana|17/11/2017 11:58:25|`,
`|${config.codPrim}|53930|MAQUINA PARADA|255|Espera de papel|71596 71596 - Filomena Espumante - Frente - 2648 mts lin |0,00|0,00|0,00|157,28|157,28|0|Guillermo Gonzalez|Mañana|17/11/2017 11:58:25|`,
`|${config.codPrim}|53930|MAQUINA PARADA|255|Espera de tintas|71596 71596 - Filomena Espumante - Frente - 2648 mts lin |0,00|0,00|0,00|157,28|157,28|0|Guillermo Gonzalez|Mañana|17/11/2017 11:58:25|`,
`|${config.codPrim}|53930|MAQUINA PARADA|255|Espera de conforme/Waiting OK|71596 71596 - Filomena Espumante - Frente - 2648 mts lin |0,00|0,00|0,00|157,28|157,28|0|Guillermo Gonzalez|Mañana|17/11/2017 11:58:25|`,
`|${config.codPrim}|53930|MAQUINA PARADA|255|Almuerzo|71596 71596 - Filomena Espumante - Frente - 2648 mts lin |0,00|0,00|0,00|157,28|157,28|0|Guillermo Gonzalez|Mañana|17/11/2017 11:58:25|`,
`|${config.codPrim}|53930|MANTENIMIENTO|4732827|Rotura de algo|71596 71596 - Filomena Espumante - Frente - 2648 mts lin |0,00|0,00|0,00|157,28|157,28|0|Guillermo Gonzalez|Mañana|17/11/2017 11:58:25|`,
`|${config.codPrim}|53930|MANTENIMIENTO|4732827|Mantenimiento correctivo|71596 71596 - Filomena Espumante - Frente - 2648 mts lin |0,00|0,00|0,00|157,28|157,28|0|Guillermo Gonzalez|Mañana|17/11/2017 11:58:25|`,
`|${config.codPrim}|53930|PREPARACIÓN|65535|No definido|71596 71596 - Filomena Espumante - Frente - 2648 mts lin |0,00|0,00|0,00|157,28|157,28|0|Guillermo Gonzalez|Mañana|17/11/2017 11:58:25|`,
`|${config.codPrim}|53930|PREPARACIÓN|65535|Espera de conforme|71596 71596 - Filomena Espumante - Frente - 2648 mts lin |0,00|0,00|0,00|157,28|157,28|0|Guillermo Gonzalez|Mañana|17/11/2017 11:58:25|`,
`|${config.codPrim}|53930|PRODUCCIÓN|65280|No definido|71596 71596 - Filomena Espumante - Frente - 2648 mts lin |0,00|0,00|0,00|157,28|157,28|3235|Guillermo Gonzalez|Mañana|17/11/2017 11:58:25|`,
`|${config.codPrim}|53930|PRODUCCIÓN|65280|No definido|71596 71596 - Filomena Espumante - Frente - 2648 mts lin |0,00|0,00|0,00|157,28|157,28|4256|Guillermo Gonzalez|Mañana|17/11/2017 11:58:25|`
]


setInterval( () => {
	let msg = paq[Math.floor(Math.random() * paq.length)]
	server.send(msg, 0, 1024, config.port, 'localhost', (err) => {
		if(err) console.log(`Error: ${err}`)
	})
},2000)



server.on('listening', () => {

	console.log('Enviando paq!')
})

//server.bind(10115)

server.on('message', (msg, rinfo) => {
	console.log(`Mensaje recibido: ${msg} desde ${rinfo}`)
})

