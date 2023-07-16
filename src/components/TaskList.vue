<script lang="ts">
import { getTaskList, deleteTask } from '../services/taskService';
import { statusEnum } from '../constants/statusEnum';

export default {
  name: "TaskList",
  data(){
    return {
      taskList: <any>[]
    }
  },
  methods: {
    getTasks: function(){
      getTaskList().then((response) => {
        console.log(response);
        this.taskList = response;
      })
    },
    renderStatusClass: function(status:string){
      if (status === statusEnum.STATUS_PENDING){

      }
      else if (status === statusEnum.STATUS_IN_PROGRESS){

      }
      else if (status === statusEnum.STATUS_COMPLETED){

      }
    },
    deleteTask: function(id:string){
      const flag = confirm("Are you sure you want to delete task?");
      if (flag){
        deleteTask(id).then((response) => {
          alert('Successfully Deleted Task!');
          console.log(response);
          this.getTasks();
        });
      }
    }
  },
  mounted() {
    this.getTasks();
  }
}

</script>

<template>
  <section>
    <div class="mb-6">
      <a href="/task">
        <button class="rounded bg-blue-600 text-white">Create Task</button>
      </a>
    </div>
    <div class="grid grid-cols-4">
      <a v-for="task in taskList" href="#" class="block mb-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ task.name }}</h5>
          <div class="text-white w-1/3 ml-auto mr-auto mb-2 uppercase" :class="{ 'bg-orange-600': task.state === 'pending',
                         'bg-blue-600': task.state === 'in progress',
                         'bg-green-600': task.state === 'completed' }">
            {{ task.state }}
          </div>
          <p class="font-normal text-gray-700 dark:text-gray-400 mb-4">{{ task.description }}</p>
          <a :href="`/task/${ task.task_id }`">
            <button class="rounded bg-blue-600 text-white text-sm mr-4">Update</button>
          </a>
          <button @click="deleteTask(task.task_id)" class="rounded bg-red-600 text-white text-sm">Delete</button>
      </a>
    </div>
  </section>
</template>

<style scoped>
</style>
