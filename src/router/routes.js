import Main from '../components/Main'
import KillTracker from '../components/KillTracker'
import ViewReport from '../components/ViewReport'

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
        },
        {
            path: '/view-report',
            name: 'viewReport',
            component: ViewReport
        }
    ]
}