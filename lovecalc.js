
        function checkloveper(){
            
            var name = document.getElementById('name').value;
            var lname = document.getElementById('lname').value;

            if(name == ""){
                alert('Please enter your Name')
            } else if (name.length <=2 ) {
                alert('Minimum length is 3')
            } else if (!isNaN(name)){
                alert('Fill charcters only');
            }

           else if(lname == ""){
                alert('Please enter your Name')
            } else if (lname.length <=2 ) {
                alert('Minimum length is 3')
            } else if (!isNaN(lname)){
                alert('Fill charcters only');
            }
            else{
                var lovedata = Math.random() * 100;
                lovedata = Math.floor(lovedata);
                document.getElementById('lovevalue').value = lovedata + "%";
        }
        }
