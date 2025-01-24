"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testimonials_ts_1 = require("../src/testimonials.ts");
// Récupérer les trois meilleurs témoignages
var topTestimonials = (0, testimonials_ts_1.getThreeTopTestimonials)(testimonials_ts_1.testimonials);
// Insérer les témoignages dans le HTML
var testimonialContainer = document.getElementById('testimonial-cards');
if (testimonialContainer) {
    topTestimonials.forEach(function (testimonial) {
        // Crée le contenu HTML pour chaque témoignage
        var testimonialCard = document.createElement('div');
        testimonialCard.className = 'col-md-4 mb-4';
        testimonialCard.innerHTML = "\n      <div class=\"card h-100\">\n        <img src=\"".concat(testimonial.personPicture.replace('${id}', testimonial.id.toString()), "\" class=\"card-img-top rounded-circle mx-auto mt-3\" alt=\"").concat(testimonial.personName, "\" style=\"width: 100px; height: 100px;\">\n        <div class=\"card-body text-center\">\n          <h5 class=\"card-title\">").concat(testimonial.personName, "</h5>\n          <p class=\"card-subtitle text-muted mb-2\">").concat(testimonial.personCompany, "</p>\n          <h6 class=\"text-primary\">").concat(testimonial.title, "</h6>\n          <p class=\"card-text\">").concat(testimonial.body, "</p>\n        </div>\n        <div class=\"card-footer text-center\">\n          <span class=\"badge bg-success\">Rating: ").concat(testimonial.rating, " / 5</span>\n        </div>\n      </div>\n    ");
        // Ajouter le témoignage au container
        testimonialContainer.appendChild(testimonialCard);
    });
}
