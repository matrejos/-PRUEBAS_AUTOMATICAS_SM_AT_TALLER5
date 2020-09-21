var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');

Given('I go to losestudiantes home screen', () => {
  browser.url('/');
  if($('button=Cerrar').isDisplayed()) {
    $('button=Cerrar').click();
  }
});

When('I open the login screen', () => {
  $('button=Ingresar').waitForExist(5000);
  $('button=Ingresar').waitForDisplayed(5000);
  $('button=Ingresar').click();
});

When('I fill a wrong email and password', () => {
  var cajaLogIn = $('.cajaLogIn');

  var mailInput = cajaLogIn.$('input[name="correo"]');
  mailInput.click();
  mailInput.setValue('wrongemail@example.com');

  var passwordInput = cajaLogIn.$('input[name="password"]');
  passwordInput.click();
  passwordInput.setValue('123467891');
});

When('I try to login', () => {
  var cajaLogIn = $('.cajaLogIn');
  cajaLogIn.$('button=Ingresar').click();
});

When('I try to register', () => {
    var cajaLogIn = $('.cajaSignUp');
    cajaLogIn.$('button=Registrarse').click();
});
  
Then('I expect to not be able to login', () => {
  $('.aviso.alert.alert-danger').waitForDisplayed(5000);
});

When(/^I fill with (.*) and (.*)$/ , (email, password) => {
   var cajaLogIn = $('.cajaLogIn');
  
   var mailInput = cajaLogIn.$('input[name="correo"]');
   mailInput.click();
   mailInput.keys(email);
  
   var passwordInput = cajaLogIn.$('input[name="password"]');
   passwordInput.click();
   passwordInput.keys(password);
});

When(/^I fill register form with (.*) and (.*) and (.*) and (.*) and (.*) and (.*)$/ , (nombre, apellido, email, programa, password, acepta) => {
    var cajaSignUp = $('.cajaSignUp');
   
    var nombreInput = cajaSignUp.$('input[name="nombre"]');
    nombreInput.click();
    nombreInput.keys(nombre);
   
    var apellidoInput = cajaSignUp.$('input[name="apellido"]');
    apellidoInput.click();
    apellidoInput.keys(apellido);
    
    var mailInput = cajaSignUp.$('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);
    
    var programaInput = cajaSignUp.$('select[name="idPrograma"]');
    programaInput.click();
    programaInput.keys(programa);
   
    var passwordInput = cajaSignUp.$('input[name="password"]');
    passwordInput.click();
    passwordInput.setValue(password);
    
    var aceptaInput = cajaSignUp.$('input[name="acepta"]');
    aceptaInput.click();
 });
   
Then('I expect to see {string}', error => {
   $('.aviso.alert.alert-danger').waitForDisplayed(5000);
   var alertText = browser.$('.aviso.alert.alert-danger').getText();
   expect(alertText).to.include(error);
});
  
Then('I expect to be able to login', () => {
    $('.usrImage.fa.fa-user-circle.fa-2x').waitForDisplayed(5000);
});
  
Then('I expect to not be able to register', () => {
    $('button=Ok').waitForDisplayed(5000);
 });
  
Then('I expect to be able to register', () => {
    $('button=Ok').waitForDisplayed(5000);
});