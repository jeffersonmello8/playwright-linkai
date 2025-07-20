import { fakerPT_BR } from '@faker-js/faker';

export interface User {
    name?: string,
    firstName?: string,
    username: string,
    email: string,
    password: string,
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

function createRandomUser(): User {
    const fullName = `${fakerPT_BR.person.firstName()} ${fakerPT_BR.person.lastName()}`
    const userName = fakerPT_BR.internet.username({ firstName: `${fullName.trim().split(/\s+/)[0]}`, lastName: `${fullName.trim().split(/\s+/)[1]}` }).replace('.', '_')
    const email = `${fullName.trim().split(/\s+/)[0]}.${fullName.trim().split(/\s+/)[1]}@hotmail.com`

    return {
        firstName: fullName.trim().split(/\s+/)[0],
        username: userName.toLowerCase(),
        email: email.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
        password: fakerPT_BR.internet.password(),
    }
}

export const newRandomUser: User = createRandomUser()