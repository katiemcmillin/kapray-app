import db from "../db/connection.js";
import Product from "../models/product.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  await db.dropDatabase();

  const user1 = new User({
    username: "katie",
    email: "katiemcmillin@gmail.com",
    password_digest: await bcrypt.hash("spot1202", 11),
  });
  await user1.save();

  const user2 = new User({
    username: "anss",
    email: "achaudhry12@outlook.com",
    password_digest: await bcrypt.hash("anssisthebest12", 11),
  });
  await user2.save();

  const user3 = new User({
    username: "cyd",
    email: "villacv@gmail.com",
    password_digest: await bcrypt.hash("largearse", 11),
  });
  await user3.save();

  const products = [
    {
      name: "Product 001",
      imgURL:
        "//img.ltwebstatic.com/images3_pi/2020/07/31/1596179283bf80635c37cba274cb5eb3a726751565_thumbnail_600x.webp",
      description: "",
      price: "125",
      size: " ",
      username: "admin",
    },
    {
      name: "Product 002",
      imgURL:
        "//img.ltwebstatic.com/images3_pi/2020/04/14/1586833567c084a75c03ce8e463774c1e4de8b0e55_thumbnail_600x.webp",
      description: "",
      price: "140",
      size: " ",
      username: "admin",
    },
    {
      name: "Product 003",
      imgURL:
        "//img.ltwebstatic.com/images3_pi/2020/10/29/160395212189e53bc4c916996ecb0449bc514fed5d_thumbnail_600x.webp",
      description: "",
      price: "140",
      size: " ",
      username: "admin",
    },
    {
      name: "Product 004",
      imgURL:
        "//img.ltwebstatic.com/images3_pi/2020/08/24/15982470023b5aa5b0439f567707eaf32d86974f1f_thumbnail_600x.webp",
      description: "",
      price: "168",
      size: " ",
      username: "admin",
    },
    {
      name: "Product 005",
      imgURL:
        "//img.ltwebstatic.com/images3_pi/2020/05/26/159048436604cb5e6693276211be18ce543eed704e_thumbnail_600x.webp",
      description: "",
      price: "110",
      size: " ",
      username: "admin",
    },
    {
      name: "Product 006",
      imgURL:
        "//img.ltwebstatic.com/images3_pi/2020/12/12/1607747413e77b308a7a1d3a2043d4d87a4e8712b0_thumbnail_600x.webp",
      description: "",
      price: "130",
      size: " ",
      username: "admin",
    },
    {
      name: "Product 007",
      imgURL:
        "//img.ltwebstatic.com/images3_pi/2020/12/12/1607747413e77b308a7a1d3a2043d4d87a4e8712b0_thumbnail_600x.webpg",
      description: "",
      price: "130",
      size: " ",
      username: "admin",
    },
    {
      name: "Product 008",
      imgURL:
        "https://ih1.redbubble.net/image.418002069.6282/ssrco,classic_tee,womens,fafafa:ca443f4786,front_alt,square_product,600x600.u2.jpg",
      description: "",
      price: "130",
      size: " ",
      username: "admin",
    },
  ];

  await Product.insertMany(products);
  console.log("Created users & products!");

  db.close();
};

insertData();
