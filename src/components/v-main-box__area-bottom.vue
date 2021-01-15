<template>
    <div class="v-main-box__area-bottom">
        <div class="v-main-box__area-bottom-left">
            <img src="../assets/images/1.jpeg" alt="">
        </div>
        <div class="v-main-box__area-bottom-right">
            <div class="v-main-box__area-bottom-right-info">
                <h2>Гамильтон</h2>
                <p>2015</p>
                <p>Режиссёры</p>
                <p>Актёры</p>
                <span>Hkkskj kjkhkjskjdkj knsfvn,kjd Hkkskj kjkhkjskjdkj knsfvn,kjd Hkkskj kjkhkjskjdkj knsfvn,kjd Hkkskj kjkhkjskjdkj knsfvn,kjd Hkkskj kjkhkjskjdkj knsfvn,kjd Hkkskj kjkhkjskjdkj knsfvn,kjdHkkskj kjkhkjskjdkj knsfvn,kjdHkkskj kjkhkjskjdkj knsfvn,kjdHkkskj kjkhkjskjdkj knsfvn,kjd</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-main-box__area-bottom"
    }
</script>

<style lang="scss">
    .v-main-box__area-bottom{
        display: flex;
        margin-top: 24px;
        width: 1400px;
        height: auto;
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
            width: 168px;
            background-color: #c4c4c4;

            img{
                width: 112px;
                height: 168px;
            }
        }

        &-right{

            height: auto;
            width: 1232px;
            background: #4D4747;
            display: inline;

            &-info{
                padding: 32px 24px;

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

                    &:last-child{
                        margin: 0;
                    }
                }

                span{
                    margin: 0;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 20px;
                    color: #FFFFFF;
                }
            }
        }
    }
</style>