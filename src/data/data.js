/// Header///
import logo from "../assets/header/logo.svg";

///Benefits///
import bench from "../assets/benefits/bench.svg";
import bicycle from "../assets/benefits/bicycle.svg";
import building from "../assets/benefits/building.svg";
import fountain from "../assets/benefits/fountain.svg";

///Apartments///

import first from "../assets/cards/first.jpg";
import second from "../assets/cards/second.jpg";
import third from "../assets/cards/third.jpg";
import fourth from "../assets/cards/fourth.jpg";






let data = {
    header: {
        links: [
            {id: 1, name: "About"},
            {id: 2, name: "Region"},
            {id: 3, name: "Catalogue"},
            {id: 4, name: "Contacts"},
            {id: 5, name: "Payments"},
        ],
        logo: logo

    },

    main: {
        items: [
            {id: 1, img: bench, description: "Nearby historic parks and squares"},
            {id: 2, img: bicycle, description: "6 km bicycle paths"},
            {id: 3, img: building, description: "Completely equipped"},
            {id: 4, img: fountain, description: "10 fountains on the territory"}
        ],

        cards: [
            {id: 1, img: first, title: "first"},
            {id: 2, img: second, title:"second"},
            {id: 3, img: third, title:"third"},
            {id: 4, img: fourth, title:"fourth"}

        ]

    },



}

export default data;
