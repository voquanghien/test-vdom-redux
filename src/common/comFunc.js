
export default class comFunc {
    randomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    randomSelect(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    randomColorApi() {
        const url = 'http://www.colr.org/json/color/random';
        return fetch(url).then(function(response) {
            if(response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok!');
        })
        .then((data)=>{
            return data.new_color;
        })
    }

    saveRandomColorsByApi(testf) {
        const url = 'http://www.colr.org/json/colors/random/20';
        return fetch(url).then((response)=>{
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok!');
        }).then((data)=> {
            for (var i in data.colors)
            {
                if (data.colors[i].id>0){
                    testf.push("#"+data.colors[i].hex);
                }
            }
            return data.colors;
        });
    }
}