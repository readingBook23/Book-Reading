document.getElementById('imageInput').addEventListener('change', function(e) {
    var file = e.target.files[0];

    if (file) {
        var reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById('profileImage').src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
});

function saveProfileChanges() {
  
}