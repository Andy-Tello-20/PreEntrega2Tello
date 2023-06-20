function confirmarAccion() {
    let respuesta = confirm("Bienvenido al simulador de contabilidad\nDesea continuar?")

    if (respuesta) {

        class moldeRegistro {
            constructor(id, ventas, interes, salidas,ganancia) {
                this.id = id
                this.ventas = ventas,
                this.interes = interes,
                this.salidas = salidas,
                this.ganancia=ganancia
            }

            vistaPrevia() {
                alert(`ID: ${this.id} - Las ventas son $${this.ventas}, interes de ${this.interes}% ,una ganancia de $${this.ganancia.toFixed(2)}, las salidas fueron: $${this.salidas}`)
            }
        }

        let listaRegistros = []
        let contador = 0


        function registrar() {
            contador += 1
            let Id = contador
            let valor=true
            
            

            
            let ventas = parseInt(prompt("Ingrese una nueva venta:💲"))
            let interes = parseInt(prompt("Ingrese un % de interes"))
            let salidas = parseInt(prompt("Ingrese Salidas/Compras realizadas:💲"))
            

            while(valor){
                if (isNaN(ventas)) {
                    ventas = parseInt(prompt("El valor ingresado no es un numero,Ingrese una nueva venta:💲"))
                } else if (isNaN(interes)) {
                    interes = parseInt(prompt("El valor ingresado no es un numero,Ingrese un % de interes:"))
                } else if (isNaN(salidas)) {
                    salidas = parseInt(prompt("El valor ingresado no es un numero,Ingrese Salidas/Compras realizadas:💲"))
                } else {
                    valor = false
                }

            }

            let ganancia= ventas*(interes/100)
            
            let nuevoRegistro = new moldeRegistro(Id, ventas, interes, salidas,ganancia)

            listaRegistros.push(nuevoRegistro)

            nuevoRegistro.vistaPrevia()
        }

        function buscar() {

            if (listaRegistros.length > 0) {

                let pedirId = parseInt(prompt("Ingrese el ID del registro:"))
                let buscador = listaRegistros.find(
                    (i) => i.id === pedirId

                )

                if (buscador) {
                    alert(`Id: ${buscador.id}, Ventas: $${buscador.ventas}, Interes: $${buscador.interes}, Ganancia: $${buscador.ganancia}, Salidas: $${buscador.salidas}`)

                } else {
                    alert("El registro no existe")
                }

            } else {

            }

        }

        function buscarPorVentas() {

            let minimo = parseInt(prompt("Ingrese un rango minimo de ventas: "))
            let maximo = parseInt(prompt("Ingrese un rango Maximo de ventas: "))



            

            let rango = listaRegistros.filter(
                (i) => i.ventas >= minimo && i.ventas <= maximo
            );

            //copio el array rango con el nombre"copiaRango" y lo ordeno de menor a mayor segun el valor de las ventas 

            let copiaRango = rango.slice().sort((a, b) => a.ventas - b.ventas)

            // La longitud de la nueva lista "rango" segun los elementos "ventas" encontrados por el metodo FILTER. Y esta tiene que ser mayor a 0

            let cantidadEncontrada = `Se encontraron ${rango.length} Registros\n\n`

            //Se crea una nueva lista "resultado" y se la transforma concatenando texto + elementos de la misma lista
            let resultados = copiaRango.map(
                (i) => `Id: ${i.id}, Ventas: $${i.ventas}, Interés: $${i.interes}, Ganancia: $${i.ganancia}, Salidas: $${i.salidas}`
            )

            let mensaje = resultados.join("\n\n")
            


            let reduceVentas=rango.reduce((acumulador,i)=>{
                return acumulador+i.ventas
            },0)

            let reduceGanancias=rango.reduce((acumulador,i)=>{
                return acumulador+i.ganancia
            },0)

            let reduceInteres=rango.reduce((acumulador,i)=>{
                return acumulador+i.interes
            },0)

            let reduceSalidas=rango.reduce((acumulador,i)=>{
                return acumulador+i.salidas
            },0)

            let promedioInteres= reduceInteres/rango.length

            let contabilidadParcial = `\n\n🟡🟡Ventas-Parciales: 💲${reduceVentas}, Promedio-Interes: ${promedioInteres.toFixed(2)}% , Ganancias-parciales: 💲${reduceGanancias}, Salidas-parciales: 💲${reduceSalidas}🟡🟡`
            
            alert(`${cantidadEncontrada}${mensaje}${contabilidadParcial}`)

        }

        function registroCompleto() {

            let iterarTodo = listaRegistros.map(
                (i) => `ID: ${i.id}, Ventas: $${i.ventas}, Interes: $${i.interes}, Ganancia: $${i.ganancia}, Salidas: $${i.salidas}`
            )

            let verTodo = iterarTodo.join("\n\n")

            alert(verTodo)

        }

        function resumenContabilidad() {



            let rango = listaRegistros.filter(
                (i) => i.ventas >0 && i.ventas <= Infinity
            );

            

            let contTotal= listaRegistros.map(
                (i)=> `Id: ${i.id}, Ventas: $${i.ventas}, Interés: $${i.interes}, Ganancia: $${i.ganancia}, Salidas: $${i.salidas}`
            )

            let mensaje = contTotal.join("\n\n")

            let reduceVentas=rango.reduce((acumulador,i)=>{
                return acumulador+i.ventas
            },0)

            let reduceGanancias=rango.reduce((acumulador,i)=>{
                return acumulador+i.ganancia
            },0)

            let reduceInteres=rango.reduce((acumulador,i)=>{
                return acumulador+i.interes
            },0)

            let reduceSalidas=rango.reduce((acumulador,i)=>{
                return acumulador+i.salidas
            },0)
           

            let promedioInteres= reduceInteres/rango.length

            let contabilidadTotal = `\n\n🟢🟡Ventas-Totales:💲 ${reduceVentas}, Promedio-Interes: ${promedioInteres.toFixed(2)}% , Ganancias-Totales:💲 ${reduceGanancias.toFixed(2)}, Salidas-Totales:💲 ${reduceSalidas} 🟢🟡`

            alert(`${mensaje}${contabilidadTotal}`)
            
            



        
        }

        function borrarRegistro() {
            let buscarPorId = parseInt(prompt("Ingrese el ID del registro:"))

            //obtengo el objeto.ID
            let obtenerId = listaRegistros.find(
                (i) => i.id == buscarPorId
            )

            function confirmar() {

                let confirmarBorrado = confirm(`está seguro de borrar el registro Id: ${obtenerId.id}, Ventas: $${obtenerId.ventas}, Interes: $${obtenerId.interes}, Ganancias: $${obtenerId.ganancia}, Salidas: $${obtenerId.salidas} `)

                if (confirmarBorrado) {

                    //Busco indice en la listaRegistros a traves del ID

                    let indice = listaRegistros.indexOf(obtenerId)

                    //Borro segun indice 

                    listaRegistros.splice(indice, 1)

                    alert(`El registro con ID: ${obtenerId.id}, ha sido eliminado`)

                } else {
                    alert("Operacion cancelada")
                }

            }

            confirmar()


        }

        function menu() {

            let menuExit = true

            do {
                let menuOpciones = parseInt(prompt(`Ingrese la opción deseada\n\n1) Registrar diario de contabilidad\n2) Ver registro\n3) Ver todos los registros\n4) Buscar por rango de ventas\n5) Eliminar un registro\n6) Ver resumen de Contabilidad\n7) Salir del menu`))
                switch (menuOpciones) {
                    case 1:
                        registrar()
                        break
                    case 2:
                        buscar()
                        break
                    case 3:
                        registroCompleto()
                        break
                    case 4:
                        buscarPorVentas()
                        break
                    case 5:
                        borrarRegistro()
                        break
                    case 6:
                        resumenContabilidad()
                        break
                    case 7:
                        document.write(`Gracias por utilizar nuestro sistema de contabilidad 😊`)
                        menuExit = false
                        break
                    default:
                        alert("OPCION INVALIDA, INTENTE NUEVAMENTE ‼⚠ 🚩🚩")
                        break
                }
            } while (menuExit)

        }
        menu()

    } else {
        document.write("Accion cancelada, vuelvas prontos 🙋🏻‍♂️")
    }

}


confirmarAccion()





