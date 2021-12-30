const list = document.getElementById('list');
const btn = document.getElementById('btn');
const listInput = document.getElementById('list-input'); 
const errorMsg = document.querySelector('.error');

btn.addEventListener('click', () => {
    let i = listInput.value;
    if(i === ''){
      errorMsg.classList.remove('hidden');
    } else{
      errorMsg.classList.add('hidden');
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
    }
    
})