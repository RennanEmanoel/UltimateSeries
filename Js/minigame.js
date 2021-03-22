var pontuacao = 0;

$("#q1").click(function(){
    $("h6").css('color', '#fff')
    $("#q1").css('background-color', '#40C9A2')
    // $("#q2").css('background-color', '#EF233C')
    // $("#q3").css('background-color', '#EF233C')
    // $("#q4").css('background-color', '#EF233C')
    pontuacao++;
    setInterval(function(){
        console.log('hi');
    }, 3000)
    window.location.href = './question2.html'
});
// -----------------------------------------
$("#q2").click(function(){
    $("h6").css('color', '#fff')
    $("#q1").css('background-color', '#40C9A2')
    $("#q2").css('background-color', '#EF233C')
    setInterval(function(){
        console.log('hi');
    }, 3000)
    window.location.href = './question2.html'
});
// ----------------------------------------------------------
$("#q3").click(function(){
    $("h6").css('color', '#fff')
    $("#q1").css('background-color', '#40C9A2')
    $("#q3").css('background-color', '#EF233C')
    setInterval(function(){
        console.log('hi');
    }, 3000)
    window.location.href = './question2.html'
});
// -------------------------------------------------------------
$("#q4").click(function(){
    $("h6").css('color', '#fff')
    $("#q1").css('background-color', '#40C9A2')
    $("#q4").css('background-color', '#EF233C')
    setInterval(function(){
        console.log('hi');
    }, 3000)
    window.location.href = './question2.html'
});






// -----------------------------------------------------------------------------------------------------------:
// -----------------------------------------------------------------------------------------------------------:
// -----------------------------------------------------------------------------------------------------------:

$("#q5").click(function(){
    $("h6").css('color', '#fff')
    $("#q5").css('background-color', '#40C9A2')
    // $("#q2").css('background-color', '#EF233C')
    // $("#q3").css('background-color', '#EF233C')
    // $("#q4").css('background-color', '#EF233C')
    pontuacao++;
    setInterval(function(){
        console.log('hi');
    }, 3000)
    window.location.href = './question3.html'
});
// -----------------------------------------
$("#q6").click(function(){
    $("h6").css('color', '#fff')
    $("#q6").css('background-color', '#40C9A2')
    $("#q5").css('background-color', '#EF233C')
    setInterval(function(){
        console.log('hi');
    }, 3000)
    window.location.href = './question3.html'
});
// ----------------------------------------------------------
$("#q7").click(function(){
    $("h6").css('color', '#fff')
    $("#q7").css('background-color', '#40C9A2')
    $("#q5").css('background-color', '#EF233C')
    setInterval(function(){
        console.log('hi');
    }, 3000)
    window.location.href = './question3.html'
});
// -------------------------------------------------------------
$("#q8").click(function(){
    $("h6").css('color', '#fff')
    $("#q8").css('background-color', '#40C9A2')
    $("#q5").css('background-color', '#EF233C')
    setInterval(function(){
        console.log('hi');
    }, 3000)
    window.location.href = './question3.html'
});
// -----------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------


$("#q10").click(function(){
    $("h6").css('color', '#fff')
    $("#q10").css('background-color', '#40C9A2')
    // $("#q2").css('background-color', '#EF233C')
    // $("#q3").css('background-color', '#EF233C')
    // $("#q4").css('background-color', '#EF233C')
    pontuacao++;
    setInterval(function(){
        console.log('hi');
    }, 3000)
    window.location.href = './question4.html'
});
// -----------------------------------------
$("#q11").click(function(){
    $("h6").css('color', '#fff')
    $("#q11").css('background-color', '#40C9A2')
    $("#q10").css('background-color', '#EF233C')
    setInterval(function(){
        console.log('hi');
    }, 3000)
    window.location.href = './question4.html'
});
// ----------------------------------------------------------
$("#q9").click(function(){
    $("h6").css('color', '#fff')
    $("#q9").css('background-color', '#40C9A2')
    $("#q10").css('background-color', '#EF233C')
    setInterval(function(){
        console.log('hi');
    }, 3000)
    window.location.href = './question4.html'
});
// -------------------------------------------------------------
$("#q12").click(function(){
    $("h6").css('color', '#fff')
    $("#q12").css('background-color', '#40C9A2')
    $("#q10").css('background-color', '#EF233C')
    setInterval(function(){
        console.log('hi');
    }, 3000)
    window.location.href = './question4.html'
});
// -----------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------


$("#q13").click(function(){
    $("h6").css('color', '#fff')
    $("#q13").css('background-color', '#40C9A2')
    // $("#q2").css('background-color', '#EF233C')
    // $("#q3").css('background-color', '#EF233C')
    // $("#q4").css('background-color', '#EF233C')
    pontuacao++;
    setInterval(function(){
        console.log('hi');
    }, 3000)
    window.location.href = './question5.html'
});
// -----------------------------------------
$("#q14").click(function(){
    $("h6").css('color', '#fff')
    $("#q14").css('background-color', '#40C9A2')
    $("#q13").css('background-color', '#EF233C')
    setInterval(function(){
        console.log('hi');
    }, 3000)
    window.location.href = './question5.html'
});
// ----------------------------------------------------------
$("#q15").click(function(){
    $("h6").css('color', '#fff')
    $("#q15").css('background-color', '#40C9A2')
    $("#q13").css('background-color', '#EF233C')
    setInterval(function(){
        console.log('hi');
    }, 3000)
    window.location.href = './question5.html'
});
// -------------------------------------------------------------
$("#q16").click(function(){
    $("h6").css('color', '#fff')
    $("#q16").css('background-color', '#40C9A2')
    $("#q13").css('background-color', '#EF233C')
    setInterval(function(){
        console.log('hi');
    }, 3000)
    window.location.href = './question5.html'
});
// -----------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------


$("#q17").click(function(){
    $("h6").css('color', '#fff')
    $("#q17").css('background-color', '#40C9A2')
    pontuacao++;
    if(pontuacao > 3.5){
        var nome = 'Parabéns';
    }
    else {
        var nome = 'Que pena'
    }
    Swal.fire({
        title: nome,
        text: "Sua pontuação foi de "+pontuacao+'0%',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Voltar ao Menu',
        confirmButtonText: 'Jogar Novamente!'
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = './questions.html'
        } else if (result.dismiss === Swal.DismissReason.cancel ) {
            window.location.href = './switchquiz.html'
        }
      })
});
// -----------------------------------------
$("#q18").click(function(){
    $("h6").css('color', '#fff')
    $("#q18").css('background-color', '#40C9A2')
    $("#q17").css('background-color', '#EF233C')
    Swal.fire({
        title: 'Parabéns',
        text: "Sua pontuação foi de "+pontuacao+'0%',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Voltar ao Menu',
        confirmButtonText: 'Jogar Novamente!'
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = './questions.html'
        } else if (result.dismiss === Swal.DismissReason.cancel ) {
            window.location.href = './switchquiz.html'
        }
      })
});
// ----------------------------------------------------------
$("#q19").click(function(){
    $("h6").css('color', '#fff')
    $("#q19").css('background-color', '#40C9A2')
    $("#q17").css('background-color', '#EF233C')
    Swal.fire({
        title: 'Parabéns',
        text: "Sua pontuação foi de "+pontuacao+'0%',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Voltar ao Menu',
        confirmButtonText: 'Jogar Novamente!'
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = './questions.html'
        } else if (result.dismiss === Swal.DismissReason.cancel ) {
            window.location.href = './switchquiz.html'
        }
      })
});
// -------------------------------------------------------------
$("#q20").click(function(){
    $("h6").css('color', '#fff')
    $("#q20").css('background-color', '#40C9A2')
    $("#q17").css('background-color', '#EF233C')
    Swal.fire({
        title: 'Parabéns',
        text: "Sua pontuação foi de "+pontuacao+'0%',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Voltar ao Menu',
        confirmButtonText: 'Jogar Novamente!'
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = './questions.html'
        } else if (result.dismiss === Swal.DismissReason.cancel ) {
            window.location.href = './switchquiz.html'
        }
      })
});
// -----------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------
