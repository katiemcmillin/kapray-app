# Project Overview


## KAPRAY App



## Project Description
KAPRAY is an app that allows users to upload their clothing they would like to sell. They would be able to edit and delete their post after uploading it. There is a seperate "Apparel" screen that allows the users to view all the products on the site. The user will only be able to have access to uploading a product only if they create an account. If the user already has an account with the site they would be able to sign in using their previously made credentials.

## Schema
```
import mongoose from 'mongoose';
  const { Schema } = mongoose;

  const Product = new Schema(
    {
    name:  {type: String, required: true}, 
    price: {type: String, required: true},
    body: {type: String, required: true},
    description: {type: String, required: true},
    username: {type: String, required: true},
    link: {type: String, required: true},
     { timestamps: true }
  });

  export default mongoose.model('products', Product)
  ```


## Component Hierarchy
![image](https://user-images.githubusercontent.com/82814499/119856967-24d83400-bee1-11eb-9a63-c7b66cbcf1ac.png)

## Wireframes
![imageAlt](https://i.imgur.com/fOYfGzE.png)
![imageAlt](https://i.imgur.com/WaT7hDt.png)
![imageAlt](https://i.imgur.com/5Chgrzd.png)
![imageAlt](https://i.imgur.com/ACqISCq.png)
![imageAlt](https://i.imgur.com/Q8nhr62.png)
![imageAlt](https://i.imgur.com/Sd6kp4x.png)
![imageAlt](https://i.imgur.com/x731XDN.png)


### MVP/PostMVP


#### MVP 
- User Authentication
- Full backend construction using Express, Mongoose, and MongoDB
- Full frontend construction using React
- CRUD implementation in app
- Deploy using Heroku

#### PostMVP  

- Filter feature
- Sort and Search feature
- Adding own clothing
- Dark Mode
- Shopping Cart
- Favorite System (Like button)
