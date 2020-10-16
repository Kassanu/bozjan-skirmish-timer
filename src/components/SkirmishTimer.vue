<template>
    <div style="border: 1px solid grey; margin-bottom: 1em; width: 250px" :class="backgroundColor">
        <div>{{ item.name }}</div>
        <button @click="logState" style="margin-right: 1em;">{{ buttonLabel }}</button>
        <div>{{ timeLabel }}</div>
    </div>
</template>

<script>
    export default {
        name: 'SkirmishTimer',
        props: {
            item: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                states: [
                    'Spawned',
                    'Killed'
                ],
                time: null,
                currentState: 0
            }
        },
        computed: {
            timeLabel() {
                if (this.time === null) {
                    return 'No data'
                }

                // sorry for the weird modulo but there is some kind of bug in JS with modulo on negative numbers
                return `${this.states[(((this.currentState-1) % 2) + 2) % 2]} at ${this.time.toLocaleTimeString()}`
            },
            buttonLabel() {
                return this.states[this.currentState]
            },
            backgroundColor() {
                return {
                    'greenBg': this.currentState === 1,
                    'whiteBg': this.currentState === 0
                }
            }
        },
        methods: {
            logState() {
                this.time = new Date()
                this.$emit('logState', {
                    id: this.item.id,
                    state: this.currentState,
                    time: this.time
                })
                this.changeState()
            },
            changeState() {
                this.currentState = (((this.currentState+1) % 2) + 2) % 2
            }
        }
    }
</script>

<style>
    .greenBg {
        background-color: lightgreen;
    }

    .whiteBg {
        background-color: white;
    }
</style>