window.addEventListener('load', () => {
    getTrainList();
})

var train;
var company
const getTrainList = () => {
    fetch('https://tetsudo.rti-giken.jp/free/delay.json')
        .then(function (data) {
            /*  console.log(data.json()) */
            return data.json();

        })
        .then(function (json) {
            console.log(json)
            for (i = 0; i < json.length; i++) {
                train = json[i].name;
                company = json[i].company;
                //テーブルに行を挿入
                var row = document.getElementById('train-list').insertRow();
                row.insertCell().textContent = i + 1;
                row.insertCell().textContent = train;
                row.insertCell().textContent = company;



            }
        })
}

var x = 0
var y = 0;
var result = document.getElementById('result')
const research = document.getElementById('research')
const button = document.getElementById('button')
var list = document.getElementById('list')
var ul = document.getElementById('ul')
var res = document.getElementById('res')
const yy = document.getElementById('y')
button.addEventListener('click', () => {

    const reset = document.createElement('BUTTON')
    reset.textContent = "再検索"
    res.appendChild(reset)
    reset.addEventListener('click', () => {
        window.location.reload();
    })
    button.disabled = true;
    research.disabled = true;
    fetch('https://tetsudo.rti-giken.jp/free/delay.json')
        .then(function (data) {
            /*  console.log(data.json()) */
            return data.json();
        })
        .then(function (json) {
            result.textContent = "<検索結果>"
            console.log(json.length)
            for (i = 0; i < json.length; i++) {
                if (research.value == "") {
                    ul.textContent = ""
                    console.log("not result")
                }
                else if (json[i].name.indexOf(research.value) > -1 || json[i].company.indexOf(research.value) > -1) {
                    console.log(research.value)
                    console.log(json)
                    const li = document.createElement('li')
                    ul.appendChild(li)
                    const elem = document.createElement('span')
                    const span = document.createElement('span')
                    elem.textContent = json[i].name + '  ' + json[i].company;
                    span.textContent = json[i].company;
                    li.appendChild(elem)

                } /* else if (json[i].name.indexOf(research.value)) {

                    y++
                    console.log(y)
                    return y
                } */
            }
            /* if (y == 1) {
                yy.textContent = "該当なし"
            } */
        })

})


