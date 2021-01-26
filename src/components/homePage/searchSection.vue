<template>
    <div class="p-col container" >
      <div class="bg"></div>
      <div class="box box-stretched">
        <div class="searchBox">
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText ref="searchBox" v-model="searchValue"  :class="inputClass"  type="text" placeholder="کلمه کلیدی سوالت" min="3" @keyup.enter="searchKeyWord"/>
              </span>
              <Button label="جست و جو" icon="pi pi-search" @click="searchKeyWord"/>
        </div>
      </div>
      
    </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button'

export default {
    name: "SearchBox",
    components: {
    InputText,
    Button
  },
  data(){
    return{

      searchValue:"",
      inputClass:""
    }
  },
  watch:{
    
  },
  methods: {
    searchKeyWord(){
      if(this.searchValue.length > 3){
        this.inputClass =""

        this.axios
        .get(`/showPosts`,{
          params:{
            "search": null || this.searchValue 
          }
        })
        .then(response=>{
          console.log(response.data)
        })
        .catch(err=>console.error(`searchKeyword error:${err}`))
      }
      else{
        this.inputClass ="p-invalid"
      }
    }
  },

}
</script>

<style lang="scss" scoped>

.container{
    height: 92vh;
    width: 100vw;
    padding-top: 1%;
  }
  .bg{
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    width: auto;
    height: 100%;
    filter: drop-shadow(2px 4px 6px black) blur(4px) brightness(0.5);
  }
 .searchBox{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 30vw;
    span{
      margin-right: 1%;
      input{
        width: 23vw;
      }
    }
 }

 @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
 }
</style>