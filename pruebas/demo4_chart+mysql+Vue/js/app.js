Vue.component("chart",{
    extends: VueChartJs.Pie,
    data(){
        return{
            etiquetas: [],
            stock: [],
            bgColors: ["#f06292","#ec407a","#d81b60","#1de9b6","#00bfa5","#e65100","#ea80fc"]
        }
    },
    mounted(){
        this.mostrar()

        this.renderChart({
            labels: this.etiquetas,
            datasets: [
                {
                    label: "Graficos",
                    backgroundColor: this.bgColors,
                    data: this.stock
                }
            ]
        }, {responsive: true, maintainAspectRadio: false})
    },
    methods:{
        mostrar(){
            var etiquetas = [];
            var stock = [];

            $.ajax({
                url: "php/datos.php",
                type: "POST",
                async: false,
                success: function(respuesta){
                    JSON.parse(respuesta).forEach(elemento =>{
                        etiquetas.push(elemento.nombre)
                        stock.push(Number(elemento.stock))
                    })
                }
            })

            this.etiquetas = etiquetas
            this.stock = stock


        }
    }
})

const app = new Vue({
    el: "#app",
    data: {
        mensaje: "Datos Stock Supermercado con Vue + Jquery + Chart"
    }
})