import axios from 'axios';


const baseUrl = 'https://localhost:44370'
// const getRolesUrl = '/api/identity/roles'
const getRolesUrl = '/api/app/application-user/roles'
const getRoleByIdUrl = '/api/app/application-user/role/'
// const createCategoryUrl = '/api/app/category/category/'

export const getRoles = async () => {
    try {
        const response = await axios.get(baseUrl + getRolesUrl);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getRoleById = async (roleId: string) => {
    try {
        await axios.delete(`${baseUrl}${getRoleByIdUrl}${roleId}`);
    } catch (error) {
        console.error(error);
        throw error;
    }
}



// export const createCategory = async (name: string, description: string) => {
//     try {
//         await axios.post(baseUrl + createCategoryUrl, {
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
//             await axios.delete(`${baseUrl}${deleteCategoriesUrl}${item.id}`);
//         }
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// }