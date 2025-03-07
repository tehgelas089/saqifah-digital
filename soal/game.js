
    function calculateScore() {
        let totalPoints = 0;

        // Soal-soal dan poin benar pada tiap soal
        const questions = ["q1", "q2","q3","q4"];

        questions.forEach(question => {
            const selected = document.querySelector(`input[name="${question}"]:checked`);
            if (selected) {
                totalPoints += parseInt(selected.value); // Tambahkan poin sesuai jawaban
            }
        });

        const result = document.getElementById("result");
        result.textContent = `Total Poin Anda: ${totalPoints}`;
    }

  //   let hasil = "totalPoints";
  //   if (hasil => "40") {
  //     document.write ("Anda lulus terbaik")  
  // } else {(hasil== "20" ) 
  //     document.write ("anda lulus") 
  // };

//     let makanan = " enak";
//   let rasa = "normal"; 

// if(makanan == " enak"){
//   if (rasa == "normal"){
//     document.write("saya suka dan saya makan");
//   }else{
//     document.write("saya suka dan tidak makan ")
//   }
// }