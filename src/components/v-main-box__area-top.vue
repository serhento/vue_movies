<template>
    <div class="v-main-box__area-top">
        <h3>Фильмы</h3>
        <div class="v-main-box__area-top-sort">
            <div class="v-main-box__area-top-sort-item">
                <div class="v-main-box__area-top-sort-item-checkbox">
                    <input id="check1" type="radio" v-model="checked" value="title" @change="filterByTitle()">
                    <label for="check1">
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.33342 9.16649L0.166748 4.99982L1.34175 3.82482L4.33342 6.80815L10.6584 0.483154L11.8334 1.66649L4.33342 9.16649Z" fill="white"/>
                        </svg>
                    </label>
                </div>
                <span>Отсортировать по названию</span>
            </div>
            <div class="v-main-box__area-top-sort-item">
                <div class="v-main-box__area-top-sort-item-checkbox">
                    <input id="check2" type="radio" v-model="checked" value="year" @change="filterByYear()">
                    <label for="check2">
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.33342 9.16649L0.166748 4.99982L1.34175 3.82482L4.33342 6.80815L10.6584 0.483154L11.8334 1.66649L4.33342 9.16649Z" fill="white"/>
                        </svg>
                    </label>
                </div>
                <span>Отсортировать по году</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-main-box__area-top",
        props:{
            movies_data:{
                type: Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return{
                newArray:[],
                checked: false,
            }
        },
        computed:{
            filterByYear(){
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                return this.movies_data.sort((a,b)=>{
                    if (this.checked) {
                        return a.year - b.year
                    } else {
                        return b.year - a.year
                    }

                });
            },
            filterByTitle(){
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                return this.movies_data.sort((a,b)=>{
                    if(a.title < b.title) return -1;
                    if(a.title > b.title) return 1;
                    return 0;
                })
            }
        },
        watch: {
            '$route.params.id'() {
                this.checked = false;
            }
        }
    }

</script>

<style lang="scss">
    .v-main-box__area-top{
        border-bottom: 1px solid #c4c4c4;
        margin-bottom: 40px;
        max-width: 100%;

        h3{
            margin-bottom: 18.5px;
            margin-top: 40px;
            color: #fff;
            font-style: normal;
            font-weight: 500;
            font-size: 32px;
            line-height: 32px;
        }

        &-sort{
            display: flex;
            margin-bottom: 18.5px;

            &-item{
                display: flex;
                align-items: center;

                span{
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 16px;
                    color: #C4C4C4;
                    margin-right: 34.5px;
                }

                &-checkbox{
                    input{
                        display: none;
                    }

                    input:checked + label{
                        background: rgba(255, 82, 82, 0.98);
                        border: 1px solid rgba(255, 82, 82, 0.98);

                        svg{
                            opacity: 1;
                        }
                    }

                    label{
                        margin-right: 10.5px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                        border: 1px solid #c4c4c4;
                        width: 15px;
                        height: 15px;

                        svg{
                            opacity: 0;
                        }
                    }
                }
            }
        }
    }
</style>
