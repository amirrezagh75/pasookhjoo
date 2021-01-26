<template>
  <div class="userForm">
      <form @submit.prevent = "submitNewUser">
          <div>
          <label for="username">Username</label>
          <input v-model="state.user.username" type="text" name="username">
          </div>
          
          <div>

          <label for="firstName">First name</label>
          <input v-model="state.user.firstName" type="firstName" name="firstName">

          <label for="lastName">Last name</label>
          <input v-model="state.user.lastName" type="text" name="lastName">

          </div>

        <div>
          <label for="email">email</label>
          <input v-model="state.user.email" type="email" name="email">
        </div>


         <div>
          <label for="role">User roles</label>
          <select id="role" v-model="state.user.role" name="role">
              <option v-for="(role,index) in state.roles" :key="index" :value="role.val">
                  {{role.name}}
              </option>
          </select>
        </div>

        <div>
            <button>
                submit user
            </button>
        </div>

      </form>
  </div>
</template>

<script>
import {reactive } from 'vue'

export default {
    name : 'UserForm',
    emits: ['submit-user'],
    setup(props , ctx) {
        const state = reactive ({
            user : {
                username:'',
                firstName : '',
                lastName : '',
                email : '',
                role : '',
                followers : 0
            },

            roles : [

                {name: 'choose...' , val: ''},
                {name: 'Admin' , val: 'admin'},
                {name: 'Student' , val: 'student'},
                {name: 'Guests' , val: 'guest'}
            ]
        })

  let submitNewUser =() =>{
         ctx.emit('submit-user' , state.user)
         state.user = {
                username:'',
                firstName : '',
                lastName : '',
                email : '',
                role : '',
                followers : 0
            }
        }

        return {
            state,
            submitNewUser,
        }
    }
  
}
</script>

<style scoped>

.userForm {
    display: flex;
    flex-direction: column;
    padding: 2%;
}

.userForm > form > div {
    padding-top: 1%;
}

.userForm > form > div > label {
    padding-right: 1%;
    display: block;
}

</style>