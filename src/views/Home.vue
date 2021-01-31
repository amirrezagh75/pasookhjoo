<template>

    <section v-if="! state.seachKey" class="p-grid p-flex-column container section" style="width:100%; height: auto;">
      <SearchBox  @SearchValue = "searchKeyWord"/>
    </section>
    <section v-else>
      hello
    </section>
    
</template>

<script>
import 'primeflex/primeflex.css';
import SearchBox from "@/components/homePage/searchSection"
import {reactive} from 'vue'

export default {
  name: 'HomePage',
  components: {
    SearchBox
  },
  setup(){
    const state = reactive({
      seachKey : ""
    })
    let searchKeyWord = (searchValue)=>{
      console.log(...searchValue)
      state.seachKey = searchValue
    }
    return{
      state,
      searchKeyWord
    }
  }
}
</script>
<style lang="scss" scoped>
  section{
    padding: 0;
  }
</style>