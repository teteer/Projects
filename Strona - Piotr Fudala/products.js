const products = [
    {
        name: "Intel Core i9-11900K",
        description: "Procesor Intel Core 11. generacji",
        price: 2000,
        category: "Procesory",
        image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/3/pr_2021_3_15_10_38_31_487_02.jpg"
    },
    {
        name: "AMD Ryzen 9 5900X",
        description: "Procesor AMD Ryzen 9 5. generacji",
        price: 2500,
        category: "Procesory",
        image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/10/pr_2020_10_9_13_56_59_540_00.jpg"
    },
    {
        name: "NVIDIA GeForce RTX 3080",
        description: "Karta graficzna NVIDIA",
        price: 3500,
        category: "Karty Graficzne",
        image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/7/pr_2021_7_23_9_39_32_991_06.jpg"
    },
    {
        name: "AMD Radeon RX 6800",
        description: "Karta graficzna AMD",
        price: 3000,
        category: "Karty Graficzne",
        image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/2/pr_2021_2_12_15_37_55_242_00.jpg"
    },
    {
        name: "Corsair Vengeance LPX 16GB",
        description: "Pamięć RAM DDR4",
        price: 400,
        category: "Pamięci RAM",
        image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2017/7/pr_2017_7_21_9_20_19_508.jpg"
    },
    {
        name: "G.Skill Ripjaws V 32GB",
        description: "Pamięć RAM DDR4",
        price: 800,
        category: "Pamięci RAM",
        image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2017/7/pr_2017_7_25_8_18_33_145.jpg"
    }
];

export function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

export function getAllProducts() {
    return products;
}
