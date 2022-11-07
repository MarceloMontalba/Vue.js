const app = new Vue({
	el: "#app",
	data:{
		botonControl: "boton-control btn btn-light",
		botonNumero: "boton btn btn-primary",
		botonResetea: "boton-control btn btn-danger",
		botonMas: "boton-mas btn btn-light",
		botonIgual: "boton-igual btn btn-light",
		pantallaOperaciones: "",
		pantallaResultado: "",
		total: 0,
		operacionCompleta: "",
		operar: false,
		decimal: false
	},
	methods:{
		encender: function(){
			this.pantallaOperaciones = ""
			this.pantallaResultado = "0"
			this.total = 0
			this.operacionCompleta = ""
			this.operar = false
			this.decimal = false
		},
		agregarNumero: function(numero){
			if(this.operar ===false){
				if(this.pantallaResultado === "0"){
					this.pantallaResultado = numero
					this.operacionCompleta +=numero
				}
				else{
					if(this.pantallaResultado.length < 12){
						this.pantallaResultado += numero
						this.operacionCompleta +=numero
					}
				}
			}
			else{
				this.pantallaResultado = numero
				this.operacionCompleta +=numero
				this.operar = false
			}
		},
		agregarPunto: function(){
			if (this.decimal ===false){
				let ultimoCaracter =this.operacionCompleta.substring(this.operacionCompleta.length-1,this.operacionCompleta.length)
				let numeros=["1","2","3","4","5","6","7","8","9","0"]
			
				if(numeros.indexOf(ultimoCaracter)!= -1){
					this.pantallaResultado += "."
					this.operacionCompleta += "."
					this.decimal = true
					this.operar = false
				}
			}
		},
		agregarOperacion: function(operacion){
			if(this.operar ===false){
				if(this.operacionCompleta != ""){
					this.total = eval(this.operacionCompleta)
					this.pantallaResultado = this.total
					this.pantallaOperaciones = this.pantallaResultado + operacion
					this.operacionCompleta = String(this.total) + operacion
					this.operar = true
					this.decimal = false
				}
			}
			else{
				this.pantallaOperaciones = this.pantallaResultado + operacion
				this.operacionCompleta = String(this.total) + operacion
				this.decimal = false
			}
		},
		agregarRaizCuadrada: function(){
			if(this.operar ===false){
				if(this.operacionCompleta != ""){
					this.total = Math.sqrt(eval(this.operacionCompleta))
					this.pantallaOperaciones = "√(" + String(eval(this.operacionCompleta)) + ")"
					this.pantallaResultado = this.total
					this.operacionCompleta = String(this.total)
					this.operrar = true
					this.decimal = false
				}
			}
			else{
				this.pantallaOperaciones = "√(" + this.pantallaResultado + ")"
				this.operacionCompleta = "Math.sqrt(" + String(this.total) + ")"
				this.decimal = false
			}
		},
		agregarPorcentaje: function(){
			if(this.operar ===false){
				if(this.operacionCompleta != ""){
					this.total = eval(this.operacionCompleta)
					this.pantallaResultado = this.total
					this.pantallaOperaciones = this.pantallaResultado + "%"
					this.operacionCompleta = "("+String(this.total)+ "/100) *"
					this.operar = true
					this.decimal = false
				}
			}
			else{
				this.pantallaOperaciones = this.pantallaResultado + "%"
				this.operacionCompleta = "("+String(this.total)+ "/100) *"
				this.decimal = false
			}
		},
		eliminaUltimoDato : function(){
				if(this.pantallaResultado!="0"){
					this.operacionCompleta = this.operacionCompleta.substring(0,(this.operacionCompleta.length-this.pantallaResultado.length))
					this.pantallaResultado = "0"
				}
		},
		mostrarResultado: function(){
			this.pantallaOperaciones=""
			this.pantallaResultado = eval(this.operacionCompleta)
		},
	}
})