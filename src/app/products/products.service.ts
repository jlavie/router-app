import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    products = [
        {
          "id": 1,
          "title": "Essence Mascara Lash Princess",
          "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
          "category": "beauty",
          "price": 9.99,
          "stock": 99
        },
        {
          "id": 2,
          "title": "Eyeshadow Palette with Mirror",
          "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
          "category": "beauty",
          "price": 19.99,
          "stock": 34
        },
        {
          "id": 3,
          "title": "Powder Canister",
          "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
          "category": "beauty",
          "price": 14.99,
          "stock": 89
        },
        {
          "id": 4,
          "title": "Red Lipstick",
          "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
          "category": "beauty",
          "price": 12.99,
          "stock": 91
        },
        {
          "id": 5,
          "title": "Red Nail Polish",
          "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
          "category": "beauty",
          "price": 8.99,
          "stock": 79
        },
        {
          "id": 6,
          "title": "Calvin Klein CK One",
          "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
          "category": "fragrances",
          "price": 49.99,
          "stock": 29
        },
        {
          "id": 7,
          "title": "Chanel Coco Noir Eau De",
          "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
          "category": "fragrances",
          "price": 129.99,
          "stock": 58
        },
        {
          "id": 8,
          "title": "Dior J'adore",
          "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
          "category": "fragrances",
          "price": 89.99,
          "stock": 98
        },
        {
          "id": 9,
          "title": "Dolce Shine Eau de",
          "description": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
          "category": "fragrances",
          "price": 69.99,
          "stock": 4
        },
        {
          "id": 10,
          "title": "Gucci Bloom Eau de",
          "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
          "category": "fragrances",
          "price": 79.99,
          "stock": 91
        }
      ];    

    get productList() {
        return this.products;
    }
}