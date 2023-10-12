import event1 from './../assets/event1.jpg';
import event2 from './../assets/event2.jpg';
import event3 from './../assets/event3.jpg';
import event4 from './../assets/event4.jpg';
import event5 from './../assets/event5.jpg';
import event6 from './../assets/event6.jpg';

export type GalleryImageType = {
    src: string;
    category: string;
};

export type NavigationLinkType = {
    href: string;
    title: string;
};

export const NAV_LINKS: Array<NavigationLinkType> = [
    {href: '#main', title: 'Главная'},
    {href: '#invitation', title: 'О нас'},
    {href: '#events', title: 'События'},
    {href: '#contacts', title: 'Контакты'},
];

export const ACCORDION_IMAGES = [event1, event2, event3, event4, event5, event6];
export const ACCORDION_DATA = [
    {
        time: '12:00 Регистрация брака',
        description: 'Регистрация брака в ЗАГСе, все как обычно. Пускают 20 человек, в опросе можете указать хотите присутствовать или нет',
    },
    {
        time: '12:30 Фуршет',
        description: 'Небольшой фуршет у ЗАГСа (шампанское-конфетки) и общее фото на фоне набережной',
    },
    {
        time: '13:00 Трансфер',
        description: 'Автобус от ЗАГСа до деревни, очень удобно и никто не потеряется. Если поедете на своей машине - скажите нам, пожалуйста!',
    },
    {
        time: '14:00 Знакомство гостей',
        description: 'Игры на знакомство и фуршет, молодожены переводят дух и переодеваются',
    },
    {
        time: '15:00 Основная программа',
        description: 'Застолье, конкурсы, тосты, квиз, движ!',
    },
    {
        time: '20:30 Конец вечера',
        description: 'Бенгальские огни и завершение программы: дальше танцы и душевные посиделки компаниями',
    },

];


export const GALLERY_IMAGES: Array<GalleryImageType> = [
    {src: event1, category: 'moments'},
    {src: event2, category: 'friends'},
    {src: event3, category: 'moments'},
    {src: event4, category: 'family'},
];

export const GALLERY_TABS = ['Все', 'Моменты', 'Друзья', 'Банкет', 'Семья', 'Вечеринка'];

export const CONTACTS_SHOWED = 'CONTACTS_SHOWED';