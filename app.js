const sections = document.querySelectorAll('.section');
const sectBtns =document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections=document.querySelector('.main-content')

function PageTrans(){
    //Button click active class
    for(i=0; i<sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn=document.querySelectorAll('.active-btn')
            currentBtn[0].classList=currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
    //Sections are active
    allSections.addEventListener('click',(e)=>{
        //console.log(e.target);
        const id= e.target.dataset.id;
        if(id){
            //removes selcted from other buttons
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            });
            e.target.classList.add('active')
            //hide other classes
            sections.forEach((section)=>{
                section.classList.remove('active');
            })
            const element=document.getElementById(id);
            element.classList.add('active');
        }
    })
}
PageTrans();