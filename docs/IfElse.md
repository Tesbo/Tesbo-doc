---
id: ifelse
title: IF ELSE in Test
---

IF Else in Tesbo provide the great flexibility to write the test, 

### If condition

```
If:: @element is displayed
....
End::
```

:::info
End:: is optional, if End:: statement is not found then Tesbo will consider all following steps in if condition block till test end statement  and they will execute only when if condition met 
:::





Possible condition that you can use into the IF

```
If:: @element is displayed
If:: @element is present
If:: @element text number is grater then equal to 'any number'
If:: @element text number is grater then 'any number'
If:: @element text number is less then equal to 'any number'
If:: @element text number is less then 'any number'
If:: @element text is equal to ignore case @element2 text
If:: @element text is equal to @element2 text
If:: @element text is equal to ignore case 'any text'
If:: @element text is equal to 'any text'
If:: @element text contains is 'any text'
```


### If Else condition

```
If:: @element is displayed
....
Else::
....
End::

```

### Else If condition

```
If:: @element is displayed
....
Else If:: @element is displayed
....
Else::
....
End::

```

You can also check the multiple statement in IF condition 

### If statement with AND condition

```
If:: @element is displayed
....
Else If:: @element is displayed
....
Else::
....
End::
```

###  If statement with OR condition

```
If:: @element is displayed OR @element text is to 'verify text'
....
Else::
....
End::
```
