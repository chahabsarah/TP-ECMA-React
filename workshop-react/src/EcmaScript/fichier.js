import { search } from './fonction'



function findLongestWord(words = []) {
    let longestWord = "";
    let longestLength = 0;


    const T = words.map(mot => ({ word: mot, length: mot.length }));

    
    const LongestWordObject = T.reduce((prev, current) => {
        return (prev.length > current.length) ? prev : current;
    });

    longestWord = LongestWordObject.word;
    longestLength = LongestWordObject.length;

    return { longestWord, longestLength };
}


const wordsArray = ["sarra", "helloworld"];
const result = findLongestWord(wordsArray);
let compteur=0;
console.log(result);
function occurence(wordToFind) {
    let compteur = 0;

    const occurenceWord = seulTab.reduce((prev, current) => {
        if (wordToFind === current) {
            compteur++;
        }
        return compteur; 
    });

    return occurenceWord;
}

const input = [["a", "b", "c"], ["c", "d", "e"], ["e", "f", "g"]];
const seulTab = input.flat();
console.log(input);
console.log(seulTab);
console.log(occurence("e")); 


let students = [ 
    { name: 'john', id: 123, marks: 98 },
    { name: 'baba', id: 101, marks: 23 },
    { name: 'john', id: 200, marks: 45 },
    { name: 'wick', id: 115, marks: 75 }
];

const resultMeilleur = students.filter(student => student.marks < 50);
console.log("les eleves ayant des notes inferieures a 50 :");
console.log(resultMeilleur);

const notes = resultMeilleur.map(student => ({ nom: student.name, id: student.id, marks: student.marks + 15 }));
console.log("notes  :" );
console.log(notes);


const studentsFiltred = notes.filter(student=>student.marks>50);
console.log("filtred students :");
console.log(studentsFiltred);

const goodStudents=students.filter(student=>student.marks>50);
const allGoodStudents = goodStudents.concat(studentsFiltred);
console.log("all students");
console.log(allGoodStudents);
let moy =0;
 const moyenne = allGoodStudents.reduce((moy,current)=>{
    moy =moy + ((current.marks)/allGoodStudents.length);
    return moy;
 },0)
 console.log("la moyenne est :");
 console.log(moyenne);
 const tab =[
    {nom :"sarra",prenom:"chahab",age:25},
    {nom :"hamza",prenom:"khmili",age:25},
    {nom :"youssef",prenom:"chahab",age:27}
 ]
;
tab.push({nom :"nedra",prenom:"bouga",age:52});
tab.unshift({nom :"gaddour",prenom:"chahab",age:58})
console.log(tab);
function addId (person){
    tab.map((person,index)=>{
        person.id=index ;
    })
    return person;
 };

addId(tab);
console.log(search(2,tab));