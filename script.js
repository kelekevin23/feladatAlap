$(function(){

    const termekek = [];
   
    adatBeolvasas("jsontermekek.json", termekek, tablazatKiir);
        


    //összerendelt tömb --> tanuló - állat nevekkel
    function tablazatKiir(){
        console.log(termekek);
        $("#tablazat").empty();
        $("#tablazat").append("<table>");
        $("#tablazat table").append("<tr><th>Terméknév</th><th>Leírás</th><th>Készlet</th><th>Ár</th></tr>");
        let id = 0;
        termekek.forEach(
            (value, index) => {
                $("#tablazat table").append("<tr></tr>");
                for (let item in value) {
                    $("#tablazat table tr").eq(index + 1).append("<td>" + value[item] + "</td>"); 
                    
                }
                $("#tablazat table tr").eq(index + 1).append("<td><button class=button id="+id+">Módosít</button></td>"); 
                id++;
                
                
                
            }
      );
      $(".button").on("click", megjelenit);
    };
    
    
    function adatBeolvasas(fajlNev, tomb, myCallback){
        $.ajax({

            url: fajlNev,
            success: function(result){
                //tomb.splice(0,tomb.length);
                //adatok a tanulo tömbbe
                result.forEach((elem) => {
                    tomb.push(elem);
                });
                myCallback();
            }
        });
    }

    function megjelenit(){
        console.log(termekek[this.id].Terméknév);
        console.log(termekek[this.id].Leírás);
        console.log(termekek[this.id].Készlet);
        console.log(termekek[this.id].Ár);

        $("#termeknev").val(termekek[this.id].Terméknév);
        $("#leiras").val(termekek[this.id].Leírás);
        $("#keszlet").val(termekek[this.id].Készlet);
        $("#ar").val(termekek[this.id].Ár);

        
    }

    

});