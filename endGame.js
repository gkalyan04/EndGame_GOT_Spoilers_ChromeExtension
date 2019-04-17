spoiler_words = ['AVENGERS','avengers','Endgame','leak','leaks','thanos','gauntlet','Wakanda','spoilers','endgame','Infinity Stones','DEATH', 'Death', 'DIED','dead','ant man endgame','Marvel Studios Spoilers', 'captain america','AVENGERS: END GAME', 'end game spoiler', 'marvel spoiler','snap','Robert Downey Jr','END GAME', 'Thanos Snap', 'GOT', 'game of thrones', 'got spoiler', 'GoT', 'GOT Spoiler', 'Game of Thrones', 'GAME OF THRONES','death', 'DEAD', 'Dead', 'Died','marvel studio','suri death'];
tags = "span";
count = 0;

for(var i = 0 ; i<spoiler_words.length; ++i){
    x = $(`:contains(${spoiler_words[i]}):not(:has(:contains(${spoiler_words[i]})))`)
    for(var j=0; j<x.length; j++){
        if(!x[j].parentNode || x[j].parentNode.nodeName == "BODY"){
            continue;
        }
        hideKarSpoiler(x[j]);
        count++;
    }
    
}

if(count>= 9) {
    headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    for(var i = 0; i < headings.length; i++) hideKarNode(headings[i]);
}


function hideKarSpoiler(node){
    anc = node.parentNode;
    if(anc != null ){
        if(anc.parentNode != null && anc.tagName != 'BODY')
            {anc = anc.parentNode;}
        imgs = anc.getElementsByTagName('img');
        for(var i=0; i<imgs.length; i++)
            {imgs[i].style.webkitFilter = 'blur(20px)';}
        lists = anc.getElementsByTagName("li");
        for( i=0 ; i<lists.length; i++)
           {hideKarNode(lists[i]);}

    }

    if(node == null || node.parentNode == null)
        {return;}
    saare_children = node.parentNode.children;
    for(var i=0; i<saare_children.length; i++){
        var type = saare_children[i].tagName;
		if (tags.match(type) != null) hideKarNode(saare_children[i]);
    }
    hideKarNode(node);
}



function hideKarNode(node){
    node.textContent = "BLOCKED -- [SPOILER DETECTED]";
    node.style.color = "red";
}