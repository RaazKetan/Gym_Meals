const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Tofu Salad',
        description: 'Tofu Salad with fresh vegetables',
        price: 150,
    },
    {
        id: 'm2',
        name: 'Chicken Fry',
        description: 'Finest chicken Fry with salad and raita',
        price: 200,
    },
    {
        id: 'm3',
        name: 'Protein Pancakes',
        description: 'Protein pancakes with berries and maple syrup',
        price: 250,

    },
    {
        id: 'm4',
        name: 'Scrambled Eggs',
        description: 'Scrambled eggs with vegetables and cheese',
        price: 300,
    },
];
const AvailaibleMeals = () => {
    const mealsList = DUMMY_MEALS.map();
    return(
        <section>
            <ul>
                {mealsList}
            </ul>
        </section>
    )
};
export default AvailaibleMeals;