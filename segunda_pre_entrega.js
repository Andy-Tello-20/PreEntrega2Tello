function confirmarAccion() {
    let respuesta = confirm("Bienvenido al simulador de contabilidad\nDesea continuar?")

    if (respuesta) {

        class moldeRegistro {
            constructor(id, ventas, interes, salidas) {
                this.id = id
                this.ventas = ventas,
                    this.interes = interes,
                    this.salidas = salidas
            }

            vistaPrevia() {
                alert(`ID: ${this.id} - Las ventas son $${this.ventas}, con una ganancia de $${this.interes}, las salidas fueron: $${this.salidas}`)
            }
        }

        let listaRegistros = []
        let contador = 0


        function registrar() {
            contador += 1
            let Id = contador
            let ventas = parseInt(prompt("Ingrese una nueva venta:"))
            let interes = parseInt(prompt("Ingrese un % de interes"))
            let salidas = parseInt(prompt("Ingrese Salidas/Compras realizadas:"))

            let nuevoRegistro = new moldeRegistro(Id, ventas, interes, salidas)

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
                    alert(`Id: ${buscador.id}, Ventas: $${buscador.ventas}, Interes: $${buscador.interes}, Salidas: $${buscador.salidas}`)

                } else {
                    alert("El registro no existe")
                }

            } else {

            }

        }

        function buscarPorVentas() {
            
            let minimo=parseInt(prompt("Ingrese un rango minimo de ventas: "))
            let maximo=parseInt(prompt("Ingrese un rango Maximo de ventas: "))

            
                
            while(true){
                if(!listaRegistros.some((i) => i.ventas <= minimo)){

                    minimo=parseInt(prompt("El valor no se encuentra en el registro. Ingrese un rango minimo de ventas: "))

                }else{
                    break
                }
            }
            while(true){
                if(!listaRegistros.some((i) => i.ventas <= maximo)){

                    maximo=parseInt(prompt("El valor no se encuentra en el registro. Ingrese un rango Maximo de ventas: "))

                }else{
                    break
                }
            }

            let rango = listaRegistros.filter(
                (i) => i.ventas >= minimo && i.ventas <= maximo
              );
            

            //Condicion: La longitud de la nueva lista "rango" segun los elementos "ventas" encontrados por el metodo FILTER. Y esta tiene que ser mayor a 0
            if (rango.length > 0) {

                let cantidadEncontrada = `Se encontraron ${rango.length} Registros\n\n`

                //Se crea una nueva lista "resultado" y se la transforma concatenando texto + elementos de la misma lista
                let resultados = rango.map(
                    (i) => `Id: ${i.id}, Ventas: $${i.ventas}, Interés: $${i.interes}, Salidas: $${i.salidas}`
                )

                let mensaje = resultados.join("\n\n")
                alert(`${cantidadEncontrada}${mensaje}`)
            } else {
                alert("No se encontraron registros en el rango especificado")
            }


        }

        function registroCompleto() {

            let iterarTodo = listaRegistros.map(
                (i) => `ID: ${i.id}, Ventas: $${i.ventas}, Interes: $${i.interes}, Salidas: $${i.salidas}`
            )

            let verTodo = iterarTodo.join("\n\n")

            alert(verTodo)

        }

        function resumenContabilidad() {

        }

        function borrarRegistro() {
            let buscarPorId = parseInt(prompt("Ingrese el ID del registro:"))

            //obtengo el objeto.ID
            let obtenerId = listaRegistros.find(
                (i) => i.id == buscarPorId
            )

            function confirmar() {

                let confirmarBorrado = confirm(`está seguro de borrar el registro Id: ${obtenerId.id}, Ventas: $${obtenerId.ventas}, Interes: $${obtenerId.interes}, Salidas: $${obtenerId.salidas} `)

                if (confirmarBorrado) {

                    //Busco indice en la listaRegistros a traves del ID

                    let indice = listaRegistros.indexOf(obtenerId)

                    //Borro segun indice 

                    listaRegistros.splice(indice, 1)

                    alert(`El registro con ID: ${obtenerId.id}, ha sido eliminado`)

                } else {

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
                        console.log(`Gracias por utilizar nuestra app. Saludos!`)
                        menuExit = false
                        break
                    default:
                        console.log("Opción no válida, ingrese alguna presente en el menu")
                        break
                }
            } while (menuExit)

        }
        menu()

    } else {
        document.write("Accion cancelada")
    }

}


confirmarAccion()



















