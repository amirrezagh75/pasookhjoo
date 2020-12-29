<template>

<div>
    <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText v-model="value1" type="text" placeholder="Search" />
    </span>
    <Button lable="Search" icon = "pi pi-search" @click="sayHi"></Button>
    <Toast />
</div>
<div class="p-d-flex">
    <div class="p-mr-2">Item 1</div>
    <div class="p-mr-2">Item 2</div>
    <div>Item 3</div>
</div>



</template>

<script>

import Button from 'primevue/button'
import Toast from 'primevue/toast'
import InputText from 'primevue/inputtext';
import 'primeflex/primeflex.css';
import {reactive } from 'vue'


export default {
    
    name : 'MaterialPage',
    components : {
        Button,
        InputText,
        Toast,
    },
    setup(props , ctx) {
        const state = reactive ({
            
        }) 
    
        // const computedState = computed ( ()=> state.value1)

        let sayHi = () => {
            ctx.toast.add({severity:'info', summary: 'Searching for...', detail: state.value1, life: 3000});
        }

        return {
            state,
            sayHi,
        }
        
    }
    
}
</script>

<style>

</style>