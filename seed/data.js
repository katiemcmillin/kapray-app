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
      name: "Black tee",
      imgURL:
        "//img.ltwebstatic.com/images3_pi/2020/07/31/1596179283bf80635c37cba274cb5eb3a726751565_thumbnail_600x.webp",
      description: "Men's black tee with racecar design. 100% cotton.",
      price: "20",
      size: "S",
      username: "admin",
    },
    {
      name: "Striped tee",
      imgURL:
        "//img.ltwebstatic.com/images3_pi/2020/04/14/1586833567c084a75c03ce8e463774c1e4de8b0e55_thumbnail_600x.webp",
      description: "Men's red, white and black striped tee. Cotton-poly blend.",
      price: "20",
      size: "M",
      username: "admin",
    },
    {
      name: "Los Angeles tee - brown",
      imgURL:
        "//img.ltwebstatic.com/images3_pi/2020/10/29/160395212189e53bc4c916996ecb0449bc514fed5d_thumbnail_600x.webp",
      description: "Men's rustic brown tee. Cotton-poly blend.",
      price: "15",
      size: "2XL",
      username: "admin",
    },
    {
      name: "Los Angeles tee - cream",
      imgURL:
        "//img.ltwebstatic.com/images3_pi/2020/08/24/15982470023b5aa5b0439f567707eaf32d86974f1f_thumbnail_600x.webp",
      description: "Women's cream tee. Cotton-poly blend.",
      price: "20",
      size: "L",
      username: "admin",
    },
    {
      name: "Striped bowler tee",
      imgURL:
        "//img.ltwebstatic.com/images3_pi/2020/05/26/159048436604cb5e6693276211be18ce543eed704e_thumbnail_600x.webp",
      description: "Men's white, black, tan and taupe striped, button down bowler tee. 100% polyester.",
      price: "25",
      size: "M",
      username: "admin",
    },
    {
      name: "Faux-collar sweatshirt",
      imgURL:
        "//img.ltwebstatic.com/images3_pi/2020/12/12/1607747413e77b308a7a1d3a2043d4d87a4e8712b0_thumbnail_600x.webp",
      description: "Women's taupe sweatshirt with faux-collar. Cotton-poly blend.",
      price: "30",
      size: "L",
      username: "admin",
    },
    {
      name: "Split-color button-down",
      imgURL:
        "//img.ltwebstatic.com/images3_pi/2021/04/06/1617674411fca7218a3e25d72615f95bab6f8089e2_thumbnail_600x.webp",
      description: "Half-multi-color, half-yellow linen button-down shirt with pocket. Cotton-poly blend.",
      price: "30",
      size: "M",
      username: "admin",
    },
    {
      name: "Spongebob tee",
      imgURL:
        "https://ih1.redbubble.net/image.418002069.6282/ssrco,classic_tee,womens,fafafa:ca443f4786,front_alt,square_product,600x600.u2.jpg",
      description: "Women's vintage white tee with Spongebob Squarepants. 100% cotton.",
      price: "20",
      size: "M",
      username: "admin",
    },
    {
      name: "Strappy sandals",
      imgURL:
        "https://img.ltwebstatic.com/images3_pi/2020/12/21/1608516620885b1ef77d6f07c3f5213dfff5b34cdd_thumbnail_600x.webp",
      description: "Women's faux lizard skin strappy leather sandals.",
      price: "25",
      size: "8",
      username: "admin",
    },
    {
      name: "Two tone sandals",
      imgURL:
        "https://img.ltwebstatic.com/images3_pi/2020/02/21/1582266275ffb93a3592915483f5a2210a7f897318_thumbnail_600x.webp",
      description: "Women's leopard print and brown leather sandals.",
      price: "25",
      size: "9",
      username: "admin",
    },
    {
      name: "Ballet flats",
      imgURL:
        "https://img.ltwebstatic.com/images3_pi/2020/10/24/160351992341442be6d310f32c54ccdde359088300_thumbnail_600x.webp",
      description: "Women's black pointed toe ballet flats.",
      price: "15",
      size: "8",
      username: "admin",
    },
    {
      name: "Belted dress",
      imgURL:
        "https://img.ltwebstatic.com/images3_pi/2021/05/05/1620205533b6718c65d29b657a8c607d80df092bd7_thumbnail_600x.webp",
      description: "Women's royal blue fitted belted dress. Polyester and spandex.",
      price: "20",
      size: "6",
      username: "admin",
    },
    {
      name: "Floral maxi dress",
      imgURL:
        "https://img.ltwebstatic.com/images3_pi/2021/03/19/1616127179d8eaa82939ca485cefc0ed1c37ecde7b_thumbnail_600x.webp",
      description: "Red dress with white flowers. Cotton and spandex.",
      price: "20",
      size: "4",
      username: "admin",
    },
    {
      name: "Ruffle skirt",
      imgURL:
        "https://img.ltwebstatic.com/images3_pi/2020/09/16/16002401814e939ecde9ecb9c2793b62b812fd449d_thumbnail_750x.webp",
      description: "A-line floral multi-colored skirt. Cotton-poly blend. Non-stretch.",
      price: "15",
      size: "2",
      username: "admin",
    },
    {
      name: "Knee-length skirt",
      imgURL:
        "https://img.ltwebstatic.com/images3_pi/2020/11/13/1605247576275d3115bc6f4b8236f73c0510661ee8_thumbnail_750x.webp",
      description: "Black skirt. Cotton-poly blend. Non-stretch.",
      price: "15",
      size: "6",
      username: "admin",
    },
 
  ];

  await Product.insertMany(products);
  console.log("Created users & products!");

  db.close();
};

insertData();
