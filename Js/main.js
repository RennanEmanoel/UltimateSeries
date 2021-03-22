$(function(){

    $("#menu").hide();
        $(window).scroll(function(){            
            var topo = $(window).scrollTop();
            if(topo < 422){
                $("#menu").fadeOut('fast');
            }
            else if(topo > 2000){
                $("#menu").fadeOut('fast');
            }
            else {
                $("#menu").fadeIn('600');
             }
        });
});
// ---------------------------------------------------

function aleatorio(isso){
    let aqui = [],
    posicoes = [];

    while(aqui.length < isso.length){
        var index = randint(0, isso.length - 1);
        if(!posicoes.includes(index)) {
            aqui.push(isso[index]);
            posicoes.push(index);
        }
    }
    return aqui;
}
function randict(i, j) {
    return(Math.random() * (j + 1 - i) + i) | 0;
}

function lista(posicao, n) {
    let ali = [];
        randon= [];

    while (ali.length < n) {
        let l = randint(0, posicao.length - 1);
        if (!randon.includes(l)) {
            ali.push(posicao[l]);
            randon.push(l);
        }
    }

    return ali;
} 
$(() => {
    let cartoes = $('.cartao'),
        aleatorio = shuffle([
            '01', '02', '03', '04', '05', '06',
            '01', '02', '03', '04', '05', '06',
        ]);

    for (let i=0; i < cartoes.length; i++) {
        let cartao = cartoes[i],
            img = 'imgs/' + aleatorio[i] + '.jpg';
        $(cartao).attr('src', img);
    }
});


/**
 * Controle clique nas cartas
 */
let selecionada = null;


/**
 * Controle de pontos dos jogadores
 */

let jogador1 = 0;
let erro = 0;
let vez = true;
 
$(() => {
    $(".cartao")
        .on("click", ev => {
            let clicada = ev.target;
            
            if (selecionada === null) {
                $(clicada).toggleClass('virado');
                selecionada = clicada;
            } 
            
            else if (clicada === selecionada) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Está carta já está selecionada'
                  })
            }
            
            else if ($(selecionada).attr('src') === 
                     $(clicada).attr('src')) {

                $(clicada).toggleClass('virado');
                $(clicada).toggleClass('bloqueada');
                $(selecionada).toggleClass('bloqueada');
                $(clicada).off('click');
                $(selecionada).off('click');
                if (vez) {
                    jogador1+=1;
                }
                else {
                    erro++;
                }

                if(jogador1+erro === 6) {
                    // alert("Sua pontuação foi de "+jogador1+" e o total de erros foi de "+erro);
                    Swal.fire({
                        title: 'Sua pontuação foi de '+jogador1+" e o total de erros foi de "+erro,
                        width: 600,
                        padding: '3em',
                        background: '#080808',
                        confirmButtonText: 'Voltar ao Menu',
                        confirmButtonColor: '#ea3546',
                        backdrop: `
                          rgba(0,0,123,0.4)
                          left top
                          no-repeat
                        `
                      })
                    
                }
                selecionada = null;


            }
            
            else if (selecionada !== null) {
                $(clicada).toggleClass('virado');
                let selecionadaCopia = selecionada;
                selecionada = null;
                vez = !vez;
                setTimeout(() => {
                    $(clicada).toggleClass('virado');
                    $(selecionadaCopia).toggleClass('virado');
                }, 1000);
            }
            
        });
});

function copyList(lst) {
	var lista = [];
	
	for(i = 0; i < lst.length; i++) {
		lista.push(lst[i]);
    }
	
	return lista;
}
