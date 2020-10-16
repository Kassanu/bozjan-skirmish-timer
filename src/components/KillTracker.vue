<template>
    <div style="width: 100%"> 
        <div style="display: flex; justify-content: center;width: 100%; margin-bottom: 1rem;">
            <div style="width: 100%">
                <SkirmishTimer v-for="item in skirmish" :key="item.id" :item="item" @logState="logState" style="width:100%" />
                <button :disabled="disableKillButton" @click="trackKill" style="width: 100%; padding-top:1rem; padding-bottom:1rem;">Killed Enemy</button>
            </div>
        </div>
        <Report :list="skirmish" :timings="timings" />
    </div>
</template>

<script>
    import Vue from 'vue'
    import Report from './Report.vue'
    import SkirmishTimer from './SkirmishTimer.vue'

    export default {
        name: 'KillTracker',
        components: {
            Report,
            SkirmishTimer
        },
        data() {
            return {
                currentKills: 0,
                disableKillButton: false,
                skirmish: [{
                    id: "074e37ef-e316-4e13-9d54-e2560248ef9b",
                    name: ""
                }],
                timings: {}
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
                        null,
                        this.currentKills
                    ])
                    Vue.set(this.timings, state.id, timings)
                    this.disableKillButton = true
                } else {
                    // logged a kill add it to last
                    let timings = this.timings[state.id]
                    let newTime = []
                    newTime.push(this.timings[state.id][this.timings[state.id].length-1][0])
                    newTime.push(state.time)
                    newTime.push(this.timings[state.id][this.timings[state.id].length-1][2])
                    timings = timings.slice(0, timings.length - 1)
                    timings.push(newTime)
                    Vue.set(this.timings, state.id, timings)
                    this.disableKillButton = false
                    this.currentKills = 0
                }
            },
            trackKill() {
                this.currentKills += 1
            }
        }
    }
</script>