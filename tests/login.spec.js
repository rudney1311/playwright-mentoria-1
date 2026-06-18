// @ts-check
import { test, expect } from '@playwright/test';


test('login com sucesso', async ({ page }) => {

  //abrir site
  await page.goto('https://automationpratice.com.br/');
  //clicar em login
  await page.getByRole('link', { name: ' Login' }).click();
  //digitar e-mail
  await page.locator('#user').fill('qazando@gmail.com')
  //digitar senha
  await page.locator('#password').fill('qazando123')
  //clicar em login
  await page.getByRole('button', { name: 'login' }).click();
  //validar se o login foi realizado com sucesso
  await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible();
  //clicar no botão ok 
  await page.getByRole('button', { name: 'OK' }).click({ force: true });

});


test('login com senha inválida', async ({ page }) => {
  
});

test('login com e-mail inválido', async ({ page }) => {
  
});

test('login com senha e e-mail vazio', async ({ page }) => {
  
});