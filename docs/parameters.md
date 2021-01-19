---
id: passparameter
title: Passing parameter in custom step
---

Tesbo is allowing you to create a custom step using .java files. In some cases you need to pass the data into the custom step from the Test file. you can achieve this by this way. 


### Pass the value as a parameter directly 

- Declare the custom step in .java files

```
@Step("Click on Date from Calendar")
public void clickOnDateButton(String date) {
    driver.findElement(By.xpath("(//a[contains(text(),'"+date+"')])[2]")).click();
}
```

- Use in .test file

```
Test: Select Date from Calendar
Step: Open URL 'http://www.example.com/'
Code: Click on Date from Calendar(1)
Step: Click on @Done button
Verify: @TodaysDate is displayed
End
```

Please observe that you can pass the parameter by declaring the `(parameter value)` with the custome step name


:::info
Tesbo only support the string type for passing paramter, so if you required the any other data type then you need to convert data in .java file.
:::
