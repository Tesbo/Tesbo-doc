---
id: HandlingData
title: Handle Data in Tesbo
---

While running Test it's more important to handle data correctly and easily into the Test. Tesbo has the seemless integration to handle data in various format. 

:::info
All the Data file should be in inside the `dataset` directory. if you don't have you can create it.   
:::


For using data into the Tesbo, First you need to create a  **DataSet** into the .json file. You will able to define dataset in **json array and object** format or you can use the **Excel file**.


here is the simple example of the dataset file. 

```
{
  "Credentials": {
      "adminEmail": "admin@yourstore.com",
      "adminPassword": "admin"
  },
  "LoginPageErrorMessage": {
    "EmailErrorMsg": "Please enter your email",
    "SummeryOfErrorMsg": "Login was unsuccessful. Please correct the errors and try again.\nThe credentials provided are incorrect"
  },
  "CategoriesDetails": [
    {
      "CategoryName": "Computers",
      "Published": true,
      "DisplayOrder": 1
    },
    {
      "CategoryName": "Electronics",
      "Published": true,
      "DisplayOrder": 2
    },
    {
      "CategoryName": "Jewelry",
      "Published": true,
      "DisplayOrder": 6
    }
  ],
  "productDetails": {
    "excelFile": "./src/test/Resource/Products.xlsx"
  }
}

```

here **Credentials**, **LoginPageErrorMessage**, **CategoriesDetails**, **productDetails** are the json object and considered as the DataSet name. 














