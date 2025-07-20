import { test, expect } from '@playwright/test'
import { getRegisterPage } from '../support/pages/RegisterPage'
import { getToast } from '../support/pages/components/Toast'
import { getDashPage } from '../support/pages/DashPage'
import { getWarning } from '../support/pages/components/Warning'
import { createRandomUser } from '../support/fixtures/User'

test('deve realizar o cadastro com sucesso', async ({ page }) => {
    const registerPage = getRegisterPage(page)
    const toastPage = getToast(page)
    const dashPage = getDashPage(page)
    const newUser = createRandomUser()

    await registerPage.open()
    await registerPage.fillNewRandomUser(newUser)
    await registerPage.submit()

    await expect(dashPage.welcome()).toContainText(`Olá, ${newUser.firstName}!`)
    await expect(toastPage.element()).toContainText('Conta criada com sucesso!')
    await expect(toastPage.element()).toContainText('Bem-vindo ao Linkaí. Agora você pode criar seu perfil.')
})

test('deve exibir erro ao tentar cadastrar com campos obrigatórios em branco', async ({ page }) => {
    const registerPage = getRegisterPage(page)
    const toastPage = getToast(page)

    await registerPage.open()
    await registerPage.submit()

    await expect(toastPage.element()).toContainText('Campos obrigatórios')
    await expect(toastPage.element()).toContainText('Por favor, preencha todos os campos.')
})

test('deve exibir erro ao tentar cadastrar com nome em branco', async ({ page }) => {
    const registerPage = getRegisterPage(page)
    const toastPage = getToast(page)
    const newUser = createRandomUser()
    newUser.firstName = ""

    await registerPage.open()
    await registerPage.fillNewRandomUser(newUser)
    await registerPage.submit()

    await expect(toastPage.element()).toContainText('Campos obrigatórios')
    await expect(toastPage.element()).toContainText('Por favor, preencha todos os campos.')
})

test('deve exibir erro ao tentar cadastrar com username em branco', async ({ page }) => {
    const registerPage = getRegisterPage(page)
    const toastPage = getToast(page)
    const newUser = createRandomUser()
    newUser.username = ""

    await registerPage.open()
    await registerPage.fillNewRandomUser(newUser)
    await registerPage.submit()

    await expect(toastPage.element()).toContainText('Campos obrigatórios')
    await expect(toastPage.element()).toContainText('Por favor, preencha todos os campos.')
})

test('deve exibir erro ao tentar cadastrar com e-mail em branco', async ({ page }) => {
    const registerPage = getRegisterPage(page)
    const toastPage = getToast(page)
    const newUser = createRandomUser()
    newUser.email = ""

    await registerPage.open()
    await registerPage.fillNewRandomUser(newUser)
    await registerPage.submit()

    await expect(toastPage.element()).toContainText('Campos obrigatórios')
    await expect(toastPage.element()).toContainText('Por favor, preencha todos os campos.')
})

test('deve exibir erro ao tentar cadastrar com senha em branco', async ({ page }) => {
    const registerPage = getRegisterPage(page)
    const toastPage = getToast(page)
    const newUser = createRandomUser()
    newUser.password = ""

    await registerPage.open()
    await registerPage.fillNewRandomUser(newUser)
    await registerPage.submit()

    await expect(toastPage.element()).toContainText('Campos obrigatórios')
    await expect(toastPage.element()).toContainText('Por favor, preencha todos os campos.')
})

test('deve exibir erro ao tentar cadastrar com e-mail já existente', async ({ page }) => {
    const registerPage = getRegisterPage(page)
    const toastPage = getToast(page)
    const newUser = createRandomUser()

    await registerPage.open()
    await registerPage.fillNewRandomUser(newUser)
    await registerPage.submit()
    await registerPage.open()
    await registerPage.fillNewRandomUser(newUser)
    await registerPage.submit()

    await expect(toastPage.element()).toContainText('Erro no cadastro')
    await expect(toastPage.element()).toContainText('User with that email or username already exists')
})

test('deve validar o formato inválido de email sem @', async ({ page }) => {
    const registerPage = getRegisterPage(page)
    const warning = getWarning(page)
    const newUser = createRandomUser()

    const invalidEmail = newUser.email!.replace('@', '')
    newUser.email = invalidEmail

    await registerPage.open()
    await registerPage.fillNewRandomUser(newUser)
    await registerPage.submit()

    expect((await warning.getEmailFieldBrowserAlertMessage())).toContain(`Please include an '@' in the email address.`)
})

test('deve validar o formato inválido de email sem domínio', async ({ page }) => {
    const registerPage = getRegisterPage(page)
    const warning = getWarning(page)
    const newUser = createRandomUser()

    const invalidEmail = newUser.email!.replace('hotmail.com', '')
    newUser.email = invalidEmail

    await registerPage.open()
    await registerPage.fillNewRandomUser(newUser)
    await registerPage.submit()

    expect((await warning.getEmailFieldBrowserAlertMessage())).toContain(`Please enter a part following`)
})

test('deve exibir erro quando a confirmação de senha for diferente da senha', async ({ page }) => {
    const registerPage = getRegisterPage(page)
    const toastPage = getToast(page)
    const newUser = createRandomUser()

    await registerPage.open()
    await registerPage.fillNewRandomUser(newUser)
    await registerPage.fillInvalidPassword("123456")
    await registerPage.submit()

    await expect(toastPage.element()).toContainText('Senhas não coincidem')
    await expect(toastPage.element()).toContainText('A confirmação de senha deve ser igual à senha.')

})


