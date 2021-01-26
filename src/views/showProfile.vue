<template>
<div class="wrapper">

<showUsers :users="users" @add-follower='AddFollower' @dec-follower='decFollower'/>
<userForm @submit-user = 'AddNewUser' />
</div>

</template>

<script>

import showUsers from '@/components/showUsers';
import userForm from '@/components/submitNewUser'
import 'primeflex/primeflex.css';

export default {
    name : 'TestPage',
    components : {
        showUsers,
        userForm
    },
   data () {
       return {
           isLoading : false,
           mydata : {
               id: 2025,
               username : 'amirreza',
               followers : 110,
               following : 200,
               firstName : 'Amirreza',
               lastName : 'Ghajar'
           },
           users : [ 
            {

               id : '1012',
               username:'Aliz',
               firstName : 'Alireza',
               lastName : 'Zahedi',
               email : 'a@gmail.com',
               role : 'admin',
               followers : 25
            },
            {

               id : '1013',
               username:' Mamad',
               firstName : 'Mohammad',
               lastName : 'shahrokni',
               email : 'b@gmail.com',
               role : 'student',
               followers : 10
           },
           {

               id : '1014',
               username:' ghori',
               firstName : 'AmireHosein',
               lastName : 'Ghorbani',
               email : 'c@gmail.com',
               role : 'student',
               followers : 15
           }
           ],
           message : ''
       }
   } ,
   computed : {
      
   },
   methods : {
       AddFollower (id) {
        //    let obj = this.users.find(x=> x.id == id)
        //    let index = this.users.findIndex(obj)
        //    this.users.fill(obj.followers ++ , index , index++)
           console.log(`we should add follower to ${id}`)
       },
       
       decFollower (id) {
        //    let obj = this.users.find(x=> x.id == id)
        //    let index = this.users.indexOf(obj)
        //    this.users.fill(obj.followers -- , index , index++)
           console.log(`we should remove follower from ${id}`)
       },

       AddNewUser (user){
           
           this.users.push(user)
       }
   },


}
</script>

<style language = "scss" scoped>
.wrapper{
    background-color: bisque;
    width : 100%;
    min-height: 100vh;
    height: 100%;   
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
}
</style>