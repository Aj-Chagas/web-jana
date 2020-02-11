   
  document.getElementById("copyButton").addEventListener("click", copy_email);

    function copy_email(){
      var copyText = document.getElementById("emailCopy");
      var textArea = document.createElement("textarea");
      textArea.value = copyText.textContent;
      document.getElementById("copyButton").appendChild(textArea);
      textArea.select();
      document.execCommand("Copy");
      textArea.remove();
      changeTextButtonCopiar()
    }

    function changeTextButtonCopiar() {
      document.getElementById("copyButton").classList.remove('btn-primary')
      var text = document.getElementById("copyButton").firstChild
      text.data = "Email copiado"
      document.getElementById("copyButton").classList.add('btn-success')
    }

    function changeTextButtonFechar(){
      document.getElementById("copyButton").classList.remove('btn-success')
      var text = document.getElementById("copyButton").firstChild
      text.data = "Copiar email"
      document.getElementById("copyButton").classList.add('btn-primary')
    }