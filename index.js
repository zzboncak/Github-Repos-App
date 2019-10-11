
function watchForm(){
    $('.user-form').submit(event => {
        event.preventDefault();
        let username = $('.user-input').val();
        
        let url = `https://api.github.com/users/${username}/repos`;
    
        fetch(url)
            .then(response => {
                if(reponse.ok){
                    return response.json();
                }
                throw new Error(`This is an error`)
            })
            .then(responseJson => listRepos(responseJson))
            .catch(error => console.log(`Something went wrong`));
    });
}

function listRepos(array) {
    $('.results').empty();
    for (let i in array) {
        let repo = array[i];
        let element = `<a href="${repo.html_url}" target="_blank">${repo.name}</a><br>`;
        $('.results').append(element);
        //console.log(repo.name);
    }
}

$(watchForm);