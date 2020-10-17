<template>
    <div>
        <VueApexCharts type="rangeBar" :options="chartOptions" :series="series" />
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        components: { VueApexCharts },
        props: {
            series: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                chartOptions: {
                    chart: {
                        type: 'rangeBar'
                    },
                    plotOptions: {
                        bar: {
                            horizontal: true,
                            barHeight: '100%'
                        }
                    },
                    xaxis: {
                        type: 'datetime'
                    },
                    stroke: {
                        width: 1
                    },
                    fill: {
                        type: 'solid',
                        opacity: 0.6
                    },
                    legend: {
                        position: 'top',
                        horizontalAlign: 'left'
                    },
                    tooltip: {
                        x: {
                            format: 'HH:mm:ss',
                            formatter: undefined,
                        },
                        y: {
                            format: 'HH:mm:ss',
                            formatter: undefined,
                        }
                    }
                }
            }
        }
    }
</script>