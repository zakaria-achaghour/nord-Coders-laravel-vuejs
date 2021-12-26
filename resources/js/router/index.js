import { createRouter, createWebHistory } from "vue-router"

import CustomerIndex from "../components/customers/CustomerIndex.vue"
import CustomerCreate from "../components/customers/CustomerCreate.vue"
import CustomerEdit from "../components/customers/CustomerEdit.vue"

const routes = [
    {
        path: '/dashboard',
        name: 'customers.index',
        component: CustomerIndex
    },
    {
        path: '/customers/create',
        name: 'customers.create',
        component: CustomerCreate
    }
    ,
    {
        path: '/customers/:id/edit',
        name: 'customers.edit',
        component: CustomerEdit,
        props:true

    }
];

export default createRouter(
    {
        history: createWebHistory(),
        routes
    }
);