//Perdi muito tempo no requisito 4 e só percebi o detalhe que estava errando com a ajuda do meu colega Vinicius Bodra
//link do PR Dele:  https://github.com/tryber/sd-010-b-project-pixels-art/pull/5/commits/5eb6bbf67744ff12a3a7df3d97f563789c25ae9a

let getTable=document.getElementById('pixel-board')
let n=5

for(let indexLine=0;indexLine<n;indexLine+=1){
    let line= document.createElement('tr')
    for(let indexColumn=0;indexColumn<n;indexColumn+=1){
        let column=document.createElement('td')
        column.className='pixel'
        line.appendChild(column)
        getTable.appendChild(line)
    }
}
//requisitos 6,7 e 8 
//esses requisitos eu aprendi a fazer com a ajuda do meu colega Alexandre Damasceno
//link do PR dele:  https://github.com/tryber/sd-010-b-project-pixels-art/pull/111/commits
window.onload=function(){
    
    let allPixels=document.querySelectorAll('.pixel')

    let clickPink=document.getElementById('pink').addEventListener('click',paintPink)
   
    
    function paintPink(){
        for(let index=0;index<allPixels.length;index+=1){
            allPixels[index].addEventListener('click',function(){
                if(allPixels[index].style.backgroundColor!='pink'){
                    allPixels[index].style.backgroundColor='pink'
                }
            })
        }
    }
     paintPink()

    let clickBlue=document.getElementById('slateblue').addEventListener('click',paintBlue)
   
    
    function paintBlue(){
        for(let index=0;index<allPixels.length;index+=1){
            allPixels[index].addEventListener('click',function(){
                if(allPixels[index].style.backgroundColor!='slateblue'){
                    allPixels[index].style.backgroundColor='slateblue'
                }
            })
        }
    }
     paintBlue()
    
    let clickRed=document.getElementById('red').addEventListener('click',paintRed)
   
    
    function paintRed(){
        for(let index=0;index<allPixels.length;index+=1){
            allPixels[index].addEventListener('click',function(){
                if(allPixels[index].style.backgroundColor!='red'){
                    allPixels[index].style.backgroundColor='red'
                }
            })
        }
    }
     paintRed()

    
     function clean(){
        let button=document.getElementById('clear-board')
        button.innerHTML='Limpar'
        
        button.addEventListener('click',function(){
            for(let index=0;index<allPixels.length;index+=1){
                allPixels[index].style.backgroundColor='white'
            }
        })
     }
     clean()

//      let squares= document.querySelectorAll('color')
//      for(let indice=0;indice<squares.length;indice+=1){
//     squares[indice].addEventListener('click',removeClass)
//      } 
//     function removeClass(){
//     for (let index=0;index<squares.length;index+=1){
//         squares[0].classList.remove("selected")
//         squares[1].classList.remove("selected")
//         squares[2].classList.remove("selected")
//         squares[3].classList.remove("selected")
//         squares[indice].classList.add('selected')
//     }
    
//    }
       
    let clickBlack=document.getElementById('black').addEventListener('click',paintBlack)
   
    
    function paintBlack(){
        for(let index=0;index<allPixels.length;index+=1){
            allPixels[index].addEventListener('click',function(){
                if(allPixels[index].style.backgroundColor!='black'){
                    allPixels[index].style.backgroundColor='black'
                }
            })
        }
    }
     paintBlack()

     
}






