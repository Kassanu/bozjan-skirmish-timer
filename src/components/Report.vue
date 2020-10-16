<template>
    <div>
        <button
                @click="saveJson">
                Save
            </button>
        <ReportCard v-for="card in report" :key="card.id" :card="card" />
    </div>
</template>

<script>
    import ReportCard from './ReportCard'

    export default {
        name: 'Report',
        components: {
            ReportCard
        },
        props: {
            list: {
                type: Array,
                required: true
            },
            timings: {
                type: Object,
                required: true
            }
        },
        computed: {
            report() {
                const report = []
                Object.keys(this.timings).forEach(timingKey => {
                    let timings = this.timings[timingKey]
                    let item = this.list.find(item => item.id == timingKey)
                    let card = {
                        id: item.id,
                        name: item.name,
                        averages: {
                            spawnToSpawn: 0,
                            killToSpawn: 0,
                            enemyKills: 0
                        },
                        timings: []
                    }

                    timings.forEach((time, index) => {
                        let timeObject = {
                            spawn: time[0],
                            kill: time[1],
                            sinceLastSpawn: null,
                            sinceLastKill: null,
                            enemyKills: time[2] || 0
                        }
                        card.averages.enemyKills += timeObject.enemyKills
                        if (index > 0) {
                            let lastTime = card.timings[card.timings.length - 1]
                            if (timeObject.spawn && lastTime.spawn) {
                                timeObject.sinceLastSpawn = (timeObject.spawn - lastTime.spawn)
                                card.averages.spawnToSpawn += timeObject.sinceLastSpawn
                            }
                            if (timeObject.spawn && lastTime.kill) {
                                timeObject.sinceLastKill = (timeObject.spawn - lastTime.kill)
                                card.averages.killToSpawn += timeObject.sinceLastKill
                            }
                        }
                        card.timings.push(timeObject)
                    })

                    if (timings.length > 1) {
                        card.averages.spawnToSpawn = card.averages.spawnToSpawn / (timings.length-1)
                        card.averages.killToSpawn = card.averages.killToSpawn / (timings.length-1)
                        card.averages.enemyKills = card.averages.enemyKills / timings.length
                    }

                    report.push(card)
                })

                return report
            }
        },
        methods: {
            saveJson() {
                let a = document.createElement("a");
                let file = new Blob([JSON.stringify(this.report, null, 4)], {type: 'application/json'});
                a.href = URL.createObjectURL(file);
                a.download = `report.json`;
                a.click();
            }
        }
    }
</script>