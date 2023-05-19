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
            {id: 1, name: "Home", route: "/"},
            {id: 2, name: "Map",route: "/map"},
            {id: 3, name: "Catalogue", route: "/apartment"},
            {id: 4, name: "Video", route: "/video"},
            {id: 5, name: "Payments", route:"/#"},
        ],
        logo: logo
    },

    benefits: {
        items: [
            {id: 1, img: bench, description: "Nearby historic parks and squares"},
            {id: 2, img: bicycle, description: "6 km bicycle paths"},
            {id: 3, img: building, description: "Completely equipped"},
            {id: 4, img: fountain, description: "10 fountains on the territory"}
        ],


    },

    apartments: {
        cards: [
            {id: 1, img: first, title: "First"},
            {id: 2, img: second, title: "Second"},
            {id: 3, img: third, title: "Third"},
            {id: 4, img: fourth, title: "Fourth"},
            {id: 1, img: first, title: "5"},
            {id: 2, img: second, title: "6"},
            {id: 3, img: third, title: "7"},
            {id: 4, img: fourth, title: "8"}
        ]
    },

    video: {
        links: "https://www.youtube.com/watch?v=wD6NlS348CQ&ab_channel=NEVERTOOSMALL"
    },

    FaQ: {
        accordions: [
            {
                id: 1,
                title: "Section 1",
                content: "Lorem ipsum dolor sit amlet, consectetur adipiscing elit. Quisque id erat sit amet arcu luctus pharetra. Cras scelerisque dolor non justo dignissim efficitur. Nunc non molestie nunc, venenatis maximus ante. Vestibulum mattis faucibus scelerisque. Nulla tempus semper congue. Phasellus maximus iaculis eleifend. Praesent elementum risus augue, eu viverra eros pulvinar sagittis. Aliquam ullamcorper vel metus at ultricies. Phasellus sollicitudin nibh lacus, nec malesuada felis dapibus eu. Suspendisse ut condimentum felis, vitae accumsan nunc. Nunc non bibendum diam, eget molestie metus. Nam orci sem, porttitor sed libero ut, rutrum tristique nulla. Praesent et odio posuere diam ultricies luctus nec eu nibh. Cras sit amet sagittis erat. Nulla viverra rhoncus magna, vitae aliquet ex consectetur at."

            },
            {
                id: 2,
                title: "Section 2",
                content: "Lorem ipsum dolor sit amlet, consectetur adipiscing elit. Quisque id erat sit amet arcu luctus pharetra. Cras scelerisque dolor non justo dignissim efficitur. Nunc non molestie nunc, venenatis maximus ante. Vestibulum mattis faucibus scelerisque. Nulla tempus semper congue. Phasellus maximus iaculis eleifend. Praesent elementum risus augue, eu viverra eros pulvinar sagittis. Aliquam ullamcorper vel metus at ultricies. Phasellus sollicitudin nibh lacus, nec malesuada felis dapibus eu. Suspendisse ut condimentum felis, vitae accumsan nunc. Nunc non bibendum diam, eget molestie metus. Nam orci sem, porttitor sed libero ut, rutrum tristique nulla. Praesent et odio posuere diam ultricies luctus nec eu nibh. Cras sit amet sagittis erat. Nulla viverra rhoncus magna, vitae aliquet ex consectetur at."
            },
            {
                id: 3,
                title: "Section 3",
                content: "Lorem ipsum dolor sit amlet, consectetur adipiscing elit. Quisque id erat sit amet arcu luctus pharetra. Cras scelerisque dolor non justo dignissim efficitur. Nunc non molestie nunc, venenatis maximus ante. Vestibulum mattis faucibus scelerisque. Nulla tempus semper congue. Phasellus maximus iaculis eleifend. Praesent elementum risus augue, eu viverra eros pulvinar sagittis. Aliquam ullamcorper vel metus at ultricies. Phasellus sollicitudin nibh lacus, nec malesuada felis dapibus eu. Suspendisse ut condimentum felis, vitae accumsan nunc. Nunc non bibendum diam, eget molestie metus. Nam orci sem, porttitor sed libero ut, rutrum tristique nulla. Praesent et odio posuere diam ultricies luctus nec eu nibh. Cras sit amet sagittis erat. Nulla viverra rhoncus magna, vitae aliquet ex consectetur at."
            },
        ]

    }


}

export default data;

