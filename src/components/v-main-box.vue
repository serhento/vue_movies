<template>
    <div class="v-main-box">
        <div class="v-main-box__area">
            <vMainBoxAreaTop/>
            <vMainBoxAreaBottom/>
            <vMainBoxAreaBottom/>
            <vMainBoxAreaBottom/>
        </div>
    </div>
</template>

<script>
    import vMainBoxAreaTop from "./v-main-box__area-top";
    import vMainBoxAreaBottom from "./v-main-box__area-bottom";
    export default {
        name: "v-main-box",
        components:{
            vMainBoxAreaTop, vMainBoxAreaBottom
        }
    }
</script>

<style lang="scss">
    .v-main-box{
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;

        &__area{
            width: 1400px;
            height: 100vh;
        }
    }
</style>