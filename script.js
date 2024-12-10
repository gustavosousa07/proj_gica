function verificarLogin(){

    const usuarioCorreto = "gica"
    const senhaCorreta = "260124"

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        alert('Acesso liberado!')
        window.location.href = 'gica.html'

    } else {
        alert('Acesso negado')
    }

}