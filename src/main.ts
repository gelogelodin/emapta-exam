import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import TaskList from './components/TaskList.vue';
import TaskForm from './components/TaskForm.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: TaskList},
    { path: '/task', component: TaskForm},
    { path: '/task/:id', component: TaskForm},
]

const router = createRouter({
    history: createWebHistory(),
    routes, 
});

createApp(App).use(router).mount('#app')
