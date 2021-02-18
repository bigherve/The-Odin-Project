const inputs = document.querySelectorAll('input')

const patterns = {
    username: /^.{5,12}$/,

    email: /^.{2,10}@{1}.{2,10}.com$/,

    password: /^\d\w@_-{8,12}$/,

    telephone: /^\d{11}$/,

    profile: /^a-z\d{8,20}$/

};

inputs.forEach((input) => {
    input.addEventListener('keyup'.(e) => {
        console.log(e.target.attributes.name.value);
    });
});