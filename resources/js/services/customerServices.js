import {ref} from "vue";
import axios from "axios";
import router from "../router/index"
export default function useCustomers() {
    const customers = ref([]);
    const customer = ref([]);

    const errors = ref('');
    const getCustomers = async () => {
        let res = await axios.get('/api/customers');
        customers.value = res.data.data;
    }

    const getCustomer = async (id) => {
        let res = await axios.get(`/api/customers/${id}`);
        customer.value = res.data.data;
    }

    const createCustomer = async (data) => {
        errors.value = '';
        try {
            await axios.post('/api/customers',data);
            await router.push({name: 'customers.index'})
      
        } catch (error) {
            console.log(error.response.data.errors)
          const  errorsCustomer = error.response.data.errors;
          
            for (const key in errorsCustomer) {
               
                errors.value +=errorsCustomer[key][0]+' ' ;
            }
           
        }
    }

    const updateCustomer = async (id) => {
        errors.value = '';
        try {
            await axios.put(`/api/customers/${id}`,customer.value);
            await router.push({name: 'customers.index'})
      
        } catch (error) {
            console.log(error.response.data.errors)
          const  errorsCustomer = error.response.data.errors;
          
            for (const key in errorsCustomer) {
               
                errors.value +=errorsCustomer[key][0]+' ' ;
            }
           
        }
    }

    const destroyCustomer = async (id) => {
        if(!window.confirm('Supprimer ce Customer ?')) return;
         await axios.delete(`/api/customers/${id}`);
       await getCustomers();
    }

    return {
        customers,
        errors,
        customer,
        getCustomer,
        getCustomers,
        createCustomer,
        updateCustomer,
        destroyCustomer
    }
}