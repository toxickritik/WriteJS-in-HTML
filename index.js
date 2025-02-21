document.querySelector('button').addEventListener('click',myClick);

let a;

function myClick() {
    console.log('work');
    a = document.querySelector('.search').value;
    console.log(a);
    document.querySelector('.out').innerHTML = a;
}

document.getElementById('myInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        a = document.querySelector('.search').value;
        console.log(a);
        document.querySelector('.out').innerHTML = a;
    }
});