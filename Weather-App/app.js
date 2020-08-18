window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimeZone = document.querySelector('.location-timezone');


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `http://api.weatherapi.com/v1/current.json?key=f1fa4ac4a07e48658f5220351201808&q=${lat},${long}`;

            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                console.log(data)
                const {temp_f, text} = data.current;
                //set DOM elements from the API

                temperatureDegree.textContent = temp_f;

                });

        
        });
    }
});

