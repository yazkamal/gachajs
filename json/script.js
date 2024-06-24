
var servantList = {"star5" : [
    {
        "id" : 1 , 
        "name" : "Artoria" , 
        "class" : "Saber"  
    },
    {
        "id" : 2 , 
        "name" : "Schatch" , 
        "class" : "Lancer" 
    },
    {
        "id" : 3 , 
        "name" : "Gilgamesh" , 
        "class" : "Archer"  
    }
],

"star4" : [
    {
        "id" : 4 , 
        "name" : "Saber 4" , 
        "class" : "Saber" 
    },
    {
        "id" : 5 , 
        "name" : "Lancer 4" , 
        "class" : "Lancer"  
    },
    {
        "id" : 6 , 
        "name" : "Archer 4" , 
        "class" : "Archer" 
    }
]};

var star4 = servantList.star4;
var star5 = servantList.star5;

var list4star = '';
var list5star = '';

function listservant(idx) {
    
    if (star4[idx]) {
        list4star += '<li>' + star4[idx].name + '</li>';
        document.getElementById('place4star').innerHTML = list4star;
    }

    if (star5[idx]) {
        list5star += '<li>' + star5[idx].name + '</li>';
        document.getElementById('place5star').innerHTML = list5star;
    }

}

var i = 0; 

function displayServantList() {         
    setTimeout(function() {
        listservant(i);
        i++;                    
        if (i < 5) {           
            displayServantList();             
        }                       
    }, 1000)
}

var ids = 1; 

function showResults() {      

    setTimeout(function() {
        console.log(ids);
        remove(ids);
        ids += 1;                    
        if (ids < 11) {           
            showResults();   
        } else {
            ids = 1;
        }                       
    }, 500)
}

function gacha() {
    var results = [];
    
    for (let i = 0; i < 10; i++) {
        var getRarity = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
        var checkRarity5 = results.includes(5);
        if (checkRarity5 == true) {
            var getRarity = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
        }
        results.push(getRarity);
    }

    displayResults(results);
   
}

function remove(id) {
    document.getElementById('res' + id).classList.remove('resultbox');
}

function displayResults(results){
    var key = 1;
    var resOut1 = '';
    var resOut2 = '';
    // console.log(results);

    results.forEach(one => {

        var kelas = 'trash';
        var oneResults = {
            'id' :  10, 
            'name' : 'Trash' , 
            'class' : 'Exp' , 
        };

        if (one == 5) {
            kelas = 'ssr';
            oneResults = star5[Math.floor(Math.random()*star5.length)];
        } else if (one == 4) {
            kelas = 'sr';
            oneResults = star4[Math.floor(Math.random()*star4.length)];
        }

        
        if (key < 6) {
            resOut1 += '<div class="'+kelas+' resultbox" id="res'+key+'" onclick="remove(\''+key+'\')">'+ oneResults.name +'</div>';
            document.getElementById('firstRow').innerHTML = resOut1;
        } else {
            resOut2 += '<div class="'+kelas+' resultbox" id="res'+key+'" onclick="remove(\''+key+'\')">'+ oneResults.name +'</div>';
            document.getElementById('secondRow').innerHTML = resOut2;
        }



        key += 1;
        
        
    });

    showResults();


}






window.onload = function() {
   displayServantList();
    
}

