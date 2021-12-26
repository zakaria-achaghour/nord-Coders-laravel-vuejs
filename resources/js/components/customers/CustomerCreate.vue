<template>
     <div v-if="errors != ''">
        {{ errors }}
      </div>
  <form class="space-y-6" @submit.prevent="newCustomer">
    <div class="block">
      <label for="name">Nom Du client</label>
      <input type="text" id="name" v-model="form.name" /><br>
    <div v-if="errors.name">
        {{ errors.name[0] }}
      </div>

    </div>
    <div class="block">
      <label for="tel">tel Du client</label>
      <input type="text" id="tel" v-model="form.tel" />
    </div>
    <div class="block">
      <label for="is_favorite">Favorite ?</label>
      <input type="checkbox" id="is_favorite" v-model="form.is_favorite" />
    </div>
    <button type="submit" class="bg-blue text-black" >Enregestre</button>
  </form>
</template>

<script>
import { reactive } from "vue"

import useCustomers from '../../services/customerServices';
export default {
  setup() {
    const form = reactive({
      name: '',
      tel: '',
      is_favorite: false
    });
console.log(form.name)
const { createCustomer,errors } = useCustomers();
   const  newCustomer = async () => {
     //console.log(errors)
     await createCustomer({...form});
  }
  return {
    form,
    errors,
    newCustomer
  }
  }
}
</script>