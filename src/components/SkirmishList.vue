<template>
    <div>
        <button v-show="!showReport" @click="showReport = !showReport">Show Report</button>
        <button v-show="showReport" @click="showReport = !showReport">Hide Report</button>
        <router-link to="/view-report" tag="button">View Saved Report</router-link>
        <Report v-show="showReport" :list="fullList" :timings="timings" />
        <div v-show="!showReport">
            <div style="display: flex; justify-content: center;">
                <div style="display: flex; justify-content: flex-start; align-items: self-start;">
                    <div style="display: flex;width: 500px;flex-wrap: wrap;align-items: self-start; margin-right: 1em">
                        <SkirmishTimer v-for="item in list[0]" :key="item.id" :item="item" @logState="logState" style="flex: 0 50%;" />
                    </div>
                    <div style="display: flex;width: 500px;flex-wrap: wrap;align-items: self-start; margin-right: 1em">
                        <SkirmishTimer v-for="item in list[1]" :key="item.id" :item="item" @logState="logState" style="flex: 0 50%;" />
                    </div>
                    <div style="display: flex;width: 500px;flex-wrap: wrap;align-items: self-start; margin-right: 1em">
                        <SkirmishTimer v-for="item in list[2]" :key="item.id" :item="item" @logState="logState" style="flex: 0 50%;" />
                    </div>
                    <div style="display: flex;width: 500px;flex-wrap: wrap;align-items: self-start; margin-right: 1em">
                        <SkirmishTimer v-for="item in list[3]" :key="item.id" :item="item" @logState="logState" style="flex: 0 50%;" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import SkirmishTimer from './SkirmishTimer.vue'
    import Report from './Report.vue'

    export default {
        name: 'SkirmishList',
        components: {
            SkirmishTimer,
            Report
        },
        props: {
            list: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                showReport: false,
                timings: {}
            }
        },
        computed: {
            fullList() {
                return this.list[0].concat(this.list[1]).concat(this.list[2]).concat(this.list[3])
            }
        },
        methods: {
            logState(state) {
                if (!Object.prototype.hasOwnProperty.call(this.timings, state.id)) {
                    Vue.set(this.timings, state.id, [])
                }

                if (state.state === 0) {
                    let timings = this.timings[state.id]
                    // logged a spawn make a new state
                    timings.push([
                        state.time,
                        null
                    ])
                    Vue.set(this.timings, state.id, timings)
                } else {
                    // logged a kill add it to last
                    let timings = this.timings[state.id]
                    let newTime = []
                    newTime.push(this.timings[state.id][this.timings[state.id].length-1][0])
                    newTime.push(state.time)
                    timings = timings.slice(0, timings.length - 1)
                    timings.push(newTime)
                    Vue.set(this.timings, state.id, timings)
                }
            }
        }
    }
</script>