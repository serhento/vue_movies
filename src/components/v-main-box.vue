<template>
    <div class="v-main-box">
        <div class="v-main-box__area">
            <vMainBoxAreaTop/>
            <vMainBoxAreaBottom
                v-for="movie in MOVIES"
                :key="movie.id"
                :movies_data="movie"
            />
        </div>
    </div>
</template>

<script>
    import vMainBoxAreaTop from "./v-main-box__area-top";
    import vMainBoxAreaBottom from "./v-main-box__area-bottom";
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "v-main-box",
        components:{
            vMainBoxAreaTop, vMainBoxAreaBottom
        },
        data(){
            return{

            }
        },
        methods:{
            ...mapActions([
                'GET_PRODUCTS_FROM_API'
            ]),
        },
        computed:{
            ...mapGetters([
                "MOVIES"
            ])
        },
        mounted(){
            this.GET_PRODUCTS_FROM_API()
                .then((res)=> {
                    if (res.data){
                        console.log('Data arrived')
                    }
                })
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