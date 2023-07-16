<script lang="ts">
import { getTask, createTask, updateTask, deleteTask } from '../services/taskService';

export default {
  name: "TaskList",
  data(){
    return {
      method: 'post',
      name: null,
      state: null,
      description: "",
      formError: <any>[],
    }
  },
  methods: {
    submitForm: function(){
      this.resetError();
      const formData = {
        name: this.name,
        state: this.state,
        description: this.description,
      }
      this.validateForm(formData);

      if (this.formError.length > 1){
        return false;
      }

      if (this.method === 'post'){
        createTask(formData).then((response) => {
          alert('Successfully Saved Task!');
          console.log(response);
          this.$router.push({path: '/'});
        });
      }
    },
    validateForm: function(formData:any){
      if (formData.name === null || formData.name === ''){
        this.formError.push({error: "required", field: 'name', message: "Name is required"});
      }
      
      if (formData.state === null || formData.state === ''){
        this.formError.push({error: "required", field: 'state', message: "Name is required"});
      }

      console.log(this.formError);
    },
    checkIfFieldHasError: function(field:string){
      if (this.formError.length > 0){
        let errorCheck = this.formError.filter((item:any) => item.field === field);
        if (errorCheck.length > 0){
          return true;
        }
        else{
          return false;
        }
      }
    },
    resetError: function(){
      this.formError = [];
    }
  },
  mounted() {
  }
}

</script>

<template>
  <section>
    <form class="w-full max-w-lg w-1/4 ml-auto mr-auto">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" for="grid-name">
            Name
          </label>
          <input :class="{'border-red-600': checkIfFieldHasError('name') }" v-model="name" class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" type="text" name="name" placeholder="Enter Name Here">
          <span v-if="checkIfFieldHasError('name')" class="text-red-600 font-sm text-left block">Name is required</span>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" for="grid-name">
            Status
          </label>
          <select :class="{'border-red-600': checkIfFieldHasError('name') }" v-model="state" class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="5" id="grid-name" name="state">
            <option>pending</option>
            <option>in progress</option>
            <option>completed</option>
          </select>
          <span v-if="checkIfFieldHasError('name')" class="text-red-600 font-sm text-left block">Status is required</span>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" for="grid-name">
            Description
          </label>
          <textarea v-model="description" class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="5" id="grid-name" name="description" placeholder="Enter Description Here" />
        </div>
      </div>
    </form>
    <button @click="submitForm()" class="rounded bg-blue-600 text-white mr-4">Save</button>
    <a href="/">
      <button class="rounded bg-red-600 text-white">Cancel</button>
    </a>
  </section>
</template>

<style scoped>
</style>
