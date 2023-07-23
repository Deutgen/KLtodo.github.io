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
      if (counter > 12) {
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

  function veg_1(){
    var allRecept = document.querySelector('.all_recept');
    var ingredients = `
      <div style="text-align: center;">
        <h3>Ingridienser</h3><br>
        1 burk fava bönor (16 uns)<br>
        En skvätt olivolja<br>
        2 klyftor vitlök<br>
        2 hela salladslökar, tunt skivade<br>
        1/2 kopp vatten, mer efter smak<br>
        1 tesked spiskummin (Gå på känsla!)<br>
        1 tesked paprika pulver (Gå på känsla!)<br>
        Lite salt efter smak<br>
        1 tesked torkad persilja<br>
        2 matskedar hackad koriander<br>
        saften från 1/2 citron<br><br>
  
        Kryddor: 2 tsk torkad timjan, 2 tsk torkad oregano, 1 tsk salt, svartpeppar på kvarn helst.<br><br>
  
        <h3>GÖR TYP SÅ HÄR</h3><br>
        1. Skölj bönorna och låt dem rinna av.<br><br>
        2. Häll olja i en kastrull på medelvärme, lägg i vitlök och salladslök. Låt det steka i ca 2 minuter.<br><br>
        3. Tillsätt de sköljda favabönorna, vatten, spiskummin, paprika, salt och torkad persilja. Blanda ihop.<br><br>
        4. Låt det sjuda i några minuter bara tills favabönorna mjuknat något.<br><br>
        5. Mosa ungefär hälften av bönorna, så att några bitar fortfarande är kvar.<br><br>
        6. Valfritt: Om för mycket vatten avdunstar och du gillar en tunnare konsistens, tillsätt mer vatten efter önskemål.<br><br>
        7. Tillsätt hackad koriander och citronsaft. Blanda igen.<br><br>
        8. Överför till en tallrik eller skål. Toppa med mer olivolja och servera!<br>
      </div>
    `;
    allRecept.innerHTML = ingredients;
  }

  function veg_2() {
    var allRecept = document.querySelector('.all_recept');
    var ingredients = `
      <div style="text-align: center;">
        <h3>Ingridienser</h3><br>
        BLOMKÅL:<br>
        1 litet blomkålshuvud<br>
        2 msk oliv eller rapsolja<br>
        Lite ringlad honung<br>
        1/2 tsk av dessa kryddor: paprikapulver, lökpulver, vitlökspulver, korianderpulver, salt, svartpeppar<br><br>
  
        GLAZE:<br>
        2 msk smör<br>
        1 tsk gochujang<br>
        1 tsk sriracha<br>
        2 msk sweet chilisås<br>
        1 msk japansk soja<br>
        1 msk vitvinsvinäger<br>
        Eventuellt lite tabasco om du har<br><br>
  
        LÖK:<br>
        Karamellisera en lök i tunna skivor på låg värme. Ringla över lite balsamico också. Den andra löken skruvade jag tunt och lade i en 1-2-3 lag minst 30 min.<br><br>
  
        JALAPEÑOSÅS:<br>
        Någon msk créme fraiche<br>
        Någon msk majonnäs<br>
        Några finhackade jalapeño-inlagda<br>
        Salt och peppar<br>
        Någon liten sked dijonsenap och sötstark senap<br>
        Lite lime eller citron<br><br>
  
        GÖR SÅ TYP SÅ HÄR:<br>
        Börja med picklad lök och karamelliserad lök.<br><br>
  
        Rör ihop kryddorna till blomkålen. Skär blomkålen i skivor. Det var lite svårt för de gick sönder, men fick till två skivor iaf. Strössla över kryddorna på blomkålen och stek eller baka i ugn. Ringla över honung och olja innan du steker/kör i ugnen.<br><br>
  
        Stek bröd i varm panna.<br><br>
  
        Rör ihop glazen i en liten kastrull på låg värme.<br><br>
  
        Rör ihop jalapeñosåsen.<br><br>
  
        MONTERA IHOP burgaren. Bröd-Sås-sallad-blomkål-lök-kål-sås-bröd.
      </div>
    `;
    allRecept.innerHTML = ingredients;
  }
  

  function veg_3() {
    var allRecept = document.querySelector('.all_recept');
    var ingredients = `
      <div style="text-align: center;">
        <h3>Ingridienser</h3><br>
        1/2 paket torra lasagneplattor<br>
        1 aubergine<br>
        Eventuellt 2-3 färska salsicciakorvar eller chorizokorvar<br>
        Rapsolja eller olivolja att steka i<br>
        1 boll mozzarella<br>
        Lite riven parmesan eller annan ost<br>
        Eventuellt en skvätt grädde<br><br>
  
        Tomatsås:<br>
        2 msk olivolja<br>
        1/2 gul lök<br>
        4 klyftor vitlök<br>
        1 burk krossade tomater<br>
        1 dl vatten<br>
        2 msk vitvinsvinäger<br>
        Kryddor: lite torkad oregano, timjan och chiliflakes<br><br>
  
        Creme fraichesås:<br>
        1 liten burk creme fraiche<br>
        En liten påse bladspenat alternativt fryst spenat<br>
        2 klyftor vitlök<br>
        Salt och svartpeppar<br><br>
  
        GÖR TYP SÅ HÄR:<br>
        - Sätt igång med tomatsåsen först. Hacka lök och vitlök och stek mjuk i olja. I med krossade tomater, kryddor, vinäger och vatten. Koka ihop tills det är dags att montera lasagnen.<br><br>
  
        - Skär aubergine i ca 1 cm tjocka skivor. Strö salt på båda sidor och låt ligga med hushållspapper på ca 20 minuter.
        Torka torra och stek i olja tills de får fin yta på båda sidor. Lägg åt sidan.<br><br>
  
        - Fräs spenat snabbt med vitlök. Salta och peppra. Låt svalna något och rör ihop med creme fraiche och eventuellt lite riven ost.<br><br>
  
        - Stek färsen av salsicciakorvarna tills färsen fått fin yta.<br><br>
  
        - I en form varvar du lasagneplattor, båda såserna, korvfärs och aubergine. Avsluta sista lagret med bitar av mozzarella och gärna mer riven ost. Jag ringlade över lite grädde också.<br><br>
  
        - Baka lasagnen i ugnen ca 30-40 minuter på 225 grader.
      </div>
    `;
    allRecept.innerHTML = ingredients;
  }


  function asi_3() {
    var allRecept = document.querySelector('.all_recept');
    var ingredients = `
      <div style="text-align: center;">
        <h3>Ingridienser</h3><br>
        RÄKFYLLNING (för ca 10 dumplings)<br>
        Ca 1 dl räkor - hackade i lite grova bitar. (Kokta eller råa)<br>
        1 dl finhackad kål av något slag, jag hade svartkål hemma.<br>
        1/2 dl finhackad zucchini (kör morot om du har)<br>
        3 skivade vårlökar<br>
        3 rivna vitlöksklyftor<br>
        2 cm riven ingefära<br>
        1 tsk sesamolja<br>
        1 msk japansk soja<br>
        2 tsk risvinäger eller vitvinsvinäger<br>
        2 msk ostronsås<br>
        1/2 tsk fisksås<br><br>
  
        GÖR TYP SÅ HÄR<br>
        Blanda ihop allt och fyll dumplingsark med ca 2 tsk fyllning i varje ark. Jag gjorde egen dumplingsdeg för första gången och det var ju meckigare absolut än att köpa färdiga ark. Ska köpa dumplingsark nästa gång!<br><br>
  
        Svampbuljong är från receptet jag la upp häromdagen! Servera med thaibasilikablad och chiliolja om du vill.
      </div>
    `;
    allRecept.innerHTML = ingredients;
  }



  function asi_1() {
    var allRecept = document.querySelector('.all_recept');
    var ingredients = `
      <div style="text-align: center;">
        <h3>Ingridienser</h3><br>
        TILL KÖTTET:<br>
        500 gram lövbiff<br>
        2-3 msk potatismjöl eller maizenamjöl<br>
        1/2 msk riven ingefära<br>
        2 msk japansk soja<br>
        1 tsk bakpulver<br>
        1 tsk sesamolja<br><br>
  
        Ca 1 dl rapsolja att fritera/steka i.<br><br>
  
        TILL SÅSEN:<br>
        3 klyftor vitlök<br>
        1/2 - 1 röd chili<br>
        3-4 dl vatten<br>
        1 msk gochujang<br>
        1 msk doenjang (koreansk sojabönspasta) alternativt miso<br>
        2 msk black bean sås<br>
        3 msk japansk soja<br>
        2 tsk sesamolja<br>
        2 msk ostronsås<br>
        2 msk vitvinsvinäger<br>
        1 msk socker<br><br>
  
        3 salladslök<br>
        En bit vitkål eller spetskål ca 200 gram<br>
        En näve thaibasilika<br>
        1 dl cashewnötter<br><br>
  
        Ris till servering<br><br>
  
        GÖR TYP SÅ HÄR:<br>
        Strimla köttet och vänd runt med riven ingefära, soja, potatismjöl och bakpulver.<br><br>
  
        Preppa grönsakerna. Skär kål i rejäla bitar, och skiva salladslöken i ca 3 cm långa bitar.<br>
        Finhacka vitlök och chili.<br><br>
  
        Hetta upp rapsolja och fräs köttet i några minuter på hög värme. Låt rinna av på hushållspapper.<br><br>
  
        Rengör stekpannan och ha i någon msk rapsolja, fräs vitlök och chili någon minuter men inte så att det bränns. Ha i vatten och all smaksättning. Låt koka ihop några minuter. Smaka av!<br><br>
  
        Ha i vitkål, cashewnötter, thaibasilika och salladslök. Vilka grönsaker som helst blir gott!<br>
        Koka ihop några minuter men inte för länge, du vill ha tuggmotstånd kvar.<br><br>
  
        Sist har du i köttet och låter allt bli varmt. Servera med ris och kanske lite mer cashewnötter. Sjukt gott!
      </div>
    `;
    allRecept.innerHTML = ingredients;
  }
  
  function asi_2() {
    var allRecept = document.querySelector('.all_recept');
    var ingredients = `
      <div style="text-align: center;">
        <h3>Ingridienser</h3><br>
        Valfria nudlar för 2<br>
        1/2 svampbuljongtärning<br>
        1 grönsaksbuljongtärning<br>
        2 msk japansk soja<br>
        1 tsk sesamolja<br>
        1 msk ostronsås<br>
        2 msk vitvinsvinäger<br>
        1 tsk socker<br>
        Lite riven ingefära<br>
        1 morot<br>
        1/2 lök<br>
        2 klyftor vitlök - krossade<br>
        Eventuellt lite gochujang eller annan chilipaste<br>
        5-7 dl vatten<br><br>
  
        Krispig färs:<br>
        200 gram valfri färs<br>
        2 klyftor vitlök<br>
        2 msk ostronsås<br>
        Eventuellt lite gochujang om du har<br>
        1 msk vitvinsvinäger<br>
        1 tsk socker<br>
        2 msk japansk soja<br>
        1 tsk sesamolja<br>
        Salt<br><br>
  
        Broccoli<br>
        2 ägg<br>
        Rostad lök<br>
        Svartkål<br>
        Spetskål/vitkål<br>
        Chili<br>
        Eventuellt nötter<br>
        Salladslök<br><br>
  
        GÖR TYP SÅ HÄR:<br>
        Börja med buljongen. I med grovhackad morot, några bitar ingefära, grovhackad lök, krossad vitlök i en kastrull. I med resten av ingredienserna utom nudlar. Koka ihop under lock ca 15-20 minuter. Sila.<br><br>
  
        Koka ägg ca 7 min, eller hur du föredrar dem.<br><br>
  
        Fräs på kål. Jag hackade ner en vitlöksklyfta och körde i en klick smör. Stek broccoli snabbt och salta lite.<br><br>
  
        Skiva salladslök och chili.<br><br>
  
        Stek färsen i en klick neutral olja tills den fått fin yta. Ha i finhackad vitlök och all annan smaksättning.
        Fräs ihop några minuter.<br><br>
  
        Koka nudlar enligt anvisning på förpackningen.<br><br>
  
        Lägg upp nudlar i en skål. Toppa med färs, kål, broccoli, salladslök, chili, rostad lök, nötter och ägg. Häll över den varma buljongen.
      </div>
    `;
    allRecept.innerHTML = ingredients;
  }

  // ... (previous JavaScript code)

const options = ['pasta', 'ris', 'nudlar'];

// Funktion för att slumpmässigt välja ett recept och uppdatera H3-elementet
function randomizeHeader() {
    var headerElement = document.getElementById('result'); // Update this line with the correct element ID for the header
    var randomIndex = Math.floor(Math.random() * options.length); // Use the 'options' array instead of 'recipesList'
    headerElement.textContent = options[randomIndex]; // Use the 'options' array instead of 'recipesList'
}

// Funktion för att slumpmässigt välja en av alternativen (pasta, ris, nudlar)
  function randomizeOption() {
    var optionElement = document.getElementById('option');
    var randomIndex = Math.floor(Math.random() * options.length);
    optionElement.textContent = options[randomIndex];
}

// Visa ett slumpmässigt recept och ett slumpmässigt alternativ när sidan laddas
document.addEventListener('DOMContentLoaded', function() {
    randomizeHeader();
    randomizeOption();
});

  function startSpin() {
    var randomButton = document.getElementById('random');
    randomButton.disabled = true; // Disable the button during the spin

    // ... (rest of the spinning animation code)

    // When the animation finishes, enable the button and set the final result
    spinAnimation.onfinish = function() {
        randomButton.disabled = false; // Enable the button
        randomizeOption(); // Show a random option (pasta, ris, or nudlar)
    };
}

// ... (rest of the JavaScript code)


  
  
  