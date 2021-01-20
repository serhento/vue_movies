<template>
    <div class="v-main-wrapper">
        <v-header/>
<!--        <v-main-box/>-->
        <keep-alive>
            <router-view>

            </router-view>
        </keep-alive>
    </div>
</template>

<script>
    import vHeader from "./v-header";
    // import vMainBox from "./v-main-box";
    export default {
        name: "v-main-wrapper",
        components:{
            vHeader
        }
    }
</script>

<style lang="scss">

</style>