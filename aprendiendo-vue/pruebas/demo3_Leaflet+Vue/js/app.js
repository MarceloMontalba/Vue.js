//Requiere montar en servidor http local
var { LMap, LTileLayer, LMarker } = Vue2Leaflet;

const app = new Vue({
    el: "#app",
    components: {LMap, LTileLayer, LMarker},
    data: {
        regiones: [],
        provincias: [],
        regionSeleccionada: "I Región de Tarapacá",

        //Configuraciones del mapa
        zoom: 7,
        center: L.latLng(-20.2667, -69.8),
        url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        marcador: L.latLng(-20.2667, -69.8),
    },
    methods: {
        reseteaMapa: function(latitud, longitud, zoom, region, poblacion){
            this.center = L.latLng(latitud, longitud)
            this.marcador = L.latLng(latitud, longitud)
            this.zoom = zoom

            //Se resetea el label correspondiente de la region actual, tomando el objeto del mapa
            // y del marcador, mostrando su informacion correspondiente
            mapa = this.$refs.map.mapObject
            marcador = this.$refs.marcador.mapObject
            
            marcador.bindTooltip("<h6>"+region+"</h6>N° Habitantes: "+String(poblacion));
            marcador.addTo(mapa);
        }
    },
    created: function(){
        let regionesObtenidas = []
        let provinciasObtenidas = []

        //Carga datos de regiones a su correspondiente variable de vue
        fetch("js/ubicacion_regiones.json")
            .then(respuesta => respuesta.json())
            .then(respuesta => {
                for(let i=0; i<respuesta.length;i++){
                    regionesObtenidas.push(respuesta[i])
                }
            })
        this.regiones = regionesObtenidas

        //Carga datos de provincias a su correspondiente variable de vue
        fetch("js/provincias.json")
            .then(respuesta => respuesta.json())
            .then(respuesta => {
                for(let i=0; i<respuesta.length;i++){
                    provinciasObtenidas.push(respuesta[i])
                }
            })
        this.provincias = provinciasObtenidas
    }
})