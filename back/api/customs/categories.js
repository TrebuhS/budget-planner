function Category(name, color) {
    this.name = name;
    this.color = color;
}

const categories = [
    new Category("Groceries", "#6e5773"),
    new Category("Car", "#d45d79"),
    new Category("Rent", "#ea9085"),
    new Category("Utilities", "#e9e2d0"),
    new Category("Entertainment", "#ffb6b9"),
    new Category("Medical", "#bbded6"),
    new Category("Others", "#8ac6d1"),
]

exports.getCategories = () => {
    return categories;
};

exports.getCategory = (name) => {
    return categories.find((category) => {
        return category.name === name;
    })
};
