import { ref } from 'vue';

export const currentUser = ref([])

export const users = ref([])
export const filter = ref('')
export const visibleColumns = ref(['roleIds', 'avatarUrl', 'firstName', 'lastName'])
export const selected = ref([])
export const showCreateUserDialog = ref(false);

export interface User {
    id?: string,
    userName?: string,
    firstName: string,
    lastName: string,
    email: string,
    dateOfBirth?: string,
    phoneNumber?: string,
    country?: string,
    postCode?: string,
    city?: string,
    street?: string,
    avatarUrl?: string,
    roleIds?: [],
    password: string,
    isActive?: boolean
}

export const registerForm = ref({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    accept: false
})

export const loginForm = ref({
    email: '',
    password: ''
})


export const createUserForm = ref({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    country: '',
    postCode: '',
    city: '',
    street: '',
    roleIds: [''],
    password: ''
})







export const columns = [
    { name: 'id', label: 'Id', field: 'id', align: 'center' },

    { name: 'avatarUrl', label: 'Avatar', field: 'avatarUrl', align: 'center' },
    { name: 'roleIds', label: 'Role', field: 'roleIds', align: 'center', sortable: true },

    { name: 'userName', label: 'User Name', field: 'userName', align: 'left', sortable: true },
    { name: 'firstName', label: 'First Name', field: 'firstName', align: 'left', sortable: true },
    { name: 'lastName', label: 'Last Name', field: 'lastName', align: 'left', sortable: true },

    { name: 'dateOfBirth', label: 'Date Of Birth', field: 'dateOfBirth', align: 'left', sortable: true, },
    { name: 'email', label: 'Email', field: 'email', align: 'left', sortable: true, },
    { name: 'phoneNumber', label: 'phoneNumber', field: 'phoneNumber', align: 'left', sortable: true, },

    { name: 'country', label: 'Country', field: 'country', align: 'left', sortable: true, },
    { name: 'postCode', label: 'PostCode', field: 'postCode', align: 'left', sortable: true, },
    { name: 'city', label: 'City', field: 'city', align: 'left', sortable: true, },
    { name: 'street', label: 'Street', field: 'street', align: 'left', sortable: true, },

    { name: 'isActive', label: 'isActive', field: 'isActive', align: 'isActive', sortable: true, },

    { name: 'creatorId', label: 'CreatorId', field: 'creatorId', align: 'left', sortable: true, },
    { name: 'creationTime', label: 'CreationTime', field: 'creationTime', align: 'left', sortable: true, },
    { name: 'lastModifierId', label: 'LastModifierId', field: 'lastModifierId', align: 'left', sortable: true, },
    { name: 'lastModificationTime', label: 'LastModificationTime', field: 'lastModificationTime', align: 'left', sortable: true, }
];