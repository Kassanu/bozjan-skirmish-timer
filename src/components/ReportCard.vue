<template>
    <div style="margin-bottom: 1em;">
        {{ card.name }}:
        <br>
        Logged Kills: {{ card.timings.length }}
        <br>
        SpawnToSpawn = {{ spawnToSpawn }}
        <br>
        KillToSpawn = {{ killToSpawn }}
    </div>
</template>

<script>

    export default {
        name: 'ReportCard',
        props: {
            card: {
                type: Object,
                required: true
            }
        },
        computed: {
            spawnToSpawn() {
                return new Date(this.card.averages.spawnToSpawn).toISOString().substr(11, 8)
            },
            killToSpawn() {
                return new Date(this.card.averages.killToSpawn).toISOString().substr(11, 8)
            }
        }
    }
</script>