import { test, expect } from '@playwright/test'

import { getLoginPage } from '../support/pages/LoginPage'


test('deve logar com sucesso', async ({ page }) => {

    const loginPage = getLoginPage(page)

    const user = {
        username: 'jefferson',
        password: 'pwd123'
    }

    loginPage.open()
    loginPage.submit(user.username, user.password)

    const title = page.locator('h1')
    await expect(title).toContainText('Olá, Jefferson Sousa!')

})

test('não deve logar com sucesso', async ({ page }) => {

    const loginPage = getLoginPage(page)

    const user = {
        username: 'jefferson',
        password: '123456'
    }

    loginPage.open()
    loginPage.submit(user.username, user.password)

    const toast = page.locator('.toast')

    await expect(toast).toContainText('Oops!')
    await expect(toast).toContainText('Algo deu errado com seu login. Por favor, verifique suas credenciais')
})

test('não deve logar com usuário não cadastrado', async ({ page }) => {

    const loginPage = getLoginPage(page)

    const user = {
        username: 'romario',
        password: 'pwd123'
    }

    loginPage.open()
    loginPage.submit(user.username, user.password)

    const toast = page.locator('.toast')

    await expect(toast).toContainText('Oops!')
    await expect(toast).toContainText('Algo deu errado com seu login. Por favor, verifique suas credenciais')
})