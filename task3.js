const input = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const resultDiv = document.querySelector(".result");

function useRequest(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function () {
            if (xhr.status != 200) {
                console.log('Статус ответа: ', xhr.status);
            } else {
                const result = JSON.parse(xhr.response);
                if (callback) {
                    callback(result);
                }
            }
        };

        xhr.onerror = function () {
            console.log('Ошибка! Статус ответа: ', xhr.status);
        };

        xhr.send();
};


function displayResult(apiData) {
    let cards = '';

    apiData.forEach(item => {
        const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
        </div>
      `;
        cards = cards + cardBlock;
    });

    resultDiv.innerHTML = cards;
}

function validValue(value) {
    if(value < 1 || value > 10) {
        resultDiv.innerHTML = `Число вне диапазона от 1 до 10`
    } else {
        useRequest(`https://source.unsplash.com/collection/928423/200x300/?sig=${value}`, displayResult)
    }
}

input.addEventListener('input', () => {
    input.value = input.value.replace(/[^0-9\.]/g, '');
}
)

btn.addEventListener('click', (() => {
    validValue(input.value)
}))