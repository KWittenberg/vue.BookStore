import { ref } from 'vue';

export interface Role {
    id?: string,
    name: string
}

export const roles = ref([])
export const roleId = ref('')
export const roleName = ref('')
export const filter = ref('')
export const visibleColumns = ref(['name'])
export const selected = ref([])
export const showCreateRoleDialog = ref(false);

export const columns = [
    { name: 'id', label: 'Id', field: 'id', align: 'center' },
    { name: 'name', label: 'Name', field: 'name', align: 'left', sortable: true },
    { name: 'isDefault', label: 'isDefault', field: 'isDefault', align: 'left', sortable: true, },
    { name: 'isStatic', label: 'isStatic', field: 'isStatic', align: 'left', sortable: true, },
    { name: 'isPublic', label: 'isPublic', field: 'isPublic', align: 'left', sortable: true, },
    { name: 'concurrencyStamp', label: 'concurrencyStamp', field: 'concurrencyStamp', align: 'left', sortable: true, },
    { name: 'extraProperties', label: 'extraProperties', field: 'extraProperties', align: 'left', sortable: true, }
];

export const createRoleForm = ref({
    name: ''
})