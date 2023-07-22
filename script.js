const inputBoxindex = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// Funktioner för index sida sida
function AddTask(){
    console.log("AddTask funktion körs!");
    if(inputBoxindex.value === ''){
        alert("Måste ju skriva nått gumman");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBoxindex.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBoxindex.value= ''
    save_data()
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName =="LI"){
        e.target.classList.toggle("checked");
        save_data()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save_data()
    }
}, false);

function save_data(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function show_data(){
    listContainer.innerHTML = localStorage.getItem("data");
}
show_data();

    // Knapp för att byta sida 
    const checkbox = document.getElementById('check');
    const label = document.getElementById('label');
    let isChecked = false;

    checkbox.addEventListener('change', redirectToPage);
    label.addEventListener('click', redirectToPage);

    function redirectToPage() {
        isChecked = !isChecked;

        if (isChecked) {
            if (window.location.href.endsWith('index.html')) {
                // Om checkboxen är markerad och vi är på index.html, öppna to_do.html
                window.location.href = 'to_do.html';
            }
        } else {
            if (window.location.href.endsWith('to_do.html')) {
                // Om checkboxen är avmarkerad och vi är på to_do.html, öppna index.html
                window.location.href = 'index.html';
            }
        }
    }
    window.addEventListener('DOMContentLoaded', function () {
        if (window.location.href.endsWith('to_do.html')) {
            checkbox.checked = true;
            label.classList.add('checked');
        } else {
            checkbox.checked = false;
            label.classList.remove('checked');
        }
    });



 // funktion för att ändra bilder
 function changeImage() {
    var imgElement = document.querySelector('h2 img');
    var counter = 1;
    setInterval(function() {
      imgElement.src = `images/${counter}.png.jpeg`;
      counter++;
      if (counter > 8) {
        counter = 1;
      }
    }, 5000);
  }
  
  // Lyssna på händelsen för att sidan har laddats
  window.addEventListener('load', function() {
    changeImage();
  });


// funktion för recept
// Dragon pasta
function pasta_1() {
    var allRecept = document.querySelector('.all_recept');
    var ingredients = `
      <div style="text-align: center;">
        <h3>Ingridienser</h3><br>
        4 kycklinglårfilé<br>
        2 msk smör<br>
        1 gul lök<br>
        5 klyftor vitlök<br>
        2 dl vitt vin<br>
        2 dl vatten<br>
        1-2 tsk torkad dragon<br>
        1 tsk torkad timjan<br>
        Eventuellt 1 msk fond av valfritt slag.<br>
        Salt och svartpeppar<br>
        2 krm chiliflakes<br>
        Färsk bladpersilja, typ en liten näve<br>
        2 dl grädde<br>
        1 tsk dijonsenap<br>
        1 tsk grovstark senap<br>
        1 burk creme fraiche<br>
        2 dl finriven parmesan<br>
        Eventuellt babyspenat.<br><br>
        Pasta, ris eller potatis!<br>
        <h3>GÖR TYP SÅ HÄR</h3><br>
        Strimla kycklingen tunt och stek i smöret tills den börjar få lite yta. Salta och spåra. Hacka lök, vitlök och gärna stjälken på bladpersiljan. Stek med kycklingen en stund. I med dragon, timjan, chiliflakes och vin och låt reducera nästan helt innan du har på vatten. På men lock och låt småputtra ca 20 min. Av med locket och gå i med grädde, senap och creme fraiche. Låt koka ihop ca 10 min. Smaka av! I med riven parmesan och färsk persilja på slutet. Gärna några nävar babyspenat också.<br><br>
        Servera med pasta/ris/potatis och syrlig sallad!
      </div>
    `;
    allRecept.innerHTML = ingredients;
  }


// Nötkött pasta 2 
function pasta_2() {
    var allRecept = document.querySelector('.all_recept');
    var ingredients = `
      <div style="text-align: center;">
        300-400 gram nötkött (eller svamp för vego)<br>
        1 gul lök<br>
        4 klyftor vitlök<br>
        1 msk tomatpuré<br>
        1-2 tsk torkad timjan<br>
        Lite chiliflakes<br>
        Salt och svartpeppar<br>
        2-3 msk smör<br>
        2-3 msk vitvinsvinäger eller balsamvinäger<br>
        1 msk kalvfond eller valfri vegofond<br>
        1 msk japansk soja<br>
        3-4 dl vatten<br>
        En skvätt grovstark senap och dijon. Typ 1 tsk vardera eller lite mer.<br>
        3-4 dl grädde<br>
        Några msk creme fraiche pga hade hemma<br><br>
        Valfri pasta!<br>
        Eventuellt färsk bladpersilja<br>
        Riven parmesan<br>
        Massa svartpeppar på kvarn<br><br>
        <h3>GÖR TYP SÅ HÄR</h3><br>
        Strimla köttet smått. Stek i smöret tills det fått fin yta. Hacka lök och vitlök. Stek med tills mjukt. Stek med en klick tomatpuré också.<br><br>
        Sen i med vinäger, kryddor, fond, vatten, soja och senap. Låt koka under lock tills köttet är mört. Jag kokade flanken typ 40 min eller nåt sånt.<br><br>
        Sist i med grädde och creme fraiche. Koka ihop några minuter sen i med bladpersilja, eventuellt riven parmesan i såsen också. Vänd runt med pasta och ät maaassaa. Vila direkt efteråt!
      </div>
    `;
    allRecept.innerHTML = ingredients;
  }

//halloumi pasta 3
  function pasta_3() {
    var allRecept = document.querySelector('.all_recept');
    var h3Title= document.querySelector('h3');
    var ingredients = `
      <div style="text-align: center;">
      <h3>Ingridienser</h3><br>
        1 burk naturella kronärtskockor<br>
        2 paket halloumi<br>
        1 stor gul lök<br>
        5 klyftor vitlök<br>
        3 msk vitvinsvinäger<br>
        2 msk tomatpuré<br>
        Ett gäng små tomater<br>
        Någon klick smör<br>
        2 dl vatten<br>
        2-3 dl grädde<br>
        1/2 liten burk creme fraiche<br>
        1/2 citron<br>
        Riven parmesan<br>
        Färsk basilika<br><br>
        Kryddor: 2 tsk torkad timjan, 2 tsk torkad oregano, 1 tsk salt, svartpeppar på kvarn helst.<br><br>
        <h3>GÖR TYP SÅ HÄR</h3><br>
        1. Stek halloumi i tärningar tills den fått go yta. Lägg åt sidan.<br><br>
        2. Finhacka lök och vitlök och stek mjuk i olivolja. Ha i smöret och kronärtskockor som du delat i lite mindre bitar. I med tomatpuré och stek en stund till.<br><br>
        3. I med alla kryddor, vatten, vinäger, tomater och grädde. Koka ihop några minuter och ha sen i créme fraiche.<br><br>
        4. Koka pasta och spara kanske 1-2 dl pastavatten.<br><br>
        5. Riv parmesan och ha i såsen tillsammans med pressad citron och basilika. Vänd runt tillsammans med pasta, pastavattnet och veva runt lite. Lägg upp på ett stort fat eller tallrikar och servera direkt!
      </div>
    `;
    allRecept.innerHTML = ingredients;
    h3Title.innerText = 'KRONÄRTSKOCKA OCH HALLOUMIPASTA!'
  }


  function randomizeHeader() {
    var headerElement = document.getElementById('result');
    var recipes = ['Dragon pasta', 'Vodka pasta', 'Ris med bönor', 'Haloumi burgare'];
    var randomIndex = Math.floor(Math.random() * recipes.length);
    headerElement.textContent = recipes[randomIndex];
  }
  
  var randomButton = document.getElementById('random');
  randomButton.addEventListener('click', randomizeHeader);