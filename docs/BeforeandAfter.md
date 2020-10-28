---
id: Before And After
title: Before Test and After Test

---

While developing test, there are certain scenario where you need to perfrom some steps before running test, `Before Test` and `After Test` will helpful in that case. 

The scope of **Before Test** and **After Test** is only the single .test file where they are declared.



1. Before Test

```
BeforeTest:
Step: Pause until @Email_Box is display
Step: pause 1 sec
Step: Enter 'admin@phptravels.com' in to @Email_Box
Step: Enter 'demoadmin' in @Password_Box
Step: Click on @LoginBtn
End

```

2. After Test

```
AfterTest:
Step: Click on @LogoutBtn
Step: Pause until @LoginBtn is display
Verify: @LoginBtn is Displayed
End

```
