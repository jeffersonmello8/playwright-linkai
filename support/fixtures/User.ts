import { fakerPT_BR } from '@faker-js/faker';

export interface User {
    name?: string,
    firstName?: string,
    username: string,
    email?: string,
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

export function createRandomUser(): User {
  const firstName = fakerPT_BR.person.firstName().trim()
  const lastName = fakerPT_BR.person.lastName().trim()

  const userName = fakerPT_BR.internet.username({ firstName, lastName }).replace('.', '_')

  const email = `${lastName}${fakerPT_BR.internet.httpStatusCode()}@hotmail.com`
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  return {
    firstName,
    username: userName.toLowerCase(),
    email,
    password: fakerPT_BR.internet.password(),
  }
}