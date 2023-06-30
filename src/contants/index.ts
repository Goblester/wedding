import commonPhoto from './../assets/commonPhoto.jpg';
import commonPhoto1 from './../assets/commonPhoto2.jpg';
import commonPhoto2 from './../assets/commonPhoto3.jpg';
import commonPhoto3 from './../assets/commonPhoto4.jpg';

export type GalleryImageType = {
    src: string;
    category: string;
}

export const ACCORDION_IMAGES = [commonPhoto, commonPhoto1, commonPhoto2, commonPhoto3];
export const ACCORDION_DATA = [
    {
        time: '5:30pm Celebration',
        location: ' 5th Ave, NY',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: commonPhoto
    },
    {
        time: '5:30pm Celebration',
        location: ' 5th Ave, NY',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: commonPhoto1
    },
    {
        time: '5:30pm Celebration',
        location: ' 5th Ave, NY',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: commonPhoto2
    },
    {
        time: '5:30pm Celebration',
        location: ' 5th Ave, NY',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: commonPhoto3
    },
];


export const GALLERY_IMAGES: Array<GalleryImageType> = [
    {src: commonPhoto, category: 'moments'},
    {src: commonPhoto1, category: 'friends'},
    {src: commonPhoto2, category: 'moments'},
    {src: commonPhoto3, category: 'family'},
];

export const GALLERY_TABS = ['all', 'moments', 'friends', 'banguet', 'family', 'party'];