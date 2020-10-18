<template>
    <div>
        <button @click="onlyCEChains = !onlyCEChains">Show Only CE</button>
        <button v-show="!showReport" @click="showReport = !showReport">Show Report</button>
        <button v-show="showReport" @click="showReport = !showReport">Hide Report</button>
        <router-link to="/view-report" tag="button">View Saved Report</router-link>
        <Report v-show="showReport" :list="fullList" :timings="timings" />
        <div v-show="!showReport">
            <div style="display: flex; justify-content: center;flex-wrap:wrap;">
                <div style="display: flex; justify-content: flex-start; align-items: self-start;flex-wrap:wrap;">
                    <div style="display: flex;width: 500px;flex-wrap: wrap;align-items: self-start; margin-right: 1em">
                        <SkirmishTimer v-for="item in filteredList[0]" :key="item.id" :item="item" @logState="logState"
                            style="flex: 0 50%;" />
                    </div>
                    <div style="display: flex;width: 500px;flex-wrap: wrap;align-items: self-start; margin-right: 1em">
                        <SkirmishTimer v-for="item in filteredList[1]" :key="item.id" :item="item" @logState="logState"
                            style="flex: 0 50%;" />
                    </div>
                    <div style="display: flex;width: 500px;flex-wrap: wrap;align-items: self-start; margin-right: 1em">
                        <SkirmishTimer v-for="item in filteredList[2]" :key="item.id" :item="item" @logState="logState"
                            style="flex: 0 50%;" />
                    </div>
                    <div style="display: flex;width: 500px;flex-wrap: wrap;align-items: self-start; margin-right: 1em">
                        <SkirmishTimer v-for="item in filteredList[3]" :key="item.id" :item="item" @logState="logState"
                            style="flex: 0 50%;" />
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
                onlyCEChains: false,
                timings: {}
            }
        },
        computed: {
            filteredList() {
                if (!this.onlyCEChains) {
                    return this.list
                }
                let filtered = []
                const ceIds = [
                    "074e37ef-e316-4e13-9d54-e2560248ef9b",
                    "04dff65f-3716-43d1-91e6-b6545ad9202f",
                    "701da551-51b4-4447-9be1-1990af101774",
                    "2d094f75-dbf5-493f-a96b-01d956be2ab1",
                    "6f856f96-d516-4932-a36d-7fe06070949a",
                    "dbb14450-772c-46f9-b712-b9018fcb42a2",
                    "28c7ca10-9645-4ea1-b162-9d8399f2f6a0",
                    "0f03feb4-71fd-4718-b4d7-5883e9208d6a",
                    "35a3df50-4854-4d2b-bd1a-c050096ea6c4",
                    "e94f8624-5302-47d9-b40a-3593f99aff66",
                    "1816511b-3ae7-400d-ac09-95f4feb97955",
                    "ac7323df-5a1c-40ec-aba0-48ad25a27976",
                    "8dc3290d-686f-411e-b8de-95eb0b3f8c1b",
                    "ae038167-bcf2-42ec-a435-8c061e78b6f7",
                    "a8d79769-58d9-47da-be03-71d968875128",
                    "b5a003a3-2bd8-4fb0-9255-9ebedb0f2a31",
                    "ae3b7dd2-84ef-4d88-8895-b7b51284529d",
                    "35ef6853-666d-4e89-9798-9baa20a0185c",
                    "f45e0dd1-3942-4f9a-9b11-4460baf37571",
                    "83f30088-e0e1-409f-a69a-df20cbfac568",
                    "a9cfa0a6-9f6b-4dac-bf82-6e4bc30e556b",
                    "350eace7-998d-424b-814a-0ade659616c3",
                    "585de225-67bf-4dad-bf47-f67b9c3c1fa3"
                ]
                this.list.forEach(skirmishes => {
                    filtered.push(skirmishes.filter(skirmish => {
                        return ceIds.includes(skirmish.id)
                    }))
                });
                return filtered
            },
            fullList() {
                return this.filteredList[0].concat(this.filteredList[1]).concat(this.filteredList[2]).concat(this.filteredList[3])
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
                    newTime.push(this.timings[state.id][this.timings[state.id].length - 1][0])
                    newTime.push(state.time)
                    timings = timings.slice(0, timings.length - 1)
                    timings.push(newTime)
                    Vue.set(this.timings, state.id, timings)
                }
            }
        }
    }
</script>