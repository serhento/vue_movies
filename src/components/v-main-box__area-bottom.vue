<template>
    <div class="v-main-box__area-bottom">
        <div class="v-main-box__area-bottom-left">
            <img :src="movies_data.poster" alt="">
        </div>
        <div class="v-main-box__area-bottom-right">
            <div class="v-main-box__area-bottom-right-info">
                <div class="movie">
                    <router-link :to="{name: 'movie', params: {id: movies_data.id}}">
                        <h2 @click="movieId" class="movie-title">{{movies_data.title}}</h2>
                    </router-link>
                    <div v-if="movies_data.collapse.duration" class="movie-duration">
                        <p class="movie-duration-length">{{movies_data.collapse.duration | toFixArray}}</p>
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 0V2H12V0H4V2H2V0H0V18H2V16H4V18H12V16H14V18H16V0H14ZM4 14H2V12H4V14ZM4 10H2V8H4V10ZM4 6H2V4H4V6ZM10 16H6V2H10V16ZM14 14H12V12H14V14ZM14 10H12V8H14V10ZM14 6H12V4H14V6Z" fill="#FA2828" fill-opacity="0.98"/>
                        </svg>

                    </div>
                </div>
                <p>{{movies_data.year}}, {{movies_data.genres | toFixArray}}</p>
                <p>Режиссёр: {{movies_data.directors | toFixArray}}</p>
                <div class="actors">
                    <p class="actors-title">Актёры: </p>
                    <p class="actors-names">{{movies_data.actors | toFixArray}}</p>
                </div>
                <div v-if="movies_data.description" class="description">{{movies_data.description}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import toFixArray from '../filters/toFixArray';

    export default {
        name: "v-main-box__area-bottom",
        props:{
            movies_data:{
                type: Object,
                default(){
                    return {}
                }
            }
        },
        filters:{
            toFixArray
        },
        methods:{
            movieId(){
                this.$emit('movieId',this.movies_data.id);
            }
        }
    }
</script>

<style lang="scss">
    .v-main-box__area-bottom{
        display: flex;
        margin-top: 24px;
        max-width: 100%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        &:hover{
            position: relative;
            top: -8px;
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.35);
            transition: all 0.5s ease;
        }

        &-left{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 12%;
            background-color: #c4c4c4;

            img{
                overflow: hidden;
                max-height: 168px;
            }
        }

        &-right{

            height: auto;
            width: 88%;
            background: #4D4747;
            display: inline;

            &-info{
                padding: 32px 24px;

                .movie{
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;

                    &-duration{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 184px;
                        height: 30px;
                        right: -24px;
                        position: relative;
                        clip-path: polygon(4% 0, 0 100%, 100% 100%, 100% 100%, 100% 0);
                        background: #c4c4c4;

                        &-length{
                            margin: 0 12px 0 0;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 12px;
                            line-height: 12px;
                            text-transform: uppercase;
                            color: #000000;
                        }
                    }
                }

                .actors{
                    display: flex;
                    align-items: baseline;

                    &-title{
                        margin: 0 8px 0 0 ;
                    }

                    &-names{
                        margin: 0;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 16px;
                        text-transform: none;
                        color: #E5E5E5;
                    }
                }

                h2{
                    margin: 0 0 12px 0;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 36px;
                    line-height: 36px;
                    color: #FFFFFF;
                }

                p{
                    margin: 0 0 8px 0;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 12px;
                    line-height: 12px;
                    text-transform: uppercase;
                    color: #988F8F;
                }

                .description{
                    padding-top: 14px;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 20px;
                    color: #FFFFFF;
                }
            }
        }
    }
</style>