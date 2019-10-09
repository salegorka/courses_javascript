console.log("Whats'up?");

// Задание 1

function numberConverter(num) {
    let arr = [...String(num)];

    return {
        "еденицы": arr[0],
        "десятки": arr[1],
        "сотни": arr[2]
    };
}

// Задание 2

const ArrID = [1, 2, 3, 4, 5];
const ArrItem = ["notebook", "tablet", "mobilephone", "headset", "microphone"];
const ArrCompany = ["Lenovo", "Apple", "Sumsung", "JBL", "Sony"];
const ArrPrice = [50000, 40000, 30000, 5000, 4000];

let shop = {
    catalog: [],
    cart: [],
    sum: 0,

    _createProduct: function (id, item, company, price) {
        return {
            id: id,
            item: item,
            company: company,
            price: price,
        }
    },

    createDTO: function () {
        for (let i = 0; i < ArrID.length; i++) {
            this.catalog.push(this._createProduct(ArrID[i], ArrItem[i], ArrCompany[i], ArrPrice[i]));
        }
    },

    calcSum: function () {
        for (let el of this.catalog) {
            this.sum = this.sum + el.price;
        }
    }
}
