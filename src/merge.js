const expedia_result = {
    hot1: { price: 100, key: "ex-1", additional: "no children" },
    hot2: { price: 200, key: "ex-2" },
    hot3: { price: 300, key: "ex-3" },
    hot4: { price: 400, key: "ex-4" },
};

const agoda_result = {
    hot1: { price: 110, key: "ag-1" },
    hot4: { price: 350, key: "ag-4" },
};

const booking_result = {
    hot2: { price: 190, key: "bk-2" },
    hot3: { price: 300, key: "bk-3" },
    hot4: { price: 320, key: "bk-4" },
};

const orbitz_result = {
    hot4: { price: 290, key: "or-4" },
    hot5: { price: 420, key: "or-5" },
};

async function mergePrices(hotels) {
    // let temp = [];
    // let results = {};

    // hotels.map((hotel) => {
    //     for (const h in hotel) {
    //         temp.push(hotel[h]);
    //     }
    // });

    // temp.sort((a, b) => a.price - b.price);
    // //console.log(temp);
    // temp.map((hotel, i) => {
    //     let key = "hot" + (i + 1);
    //     results[key] = hotel;
    // });

    // console.log(results);
    if (hotels.length === 1) return hotels[0];

    // let keys = [];
    // let results = {};
    // hotels.map((hotel) => {
    //     for (const key in hotel) {
    //         if (!keys.includes(key)) keys.push(key);
    //     }
    // });

    // keys.map((key) => {
    //     let minPrice = Infinity;
    //     //console.log(key, minPrice);
    //     hotels.map((hotel) => {
    //         //console.log(hotel[key]);
    //         if (key in hotel && hotel[key].price <= minPrice) {
    //             minPrice = hotel[key].price;
    //             results[key] = hotel[key];
    //             //console.log(minPrice, hotel[key]);
    //         }
    //     });
    // });
    //console.log(results);
    let results = {};
    hotels.map((hotel) => {
        for (const key in hotel) {
            console.log(results[key], hotel[key]);
            if (key in results) {
                if (hotel[key].price <= results[key].price)
                    results[key] = hotel[key];
            } else {
                results[key] = hotel[key];
            }
        }
    });

    return results;
}

mergePrices([expedia_result, agoda_result, booking_result, orbitz_result]).then(
    (result) => {
        console.log(result.hot1 === expedia_result.hot1);
        console.log(result.hot2 === booking_result.hot2);
        console.log(result.hot3 === booking_result.hot3);
        console.log(result.hot4 === orbitz_result.hot4);
        console.log(result.hot5 === orbitz_result.hot5);
    }
);

mergePrices([expedia_result, agoda_result]).then((result) => {
    console.log(result.hot1 === expedia_result.hot1);
    console.log(result.hot2 === expedia_result.hot2);
    console.log(result.hot3 === expedia_result.hot3);
    console.log(result.hot4 === agoda_result.hot4);
});

mergePrices([expedia_result]).then((result) => {
    console.log(result === expedia_result);
});
