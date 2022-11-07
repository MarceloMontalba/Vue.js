/*Ventana de eliminacion de datos*/
Vue.component('eliminar',{
	template: `
		<div v-if="this.visible === 1" class="eliminacion d-flex align-items-center justify-content-center">
			<div class="card tarjeta">
				<div class="card-header cabecera-tarjeta">
					<label class="centrar">
						{{titulo}}
					</label>
				</div>
				<div class="card-body cuerpo-tarjeta">
					<div class="container mt-3 mb-3">
						<div class="row">
							<div class="col-12 container-fluid">
								<div class="row d-flex align-items-center justify-content-center">
									<div class="col-4">
										<button class="pushy__btn pushy__btn--sm pushy__btn--green btn-confirmacion" @click="confirmar">SI</button>
									</div>
									<div class="col-4">
										<button class="pushy__btn pushy__btn--sm pushy__btn--red btn-confirmacion" @click="cancelar">NO</button>
									</div>
								</div>
							</div>	
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
	props: ["titulo","id","visible"],
	methods: {
		confirmar: function(){
			this.$emit("confirmacion", 1);
		},
		cancelar: function(){
			this.$emit("confirmacion", 0);
		}
	}
})

/*Ventana de edicion de datos*/
Vue.component("editar",{
	template: `
		<div v-if="this.visible === 1" class="eliminacion d-flex align-items-center justify-content-center">
			
			<div v-if="this.modulo === 1" class="card tarjeta">
				<div class="card-header cabecera-tarjeta">
					<label class="centrar">
						{{titulo}}
					</label>
				</div>
				<div class="card-body cuerpo-tarjeta">
					<div class="container mt-3 mb-3">
						<div class="row">
							<div class="col-12 container-fluid">
								<div class="row d-flex align-items-center">
									<div class="col-4">
										<label>NOMBRE SUBVENCIÓN</label>
									</div>
									<div class="col-8">
										<input class="form-control" id="nombre_subvencion" placeholder="Ingresar nombre..." :value="this.datos['nombre_subvencion']">
									</div>
								</div>	

								<div class="row mt-2 d-flex align-items-center">
									<div class="col-4">
										<label>CUENTA</label>
									</div>
									<div class="col-8">
										<input class="form-control" id="cuenta" placeholder="Ingresar cuenta..." :value="this.datos['cuenta']">
									</div>
								</div>	

								<div class="row mt-2 d-flex align-items-center">
									<div class="col-4">
										<label>MONEDA</label>
									</div>
									<div class="col-8">
										<input class="form-control" id="moneda_origen" placeholder="Ingresar moneda..." :value="this.datos['moneda_origen']">
									</div>
								</div>	
							</div>
						</div>
					</div>

					<div class="container mt-4 mb-3">
						<div class="row">
							<div class="col-12 container-fluid">
								<div class="row d-flex align-items-center justify-content-center">
									<div class="col-6">
										<button class="pushy__btn pushy__btn--sm pushy__btn--green btn-confirmacion" @click="confirmar(1)">Confirmar</button>
									</div>
									<div class="col-6">
										<button class="pushy__btn pushy__btn--sm pushy__btn--red btn-confirmacion" @click="cancelar">Cancelar</button>
									</div>
								</div>
							</div>	
						</div>
					</div>
				</div>
			</div>
		
			<div v-if="this.modulo === 2" class="card tarjeta">
				<div class="card-header cabecera-tarjeta">
					<label class="centrar">
						{{titulo}}
					</label>
				</div>
				<div class="card-body cuerpo-tarjeta">
					<div class="container mt-3 mb-3">
						<div class="row">
							<div class="col-12 container-fluid">
								<div class="row d-flex align-items-center">
									<div class="col-4">
										<label>NOMBRE PROVEEDOR</label>
									</div>
									<div class="col-8">
										<input class="form-control" id="nombre_proveedor" placeholder="Ingresar nombre..." :value="this.datos['nombre_proveedor']">
									</div>
								</div>	

								<div class="row mt-2 d-flex align-items-center">
									<div class="col-4">
										<label>CÓDIGO DE BANCO</label>
									</div>
									<div class="col-8">
										<input class="form-control" id="codigo_banco" placeholder="Ingresar codigo..." :value="this.datos['codigo_banco']">
									</div>
								</div>	

								<div class="row mt-2 d-flex align-items-center">
									<div class="col-4">
										<label>CUENTA</label>
									</div>
									<div class="col-8">
										<input class="form-control" id="cuenta_destino" placeholder="Ingresar cuenta..." :value="this.datos['cuenta_destino']">
									</div>
								</div>	

								<div class="row mt-2 d-flex align-items-center">
									<div class="col-4">
										<label>MONEDA</label>
									</div>
									<div class="col-8">
										<input class="form-control" id="moneda_destino" placeholder="Ingresar moneda..." :value="this.datos['moneda_destino']">
									</div>
								</div>

								<div class="row mt-2 d-flex align-items-center">
									<div class="col-4">
										<label>RUT</label>
									</div>
									<div class="col-8">
										<input class="form-control" id="rut_beneficiado" placeholder="Ingresar rut..." :value="this.datos['rut_beneficiado']">
									</div>
								</div>

								<div class="row mt-2 d-flex align-items-center">
									<div class="col-4">
										<label>CORREO</label>
									</div>
									<div class="col-8">
										<input class="form-control" id="correo" placeholder="Ingresar correo..." :value="this.datos['correo']">
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="container mt-4 mb-3">
						<div class="row">
							<div class="col-12 container-fluid">
								<div class="row d-flex align-items-center justify-content-center">
									<div class="col-6">
										<button class="pushy__btn pushy__btn--sm pushy__btn--green btn-confirmacion" @click="confirmar(2)">Confirmar</button>
									</div>
									<div class="col-6">
										<button class="pushy__btn pushy__btn--sm pushy__btn--red btn-confirmacion" @click="cancelar">Cancelar</button>
									</div>
								</div>
							</div>	
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
	props: ["titulo","visible","datos","modulo"],
	methods: {
		confirmar: function(modulo){
			if(modulo === 1){
				let nombre = document.getElementById("nombre_subvencion").value;
				let cuenta = document.getElementById("cuenta").value;
				let moneda = document.getElementById("moneda_origen").value;

				this.$emit("confirmacion", [this.datos["id_subvencion"], nombre, cuenta, moneda]);
			}
			else{
				if(modulo === 2){
					let nombre = document.getElementById("nombre_proveedor").value;
					let codigo = document.getElementById("codigo_banco").value;
					let cuenta = document.getElementById("cuenta_destino").value;
					let moneda = document.getElementById("moneda_destino").value;
					let rut = document.getElementById("rut_beneficiado").value;
					let correo = document.getElementById("correo").value;

					this.$emit("confirmacion", [this.datos["id_proveedor"], nombre, codigo, cuenta, moneda, rut, correo]);
				}
			}
		},
		cancelar: function(){
			this.$emit("confirmacion", 0);
		}
	}
})


/*Componente para crear el contenido de la tabla*/
Vue.component('mi-tr',{
	data: function(){
		return{
			eliminado: 0
		}
	},
	props: ["tabla"],
	methods: {
		eliminar: function(){
			this.eliminado = 1;
		}
	},
	template: `
		<tr v-if="eliminado !== 1" style="vertical-align: middle;">
			<td class="contenedor-seleccion">
				<select data-placeholder="SELECCIONAR SUBVENCIÓN..." class="subvenciones seleccion" name="state">
					<option></option>
					<option v-bind:title="fila[0]" v-if="fila[2] === 'subvencion'" v-for="fila in tabla">{{fila[1]}}</option>
				</select>
			</td>

			<td class="contenedor-seleccion">
				<select data-placeholder="SELECCIONAR PROVEEDOR..." class="proveedores seleccion" name="state">
					<option></option>
					<option v-bind:title="fila[0]" v-if="fila[2] === 'proveedor'" v-for="fila in tabla">{{fila[1]}}</option>
				</select>
			</td>
			<td>
				<input class="form-control form-control-sm" placeholder="INGRESAR MONTO..."/>
			</td>
			<td>
				<input class="form-control form-control-sm" placeholder="INGRESAR GLOSA..."/>
			</td>
			<td>
				<button class="pushy__btn pushy__btn--sm pushy__btn--red btn-eliminar" @click="eliminar">Quitar</button>
			</td>
		</tr>
	`
})

/*Componente Seleccion 1*/
Vue.component('menu1',{
	data: function(){
		return{
			filasTransaccion: 9
		}
	},
	props: ["tabla"],
	methods:{
		abrirURL: function(path){
			const openExplorer = require("open-file-explorer");
			openExplorer(path, err => {
				if(err) {
					console.log(err);
				}
			});
		},
		exportarExcel: function(){
			/*Se cra una matriz en la cual cada fila representa la*/
			/*fila presente en el excel y cada elemento esta posicionado*/
			/*igualmente como estaria en el excel*/
			var datos = [['CUENTA_ORIGEN' , 
						  'MONEDA_ORIGEN',
						  'CUENTA_DESTINO',
						  'MONEDA_DESTINO',
						  'CÓDIGO_BANCO',
						  'RUT_BENEFICIADO',
						  'NOMBRE_BENEFICIARIO',
						  'MONTO_TOTAL',
						  'GLOSA_TEF',
						  'CORREO_ELECTRONICO',
						  'GLOSA_CORREO',
						  'GLOSA_CARTOLA_CLIENTE',
						  'GLOSA_CARTOLA_BENEFICIARIO',
						]];
			
			const path = require('path');
			let tabla = document.getElementById("transacciones");
			
			let filaExcel = [];
			for (var i = 0, row; row = tabla.rows[i]; i++) {
				/*Datos necesarios para llenar el excel obtenidos de la tabla html*/
				let idSubvencion = row.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].title;
				let idProveedor  = row.childNodes[2].childNodes[1].childNodes[0].childNodes[0].childNodes[0].title;
				let monto = row.childNodes[4].childNodes[0].value;
				let glosaTef = row.childNodes[6].childNodes[0].value;

				/*Los datos importantes como subvencion, proveedor y monto no pueden estar en blanco*/
				if (idSubvencion!=="" && idProveedor!=="" && monto!==""){
					const jsonfile = require("jsonfile");
					
					/*Datos necesarios de la subvencion*/
					let file = path.join(__dirname,"../bd/subvenciones.json");

					/*cuenta, moneda origen*/
					jsonfile.readFileSync(file).forEach(fila => {
						if(fila["id_subvencion"] === idSubvencion){
							filaExcel.push(fila["cuenta"]);
							filaExcel.push(fila["moneda_origen"]);
						}
					})

					/*Datos necesarios deL proveedor*/
					file = path.join(__dirname,"../bd/proveedores.json");

					/*cuenta destino, moneda, codigo, rut, nombre*/
					jsonfile.readFileSync(file).forEach(fila => {
						if(fila["id_proveedor"] === idProveedor){
							filaExcel.push(fila["cuenta_destino"]);
							filaExcel.push(fila["moneda_destino"]);
							filaExcel.push(fila["codigo_banco"]);
							filaExcel.push(fila["rut_beneficiado"]);
							filaExcel.push(fila["nombre_proveedor"]);
						}
					})

					/*Monto, Glosa TEF*/
					filaExcel.push(monto);
					filaExcel.push(glosaTef);

					/*Correo*/
					jsonfile.readFileSync(file).forEach(fila => {
						if(fila["id_proveedor"] === idProveedor){
							filaExcel.push(fila["correo"]);
						}
					})

					/*glosa correo, glosa cartola cliente, glosa cartola beneficiario*/
					filaExcel.push(glosaTef);
					filaExcel.push(glosaTef);
					filaExcel.push(glosaTef);

					/*Se añade la nueva fila al array que representa la información en el excel*/
					datos.push(filaExcel)
					filaExcel = []
				}
			}

			let xl = require("excel4node");

			let wb = new xl.Workbook();
			let ws = wb.addWorksheet("pagos");

			let estiloCebeceraAmarillo = wb.createStyle({
				alignment:{
					horizontal: "center",
					vertical: "center"
				},
				fill: {
					type: 'pattern',
					patternType: 'solid',
					fgColor: '#ffff00',
				},
				font: {
					name: "Arial",
					bold: true,
					color: "#000000",
					size: 9
				},
				border: {
					left: {
						style: "thin",
						color: "#000000" 
					},
					right: {
						style: "thin",
						color: "#000000" 
					},
					top: {
						style: "thin",
						color: "#000000" 
					},
					bottom: {
						style: "thin",
						color: "#000000" 
					}
				}
			})

			let estiloCebeceraRojo = wb.createStyle({
				alignment:{
					horizontal: "center",
					vertical: "center"
				},
				fill: {
					type: 'pattern',
					patternType: 'solid',
					fgColor: '#ff0000',
				},
				font: {
					name: "Arial",
					bold: true,
					color: "#000000",
					size: 9
				},
				border: {
					left: {
						style: "thin",
						color: "#000000" 
					},
					right: {
						style: "thin",
						color: "#000000" 
					},
					top: {
						style: "thin",
						color: "#000000" 
					},
					bottom: {
						style: "thin",
						color: "#000000" 
					}
				}
			})

			let estiloCuerpoTabla = wb.createStyle({
				alignment:{
					horizontal: "left",
					vertical: "center"
				},
				fill: {
					type: 'pattern',
					patternType: 'solid',
					fgColor: '#e6e3e3',
				},
				font: {
					name: "Arial",
					bold: false,
					color: "#000000",
					size: 9
				},
				border: {
					left: {
						style: "thin",
						color: "#adadad" 
					},
					right: {
						style: "thin",
						color: "#adadad" 
					},
					top: {
						style: "thin",
						color: "#adadad" 
					},
					bottom: {
						style: "thin",
						color: "#adadad" 
					}
				}
			})

			datos.forEach((fila,contadorFila) => {
				fila.forEach((celda, contadorCelda) => {
					if(contadorFila === 0){
						if(contadorCelda === 1 || contadorCelda === 3){
							ws.cell(contadorFila+1, contadorCelda+1).string(celda).style(estiloCebeceraRojo);
						}
						else{
							ws.cell(contadorFila+1, contadorCelda+1).string(celda).style(estiloCebeceraAmarillo);
						}
					}
					else{
						ws.cell(contadorFila+1, contadorCelda+1).string(celda).style(estiloCuerpoTabla);
					}
				})
			})

			/*Ancho predeterminado de las columnas*/
			ws.column(1).setWidth(15);
			ws.column(2).setWidth(15);
			ws.column(3).setWidth(15);
			ws.column(4).setWidth(15);
			ws.column(5).setWidth(13);
			ws.column(6).setWidth(15);
			ws.column(7).setWidth(20);
			ws.column(8).setWidth(13);
			ws.column(9).setWidth(15);
			ws.column(10).setWidth(18);
			ws.column(11).setWidth(15);
			ws.column(12).setWidth(22);
			ws.column(13).setWidth(25);

			/*Alto de la cabecera de la tabla*/
			ws.row(1).setHeight(30);
		
			/*Si no existe se crea la carpeta "PLANTILLAS_PAGOS"*/
			let fs = require("fs");
			let carpeta = function(path){
				try{
					fs.mkdirSync(path);
				}
				catch(e){
					if(e.code != "EEXIST") throw e;
				}
			}
			carpeta((path.join(__dirname, "/../../../PLANTILLAS_PAGOS")));

			/*Se guarda el archivo xlsx*/
			let hoy = new Date();
			let fecha = hoy.getDate()+""+(hoy.getMonth()+1)+""+hoy.getFullYear();
			let hora = hoy.getHours() + '' + hoy.getMinutes() + '' + hoy.getSeconds();

			const urlCarpeta = path.join(__dirname, "/../../../PLANTILLAS_PAGOS");
			const urlArchivo = path.join(urlCarpeta,"PAGO_"+fecha+"_"+hora+".xlsx")
			wb.write(urlArchivo);

			/*Mensaje de confirmación*/
			toastr.success("EXCEL EXPORTADO SATISFACTORIAMENTE COMO: "+urlArchivo,"" ,
						{"progressBar": true,
						"positionClass": "toast-bottom-right",
						"onclick": this.abrirURL(urlCarpeta)});

			
		},
		agregarFila: function(){
			this.filasTransaccion += 1;
		}
	},
	beforeCreate(){
		/*Se invoca a la libreria select2 sobre las clases especificadas*/
		$(document).ready(function() {
			$('.subvenciones').select2();
		});

		$(document).ready(function() {
			$('.proveedores').select2();
		});
	},
	updated(){
		/*Se carga la libreria select2 para los nuevos select que sean creados*/
		$(document).ready(function() {
			$('.subvenciones').select2();
		});

		$(document).ready(function() {
			$('.proveedores').select2();
		});

		let contenedorTabla = document.getElementById("contenedor-tabla");
		contenedorTabla.scrollTop = contenedorTabla.scrollHeight;
	},
	template: `
	<div class="container-fluid">
		<div class="row justify-content-md-center align-items-center vh-100">
			<div class="col-12">
				<div class="contenedor-tabla" id="contenedor-tabla">
					<table class="table mi-tabla">
						<thead class="cabecera-tabla fila-fija">
							<tr>
								<th class="centrar contenedor-seleccion">SUBVENCIÓN</th>
								<th class="centrar contenedor-seleccion">PROVEEDOR / FUNCIONARIO</th>
								<th class="centrar">MONTO</th>
								<th class="centrar">GLOSA TEF</th>
								<th></th>
							</tr>
						</thead>
						
						<tbody class="cuerpo-tabla" id="transacciones">
							<mi-tr v-for="i in filasTransaccion" v-bind:tabla="tabla"/>
						</tbody>
					</table>
				</div>
				
				<!--Botones de opciones-->
				<div class="container mt-3 mb-3 contenedor-botones">
					<div class="row">
						<div class="col-12 d-flex justify-content-start">
							<button class="pushy__btn pushy__btn--md pushy__btn--blue m-1 btn-exportar" @click="exportarExcel">Exportar Planilla Excel</button>
							<button class="pushy__btn pushy__btn--md pushy__btn--green m-1 btn-agregar" @click="agregarFila">Agregar Transacción</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>`
})

/*Componente para crear filas de integración de datos de subvenciones*/
Vue.component('nueva-subvencion',{
	data: function(){
		return{
			nuevaSubvencion: "",
			nuevaCuenta: "",
			nuevaMoneda: "",
			eliminado: 0
		}
	},
	methods:{
		confirmarCreacion: function(){
			const jsonfile = require("jsonfile");
			let file = __dirname+"/../bd/subvenciones.json";

			/*Se obtiene el array completo de datos existente en el JSON de subvenciones*/
			let datos = jsonfile.readFileSync(file);

			/*Se crea un nuevo objeto con los nuevos datos*/
			let nuevoDato = {
				/*Se toma el ultimo id guardado del ultimo dato y sumandole 1 obtenemos el nuevo id*/
				id_subvencion: (Number(datos[datos.length-1]["id_subvencion"])+1).toString(),
				nombre_subvencion: this.nuevaSubvencion.toUpperCase(),
				cuenta: this.nuevaCuenta.toUpperCase(),
				moneda_origen: this.nuevaMoneda.toUpperCase()
			};

			/*Se introduce el nuevo objeto y se reemplaza el array antiguo con el nuevo*/
			datos.push(nuevoDato)
			jsonfile.writeFile(file, datos);

			/*Ya creados los nuevos datos se elimina la fila de creacion de datos*/
			this.eliminado = 1;

			this.$emit("confirmarCreacion", datos);

			/*Mensaje de confirmación*/
			toastr.success("SUBVENCIÓN CREADA SATISFACTORIAMENTE","" ,
						{"progressBar": true,
						"positionClass": "toast-bottom-right"});
		},
		cancelarCreacion: function(){
			this.eliminado = 1;
		}
	},
	mounted: function(){
		let contenedorTabla = document.getElementById("contenedor-tabla");
		contenedorTabla.scrollTop = contenedorTabla.scrollHeight;
	},
	template: `
	<tr class="nuevo-dato" v-if="eliminado === 0">
		<td class="centrar">
			<input class="form-control form-control-sm" placeholder="NUEVA SUBVENCIÓN..." v-model="nuevaSubvencion"/>
		</td>
		<td class="centrar">
			<input class="form-control form-control-sm" placeholder="NUEVA CUENTA..." v-model="nuevaCuenta"/>
		</td>
		<td class="centrar">
			<input class="form-control form-control-sm" placeholder="NUEVA MONEDA..." v-model="nuevaMoneda" />
		</td>
		<td class="centrar">
			<button class="pushy__btn pushy__btn--sm pushy__btn--green btn-confirmar" @click="confirmarCreacion">Confirmar</button>
			<button class="pushy__btn pushy__btn--sm pushy__btn--red btn-cancelar" @click="cancelarCreacion">Cancelar</button>
		</td>
	</tr>
	`
})

/*Componente Seleccion 2*/
Vue.component('menu2',{
	data: function(){
		return{
			tablaActual: this.tabla,

			filtroSubvencion: "",
			filtroCuenta: "",
			filtroMoneda: "",
			
			nuevasFilas: 0,

			subVentana: 0,
			subVentana2: 0,

			tituloEdicion: "",
			datosEdicion: [],

			tituloEliminacion: "",
			idEliminacion: 0
		}
	},
	props: ["tabla"],
	methods:{
		agregarSubvencion: function(){
			this.nuevasFilas += 1;
		},
		confirmarEliminacion: function(id, nombre){
			this.subVentana = 1,
			this.idEliminacion = id,
			this.tituloEliminacion = '¿ESTÁ SEGURO/A DE ELIMINAR LA SUBVENCIÓN "'+nombre+'"?';
		},
		obtenerRespuesta: function(respuesta){
			if(respuesta === 0){
				this.subVentana = 0;
			}
			if(respuesta === 1){
				this.subVentana = 0;
				this.eliminarSubvencion(this.idEliminacion);
			}
		},
		eliminarSubvencion: function(id){
			const jsonfile = require("jsonfile");
			let file = __dirname+"/../bd/subvenciones.json";

			/*Se obtiene el array completo de datos existente en el JSON de subvenciones*/
			let datos = jsonfile.readFileSync(file);
			
			/*Busqueda del id deseado para eliminar tal fila*/
			let posicion;
			datos.forEach((fila, contador) =>{
				if(fila["id_subvencion"] === id){
					posicion = contador;
				}
			})

			datos.splice(posicion,1);
			
			jsonfile.writeFile(file, datos);
			this.tablaActual = datos;

			/*Mensaje de confirmación*/
			toastr.success("SUBVENCIÓN ELIMINADA SATISFACTORIAMENTE","" ,
						{"progressBar": true,
						"positionClass": "toast-bottom-right"});
		},
		confirmarEdicion: function(dato){
			this.subVentana2 = 1;
			this.datosEdicion= dato;
			this.tituloEdicion = 'EDITANDO LA SUBVENCIÓN "'+dato["nombre_subvencion"]+'"';
		},
		obtenerRespuestaEdicion: function(respuesta){
			if(respuesta === 0){
				this.subVentana2 = 0;
			}
			else{
				const jsonfile = require("jsonfile");
				let file = __dirname+"/../bd/subvenciones.json";
	
				/*Se obtiene el array completo de datos existente en el JSON de subvenciones*/
				var datos = jsonfile.readFileSync(file);
				
				/*Busqueda del id deseado para eliminar tal fila*/
				datos.forEach(fila => {
					if(fila["id_subvencion"] === respuesta[0]){
						fila["nombre_subvencion"] = respuesta[1];
						fila["cuenta"] = respuesta[2];
						fila["moneda_origen"] = respuesta[3];
					}
				})
				
				jsonfile.writeFile(file, datos);
				this.tablaActual = datos;

				this.subVentana2 = 0;

				toastr.success("SUBVENCIÓN EDITADA SATISFACTORIAMENTE","" ,
							   {"progressBar": true,
						        "positionClass": "toast-bottom-right"});
			}
		},
		actualizarTabla: function(nuevaTabla){
			this.tablaActual = nuevaTabla;
		}
	},
	template: `
	<div class="container-fluid">
		<editar :visible='this.subVentana2' :modulo ="1" :titulo='this.tituloEdicion' :datos="this.datosEdicion" @confirmacion="obtenerRespuestaEdicion"></editar>
		<eliminar :visible='this.subVentana' :titulo='this.tituloEliminacion' @confirmacion="obtenerRespuesta"></eliminar>

		<div class="row justify-content-md-center align-items-center vh-100">
			<div class="col-12">
				<div class="contenedor-tabla" id="contenedor-tabla">
					<table class="table mi-tabla">
						<thead class="fila-fija">
							<tr class="cabecera-tabla">
								<th class="centrar">SUBVENCIÓN</th>
								<th class="centrar">CUENTA</th>
								<th class="centrar">MONEDA</th>
								<th class="centrar"></th>
							</tr>
							<tr class="filtros">
								<td><input type="text" class="form-control form-control-sm" placeholder="SUBVENCIÓN..." v-model="filtroSubvencion"/></td>
								<td><input type="text" class="form-control form-control-sm" placeholder="CUENTA..." v-model="filtroCuenta"/></td>
								<td><input type="text" class="form-control form-control-sm" placeholder="MONEDA..." v-model="filtroMoneda"/></td>
								<td></td>
							</tr>
						</thead>
						<tbody class="cuerpo-tabla" id="subvenciones">
							
							<!--Solo mse mostrarán las filas especificas si el contenido de los textbox de filtro-->
							<!--concuerdan.-->
							
							<tr v-for="fila in tablaActual" 
								v-if="fila['nombre_subvencion'].indexOf(filtroSubvencion.toUpperCase()) !== -1 && 
								fila['cuenta'].indexOf(filtroCuenta) !== -1 &&
								fila['moneda_origen'].indexOf(filtroMoneda.toUpperCase()) !== -1"
							>

								<td style="width: 30%"><div class="textarea">{{fila['nombre_subvencion']}}</div></td>
								<td style="width: 30%"><div class="textarea">{{fila['cuenta']}}</div></td>
								<td style="width: 20%"><div class="textarea">{{fila['moneda_origen']}}</div></td>
								<td style="width: 20%">
									<button class="pushy__btn pushy__btn--sm btn-editar" @click="confirmarEdicion(fila)">Editar</button>
									<button class="pushy__btn pushy__btn--sm pushy__btn--red btn-eliminar" @click="confirmarEliminacion(fila['id_subvencion'], fila['nombre_subvencion'])">Eliminar</button>
								</td>
							</tr>

							<!--Fila para la creacion de nuevas subvenciones-->
							<nueva-subvencion v-for="i in nuevasFilas" @confirmarCreacion="actualizarTabla"/>
						</tbody>
					</table>
				</div>

				<!--Botones de opciones-->
				<div class="container mt-3 mb-3">
					<div class="row">
						<div class="col-12 d-flex justify-content-start">
							<button class="pushy__btn pushy__btn--md pushy__btn--green btn-agregar" @click="agregarSubvencion">Agregar Subvención</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>`
})

/*Componente para crear filas de integración de datos de proveedores*/
Vue.component('nuevo-proveedor',{
	data: function(){
		return{
			nuevoProveedor: "",
			nuevoBanco: "",
			nuevaCuenta: "",
			nuevaMoneda: "",
			nuevoRut: "",
			nuevoCorreo: "",
			eliminado: 0
		}
	},
	methods:{
		confirmarCreacion: function(){
			const jsonfile = require("jsonfile");
			let file = __dirname+"/../bd/proveedores.json";

			/*Se obtiene el array completo de datos existente en el JSON de subvenciones*/
			let datos = jsonfile.readFileSync(file);

			/*Se crea un nuevo objeto con los nuevos datos*/
			let nuevoDato = {
				/*Se toma el ultimo id guardado del ultimo dato y sumandole 1 obtenemos el nuevo id*/
				id_proveedor: (Number(datos[datos.length-1]["id_proveedor"])+1).toString(),
				nombre_proveedor: this.nuevoProveedor.toUpperCase(),
				codigo_banco: this.nuevoBanco.toUpperCase(),
				cuenta_destino: this.nuevaCuenta.toUpperCase(),
				moneda_destino: this.nuevaMoneda.toUpperCase(),
				rut_beneficiado: this.nuevoRut.toUpperCase(),
				correo: this.nuevoCorreo.toLowerCase(),
				funcionario: "0"
			};

			/*Se introduce el nuevo objeto y se reemplaza el array antiguo con el nuevo*/
			datos.push(nuevoDato)
			jsonfile.writeFile(file, datos);

			/*Ya creados los nuevos datos se elimina la fila de creacion de datos*/
			this.eliminado = 1;

			this.$emit("confirmarCreacion", datos);

			/*Mensaje de confirmación*/
			toastr.success("PROVEEDOR CREADO SATISFACTORIAMENTE","" ,
						{"progressBar": true,
						"positionClass": "toast-bottom-right"});
		},
		cancelarCreacion: function(){
			this.eliminado = 1;
		}
	},
	mounted: function(){
		let contenedorTabla = document.getElementById("contenedor-tabla");
		contenedorTabla.scrollTop = contenedorTabla.scrollHeight;
	},
	template: `
	<tr class="nuevo-dato" v-if="eliminado === 0">
		<td class="centrar">
			<input class="form-control form-control-sm" placeholder="NUEVO PROVEEDOR..." v-model="nuevoProveedor"/>
		</td>
		<td class="centrar">
			<input class="form-control form-control-sm" placeholder="NUEVO BANCO..." v-model="nuevoBanco"/>
		</td>
		<td class="centrar">
			<input class="form-control form-control-sm" placeholder="NUEVA CUENTA..." v-model="nuevaCuenta" />
		</td>
		<td class="centrar">
			<input class="form-control form-control-sm" placeholder="NUEVA MONEDA..." v-model="nuevaMoneda" />
		</td>
		<td class="centrar">
			<input class="form-control form-control-sm" placeholder="NUEVO RUT..." v-model="nuevoRut" />
		</td>
		<td class="centrar">
			<input class="form-control form-control-sm" placeholder="NUEVO CORREO..." v-model="nuevoCorreo" />
		</td>
		<td class="centrar">
			<button class="pushy__btn pushy__btn--sm pushy__btn--green btn-confirmar" @click="confirmarCreacion">Confirmar</button>
			<button class="pushy__btn pushy__btn--sm pushy__btn--red btn-cancelar" @click="cancelarCreacion">Cancelar</button>
		</td>
	</tr>
	`
})

/*Componente Seleccion 3*/
Vue.component('menu3',{
	data: function(){
		return{
			tablaActual: this.tabla,

			filtroProveedor: "",
			filtroBanco: "",
			filtroCuenta: "",
			filtroMoneda: "",
			filtroRut: "",
			filtroCorreo: "",

			nuevasFilas: 0,

			subVentana: 0,
			subVentana2: 0,

			tituloEdicion: "",
			datosEdicion: [],

			tituloEliminacion: "",
			idEliminacion: 0
		}
	},
	props: ["tabla"],
	methods:{
		agregarProveedor: function(){
			this.nuevasFilas += 1;
		},
		confirmarEliminacion: function(id, nombre){
			this.subVentana = 1,
			this.idEliminacion = id,
			this.tituloEliminacion = '¿ESTÁ SEGURO/A DE ELIMINAR AL PROVEEDOR "'+nombre+'"?';
		},
		obtenerRespuesta: function(respuesta){
			if(respuesta === 0){
				this.subVentana = 0;
			}
			if(respuesta === 1){
				this.subVentana = 0;
				this.eliminarProveedor(this.idEliminacion);
			}
		},
		eliminarProveedor: function(id){
			const jsonfile = require("jsonfile");
			let file = __dirname+"/../bd/proveedores.json";

			/*Se obtiene el array completo de datos existente en el JSON de subvenciones*/
			let datos = jsonfile.readFileSync(file);

			/*Busqueda del id deseado para eliminar tal fila*/
			let posicion;
			datos.forEach((fila, contador) =>{
				if(fila["id_proveedor"] === id){
					posicion = contador;
				}
			});

			datos.splice(posicion,1);
			jsonfile.writeFile(file, datos);

			this.actualizarTabla(datos);

			/*Mensaje de confirmación*/
			toastr.success("PROVEEDOR ELIMINADO SATISFACTORIAMENTE","" ,
						{"progressBar": true,
						"positionClass": "toast-bottom-right"});
		},
		confirmarEdicion: function(dato){
			this.subVentana2 = 1;
			this.datosEdicion= dato;
			this.tituloEdicion = 'EDITANDO EL PROVEEDOR "'+dato["nombre_proveedor"]+'"';
		},
		obtenerRespuestaEdicion: function(respuesta){
			if(respuesta === 0){
				this.subVentana2 = 0;
			}
			else{
				const jsonfile = require("jsonfile");
				let file = __dirname+"/../bd/proveedores.json";
	
				/*Se obtiene el array completo de datos existente en el JSON de subvenciones*/
				var datos = jsonfile.readFileSync(file);
				
				/*Busqueda del id deseado para editar tal fila*/
				datos.forEach(fila => {
					if(fila["id_proveedor"] === respuesta[0]){
						fila["nombre_proveedor"] = respuesta[1];
						fila["codigo_banco"] = respuesta[2];
						fila["cuenta_destino"] = respuesta[3];
						fila["moneda_destino"] = respuesta[4];
						fila["rut_beneficiado"] = respuesta[5];
						fila["correo"] = respuesta[6];
					}
				})
				
				jsonfile.writeFile(file, datos);
				this.actualizarTabla(datos);

				this.subVentana2 = 0;

				toastr.success("PROVEEDOR EDITADO SATISFACTORIAMENTE","" ,
							   {"progressBar": true,
						        "positionClass": "toast-bottom-right"});
			}
		},
		actualizarTabla: function(nuevaTabla){
			/*Al agregar un nuevo dato a la tabla o eliminarlo se procede a actualizar */
			/*la tabla de la interfaz, pero sin contar con los funcionarios*/
			let miTabla = [];

			nuevaTabla.forEach(fila => {
				if(fila["funcionario"] === "0"){
					miTabla.push(fila);
				}
			})

			this.tablaActual = miTabla;
		},
	},
	template: `
	<div class="container-fluid">
		<editar :visible='this.subVentana2' :modulo ="2" :titulo='this.tituloEdicion' :datos="this.datosEdicion" @confirmacion="obtenerRespuestaEdicion"></editar>
		<eliminar :visible='this.subVentana' :titulo='this.tituloEliminacion' @confirmacion="obtenerRespuesta"></eliminar>

		<div class="row justify-content-md-center align-items-center vh-100">
			<div class="col-12">
				<div class="contenedor-tabla" id="contenedor-tabla">
					<table class="table mi-tabla">
						<thead class="fila-fija">
							<tr class="cabecera-tabla">
								<th class="centrar">PROVEEDOR</th>
								<th class="centrar">BANCO</th>
								<th class="centrar">CUENTA</th>
								<th class="centrar">MONEDA</th>
								<th class="centrar">RUT</th>
								<th class="centrar">CORREO ELECTRÓNICO</th>
								<th></th>
							</tr>
							<tr class="filtros">
								<td><input type="text" class="form-control form-control-sm" placeholder="PROVEEDOR..." v-model="filtroProveedor"/></td>
								<td><input type="text" class="form-control form-control-sm" placeholder="CÓDIGO..." v-model="filtroBanco"/></td>
								<td><input type="text" class="form-control form-control-sm" placeholder="CUENTA..." v-model="filtroCuenta"/></td>
								<td><input type="text" class="form-control form-control-sm" placeholder="MONEDA..." v-model="filtroMoneda"/></td>
								<td><input type="text" class="form-control form-control-sm" placeholder="RUT..." v-model="filtroRut"/></td>
								<td><input type="text" class="form-control form-control-sm" placeholder="CORREO..." v-model="filtroCorreo"/></td>
								<td></td>
							</tr>
						</thead>
						<tbody class="cuerpo-tabla">
							<!--Solo se mostrarán las filas especificas si el contenido de los textbox de filtro-->
							<!--concuerdan.-->
							
							<tr v-for="fila in tablaActual" 
								v-if="fila['nombre_proveedor'].indexOf(filtroProveedor.toUpperCase()) !== -1 && 
								fila['codigo_banco'].indexOf(filtroBanco) !== -1 &&
								fila['cuenta_destino'].indexOf(filtroCuenta) !== -1 &&
								fila['moneda_destino'].indexOf(filtroMoneda.toUpperCase()) !== -1 &&
								fila['rut_beneficiado'].indexOf(filtroRut.toUpperCase()) !== -1 &&
								fila['correo'].indexOf(filtroCorreo.toLowerCase()) !== -1"
								style="vertical-align: middle;"
							>

								<td style="width: 23%"><div class="textarea">{{fila['nombre_proveedor']}}</div></td>
								<td style="width: 15%"><div class="textarea">{{fila['codigo_banco']}}</div></td>
								<td style="width: 9%"><div class="textarea">{{fila['cuenta_destino']}}</div></td>
								<td style="width: 16%"><div class="textarea">{{fila['moneda_destino']}}</div></td>
								<td style="width: 12%"><div class="textarea">{{fila['rut_beneficiado']}}</div></td>
								<td style="width: 13%"><div class="textarea">{{fila['correo']}}</div></td>
								<td style="width: 15%" class="container">
									<div class="row justify-content-center">
										<button class="pushy__btn pushy__btn--sm btn-editar col-10" @click="confirmarEdicion(fila)">Editar</button>
										<div class="col-8 mt-2"></div>
										<button class="pushy__btn pushy__btn--sm pushy__btn--red btn-eliminar col-10" @click="confirmarEliminacion(fila['id_proveedor'],fila['nombre_proveedor'])">Eliminar</button>
									</div>
								</td>
							</tr>

							<!--Fila para la creacion de nuevos proveedores-->
							<nuevo-proveedor v-for="i in nuevasFilas" @confirmarCreacion="actualizarTabla"/>
						</tbody>
					</table>
				</div>

				<!--Botones de opciones-->
				<div class="container mt-3 mb-3">
					<div class="row">
						<div class="col-12 d-flex justify-content-start">
							<button class="pushy__btn pushy__btn--md pushy__btn--green btn-agregar" @click="agregarProveedor">Agregar Proveedor</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>`
})

/*Componente para crear filas de integración de datos de funcionarios*/
Vue.component('nuevo-funcionario',{
	data: function(){
		return{
			nuevoFuncionario: "",
			nuevoBanco: "",
			nuevaCuenta: "",
			nuevaMoneda: "",
			nuevoRut: "",
			nuevoCorreo: "",
			eliminado: 0
		}
	},
	methods:{
		confirmarCreacion: function(){
			const jsonfile = require("jsonfile");
			let file = __dirname+"/../bd/proveedores.json";

			/*Se obtiene el array completo de datos existente en el JSON de subvenciones*/
			let datos = jsonfile.readFileSync(file);

			/*Se crea un nuevo objeto con los nuevos datos*/
			let nuevoDato = {
				/*Se toma el ultimo id guardado del ultimo dato y sumandole 1 obtenemos el nuevo id*/
				id_proveedor: (Number(datos[datos.length-1]["id_proveedor"])+1).toString(),
				nombre_proveedor: this.nuevoFuncionario.toUpperCase(),
				codigo_banco: this.nuevoBanco.toUpperCase(),
				cuenta_destino: this.nuevaCuenta.toUpperCase(),
				moneda_destino: this.nuevaMoneda.toUpperCase(),
				rut_beneficiado: this.nuevoRut.toUpperCase(),
				correo: this.nuevoCorreo.toLowerCase(),
				funcionario: "1"
			};

			/*Se introduce el nuevo objeto y se reemplaza el array antiguo con el nuevo*/
			datos.push(nuevoDato)
			jsonfile.writeFile(file, datos);

			/*Ya creados los nuevos datos se elimina la fila de creacion de datos*/
			this.eliminado = 1;

			this.$emit("confirmarCreacion", datos);

			/*Mensaje de confirmación*/
			toastr.success("FUNCIONARIO CREADO SATISFACTORIAMENTE","" ,
						{"progressBar": true,
						"positionClass": "toast-bottom-right"});
		},
		cancelarCreacion: function(){
			this.eliminado = 1;
		}
	},
	mounted: function(){
		let contenedorTabla = document.getElementById("contenedor-tabla");
		contenedorTabla.scrollTop = contenedorTabla.scrollHeight;
	},
	template: `
	<tr class="nuevo-dato" v-if="eliminado === 0">
		<td class="centrar">
			<input class="form-control form-control-sm" placeholder="NUEVO FUNCIONARIO..." v-model="nuevoFuncionario"/>
		</td>
		<td class="centrar">
			<input class="form-control form-control-sm" placeholder="NUEVO BANCO..." v-model="nuevoBanco"/>
		</td>
		<td class="centrar">
			<input class="form-control form-control-sm" placeholder="NUEVA CUENTA..." v-model="nuevaCuenta" />
		</td>
		<td class="centrar">
			<input class="form-control form-control-sm" placeholder="NUEVA MONEDA..." v-model="nuevaMoneda" />
		</td>
		<td class="centrar">
			<input class="form-control form-control-sm" placeholder="NUEVO RUT..." v-model="nuevoRut" />
		</td>
		<td class="centrar">
			<input class="form-control form-control-sm" placeholder="NUEVO CORREO..." v-model="nuevoCorreo" />
		</td>
		<td class="centrar">
			<button class="pushy__btn pushy__btn--sm pushy__btn--green btn-confirmar" @click="confirmarCreacion">Confirmar</button>
			<button class="pushy__btn pushy__btn--sm pushy__btn--red btn-cancelar" @click="cancelarCreacion">Cancelar</button>
		</td>
	</tr>
	`
})

/*Componente Seleccion 4*/
Vue.component('menu4',{
	data: function(){
		return{
			tablaActual: this.tabla,

			filtroProveedor: "",
			filtroBanco: "",
			filtroCuenta: "",
			filtroMoneda: "",
			filtroRut: "",
			filtroCorreo: "",

			nuevasFilas: 0,

			subVentana: 0,
			subVentana2: 0,

			tituloEdicion: "",
			datosEdicion: [],

			tituloEliminacion: "",
			idEliminacion: 0
		}
	},
	methods:{
		agregarFuncionario: function(){
			this.nuevasFilas += 1;
		},
		confirmarEliminacion: function(id, nombre){
			this.subVentana = 1,
			this.idEliminacion = id,
			this.tituloEliminacion = '¿ESTÁ SEGURO/A DE ELIMINAR AL FUNCIONARIO "'+nombre+'"?';
		},
		obtenerRespuesta: function(respuesta){
			if(respuesta === 0){
				this.subVentana = 0;
			}
			if(respuesta === 1){
				this.subVentana = 0;
				this.eliminarFuncionario(this.idEliminacion);
			}
		},
		eliminarFuncionario: function(id){
			const jsonfile = require("jsonfile");
			let file = __dirname+"/../bd/proveedores.json";

			/*Se obtiene el array completo de datos existente en el JSON de subvenciones*/
			let datos = jsonfile.readFileSync(file);

			/*Busqueda del id deseado para eliminar tal fila*/
			let posicion;
			datos.forEach((fila, contador) =>{
				if(fila["id_proveedor"] === id){
					posicion = contador;
				}
			});

			datos.splice(posicion, 1);
			jsonfile.writeFile(file, datos);

			this.actualizarTabla(datos);
			
			/*Mensaje de confirmación*/
			toastr.success("FUNCIONARIO ELIMINADO SATISFACTORIAMENTE","" ,
						{"progressBar": true,
						"positionClass": "toast-bottom-right"});
		},
		confirmarEdicion: function(dato){
			this.subVentana2 = 1;
			this.datosEdicion= dato;
			this.tituloEdicion = 'EDITANDO EL PROVEEDOR "'+dato["nombre_proveedor"]+'"';
		},
		obtenerRespuestaEdicion: function(respuesta){
			if(respuesta === 0){
				this.subVentana2 = 0;
			}
			else{
				const jsonfile = require("jsonfile");
				let file = __dirname+"/../bd/proveedores.json";
	
				/*Se obtiene el array completo de datos existente en el JSON de subvenciones*/
				var datos = jsonfile.readFileSync(file);
				
				/*Busqueda del id deseado para editar tal fila*/
				datos.forEach(fila => {
					if(fila["id_proveedor"] === respuesta[0]){
						fila["nombre_proveedor"] = respuesta[1];
						fila["codigo_banco"] = respuesta[2];
						fila["cuenta_destino"] = respuesta[3];
						fila["moneda_destino"] = respuesta[4];
						fila["rut_beneficiado"] = respuesta[5];
						fila["correo"] = respuesta[6];
					}
				})
				
				jsonfile.writeFile(file, datos);
				this.actualizarTabla(datos);

				this.subVentana2 = 0;

				toastr.success("PROVEEDOR EDITADO SATISFACTORIAMENTE","" ,
							   {"progressBar": true,
						        "positionClass": "toast-bottom-right"});
			}
		},
		actualizarTabla: function(nuevaTabla){
			/*Al agregar un nuevo dato a la tabla o eliminarlo se procede a actualizar */
			/*la tabla de la interfaz, pero sin contar con los funcionarios*/
			let miTabla = [];

			nuevaTabla.forEach(fila => {
				if(fila["funcionario"] === "1"){
					miTabla.push(fila);
				}
			})

			this.tablaActual = miTabla;
		}
	},

	props: ["tabla"],
	template: `
	<div class="container-fluid">
		<editar :visible='this.subVentana2' :modulo ="2" :titulo='this.tituloEdicion' :datos="this.datosEdicion" @confirmacion="obtenerRespuestaEdicion"></editar>
		<eliminar :visible='this.subVentana' :titulo='this.tituloEliminacion' @confirmacion="obtenerRespuesta"></eliminar>

		<div class="row justify-content-md-center align-items-center vh-100">
			<div class="col-12">
				<div class="contenedor-tabla" id="contenedor-tabla">
					<table class="table mi-tabla">
						<thead class="fila-fija">
							<tr class="cabecera-tabla">
								<th class="centrar">FUNCIONARIO</th>
								<th class="centrar">BANCO</th>
								<th class="centrar">CUENTA</th>
								<th class="centrar">MONEDA</th>
								<th class="centrar">RUT</th>
								<th class="centrar">CORREO ELECTRÓNICO</th>
								<th></th>
							</tr>
							<tr class="filtros">
								<td><input type="text" class="form-control form-control-sm" placeholder="FUNCIONARIO..." v-model="filtroProveedor"/></td>
								<td><input type="text" class="form-control form-control-sm" placeholder="CÓDIGO..." v-model="filtroBanco"/></td>
								<td><input type="text" class="form-control form-control-sm" placeholder="CUENTA..." v-model="filtroCuenta"/></td>
								<td><input type="text" class="form-control form-control-sm" placeholder="MONEDA..." v-model="filtroMoneda"/></td>
								<td><input type="text" class="form-control form-control-sm" placeholder="RUT..." v-model="filtroRut"/></td>
								<td><input type="text" class="form-control form-control-sm" placeholder="CORREO..." v-model="filtroCorreo"/></td>
								<td></td>
							</tr>
						</thead>
						
						<tbody class="cuerpo-tabla">
							<!--Solo se mostrarán las filas especificas si el contenido de los textbox de filtro-->
							<!--concuerdan.-->
							
							<tr v-for="fila in tablaActual" 
								v-if="fila['nombre_proveedor'].indexOf(filtroProveedor.toUpperCase()) !== -1 && 
								fila['codigo_banco'].indexOf(filtroBanco) !== -1 &&
								fila['cuenta_destino'].indexOf(filtroCuenta) !== -1 &&
								fila['moneda_destino'].indexOf(filtroMoneda.toUpperCase()) !== -1 &&
								fila['rut_beneficiado'].indexOf(filtroRut.toUpperCase()) !== -1 &&
								fila['correo'].indexOf(filtroCorreo.toLowerCase()) !== -1"
								style="vertical-align: middle;"
							>
								<td style="width: 23%"><div class="textarea">{{fila['nombre_proveedor']}}</div></td>
								<td style="width: 15%"><div class="textarea">{{fila['codigo_banco']}}</div></td>
								<td style="width: 9%"><div class="textarea">{{fila['cuenta_destino']}}</div></td>
								<td style="width: 16%"><div class="textarea">{{fila['moneda_destino']}}</div></td>
								<td style="width: 12%"><div class="textarea">{{fila['rut_beneficiado']}}</div></td>
								<td style="width: 13%"><div class="textarea">{{fila['correo']}}</div></td>
								<td style="width: 15%" class="container-fluid">
									<div class="row justify-content-center">
										<button class="pushy__btn pushy__btn--sm btn-editar col-10" @click="confirmarEdicion(fila)">Editar</button>
										<div class="col-8 mt-2"></div>
										<button class="pushy__btn pushy__btn--sm pushy__btn--red btn-eliminar col-10" @click="confirmarEliminacion(fila['id_proveedor'], fila['nombre_proveedor'])">Eliminar</button>
									</div>	
								</td>
							</tr>

							<!--Fila para la creacion de nuevos funcionarios-->
							<nuevo-funcionario v-for="i in nuevasFilas" @confirmarCreacion="actualizarTabla"/>
						</tbody>
					</table>
				</div>

				<!--Botones de opciones-->
				<div class="container mt-3 mb-3">
					<div class="row">
						<div class="col-12 d-flex justify-content-start">
							<button class="pushy__btn pushy__btn--md pushy__btn--green btn-agregar" @click="agregarFuncionario">Agregar Funcionario</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>`
})

Vue.component('pantalla',{
	props: ["seleccion","tabla"],
	template: `
		<div class="pantalla">
			<menu1 v-if="seleccion === 1" :tabla="tabla"></menu1>
			<menu2 v-if="seleccion === 2" :tabla="tabla"></menu2>
			<menu3  v-if="seleccion === 3" :tabla="tabla"></menu3>
			<menu4 v-if="seleccion === 4" :tabla="tabla"></menu4>
		</div> 
	`
})

var app = new Vue({
	el: "#app",
	data:{
		seleccionado: 0,
		tabla: []
	},
	created: function(){
		document.getElementsByClassName("seleccion1")[0].style.background = "rgba(225, 90, 0, 0.6)";
		document.getElementsByClassName("seleccion2")[0].style.background = "rgb(33, 37, 41)";
		document.getElementsByClassName("seleccion3")[0].style.background = "rgb(33, 37, 41)";
		document.getElementsByClassName("seleccion4")[0].style.background = "rgb(33, 37, 41)";

		this.seleccionado = 1;
		this.tabla = [];

		const jsonfile = require("jsonfile");
		let file = __dirname+"/../bd/subvenciones.json";

		jsonfile.readFileSync(file).forEach(fila => {
			this.tabla.push([fila["id_subvencion"],fila["nombre_subvencion"],"subvencion"]);
		})

		file = __dirname+"/../bd/proveedores.json";
		jsonfile.readFileSync(file).forEach(fila => {
			this.tabla.push([fila["id_proveedor"],fila["nombre_proveedor"],"proveedor"]);
		})
	},
	methods: {
		verTransacciones: function(){
			/*Se marca elmodulo seleccionado*/
			document.getElementsByClassName("seleccion1")[0].style.background = "rgba(225, 90, 0, 0.6)";
			document.getElementsByClassName("seleccion2")[0].style.background = "rgb(33, 37, 41)";
			document.getElementsByClassName("seleccion3")[0].style.background = "rgb(33, 37, 41)";
			document.getElementsByClassName("seleccion4")[0].style.background = "rgb(33, 37, 41)";

			this.seleccionado = 1;
			this.tabla = [];

			const jsonfile = require("jsonfile");
			let file = __dirname+"/../bd/subvenciones.json";

			jsonfile.readFileSync(file).forEach(fila => {
				this.tabla.push([fila["id_subvencion"],fila["nombre_subvencion"],"subvencion"]);
			})

			file = __dirname+"/../bd/proveedores.json";
			jsonfile.readFileSync(file).forEach(fila => {
				this.tabla.push([fila["id_proveedor"],fila["nombre_proveedor"],"proveedor"]);
			})
		},
		verSubvenciones: function(){
			/*Se marca elmodulo seleccionado*/
			document.getElementsByClassName("seleccion1")[0].style.background = "rgb(33, 37, 41)";
			document.getElementsByClassName("seleccion2")[0].style.background = "rgba(225, 90, 0, 0.6)";
			document.getElementsByClassName("seleccion3")[0].style.background = "rgb(33, 37, 41)";
			document.getElementsByClassName("seleccion4")[0].style.background = "rgb(33, 37, 41)";

			this.seleccionado = 2;
			this.tabla = [];

			const jsonfile = require("jsonfile");
			const file = __dirname+"/../bd/subvenciones.json";

			jsonfile.readFileSync(file).forEach(fila =>{
				this.tabla.push(fila);
			})
		},
		verProveedores: function(){
			/*Se marca elmodulo seleccionado*/
			document.getElementsByClassName("seleccion1")[0].style.background = "rgb(33, 37, 41)";
			document.getElementsByClassName("seleccion2")[0].style.background = "rgb(33, 37, 41)";
			document.getElementsByClassName("seleccion3")[0].style.background = "rgba(225, 90, 0, 0.6)";
			document.getElementsByClassName("seleccion4")[0].style.background = "rgb(33, 37, 41)";

			this.seleccionado = 3;
			this.tabla = [];

			const jsonfile = require("jsonfile");
			const file = __dirname+"/../bd/proveedores.json";

			jsonfile.readFileSync(file).forEach(fila =>{
				if(fila["funcionario"] === "0"){
					this.tabla.push(fila);
				}
			})
		},
		verFuncionarios: function(){
			/*Se marca elmodulo seleccionado*/
			document.getElementsByClassName("seleccion1")[0].style.background = "rgb(33, 37, 41)";
			document.getElementsByClassName("seleccion2")[0].style.background = "rgb(33, 37, 41)";
			document.getElementsByClassName("seleccion3")[0].style.background = "rgb(33, 37, 41)";
			document.getElementsByClassName("seleccion4")[0].style.background = "rgba(225, 90, 0, 0.6)";

			this.seleccionado = 4;
			this.tabla = [];

			const jsonfile = require("jsonfile");
			const file = __dirname+"/../bd/proveedores.json";

			jsonfile.readFileSync(file).forEach(fila =>{
				if(fila["funcionario"] === "1"){
					this.tabla.push(fila);
				}
			})
		}
	}
})