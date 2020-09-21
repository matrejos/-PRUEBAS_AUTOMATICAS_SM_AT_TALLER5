Feature: Register new users into losestudiantes
    As an user I want to register myself within losestudiantes website in order to rate teachers

Scenario Outline: Register failed with wrong inputs

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill register form with <nombre> and <apellido> and <email> and <programa> and <password> and <acepta>
    And I try to register
    Then I expect to see <error>

    Examples:
      | nombre             | apellido           | email                    |   programa |   password |   acepta |   error                                  |
      |                    |                    |                          |       Arte |            |          |"Ingresa tu correo"                       |
      |             Andres |             Andres |ma.trejosb@uniandes.edu.co|       Arte |            |          |"Ingresa una contraseña"                  |

Scenario Outline: Register failed with existent user

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill register form with <nombre> and <apellido> and <email> and <programa> and <password> and <acepta>
    And I try to register
    Then I expect to not be able to register

    Examples:
      | nombre             | apellido           | email                    |   programa |   password |   acepta |   error                                  |
      |             Andres |             Andres |ma.trejosb@uniandes.edu.co|       Arte |   Matb16074|     true |"Ya existe un usuario"                    |

Scenario Outline: Register successfull with correct inputs

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill register form with <nombre> and <apellido> and <email> and <programa> and <password> and <acepta>
    And I try to register
    Then I expect to be able to register

    Examples:
      | nombre             | apellido           | email                    |   programa |   password |   acepta |   error                                  |
      |             Andres |             Andres |        matrejos3@gmail.com|       Arte |   Matb16074|     true |"Ya existe un usuario"                    |
