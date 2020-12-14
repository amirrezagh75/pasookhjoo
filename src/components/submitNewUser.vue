<template>
  <div class="userForm">
      <form @submit.prevent = "submitNewUser">
          <div>
          <label for="username">Username</label>
          <input type="text" name="username" v-model="user.username">
          </div>
          
          <div>

          <label for="firstName">First name</label>
          <input type="firstName" name="firstName" v-model="user.firstName">

          <label for="lastName">Last name</label>
          <input type="text" name="lastName" v-model="this.user.lastName">

          </div>

        <div>
          <label for="email">email</label>
          <input type="email" name="email" v-model="user.email">
        </div>


         <div>
          <label for="role">User roles</label>
          <select name="role" id="role" v-model="user.role">
              <option v-for="(role,index) in roles" :value="role.val" :key="index">
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
export default {
    name : 'userForm',
    data () {
        return {
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
            

        }
    },
    methods : {

        submitNewUser(){
         this.$emit('submit-user' , this.user)
         this.user = {
                username:'',
                firstName : '',
                lastName : '',
                email : '',
                role : '',
                followers : 0
            }
        }
    }
}
</script>

<style>
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