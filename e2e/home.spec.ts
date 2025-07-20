import { test, expect } from '@playwright/test'
import { getHomePage } from '../support/pages/HomePage'

test('deve exibir o título na home', async ({ page }) => {
  const homePage = getHomePage(page)

  await homePage.open()

  expect(await homePage.getTitle()).toBe('Linkaí by Papito')
})