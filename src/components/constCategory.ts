import { ref } from 'vue';

export const categories = ref([])
export const filter = ref('')
export const visibleColumns = ref(['name', 'description'])
export const selected = ref([])
export const showCategoryDialog = ref(false);

export const columns = [
    { name: 'id', label: 'ID', field: 'id', align: 'center', style: 'width: 100px', sortable: true },
    { name: 'name', label: 'NAME', field: 'name', align: 'center', style: 'width: 200px', sortable: true },
    { name: 'description', label: 'DESCRIPTION', field: 'description', align: 'center', sortable: true, },
    // { name: 'creatorId', label: 'CreatorId', field: 'creatorId', align: 'left', sortable: true, },
    // { name: 'creationTime', label: 'CreationTime', field: 'creationTime', align: 'left', sortable: true, },
    // { name: 'lastModifierId', label: 'LastModifierId', field: 'lastModifierId', align: 'left', sortable: true, },
    // { name: 'lastModificationTime', label: 'LastModificationTime', field: 'lastModificationTime', align: 'left', sortable: true, }
];

export interface Category {
    id?: string;
    name: string;
    description?: string;
}

export const categoryForm = ref({
    id: '',
    name: '',
    description: ''
})