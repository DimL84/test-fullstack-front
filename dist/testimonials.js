"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testimonials = void 0;
exports.getThreeTopTestimonials = getThreeTopTestimonials;
exports.testimonials = [
    {
        id: 1,
        personName: "Jane Roe",
        personCompany: "InnovateX",
        personPicture: "https://picsum.photos/200/200?random=${id}",
        title: "Highly Recommend",
        body: "I had an excellent experience working with this team.",
        rating: 4
    },
    {
        id: 2,
        personName: "Alice Smith",
        personCompany: "EcoFuture",
        personPicture: "https://picsum.photos/200/200?random=${id}",
        title: "Great Service!",
        body: "The service provided was outstanding and exceeded my expectations.",
        rating: 5
    },
    {
        id: 3,
        personName: "Alice Smith",
        personCompany: "EcoFuture",
        personPicture: "https://picsum.photos/200/200?random=${id}",
        title: "Great Service!",
        body: "Their professionalism and dedication truly stand out.",
        rating: 3
    },
    {
        id: 4,
        personName: "Emily Brown",
        personCompany: "DesignHub",
        personPicture: "https://picsum.photos/200/200?random=${id}",
        title: "Top Quality",
        body: "The service provided was outstanding and exceeded my expectations.",
        rating: 1
    },
    {
        id: 5,
        personName: "John Doe",
        personCompany: "InnovateX",
        personPicture: "https://picsum.photos/200/200?random=${id}",
        title: "Highly Recommend",
        body: "Top-notch service with great attention to detail.",
        rating: 1
    }
];
function getThreeTopTestimonials(testimonials) {
    return testimonials.slice(0, 3);
}
