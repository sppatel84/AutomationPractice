@Regression
Feature: Checkout

    As a user
    I want to select the product
    So I can view the correct item at checkout

    Background:
        Given I am on home page

    Scenario Outline: Select the product and validate the same product should display at checkout page
        When I search for item as "<ProductName>"
        When I click on search button
        Then I navigate to product page and view the product title as "<ProductName>"
        Then I select the dress color as "<color>"
        Then I select the quantity as "<quantity>"
        Then I select the size as "<size>"
        Then I click on add to cart button
        Then I can see the total products value as "<ProductValue>" and shipping cost as "<ShippingCost>"
        Then I can see the total price as "<TotalPrice>"
        When I click on Proceed to checkout button
        Then I navigate to "Shopping-cart summary" page
        Then I validate product name as "<ProductName>", color name as "<color>" and size as "<DisplaySize>" in description
        Then I validate the cart total as "<ProductValue>"
        Then I validate the cart shipping price as "<ShippingCost>"
        Then I validate the cart tax price as "<Tax>"
        Then I validate the total cart price as "<TotalPrice>"
        When I click on Proceed to checkout button on summary page
        Then I navigate to "Authentication" page for sign in or create an account


        Examples:
            | ProductName          | color | quantity | size | ProductValue | ShippingCost | TotalPrice | DisplaySize | Tax   |
            | Printed Summer Dress | blue  | 2        | 2    | $57.96       | $2.00        | $59.96     | M           | $0.00 |

