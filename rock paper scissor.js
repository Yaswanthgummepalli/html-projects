let win=0;
    let losses=0;
    let tie=0;
    let computerMove='';
    let result='';
    let mychoice='';
    function myChoice(){
        let random=Math.random();
                
            if (random>0 && random<1/3){
                mychoice='rock';}
            else if(random>1/3 && random<2/3){
                mychoice='paper';}
            else
                mychoice='scissor';
        
    }
   
    let pickcomputerMove=function(){
            let random=Math.random();
                
            if (random>0 && random<1/3){
                computerMove='rock';}
            else if(random>1/3 && random<2/3){
                computerMove='paper';}
            else
                computerMove='scissor';

        }       
            function completion(mychoice){
                if (mychoice==='rock'){
                    pickcomputerMove();
                    
                    if(computerMove==='rock'){
                        result='tie';
                        tie+=1}
                    else if (computerMove==='paper'){
                        result='computer win';
                        losses+=1}
                    else{
                        result='you win'
                        win+=1}
                    

                }
                else if(mychoice==='paper'){
                    pickcomputerMove();
                    
                    if(computerMove==='paper'){
                        result='tie';
                        tie+=1;}
                    else if (computerMove==='scissor'){
                        result='computer win';
                        losses+=1;}
                    else{
                        result='you win';
                        win+=1;}
                        
                    
                    

                }
                else if(mychoice==='scissor'){
                        pickcomputerMove();
                    
                        if(computerMove==='scissor'){
                            result='tie';
                            tie+=1;}
                        else if (computerMove==='rock'){
                            result='computer win';
                            losses+=1;}
                        else{
                            result='you win';
                            win+=1;}

                }
                document.querySelector('#y').innerHTML=`you selected :${mychoice}
                <br> and computer selected:${computerMove}
                <br>
                `;
                document.querySelector('#r').innerHTML=`
                    wins=${win} and losses=${losses} tie=${tie}`;
                document.querySelector('.y').innerHTML=`${result}`  
            
           

                }

         
    
                let isAutoplaying=false;
                let id;

                function autoPlay(){
                    if(!isAutoplaying){
                    
                    id=setInterval(function(){
                        
                        myChoice();
                        let mychoice1=mychoice;
                        completion(mychoice1);
                    },1000);
                    isAutoplaying=true;
                
                    }
                    else{
                        clearInterval(id);
                        isAutoplaying=false;

                    }
       
   
 }

       