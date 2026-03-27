var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var word1 = lines.shift();
var word2 = lines.shift();
var word3 = lines.shift();

switch (word1) {
    case "vertebrado":
        switch (word2){
            case "ave":
                switch (word3){
                    case "carnivoro":
                        console.log("aguia");
                        break;
                        
                    case "onivoro":
                        console.log("pomba");
                        break;
                }
                break;
                
            case "mamifero":
                switch (word3){
                    case "onivoro":
                        console.log("homem");
                        break;
                        
                    case "herbivoro":
                        console.log("vaca");
                        break;
                }
                break;
        }
        break;
        
    case "invertebrado":
        switch (word2){
            case "inseto":
                switch (word3){
                    case "hematofago":
                        console.log("pulga");
                        break;
                        
                    case "herbivoro":
                        console.log("lagarta");
                        break;
                }
                break;
                
            case "anelideo":
                switch (word3){
                    case "hematofago":
                        console.log("sanguessuga");
                        break;
                        
                    case "onivoro":
                        console.log("minhoca");
                        break;
                }
                break;
        }
        break;
}