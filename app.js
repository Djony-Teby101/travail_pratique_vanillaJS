const people=[
    {name: "Teby Lorince", age:27},
    {name: "Teby David", age:10},
    {name: "Teby Day", age:25},
];
// les variables Globale.
const mainDiv=document.querySelector("main");

// les variables lier au formulaire.
const nameInput= document.querySelector('input[name="name"]');
const ageInput= document.querySelector('input[name="age"]');
const createButton= document.querySelector('button#createItem');

// les variables relatives au form Modification.
const updateName= document.querySelector('input[name="updatenName"]');
const updateAge= document.querySelector('input[name="updateAge"]');
const updateFormButtons= document.querySelector('button#updateItem');




// recuperer les utilisateurs et les afficher sur l'ecran.
const renderData=()=>{
    mainDiv.innerHTML="";

    people.forEach((person, index)=>{
        const personH1= document.createElement("h1");
        const buttonContainer=document.createElement("aside");

        const deleteButton= document.createElement(`button`);
        deleteButton.id=index;
        deleteButton.innerText="effacer"

        // supprimer un Utilisateur.
        const deleteUser=()=>{
            people.splice(index, 1);
            renderData()
        }
        deleteButton.addEventListener("click", deleteUser)

        // Afficher le contenu sur l'ecran[button, texte ...]
        buttonContainer.appendChild(deleteButton);



        // Modifier le contenu.
        const updateButton=document.createElement(`button`);
        updateButton.id=index;
        updateButton.innerText="Modifier";


        updateButton.addEventListener("click", (event)=>{
            updateName.value=person.name;
            updateAge.value=person.age;

            updateFormButtons.setAttribute("toupdate", index)
            
        })
        buttonContainer.appendChild(updateButton);


        personH1.innerText=`${person.name} à ${person.age} ans`;
        mainDiv.appendChild(personH1)
        mainDiv.appendChild(buttonContainer)

    })
    // for(person of people){
    //     const personH1= document.createElement("h1");
    //     personH1.innerText=`${person.name} à ${person.age} ans.`;
    //     mainDiv.appendChild(personH1);
    // }
}

const createData=()=>{

    if(nameInput.value !=0 && ageInput.value !=0){
        const name= nameInput.value;
        const age=ageInput.value;
        const newPerson={name, age};
        people.push(newPerson);
        renderData()
        nameInput.value="";
        ageInput.value="";
    }return;
    

    
}

const updateData=(event)=>{
    const index= event.target.getAttribute("toupdate")
    const name= updateName.value;
    const age=updateAge.value;
    people[index]={name, age};
    renderData()

    updateName.value="";
    updateAge.value="";
}

renderData();
createButton.addEventListener("click", createData)
updateFormButtons.addEventListener("click", updateData)