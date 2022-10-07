const bucketlistForm = document.querySelector('#bucketlist-form');
const ul = document.querySelector('.bucketlists');

bucketlistForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const bucketInput = document.querySelector('input[name="bucketlist"]');
    let bucketlist = bucketInput.value;

    const newList = document.createElement("li");
    newList.textContent = bucketlist;
    ul.append(newList);

    bucketInput.value = '';
})