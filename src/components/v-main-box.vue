<template>
    <div class="v-main-box">
        <div class="v-main-box__area">
            <vMainBoxAreaTop :movies_data="MOVIES" />
            <vPreloader :loading="hidePreload" />
            <div v-if="!hidePreload">
                <vMainBoxAreaBottom
                        v-for="movie in MOVIES"
                        :key="movie.id"
                        :movies_data="movie"
                        @movieId="movieId"
                />
            </div>

        </div>
    </div>
</template>

<script>
    import vMainBoxAreaTop from "./v-main-box__area-top";
    import vMainBoxAreaBottom from "./v-main-box__area-bottom";
    import vPreloader from "./v-preloader";
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "v-main-box",
        components:{
            vMainBoxAreaTop, vMainBoxAreaBottom, vPreloader
        },
        data(){
            return{
                hidePreload: true
            }
        },
        methods:{
            ...mapActions([
                'GET_PRODUCTS_FROM_API'
            ]),
            movieId(id){
                console.log(id)
            }
        },
        computed:{
            ...mapGetters([
                "MOVIES"
            ])
        },
        watch: {
            '$route.params.id'() {
                this.hidePreload=true;
                this.GET_PRODUCTS_FROM_API()
                    .then((res)=> {
                        if (res.data){
                            this.hidePreload = false
                        }
                    })
            }
        },
        mounted(){
            this.GET_PRODUCTS_FROM_API()
                .then((res)=> {
                    if (res.data){
                        this.hidePreload = false
                    }
                })
        }
    }
</script>

<style lang="scss">
    .v-main-box{
        width: 100%;
        display: flex;
        justify-content: center;

        &__area{
            width: 1400px;
        }
    }
</style>
