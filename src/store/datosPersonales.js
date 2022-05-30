import { defineStore } from "pinia";

import db  from '@/hook/firebase.config';

import { collection,query,getDocs } from "firebase/firestore";

export const useStoreDatosPersonales = defineStore(
    "datosPersonales",
    {
        state:()=>{
            return {
                curriculum: [],
                nombre: '',
            }
        },
        actions: {
            /**
             * Función que coge datos de firestore y los almacena en un array de datos
             * Ref: //https://firebase.google.com/docs/firestore/query-data/get-data?hl=es&authuser=0
             */
            async setDatosCurriculum(){
                if(this.curriculum.length)
                    return;
                const curriculumRef = collection(db,'curriculum');
                const consulta = query(curriculumRef);
                const resultadoConsulta = await getDocs(consulta);
                resultadoConsulta.forEach(
                    (fila)=>{
                        this.curriculum.push(fila.data());
                    }
                );
            },
        }
    }
);





