		function dopisz(znak)
        {
            var naEkranie = document.getElementById('content').innerHTML+znak;
            document.getElementById('content').innerHTML=naEkranie;
            console.log(naEkranie)
        }

        function oblicz()
        {
            var naEkranie = document.getElementById('content').innerHTML;
            var wynik = eval(naEkranie);
            console.log(wynik);
            document.getElementById('content').innerHTML=wynik;
        }
    
        function zmianaStyl(){
        document.getElementById("zero").styl.backgroundColor="red"
		}

		function usun(){
			var wyswietlane = document.getElementById('content').innerHTML;
			var wynik = wyswietlane.substr(0, wyswietlane.length - 1)
			document.getElementById('content').innerHTML = wynik;
		}

		function usun2(){
			var wyswietlane = document.getElementById('content').innerHTML;
			var wynik = wyswietlane.substr(0, wyswietlane.length = 0)
			document.getElementById('content').innerHTML = wynik;
		}

		function pie(){
			var liczba = document.getElementById('content').innerHTML;
			var wynik = Math.sqrt(liczba)
			document.getElementById('content').innerHTML = wynik;

		}