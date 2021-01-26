<template>

    <section class="p-grid p-flex-column container section" style="width:100%; height: auto;">
      <SearchBox/>
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
      
    })
    return{
      state
    }
  }
}
</script>
<style lang="scss" scoped>
  section{
    padding: 0;
  }
</style>