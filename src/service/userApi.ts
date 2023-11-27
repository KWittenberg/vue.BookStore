import axios from 'axios';
import { User } from 'src/components/constUser';
import { Notify } from 'quasar'


const baseUrl = 'https://localhost:44370'
const getCurrentUserUrl = '/api/app/application-user/current-user'
const getUsersUrl = '/api/app/application-user'
const registerUserUrl = '/api/app/application-user/register-user'
const deleteUserUrl = '/api/app/application-user/user/'

//const getUsersUrl = '/api/app/country/countries'
//const createCategoryUrl = '/api/app/category/category/'


export const getCurrentUser = async () => {
    try {
        const data = await axios.get(baseUrl + getCurrentUserUrl);
        return data;
    } catch (error) {
        Notify.create({
            position: 'top',
            type: 'warning',
            message: "Can't get User !"
        })
        console.error(error);
        throw error;
    }
};

export const getUsers = async () => {
    try {
        const data = await axios.get(baseUrl + getUsersUrl);
        return data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const registerUser = async (user: User) => {
    try {
        await axios.post(baseUrl + registerUserUrl, user);
        Notify.create({
            position: 'top',
            type: 'positive',
            message: `${user.firstName} ${user.lastName} registered successfully!`
        })
    } catch (error) {
        Notify.create({
            position: 'top',
            type: 'warning',
            message: `${user.firstName} ${user.lastName} not registered!`
        })
        console.error(error);
        throw error;
    }
};

export const deleteUsers = async (selected: Array<User>) => {
    try {
        for (const item of selected) {
            await axios.delete(`${baseUrl}${deleteUserUrl}${item.id}`);
        }
        Notify.create({
            position: 'top',
            type: 'positive',
            message: 'User deleted !'
        })
    } catch (error) {
        Notify.create({
            position: 'top',
            type: 'warning',
            message: 'Fail to delete user !'
        })
        console.error(error);
        throw error;
    }
}



// export const createCategory = async (name: string, description: string) => {
//     try {
//         await axios.post('https://localhost:44370/api/app/category/category/', {
//             name: name,
//             description: description,
//         });
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// }

// export const deleteCategories = async (selected) => {
//     try {
//         for (const item of selected) {
//             await axios.delete(`https://localhost:44370/api/app/category/category/${item.id}`);
//         }
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// }