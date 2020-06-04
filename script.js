for(let i=1; i<=4; i++) {
    let random = Math.floor(Math.random() * 1000);
    $.ajax({
        url: `https://picsum.photos/id/${random}/info`,
        type: 'GET',
        headers: { 'Access-Control-Allow-Origin': 'https://picsum.photos/' },
        success: function(data) {
            $('#details').append(`<div class="col mb-4"><div class="card shadow bg-light"><img src=${data.download_url} class="card-img-top" alt="image"/><div class="card-body d-flex justify-content-between"><h5 class="card-title">${data.author}</h5><a href="${data.url}/download?force=true" role="button" class="btn btn-light" download><i style="pointer-events: none" class="fas fa-download"></i> Download Image</a></div></div></div>`)
        },
        error: function() {
            console.log('Loading Failed!');
        },
    });
}