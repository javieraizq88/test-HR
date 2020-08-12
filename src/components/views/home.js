import React from "react"

const Home = props => {


    const productName = ["ball", "box", "ball", "ball", "box"];
    const price = [2, 2, 2, 2, 2];
    const weight = [1, 2, 1, 1, 3];

    class product {
        constructor(name, price, weight) {
            this.name = name;
            this.price = price;
            this.weight = weight;
        }
    }

    function numDuplicates(name, price, weight) {
        console.clear()
        const products = []
        for (const k in name) {
            products.push(
                JSON.stringify(new product(name[k], price[k], weight[k]))
            );
        }

        const uniques = new Set(products);
        return console.log(products.length - uniques.size);
    }


    const operations = [
        "push 4", "pop", "push 3", "push 5", "push 2", "inc 3 1", "pop", "push 1", "inc 2 2", "push 4", "pop", "pop"
    ];

    function print(array) {
        if (!array) {
            return
        }
        // si el arreglo esta vacío, muestra EMPTY en console
        if (array.length === 0) {
            console.log('EMPTY');
        } else {
            console.log(array[array.length - 1]);
        }
    }

    function superStack(operations) {
        console.clear()
        const arr = [];
        operations.forEach(operation => {
            const detail = operation.split(" ");
            switch (detail[0]) {
                case "push":
                    arr.push(Number(detail[1]));
                    print(arr)
                    break;
                case "pop":
                    arr.pop();
                    print(arr);
                    break;
                case "inc":
                    for (let index = 0; index < detail[1]; index++) {
                        arr[index] += Number(detail[2]);
                    }
                    print(arr);
                    break;
                default:
                    break;
            }
        });
    }




    const ancestralNames = ['Jhon VII', 'Charles XX', 'Charles III', 'Charles X', 'Paul LXVI', 'Charles D']

    function toArabicNumber(romanNumber) {
        const romanLetters = ['I', 'V', 'X', 'L']
        const numbers = [1, 5, 10, 50]

        let number = 0;
        let romanNumberDetail = romanNumber.split('');
        romanNumberDetail = romanNumberDetail.map(letter => letter.toUpperCase())

        for (let index = 0; index < romanNumberDetail.length; index++) {
            const present = numbers[romanLetters.indexOf(romanNumberDetail[index])]
            const next = numbers[romanLetters.indexOf(romanNumberDetail[index + 1])]
            if (present < next) {
                number -= present;
            } else {
                number += present;
            }
        }
        return number
    }

    function sortRoman(names) {
        console.clear()
        names.sort((x, y) => {
            const detailX = x.split(' ');
            const nameX = detailX.slice(0, -1).join(' ')
            const detailY = y.split(' ');
            const nameY = detailY.slice(0, -1).join(' ')
            if (nameX > nameY) {
                return 1
            } else if (nameX < nameY) {
                return -1
            } else {
                return toArabicNumber(detailX[detailX.length - 1]) > toArabicNumber(detailY[detailY.length - 1]) ? 1 : toArabicNumber(detailX[detailX.length - 1]) < toArabicNumber(detailY[detailY.length - 1]) ? -1 : 0
            }
        })

        names.forEach(name => {
            console.log(name);
        });

    }





    return (
        <>
            <h1> Test HackerRank </h1>
            <br />
            <div className="container">
                <h2>
                    Pregunta 1: Duplicated Products
            </h2>
                <button

                    onClick={() => numDuplicates(productName, price, weight)}
                > Ver respuesta en consola
            </button>
                <hr />
                <hr />
                <h2>
                    Pregunta 2: Super Stack 
            </h2>
                <button
                    onClick={() => superStack(operations)}
                > Ver respuesta en consola
            </button>
                <hr />
                <hr />
                <h2>
                    Pregunta 3: Ancestral names
            </h2>
                <button
                    onClick={() => sortRoman(ancestralNames)}
                > Ver respuesta en consola
            </button>
            </div>
        </>
    )
}

export default Home