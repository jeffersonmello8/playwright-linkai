export interface User {
    name?: string,
    username: string,
    password: string
}

export const Users = {
    validUser: {
        name: 'Jefferson Sousa',
        username: 'jefferson',
        password: 'pwd123'
    },
    invalidPasswordUser: {
        username: 'jefferson',
        password: '123456'
    },
    unregisteredUser: {
        username: 'romario',
        password: 'pwd123'
    },
    emptyFieldsUser: {
        username: '',
        password: ''
    },
    emptyUsernameUser: {
        username: '',
        password: 'pwd123'
    },
    emptyPasswordUser: {
        username: 'jefferson',
        password: ''
    }
}