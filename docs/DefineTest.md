---
id: TestDefine
title: File Types of Tesbo
---

## *.Test Files

you need to create a `.tests` file for the creating a test in Tesbo. tests file consider as the collection of test in Tesbo and you can define any number of test inside the test file. 

you can also create any number of .test file inside the `tests` folder


 ## *.Suites Files

 Suite files are helpful to design the test exeuction. you can define all the test that you wanted to run inside the suite file. 

 e.g Let's think that we need to run the 5 test as part of the regression, We can create a `regression.suite` like this

 ```
Test: login on phptravels and verify user profile page using custom code
Test: login on phptravels site with valid Credentials
Test: Verify scroll to top functionality
Test: Verify scroll to horizontal functionality
Test: Verify scroll to element functionality
 ```

:::info
you can create multiple suite file inside the suite directory and also the the multiple suite at the same time.
:::


## *.json Files

Tesbo uses the JSON file for the defining the locator for the element. 

e.g.

```
{
          "sign_in":"//div[contains(text(),'Hello. Sign in')]",
          "Email_Field":"//input[@type='email']",
          "continue":"continue",
          "Password_Field":"//input[@type='password']",
          "Login_Button":"signInSubmit" 
}
```

:::info
you don't required to mention the type of locators, Tesbo will automatically identify the locator type and find the elements.
:::


## *.Java Files

Tesbo provide the support the write the custom step using Java file.


## config.json Files

config.json is the main configuration file for the test execution, you define all the configuration like BaseURL, Enviroment, Test to run using Tags or Suite, browser etc inside the config file.
 