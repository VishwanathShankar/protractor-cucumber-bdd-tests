Feature: Premium Calculation Based on Age
 As a user of the insurance calculation app
 I would like to calculate the insurance premium percentage
 So that I could come to know the premium amount

 Scenario: Premium calculations when given my DOB
    Given The premium calculation app is open
        When I enter name as Vishwa
        And I enter DOB as 07/03/1987
        Then The premium percentage should be equal to 0.075

 Scenario Outline: Premium calculations for age group of 10 - 30 years
    Given The premium calculation app is open
    When I enter name as "<name>"
    And I enter BOD as <dob>
    Then The premium percentage should be equal to <percentage>    
    Examples:
        | name     | dob         | percentage |
        | Gaurav   | 11/20/2011  | 0.025      |
        | Greeshma | 01/08/2009  | 0.025      |
        | Inchara  | 06/18/2017  | 0.025      |
        | Anamika  | 10/12/1993  | 0.025      |