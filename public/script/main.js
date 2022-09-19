const el = document.querySelector('.form');
el.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    let elem = ev.target;
    const formData = {
        name : elem.querySelector('[name="name"]').value,
        surname : elem.querySelector('[name="surname"]').value,
        age : elem.querySelector('[name="age"]').value,
    };
    console.log(formData);


    

    await axios.post('/data', {
        'name': formData.name,
        'surname': formData.surname,
        'age': formData.age,
    });
});