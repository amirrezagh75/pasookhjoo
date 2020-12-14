<template>
    <div class="userList" v-for="user in users" :key="user.id">
    
    <h1>@{{user.username}} </h1> <small class="fullname">{{fullName(user)}}</small>
    <small class="user-badge admin" v-if="user.role =='admin'">Admin</small>
    <small class="user-badge student" v-else-if="user.role =='student'">student</small>
    <br>
    <strong>followers</strong> {{user.followers}}
    <br>
    <button style="background-color: blue; color: white;" @click="toggleAddFollower(user.id)">+</button>
    <button style="background-color: red; color: white;" @click="toggleDecFollower(user.id)">-</button>
    <p style="color:red;">{{ message }}</p>

</div>

</template>

<script>

export default {
    name : 'showUsers',
    props : {
        users : {
            type : Object,
            required : true
        }
    },

    methods : {
       toggleAddFollower (uid) {
           this.$emit('add-follower' , uid)
       },
       toggleDecFollower (uid) {
           this.$emit('dec-follower' , uid)
       },
       fullName : function(user){
           return `${user.firstName} ${user.lastName}`
       }
   },
   mounted () {
    //    this.userFollower () {}
   },
   watch : {
   }
}
</script>


<style>
.userList {
    display: inline-block;
    width: 24%;
    height: auto;
    background-color: white;
    margin-left: 1%;
    border: 1px black solid;
    margin-top: 1%;
}
.userList button {
    width: 7%;
    margin: auto;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
}
.userList .fullname{
    color: white;
    text-align: center;
    padding: 0% 3%;
    border-radius: 4%;
    position: inherit;
    display: flex;
    width: 20%;
    margin: auto;
    margin-bottom: 2%;
    font-size: 14px;
    margin-top: -5%;
    background-color: #025dbb;
}
.user-badge {
    color: white;
    padding: 0 10px;
    border-radius: 9%;
    position: initial;
    display: block;
    margin-bottom: 2%;
    width: 10%;
    margin: auto;
    font-size: 15px;
    text-align: center;
}
.user-badge.admin {
    background-color: red;
}
.user-badge.student{
    background-color: royalblue;
}


</style>