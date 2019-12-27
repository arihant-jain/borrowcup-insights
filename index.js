function openQRCamera(node) {
  var reader = new FileReader();
  reader.onload = function() {
    node.value = "";
    qrcode.callback = function(res) {
      if (res instanceof Error) {
        alert(
          "No QR code found. Please make sure the QR code is within the camera's frame and try again."
        );
      } else {
        	//node.parentNode.previousElementSibling.value = res;
		  	cup_id_text_box = document.getElementById('cup_id_text')
		  	cup_id_text_box.innerHTML = res;
		  	button_heading = document.getElementById('scan_button_text')
		  	button_heading.innerHTML = 'Scan another cup'
		  
      }
    };
    qrcode.decode(reader.result);
  };
  reader.readAsDataURL(node.files[0]);
}

//function showQRIntro() {
//  return confirm("Use your camera to take a picture of a QR code.");
//}