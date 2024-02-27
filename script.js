// // .icon-faq-1
// // faq-a-1

document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('icon-change-1').src = minusPath;    
}, false);

const minusPath = "./assets/images/icon-minus.svg"
const plusPath = "./assets/images/icon-plus.svg";

function active(a){
    let iconPress = 'icon-faq-' + a;
    let answer = 'faq-a-' + a;
    let iconPressPara = document.getElementById(iconPress);
    let answerPara = document.getElementById(answer);
    
    // icon-change
    let ichange = 'icon-change-'+a;
    

    if (answerPara.classList.contains('active')){
        document.getElementById(ichange).src = plusPath;
        answerPara.classList.remove('active');
        answerPara.classList.add('inactive')
        
    }
    else{
        document.getElementById(ichange).src = minusPath;
        answerPara.classList.remove('inactive');
        answerPara.classList.add('active')
        
    }
}







