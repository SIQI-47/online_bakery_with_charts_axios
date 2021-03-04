<template>
    <div id="main">
        <div id="chart">
            <axiosExample></axiosExample>
        
        </div>
         <div id="chart">
            <mobiledatausage></mobiledatausage>
        </div>
        
    </div>
</template>

<script>
import axiosExample from '../axiosExample.js'
import mobiledatausage from '../mobiledatausage.js'

export default {
    components:{
        axiosExample,mobiledatausage//register locally
    }
    
}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:240px;
  width:300px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding-bottom: 60px;
  float:left;
}
</style>