const list = document.getElementById('list');
const btn = document.getElementById('btn');
const listInput = document.getElementById('list-input'); 

btn.addEventListener('click', () => {
    let i = listInput.value;
    list.innerHTML += `<li>${i}</li>`;

    let items = document.querySelectorAll('li');

    items.forEach(l => {
        l.addEventListener('click',() => {
            l.classList.toggle('line-through')
        });
        l.addEventListener('dblclick',()=>{
            l.classList.toggle('hidden');
        })
    })
})