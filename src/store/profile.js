import { defineStore } from "pinia";


export const useStoreProfile = defineStore(
    "profile",
    {
        state: () => {
            return {
                curriculum: [],
                nombre: "Xurxo",
                apellido1: "",
                apellido2: ""
            }
        },
        actions: {
            async cargarData() {
                const response = await fetch('https://raw.githubusercontent.com/sansus3/webferrol-app/main/xurxo.json');
                const data = await response.json();
                //console.log(data);
                this.curriculum = data.curriculum;
                this.apellido1 = data.apellido1;
                this.apellido2 = data.apellido2;
                this.nombre = data.nombre;
                
            },
            // otraFuncion() {

            // }
        }
    }
)