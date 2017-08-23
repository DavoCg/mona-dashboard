export const isOK = (form, index) => {
    const {pictures, description, price} = form;

    const conditions = {
        0: () => pictures.filter(x => x).length > 0,
        1: () => description.length > 0,
        2: () => price > 0,
        3: () => true
    };
    return conditions[index]();
};

export const isSubmitable = (form) => {
    return form.pictures.filter(x => x).length > 0
        && form.description.length > 0
        && form.price > 0
};