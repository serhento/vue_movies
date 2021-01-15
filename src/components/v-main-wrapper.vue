<template>
    <div class="v-main-wrapper">
        <v-header/>
        <v-main-box/>
    </div>
</template>

<script>
    import vHeader from "./v-header";
    import vMainBox from "./v-main-box";
    export default {
        name: "v-main-wrapper",
        components:{
            vHeader, vMainBox
        }
    }
</script>

<style lang="scss">

</style>