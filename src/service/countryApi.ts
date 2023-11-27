//import { ref, Ref } from 'vue';
import axios from 'axios';

//import axios, { AxiosError, type AxiosResponse } from 'axios';
//import type { ErrorResponse, Todo, TodoWithId } from '@/types';


//import { createCountryForm } from 'src/pages/CountriesPage.vue';
// import { useQuasar } from 'quasar';

//const quasar = useQuasar();

// Old Working getCountries
export const getCountries = async () => {
    try {
        const response = await axios.get('https://localhost:44370/api/app/country/countries');
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};




const api = axios.create({
    baseURL: 'https://localhost:44370/api',

});

// export type APIError = AxiosError<ErrorResponse>;

// async function extractData<T>(promise: Promise<AxiosResponse<T>>) {
//   const { data } = await promise;
//   // eslint-disable-next-line no-promise-executor-return
//   // await new Promise((resolve) => setTimeout(resolve, 2000));
//   return data;
// }


export async function findAll() {
    const { data } = await api.get('/api/app/country/countries')
    return data;
}

export async function createOne() {
    const { data } = await api.get('/app/country/countries')
    return data;
}


// export async function findAll() {
//   return extractData(api.get<TodoWithId[]>('/todos'));
// }

// export async function createOne(todo: Todo) {
//   return extractData(api.post<TodoWithId>('/todos', todo));
// }

// export async function findOne(id: string) {
//   return extractData(api.get<TodoWithId>(`/todos/${id}`));
// }

// export async function updateOne(id: string, todo: Todo) {
//   return extractData(api.put<TodoWithId>(`/todos/${id}`, todo));
// }

// export async function deleteOne(id: string) {
//   return extractData(api.delete(`/todos/${id}`));
// }



















// export const createCountryForm = ref({
//     name: ''
// })

// interface CreateCountryForm {
//     name: string;
// }

// export const createCountryForm: Ref<CreateCountryForm> = ref({
//     name: ''
// });


// export const createCountry = async (createCountryForm: Ref<CreateCountryForm>) => {
//     console.log(createCountryForm.value.name)


//try {
//console.log(createCountryForm.value.name)
// const response = await axios.post('https://localhost:44370/api/app/country/country', {
//     name: createCountryForm.value.name
// })
// return response.data

// } catch (error) {
//     console.error(error);
//     throw error;
// }
//}


// export type CountryName = { name: string }

// const countryName: CountryName;
// countryName = { name: ''}









// function createCountry() {
//     axios.post('https://localhost:44370/api/app/country/country', {
//         name: createCountryForm.value.name
//     })
//         .then(function (response) {
//             console.log(response);
//             quasar.notify({
//                 position: 'top-right',
//                 type: 'positive',
//                 message: `${createCountryForm.value.name} country created!`
//             })
//             createCountryForm.value.name = '';
//             showCreateCountryDialog.value = false;
//             fetchData()
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }











// export const updateCountry = async (countryId, countryData) => {
//     try {
//         const response = await axios.put(`https://localhost:44370/api/app/country/${countryId}/country`, countryData);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// };

// export const deleteCountry = async (countryId) => {
//     try {
//         const response = await axios.delete(`https://localhost:44370/api/app/country/${countryId}/country`);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// };