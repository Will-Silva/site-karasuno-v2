
function abrirModal() {
    document.getElementById('jogador').style.marginTop = '150px';
    document.getElementById('cortina').style.zIndex = '3';
    document.getElementById('cortina').style.backgroundColor = 'rgba(0,0,0,0.7)';

}

function fecharModal() {
    document.getElementById('jogador').style.marginTop = '-600px';
    document.getElementById('cortina').style.zIndex = '1';
    document.getElementById('cortina').style.backgroundColor = 'rgba(0,0,0,0)';
}

function validarFormulario() {
    var nome = document.getElementById('fid-nome').value;
    var email = document.getElementById('fid-email').value;
    var posicao = document.getElementById('fid-posicao').value;

    if (nome == '' && email == '' && posicao == '') {
        document.getElementById('fid-nome').style.border = 'solid 0.5px red';
        document.getElementById('fid-email').style.border = 'solid 0.5px red';
        document.getElementById('fid-posicao').style.border = 'solid 0.5px red';
        document.getElementById('mensagem-erro').innerHTML = 'Informe todos os campos obrigatórios (*)';
        document.getElementById('mensagem-erro').style.color = 'red';

    } else if (nome == '' && email != '' && posicao == '') {
        document.getElementById('fid-nome').style.border = 'solid 0.5px red';
        document.getElementById('fid-email').style.border = 'none';
        document.getElementById('fid-posicao').style.border = 'solid 0.5px red';
        document.getElementById('mensagem-erro').innerHTML = 'Informe os campos nome e posição';
        document.getElementById('mensagem-erro').style.color = 'red';

    } else if (nome != '' && email == '' && posicao == '') {
        document.getElementById('fid-nome').style.border = 'none';
        document.getElementById('fid-email').style.border = 'solid 0.5px red';
        document.getElementById('fid-posicao').style.border = 'solid 0.5px red';
        document.getElementById('mensagem-erro').innerHTML = 'Informe os campos e-mail e posição';
        document.getElementById('mensagem-erro').style.color = 'red';

    }  else if (nome == '' && email == '' && posicao != '') {
        document.getElementById('fid-nome').style.border = 'solid 0.5px red';
        document.getElementById('fid-email').style.border = 'solid 0.5px red';
        document.getElementById('fid-posicao').style.border = 'none';
        document.getElementById('mensagem-erro').innerHTML = 'Informe os campos nome e email';
        document.getElementById('mensagem-erro').style.color = 'red';

    }  else if (nome == '' && email != '' && posicao != '') {
        document.getElementById('fid-nome').style.border = 'solid 0.5px red';
        document.getElementById('fid-email').style.border = 'solid 0.5px red';
        document.getElementById('fid-posicao').style.border = 'none';
        document.getElementById('mensagem-erro').innerHTML = 'Informe os campo nome';
        document.getElementById('mensagem-erro').style.color = 'red';

    }   else if (nome != '' && email == '' && posicao != '') {
        document.getElementById('fid-nome').style.border = 'solid 0.5px red';
        document.getElementById('fid-email').style.border = 'solid 0.5px red';
        document.getElementById('fid-posicao').style.border = 'none';
        document.getElementById('mensagem-erro').innerHTML = 'Informe o campo email';
        document.getElementById('mensagem-erro').style.color = 'red';

    }   else if (nome != '' && email != '' && posicao == '') {
        document.getElementById('fid-nome').style.border = 'solid 0.5px red';
        document.getElementById('fid-email').style.border = 'solid 0.5px red';
        document.getElementById('fid-posicao').style.border = 'none';
        document.getElementById('mensagem-erro').innerHTML = 'Informe o campo posicao';
        document.getElementById('mensagem-erro').style.color = 'red';

    } else {
        document.getElementById('fid-nome').style.border = 'none';
        document.getElementById('fid-email').style.border = 'none';
        document.getElementById('fid-posicao').style.border = 'none';
        document.getElementById('mensagem-erro').innerHTML = 'Dados enviados com sucesso!';
        document.getElementById('mensagem-erro').style.color = 'green';
    }

}

function limpar() {
    document.getElementById('fid-nome').style.border = 'none';
    document.getElementById('fid-email').style.border = 'none';
    document.getElementById('fid-posicao').style.border = 'none';
    document.getElementById('mensagem-erro').innerHTML = '';
    
}