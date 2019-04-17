words = ['GOT', 'game of thrones', 'got spoiler', 'GoT', 'GOT Spoiler', 'Game of Thrones', 'GAME OF THRONES', 'death', 'DEAD', 'Dead', 'Died', 'DEATH', 'Death', 'DIED']

sp = document.getElementsByTagName("span");
total = 0 ;
for(i=0;i<sp.length;++i){
    total = 0 ;
    for(j=0;j<words.length;j++){
        if(sp[i].innerHTML.includes(words[j])){
            total++;
        }
        if(total>3){
            hideThis(sp[i]);
        }
    }
    
}

total = 0 ;
sp = document.getElementsByTagName("p");
total = 0 ;
for(i=0;i<sp.length;++i){
    total = 0 ;
    for(j=0;j<words.length;j++){
        if(sp[i].innerHTML.includes(words[j])){
            total++;
        }
        if(total>3){
            hideThis(sp[i]);
        }
    }
    
}

sp = document.getElementsByTagName("h1");
total = 0 ;
for(i=0;i<sp.length;++i){
    total = 0 ;
    for(j=0;j<words.length;j++){
        if(sp[i].innerHTML.includes(words[j])){
            total++;
        }
        if(total>3){
            hideThis(sp[i]);
        }
    }
    
}
total = 0 ;
sp = document.getElementsByTagName("h2");
total = 0 ;
for(i=0;i<sp.length;++i){
    total = 0 ;
    for(j=0;j<words.length;j++){
        if(sp[i].innerHTML.includes(words[j])){
            total++;
        }
        if(total>3){
            hideThis(sp[i]);
        }
    }
    
}
total = 0 ;
sp = document.getElementsByTagName("h3");
total = 0 ;
for(i=0;i<sp.length;++i){
    total = 0 ;
    for(j=0;j<words.length;j++){
        if(sp[i].innerHTML.includes(words[j])){
            total++;
        }
        if(total>3){
            hideThis(sp[i]);
        }
    }
    
}

sp = document.getElementsByTagName("h4");
total = 0 ;
for(i=0;i<sp.length;++i){
    total = 0 ;
    for(j=0;j<words.length;j++){
        if(sp[i].innerHTML.includes(words[j])){
            total++;
        }
        if(total>3){
            hideThis(sp[i]);
        }
    }
    
}





function hideThis(node){
    sp[i].innerHTML = "<p>SPOILER DETECTED<p>";
    sp[i].style.color = "red";
}