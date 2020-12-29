<template>
  <Menubar :model="menuItems">
    <template #start>
        <img alt="logo" src="@/assets/images/logo.png" height="40" class="p-mr-2">
    </template>

    <template #end>

        <InputText class="p-d-none p-d-md-inline-flex" placeholder="Search" type="text" />
        <Button class="p-d-none p-d-md-inline-flex" label="Logout" icon="pi pi-power-off" :style="{'margin-left': '0 .5em'}"/>


    </template>

  </Menubar>
  
</template>

<script>

import Menubar from 'primevue/menubar';
import {reactive } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button'

export default {

    name : 'MenuComponent',

    components :{
        Menubar,
        InputText,
        Button
    },

    props :{
        menuItems : {
            type : Object,
            required : true
        }
    },
    
    setup () {
        
        let myState =  reactive ({
         
        })
    
        return {
            myState
        }
    }
}
</script>


<style scoped language = 'scss'>
  
</style>