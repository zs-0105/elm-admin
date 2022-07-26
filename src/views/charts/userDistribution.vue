<template>
    <div id="main" style="width:1200px;height:500px"></div>
</template>

<script>
import { getUserCity } from '@/api/user'
import * as echarts from 'echarts';
export default {
    components: {},
    data() {
        return {}
    },
    mounted() {
        this.initData()
    },
    methods: {
        async initData() {
            const { user_city } = await getUserCity()

            const option = {
                title: {
                    text: '用户分布',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['北京', '上海', '深圳', '杭州', '其他']
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            { value: user_city.beijing, name: '北京' },
                            { value: user_city.shanghai, name: '上海' },
                            { value: user_city.shenzhen, name: '深圳' },
                            { value: user_city.hangzhou, name: '杭州' },
                            { value: user_city.qita, name: '其他' }
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            var myChart = echarts.init(document.getElementById('main'));
            myChart.setOption(option)
        }

    },
}
</script>

<style scoped>
/* @import url(); 引入公共css类 */
#main {
    margin: 50px auto;
}
</style>