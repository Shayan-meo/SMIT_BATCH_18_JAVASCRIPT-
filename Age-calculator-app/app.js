        window.onload = function() {
            // Execute the app.js code
            var year = +prompt("Enter your birth year (YYYY):");
            var month = +prompt("Enter your birth month (1-12):");
            var date = +prompt("Enter your birth date (1-31)");

            // Js me month 0 se start hota hai, is liye -1
            var birthDate = new Date(year, month - 1, date);

            // Current date
            var currentDate = new Date();

            var diffMs = currentDate - birthDate;

            //  Milliseconds → Days & Hours
            var totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
            var totalHours = Math.floor(diffMs / (1000 * 60 * 60));
            var totalMinutes = Math.floor(diffMs / (1000 * 60));
            var totalSec = Math.floor(diffMs / (1000 ));

            var age= Math.floor(totalDays/365)

            //  Result 
            alert(
              "You have lived:\n" +
              "Your age is: " + age + " years\n" +
              "Total days: " + totalDays + "\n" +
              "Total hours: " + totalHours +"\n"+
              "Total Mintues :" + totalMinutes+"\n"+
              "Todel Sec: "    + totalSec

            );
            
            // Display results on the screen
            document.getElementById('dobDisplay').textContent = 
                "Date of Birth: " + birthDate.toLocaleDateString();
            document.getElementById('ageResult').textContent = age + " years";
            document.getElementById('daysResult').textContent = totalDays.toLocaleString();
            document.getElementById('hoursResult').textContent = totalHours.toLocaleString();
            document.getElementById('minutesResult').textContent = totalMinutes.toLocaleString();
            document.getElementById('secondsResult').textContent = totalSec.toLocaleString();
            
            // Show the results section
            document.getElementById('resultsSection').style.display = 'block';
            
            var ok = confirm("Do You Want To Play Again?");
            if (ok) {
              window.location.reload();
            }
        };