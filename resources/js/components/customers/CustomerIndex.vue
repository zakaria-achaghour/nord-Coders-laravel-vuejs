<template>
<div class="flex">
  <router-link  :to="{name: 'customers.create'}" class="bg-green-500 px-2 py-1 text-black rounded" >create</router-link>
</div>
dqs
    <!-- responsive table-->
<div class="mt-2">
      <table class="max-w-5xl mx-auto table-auto">
        <thead class="justify-between">
          <tr class="bg-green-600">
           
            <th class="px-16 py-2">
              <span class="text-gray-100 font-semibold">Name</span>
            </th>
          
            <th class="px-16 py-2">
              <span class="text-gray-100 font-semibold">Phone</span>
            </th>

            <th class="px-16 py-2">
              <span class="text-gray-100 font-semibold">Is Favorite</span>
            </th>

            <th class="px-16 py-2">
              <span class="text-gray-100 font-semibold">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-gray-200">
            <template v-for="customer in customers" :key="customer.id">

                    <tr class="bg-white border-b-2 border-gray-200">
                    
                        <td>
                        <span class="text-center ml-2 font-semibold" v-text="customer.name"></span>
                        </td>
                    
                        <td class="px-16 py-2">
                        <span v-text="customer.tel"></span>
                        </td>
                        <td class="px-16 py-2">
                        <span v-bind:class="{'bg-green-100 text-green-800': customer.is_favorite}" v-text="customer.is_favorite"></span>
                        </td>

                        <td class="px-16 py-2">
                        <router-link :to="{name: 'customers.edit', params: {id:customer.id}}" class="text-yellow-500 flex">
                          Edite
                        </router-link>

                        <button @click="deleteCustomer(customer.id)">Supprimer</button>
                        </td>
                    </tr>
            </template>
         
        </tbody>
      </table>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import useCustomers from "../../services/customerServices.js"
export default {
   // 
    
    setup() {
        const { customers, getCustomers,destroyCustomer   } = useCustomers();

        const deleteCustomer = async (id) => {
            await destroyCustomer(id);
        }
        onMounted(getCustomers());

        return {
            customers,
            deleteCustomer
        };
    }
    }
</script>