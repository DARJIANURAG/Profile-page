const toggle = document.getElementById("toggleDark");
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('fa-solid fa-sun-bright');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'rgb(36, 32, 47)';
        body.style.color = 'white';
        body.style.transition='2s';
    }
    else{
        body.style.background = 'white';
        body.style.color = 'rgb(36, 32, 47)';
        body.style.transition = '2s';
    }
})