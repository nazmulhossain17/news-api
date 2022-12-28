const loadData = () =>{
    fetch('https://openapi.programming-hero.com/api/news/category/01')
    .then(res => res.json())
    .then(n => clickdData(n.data))
}

const clickdData = data =>{
    console.log(data)
    const newsData = document.getElementById('news');
    data.forEach(datas =>{
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('sized');
        newsDiv.innerHTML = `
        <div class="d-flex">
        <img class="img-thumbnail" style="width: 500px;" src="${datas.thumbnail_url}"/>
        <div class="card" >
        
        <div class="card-body">
          <h5 class="card-title">${datas.title}</h5>
          <i class="card-text">${datas.details}</i>
          <div class=d-flex>
          <img style="width: 30px; height: 30px" src="${datas.author.img}"/>
          <p>${datas.author.name}</p>
          </div>
          <p>${datas.author.published_date}</p>
          <strong>views: ${datas.total_view}</strong>
          <button type="button" class="btn btn-outline-success">Details</button>
        </div>
        </div>
        </br>
      </div>
      </br>
     `;
        newsData.appendChild(newsDiv);
    })
}

loadData();


//     <div class="card d-flex">
    //     <h5 class="card-header">Featured</h5>
    //     <img src="${datas.thumbnail_url}"/>
    //     <div class="card-body">
    //       <h5 class="card-title">${datas.title}</h5>
    //       <p class="card-text">${datas.details}</p>
    //       <a href="#" class="btn btn-primary">Go somewhere</a>
    //     </div>
    //   </div>