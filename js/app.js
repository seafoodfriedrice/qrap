$(document).ready(function() {
  var $qrCodeInput = $(".qrcode-input");
  var $qrCodeInputField = $(".qrcode-input__field");
  var $qrCodeDisplay = $(".qrcode-display");

  var qrCodeOptions = function(text, size, label) {
    return {
      "size": size,
      "text": text,
      "label": label
    };
  };

  var generateQrCode = function() {
    $qrCodeDisplay.html("");
    var text = $qrCodeInputField.val();
    text && $qrCodeDisplay.qrcode(qrCodeOptions(text, 300, text));
  };

  $qrCodeInput.on("input", $qrCodeInputField, generateQrCode);
});
