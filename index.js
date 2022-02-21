let detailsBtn = document.querySelector('.btn')
let details_projets = document.querySelector('.details_projets')
let stageBtn = document.querySelector('.btn2')
let details_stage = document.querySelector('.details_stage')

let showDetailsProject = false
let showDetailsStage = false

detailsBtn.addEventListener("click", () => {
    if(showDetailsProject){ 
        showDetailsProject=false
        details_projets.parentElement.style.height="110px"
        details_projets.innerHTML=null
    }
    else{
        showDetailsProject=true
        showDetailsStage=false
        details_stage.innerHTML=null
        details_projets.parentElement.style.height="300px"
        details_projets.innerHTML=`
        <li>
            <i style="color: black" class="fas fa-code"></i>
            Application web de gestion des vols portant le nom "TravelUS"
            réalisé avec le framework Laravel
            <a
              href="https://github.com/MohamedBenTaher/projet_ensat-"
              target="_blank"
              >Voir code <i class="fab fa-github"></i
            ></a>
          </li>
          <li style="margin-top: 8px">
            <i style="color: black" class="fas fa-code"></i>
            Application web de géstion d'une école (actualités ,éspace étudiant,
            éspace professeur, emploie du temps selon chaque classe, affichage
            des notes) réalisé avec le framework Laravel.
            <a
              href="https://github.com/youssefcharfi/school-laravel"
              target="_blank"
              >Voir code <i class="fab fa-github"></i
            ></a>
          </li>
          <li style="margin-top: 8px">
            <i style="color: black" class="fas fa-code"></i>
            Application web où les utilisateurs peuvent trouver des offres
            d’emplois, des offres des stages, des articles sur les nouveautés
            des technologies differentes pour des domaines differents, réalisé
            avec NodeJS, Express, React, MongoDB.
            <a
              href="https://github.com/youssefcharfi/ENSATcareer"
              target="_blank"
              >Voir code <i class="fab fa-github"></i
            ></a>
          </li>
        `
    }
})

stageBtn.addEventListener("click", () => {
    if(showDetailsStage){ 
        showDetailsStage=false
        details_projets.parentElement.style.height="110px"
        details_stage.innerHTML=null
    }
    else{
        showDetailsStage=true
        showDetailsProject=false
        details_projets.parentElement.style.height="150px"
        details_stage.innerHTML=`
        Stage d'application en tant qu'un développeur FullStack dont lequel
          j'ai développé un portail client avec VueJS, Microsoft dynamics 365
          business central.
        `
        details_projets.innerHTML = null
    }
})

//let skills = document.querySelectorAll(".skill")

function mouseDetect(e){
    let others = document.querySelectorAll("dt")
    others.forEach(dt => {
        if(dt.id === e.target.id) {
            e.target.nextElementSibling.style.visibility="visible"
            e.target.nextElementSibling.style.left = e.pageX+"px"
        }
        else{
            dt.nextElementSibling.style.visibility="hidden"
        }
    })
}


let skills = document.querySelectorAll(".skill")

let skillsRating = [
    {skillName:"Code", rate:5},
    {skillName:"Frontend", rate:3},
    {skillName:"Backend", rate:4},
    {skillName:"Database", rate:4},
]

window.onload = () => {
    skills.forEach(item => {
        skillsRating.forEach(skill => {
            if(item.id == skill.skillName){
                let stars = ''
                for(let i=0; i<skill.rate; i++){
                    stars += '<i class="fas fa-star"></i>'
                }
                item.innerHTML += stars
            }
        })
    })
}
