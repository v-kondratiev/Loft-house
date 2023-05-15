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
            {id: 3, name: "Catalogue", href: "#apart"},
            {id: 4, name: "Contacts", href: "#footer"},
            {id: 5, name: "Payments"},
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
            {id: 4, img: fourth, title: "Fourth"}
        ]
    },

    video: {
        links: "https://www.youtube.com/watch?v=wD6NlS348CQ&ab_channel=NEVERTOOSMALL"
    },


    accordionData: [
        {
            title: "Section 1",
            content: `
              Lorem ipsum dolor sit amlet, consectetur adipiscing elit. Quisque id erat sit amet arcu luctus pharetra. Cras scelerisque dolor non justo dignissim efficitur. Nunc non molestie nunc, venenatis maximus ante. Vestibulum mattis faucibus scelerisque. Nulla tempus semper congue. Phasellus maximus iaculis eleifend. Praesent elementum risus augue, eu viverra eros pulvinar sagittis. Aliquam ullamcorper vel metus at ultricies. Phasellus sollicitudin nibh lacus, nec malesuada felis dapibus eu. Suspendisse ut condimentum felis, vitae accumsan nunc. Nunc non bibendum diam, eget molestie metus. Nam orci sem, porttitor sed libero ut, rutrum tristique nulla. Praesent et odio posuere diam ultricies luctus nec eu nibh. Cras sit amet sagittis erat. Nulla viverra rhoncus magna, vitae aliquet ex consectetur at.`
        },
        {
            title: "Section 2",
            content: `
              Aliquam vel libero et tortor sagittis condimentum. Nam id varius turpis, id pharetra eros. Mauris purus tortor, mattis quis eros in, molestie pharetra lorem. Morbi viverra urna purus, nec ornare purus aliquet et. Curabitur tempus nulla id leo eleifend, sit amet lobortis libero interdum. Proin nulla neque, imperdiet nec metus in, volutpat accumsan sem. Curabitur imperdiet et turpis at condimentum. Nunc nec quam fringilla, porta elit nec, pellentesque ligula.`
        },
        {
            title: "Section 3",
            content: `
              Sed lobortis rutrum dui ut consequat. Vestibulum sollicitudin orci eget risus volutpat, quis congue neque pharetra. Nulla sedjusto commodo tellus tincidunt lobortis. Nunc tortor augue, consequat eu odio nec, accumsan accumsan lorem. Suspendisse maximus ultricies turpis, consequat mollis diam tempor ut. Fusce a elementum est. Nulla odio elit, malesuada eu leo sit amet, malesuada accumsan magna. Maecenas molestie bibendum lorem, et ullamcorper dui euismod eget. Proin eget dui dapibus lacus fermentum mattis vitae iaculis lectus. Pellentesque in risus in nibh commodo imperdiet. Morbi at tempus dui. Mauris pellentesque mauris id erat blandit, ac ultrices metus efficitur. Donec porttitor neque eget elit volutpat gravida.`
        },
    ]


}

export default data;

