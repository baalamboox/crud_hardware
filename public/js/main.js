const hardware_photo = document.querySelector('#hardware_photo')
const photo = document.querySelector('#photo')
$(document).ready(() => {
    $('#hardware_table').DataTable();
});
hardware_photo.onchange = (event) => {
    photo.src = URL.createObjectURL(event.target.files[0])
}
