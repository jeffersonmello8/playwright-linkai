import { test, expect } from '@playwright/test'

import { getLoginPage } from '../support/pages/LoginPage'
import { getDashPage } from '../support/pages/DashPage'
import { getToast } from '../support/pages/components/Toast'
import { Users } from '../support/fixtures/User'

test('deve logar com sucesso', async ({ page }) => {
    const loginPage = getLoginPage(page)
    const dashPage = getDashPage(page)
    const toast = getToast(page)

    loginPage.open()
    loginPage.submit(Users.validUser)

    await expect(dashPage.welcome()).toContainText(`Olá, ${Users.validUser.name}!`)
    await expect(toast.element()).toContainText('Login realizado com sucesso!')
    await expect(toast.element()).toContainText('Bem-vindo de volta ao Linkaí.')
})

test('não deve logar com sucesso', async ({ page }) => {
    const loginPage = getLoginPage(page)
    const toast = getToast(page)

    loginPage.open()
    loginPage.submit(Users.invalidPasswordUser)

    await expect(toast.element()).toContainText('Oops!')
    await expect(toast.element()).toContainText('Algo deu errado com seu login. Por favor, verifique suas credenciais')
})

test('não deve logar com usuário não cadastrado', async ({ page }) => {
    const loginPage = getLoginPage(page)
    const toast = getToast(page)

    loginPage.open()
    loginPage.submit(Users.unregisteredUser)

    await expect(toast.element()).toContainText('Oops!')
    await expect(toast.element()).toContainText('Algo deu errado com seu login. Por favor, verifique suas credenciais')
})

test('não deve logar quando não informo nenhum dos campos', async ({ page }) => {
    const loginPage = getLoginPage(page)
    const toast = getToast(page)

    loginPage.open()
    loginPage.submit(Users.emptyFieldsUser)

    await expect(toast.element()).toContainText('Campos obrigatórios')
    await expect(toast.element()).toContainText('Por favor, preencha todos os campos.')
})

test('não deve logar quando não informo o usuário', async ({ page }) => {
    const loginPage = getLoginPage(page)
    const toast = getToast(page)

    loginPage.open()
    loginPage.submit(Users.emptyUsernameUser)

    await expect(toast.element()).toContainText('Campos obrigatórios')
    await expect(toast.element()).toContainText('Por favor, preencha todos os campos.')
})

test('não deve logar quando não informo a senha', async ({ page }) => {
    const loginPage = getLoginPage(page)
    const toast = getToast(page)

    loginPage.open()
    loginPage.submit(Users.emptyPasswordUser)

    await expect(toast.element()).toContainText('Campos obrigatórios')
    await expect(toast.element()).toContainText('Por favor, preencha todos os campos.')
})