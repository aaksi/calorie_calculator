// $(function(){
  

// });

function calc(a, b, c, d, e){
    return (10 * a + 6.25 * b - 5 * c + d) * e;
}


document.querySelector('.top__form-btn').onclick = (e) =>{
    event.preventDefault(e);
    let age = document.querySelector('.top__form-age');
    let weight = document.querySelector('.top__form-weight');
    let growth = document.querySelector('.top__form-growth');
    let ageValue = +age.value;
    let weightValue = +weight.value;
    let growthValue = +growth.value;
    let gender = document.querySelectorAll('.top__form-gender--radio');
    let active = document.querySelectorAll('.top__form-active--num');
    let genderOut = '';
    let activeOut = '';
    let out = document.querySelector('.top__out-number');
    
    for(let i = 0; i < gender.length; i++ ){
        if(gender[i].checked){      
           genderOut = +gender[i].value;
          
        }
        
    }
    for(let k = 0; k < active.length; k++){
        if(active[k].checked){
            activeOut = +active[k].value;          
        }
    }
    document.querySelector('.top__out').style.opacity = '1';
    out.innerHTML = Math.round(calc(weightValue,  growthValue, ageValue, genderOut, activeOut)) + ' ' ;

}