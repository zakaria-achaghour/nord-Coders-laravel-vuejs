<template>
     <div v-if="errors != ''">
        {{ errors }}
      </div>
  <form class="space-y-6" @submit.prevent="editCustomer">
    <div class="block">
      <label for="name">Nom Du client</label>
      <input type="text" id="name" v-model="customer.name" /><br>
    <div v-if="errors.name">
        {{ errors.name[0] }}
      </div>

    </div>
    <div class="block">
      <label for="tel">tel Du client</label>
      <input type="text" id="tel" v-model="customer.tel" />
    </div>
    <div class="block">
      <label for="is_favorite">Favorite ?</label>
      <input type="checkbox" id="is_favorite" v-model="customer.is_favorite" />
    </div>
    <button type="submit" class="bg-blue text-black" >Mettre A jour</button>
  </form>
</template>

<script>
import { reactive,onMounted } from "vue"

import useCustomers from '../../services/customerServices';
export default {
  //  props: ['id'],

   props: {
     id: {
       required: true,
       type: String
     }
   },
  setup(props) {
  
      const { getCustomer,customer,updateCustomer,errors } = useCustomers();
      onMounted(getCustomer(props.id));

      const editCustomer = async () => {
        //console.log(errors)
        await updateCustomer(props.id);
    }

  return {
    editCustomer,
    customer,
    errors,
  }
  }
}
</script>