<template>
    <div class="v-movie">
        <router-link :to="{name: 'main'}" class="v-movie__link">
            <svg class="v-movie__link-img" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.67 3.86998L9.9 2.09998L0 12L9.9 21.9L11.67 20.13L3.54 12L11.67 3.86998Z" fill="#FF5252" fill-opacity="0.98"/>
            </svg>
            <p class="v-movie__link-text">Назад к списку</p>
        </router-link>


        <vMainBoxAreaBottom :movies_data="movie_item_data"/>
    </div>
</template>

<script>
    import vMainBoxAreaBottom from './v-main-box__area-bottom'
    export default {
        name: "v-movie",
        components:{
            vMainBoxAreaBottom
        },
        props:{
            movie_item_data:{
                type: Object,
                default(){
                    return {}
                }
            },
            id:{}
        }
    }
</script>

<style lang="scss">
.v-movie{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

    &__link{
        width: 1400px;
        display: flex;
        justify-content: left;
        align-items: center;
        border-bottom: 1px solid #C4C4C4;
        padding-bottom: 20px;
        margin-bottom: 16px;

        &-text{
            margin: 0;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 20px;
            text-decoration-line: underline;
            color: rgba(255, 82, 82, 0.98);
        }

        &-img{
            margin-right: 8px;
        }
    }

    .v-main-box__area-bottom{
        &:hover{
            top: 0;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
    }
}
</style>