let axios = require('axios');

let sum = "sum: ";



// axios.get('http://api.tvmaze.com/schedule')

//   .then(response => {
//     let arr = response.data.filter(el => {
//       if (el.show.rating.average === 10) {
//         return (el.show.name)
//       }
//       console.log(arr);

//       // let filter = function (value, index) { return this.indexOf(value) == index };
//       // let filteredData = arr.filter(filter, arr);

//       // let allFilter = [];
//       // arr.filter((el, i, arr) => {
//       //   if (arr.indexOf(el) === i)  {
//       //     allFilter.push(el);
//       //   }
//       // });
//       //console.log("sort:", allFilter.sort())
//       //console.log(response)
//     })
//   })

//   .catch(error => console.log(error));

    //console.log(arr.sort());

    //console.log(new Date().toLocaleDateString)

    // axios.get(`http://api.tvmaze.com/shows/98?embed=nextepisode`)
    //   .then(res => {
    //     console.log(res.data._embedded)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })

      // axios.get(`http://api.tvmaze.com/shows/98?embed=nextepisode`)
      // .then(res => {
      //   let ep = (res.data._embedded.nextepisode);
      //   console.log(res.data.image.medium)
      // })
      // .catch(error => {
      //   console.log(error);
      // });

// axios.get('http://api.tvmaze.com/schedule')
//   .then(res => {
//     let arr = res.data.filter( el => {
//       if(el.show.rating.average > 7 ) {
//         console.log (el.show.name)
//       }
//     })
//     //console.log(arr)
//   })
//   .catch(err => console.log(err))

axios.get('http://api.tvmaze.com/schedule')
  .then(res => {
    let arr = res.data.filter( el => {
      if(el.show.network !== null) {
        console.log (el.show.name)
      }
    })
    //console.log(arr)
  })
  .catch(err => console.log(err))