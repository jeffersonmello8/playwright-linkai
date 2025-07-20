import { Page } from '@playwright/test'
import { User } from '../fixtures/User';

export function getRegisterPage(page: Page) {
    return {
        open: async () => {
            await page.goto('http:localhost:3000/cadastro')
        },
        fillNewRandomUser: async (newUser: User) => {
            await page.getByPlaceholder('Como você gostaria de ser chamado?').fill(newUser.firstName!)
            await page.getByPlaceholder('Escolha um @username único (ex: superdev_123)').fill(newUser.username)
            await page.getByPlaceholder('Seu melhor e-mail para receber novidades!').fill(newUser.email)
            await page.getByPlaceholder('Crie uma senha secreta e segura').fill(newUser.password)
            await page.getByPlaceholder('Repita sua senha para garantir!').fill(newUser.password)
        },
        fillInvalidPassword: async (password: string) => {
            await page.getByPlaceholder('Repita sua senha para garantir!').fill(password)
        },
        submit: async () => {
            await page.locator('button[type="submit"]').click()
        }
    }
}