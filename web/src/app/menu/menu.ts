import {CoreMenu} from '@core/types';

export const menu: CoreMenu[] = [
    {
        id: 'documents',
        title: 'Documents',
        translate: 'MENU.DOCUMENT',
        type: 'item',
        icon: 'book',
        url: '/admin/documents',
        params: {
            'with[]': ['author', 'area'],
            'per_page': 15,
            'page': 1,
            'searchKey': '',
        },
    },
    {
        id: 'area',
        title: 'Rayon',
        translate: 'MENU.AREA',
        type: 'item',
        icon: 'book',
        url: '/admin/areas',
        params: {
            per_page: 15,
            page: 1,
            searchKey: '',
        }
    },
    {
        id: 'author',
        title: 'Auteurs',
        translate: 'MENU.AUTHOR',
        type: 'item',
        icon: 'clipboard',
        url: '/admin/authors',
        params: {
            'with[]': [],
            'per_page': 15,
            'page': 1,
            'searchKey': '',
        },
    },
];
