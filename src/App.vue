<template>
  
    <menuBar :menu-items='menuItems' />
    <router-view />
    <ScrollTop/>
</template>

<script>
import menuBar from '@/components/menu'
import {reactive } from 'vue'
import 'primeflex/primeflex.css'
import ScrollTop from 'primevue/scrolltop';
import menuItems from '@/helpers/menuItems'


export default {
    components : {
        menuBar,
        ScrollTop
    },
    setup (){
        let myState = reactive({
        })

        return {
            myState,
            menuItems
        }
    }
    

}
</script>


<style language = "scss">
@import "~@/style/base.scss";

</style>
