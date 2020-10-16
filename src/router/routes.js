import Main from '../components/Main'
import KillTracker from '../components/KillTracker'

export default {
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/kill-tracker',
            name: 'killTracker',
            component: KillTracker
        }
    ]
}