// import photos plants
import palm_tree from '../images/little_palm_tree.png';
import spathiphyllum from '../images/spathiphyllum.png';
import strelitzia from '../images/strelitzia.png';
import pink_anthurium from '../images/pink_anthurium.jpg';
import monstera from '../images/monstera_deliciosa.jpg';

// import photos pots
import daisy_pot from '../images/daisy_pot.jpg';

export const products = [
    {
        id: 1,
        name: "Areca Palm",
        price: 12.99,
        image: palm_tree,
        description: "The Areca Palm is one of the most popular indoor palm trees thanks to its easy-going nature and stunning size and shape.",
        inStock: true,
        category: "Plants",
        tags: ["palms", "tropical"],
        light: "bright",
        difficulty: "easy",
        size: "medium",
        bloom: false
    },
    {
        id: 2,
        name: "Spathiphyllum",
        price: 16.49,
        image: spathiphyllum,
        description: "They are super popular houseplants because they look great and are easy to care for.",
        inStock: true,
        category: "Plants",
        tags: ["flowers"],
        light: "indirect",
        difficulty: "easy",
        size: "medium",
        bloom: true
    },
    {
        id: 3,
        name: "Strelitzia",
        price: 13.99,
        image: strelitzia,
        description: "The Bird of Paradise plant, also known as Strelitzia, is a tropical houseplant with large, brightly coloured flowers that look like exotic birds.",
        inStock: true,
        category: "Plants",
        tags: ["flowers"],
        light: "bright",
        difficulty: "medium",
        size: "big",
        bloom: true
    },
    {
        id: 4,
        name: "Pink Anthurium",
        price: 18.99,
        image: pink_anthurium,
        description: "These heart-shaped “flowers” grow on long stalks above glossy, dark green leaves. It's so gorgeous!",
        inStock: false,
        category: "Plants",
        tags: ["flowers"],
        light: "bright",
        difficulty: "easy",
        size: "small",
        bloom: true
    },
    {
        id: 5,
        name: "Monstera Deliciosa",
        price: 17.49,
        image: monstera,
        description: "This green beauty is the most common variety of Monstera currently kept as a showpiece in many households. When you keep the Monstera Deliciosa indoors, she can grow up to a couple of meters!",
        inStock: true,
        category: "Plants",
        tags: ["tropical"],
        light: "indirect",
        difficulty: "medium",
        size: "big",
        bloom: false
    },
    {
        id: 6,
        name: "Pots with Daisies",
        price: 14.99,
        image: daisy_pot,
        description: "Handmade pot with daisies.",
        inStock: true,
        category: "Pots",
        tags: ["handmade", "with-decoration"],
        color: "green"
    }
];