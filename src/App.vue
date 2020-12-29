<template>
  
    <menuBar :menu-items='myState.menuItems' />
    <router-view />
</template>

<script>
import menuBar from '@/components/menu'
import {reactive } from 'vue'
import 'primeflex/primeflex.css'


export default {
    components : {
        menuBar
    },
    setup (){
        let myState = reactive({
            menuItems : [
                {
                    label: 'Home',
                    icon: 'pi pi-home',
                    to : {name : 'Home'}
                },
                {
                    label: 'User list',
                    icon: 'pi pi-users',
                    to : {name : 'users_page'}
                },
                {
                    label: 'Material Test',
                    icon: 'pi pi-sitemap',
                    to : {name : 'materialPage'},
                    target : '_blank',
                    items : [
                        {
                            label: 'New 1',
                            icon: 'pi pi-sitemap'
                        },
                        {
                            separator : true
                        },
                        {
                            label: 'New 2',
                            icon: 'pi pi-sitemap'
                        }
                    ]
                }
            ]
        })

        return {
            myState
        }
    }
    

}
</script>


<style language = "scss">


</style>
