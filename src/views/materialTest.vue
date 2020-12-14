<template>

<div>
    <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText type="text" v-model="value1" placeholder="Search" />
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
export default {
    
    name : 'materialPage',
    data () {
        return {
            value1 : null
        }
    },
    components : {
        Button,
        InputText,
        Toast
    },
    methods :{
        sayHi (){
            this.$toast.add({severity:'info', summary: 'Searching for...', detail:this.value1, life: 3000});
        }
    }
}
</script>

<style>

</style>