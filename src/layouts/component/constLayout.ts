import { ref } from 'vue';
import { date } from 'quasar';
import { EssentialLinkProps } from 'components/EssentialLink.vue';

export const darkMode = ref(false);

export const leftDrawerOpen = ref(false)
export const timeStamp = Date.now()
export const todaysDate = date.formatDate(timeStamp, 'dddd D. MMMM YYYY.')

export const essentialLinks: EssentialLinkProps[] = [
    {
        title: 'Login',
        icon: 'login',
        link: '#/login'
    },
    {
        title: 'Register',
        icon: 'backup',
        link: '#/register'
    },
    {
        title: 'Todo',
        caption: 'ToDo List',
        icon: 'add_to_photos',
        link: '#/todo'
    },
    {
        title: 'Joke',
        caption: 'best jokes',
        icon: 'emoji_emotions',
        link: '#/joke'
    },
    {
        title: 'Test',
        caption: 'Test Page',
        icon: 'code',
        link: '#/test'
    },
    {
        title: 'New',
        caption: 'New Page',
        icon: 'app_registration',
        link: '#/new'
    }
];