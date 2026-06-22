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
 // acessar a página de login diretamente
 await page.goto('https://automationpratice.com.br/login');
  // preencher o campo de e-mail com um e-mail válido
  await page.locator('#user').fill('qazando@gmail.com');
  // preencher o campo de senha com uma senha inválida
  await page.locator('#password').fill('senha123');
  // clicar no botão de login
  await page.getByRole('button', { name: 'login' }).click();
  // validar se a mensagem de erro é exibida
  await expect(page.getByRole('heading', { name: 'Login inválido' })).toBeVisible();
  // clicar no botão ok
  await page.getByRole('button', { name: 'OK' }).click({ force: true });

});

test('login com e-mail inválido', async ({ page }) => {
  // acessar a página de login diretamente
  await page.goto('https://automationpratice.com.br/login');
  // preencher o campo de e-mail com um e-mail inválido
  await page.locator('#user').fill('123456789');
  // preencher o campo de senha com uma senha válida
  await page.locator('#password').fill('qazando123');
  // clicar no botão de login
  await page.getByRole('button', { name: 'login' }).click();
  // validar se a mensagem de erro é exibida
  await expect(page.getByRole('heading', { name: 'Login inválido' })).toBeVisible();
  // clicar no botão ok
  await page.getByRole('button', { name: 'OK' }).click({ force: true });
  
});

test('login com senha e e-mail vazio', async ({ page }) => {
  // acessar a página de login diretamente
  await page.goto('https://automationpratice.com.br/login');
  // clicar no botão de login
  await page.getByRole('button', { name: 'login' }).click();
  // validar se a mensagem de erro é exibida
  await expect(page.getByRole('heading', { name: 'Login inválido' })).toBeVisible();
  // clicar no botão ok
  await page.getByRole('button', { name: 'OK' }).click({ force: true });
  
});