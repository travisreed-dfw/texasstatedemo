//Comment
let contactEmail1 = document.getElementById('contactEmail1');
let contactEmail2 = document.getElementById('contactEmail2');

contactEmail2.addEventListener('keyup', () => {
    if (contactEmail1.value === contactEmail2.value) {
        contactEmail2.classList.remove('is-invalid');
        console.log('Matches!');
    } else {
        contactEmail2.classList.add('is-invalid');
        console.log("Doesn't Match!");
    }
});
