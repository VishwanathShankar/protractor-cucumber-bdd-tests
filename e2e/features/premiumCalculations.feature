Feature: Premium Calculation Based on Age
 As a user of the insurance calculation app
 I would like to calculate the insurance premium percentage
 So that I could come to know the premium amount

 Scenario: Premium calculations when given a known DOB
    Given The premium calculation app is open
        When I enter name as Vishwa
        And I enter DOB as 07/03/1987
        Then The premium percentage should be equal to 0.075