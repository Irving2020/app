<template>
    <div
       :ref="innterRef"
       class="contain"
    >
       {{ data.text || "当前城市" }}
     </div>
</template>

<script>
export default{
    name:'ToolTip',
    props:['innterRef','data'],
    data(){
        return {
            text:null,
        }
    },
}
</script>


<style lang="scss" scoped>
.contain{
    // position: absolute;
    position: fixed !important;
    top: 0% !important;
    z-index: 999;
    background: "#010209";
    width: 350px;
    height: 200px;
    padding: 10px;
    // border: 2px solid #163FA2;
    // visibility: hidden;
    color: #3B93E6;
    pointer-events: none;
}
</style>