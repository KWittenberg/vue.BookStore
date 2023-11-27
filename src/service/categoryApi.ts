import axios from 'axios';
import { Notify } from 'quasar'
import { Category } from 'src/components/constCategory';

const baseUrl = 'https://localhost:44370'
const getCategoriesUrl = '/api/app/category/categories'
const categoryUrl = '/api/app/category/category/'
// const updateCategoryUrl = '/api/app/category/category/'
// const deleteCategoriesUrl = '/api/app/category/category/'

export const getCategories = async () => {
    try {
        const response = await axios.get(baseUrl + getCategoriesUrl);
        return response.data;
    } catch (error) {
        Notify.create({
            position: 'top',
            type: 'warning',
            message: 'No data available !'
        })
        console.error(error);
        throw error;
    }
};

export const createCategory = async (input: Category) => {
    try {
        await axios.post(baseUrl + categoryUrl, input);
        Notify.create({
            position: 'top',
            type: 'positive',
            message: `${input.name} category created !`
        })
    } catch (error) {
        Notify.create({
            position: 'top',
            type: 'warning',
            message: `Fail to create ${input.name} category !`
        })
        console.error(error);
        throw error;
    }
}

export const updateCategory = async (input: Category) => {
    try {
        await axios.put(baseUrl + categoryUrl, input);
        Notify.create({
            position: 'top',
            type: 'positive',
            message: `${input.name} category updated !`
        })
    } catch (error) {
        Notify.create({
            position: 'top',
            type: 'warning',
            message: `Fail to update ${input.name} category !`
        })
        console.error(error);
        throw error;
    }
}

export const deleteCategories = async (selected: Array<Category>) => {
    try {
        for (const item of selected) {
            await axios.delete(`${baseUrl}${categoryUrl}${item.id}`);
        }
        Notify.create({
            position: 'top',
            type: 'positive',
            message: 'Category deleted !'
        })
    } catch (error) {
        Notify.create({
            position: 'top',
            type: 'warning',
            message: 'Fail to delete category !'
        })
        console.error(error);
        throw error;
    }
}