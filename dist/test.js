"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("@std/assert");
const testimonials_ts_1 = require("../src/testimonials.ts");
Deno.test("Does getThreeTopTestimonials return in descending order", () => {
    const toTestTestimonials = (0, testimonials_ts_1.getThreeTopTestimonials)(testimonials_ts_1.testimonials);
    (0, assert_1.assertEquals)(toTestTestimonials[0].rating, 5, "Le premier témoignage est incorrect");
    (0, assert_1.assertEquals)(toTestTestimonials[1].rating, 4, "Le deuxième témoignage est incorrect");
    (0, assert_1.assertEquals)(toTestTestimonials[2].rating, 3, "Le troisième témoignage est incorrect");
});
Deno.test("Does getThreeTopTestimonials return 3 testimonials", () => {
    const toTestTestimonials = (0, testimonials_ts_1.getThreeTopTestimonials)(testimonials_ts_1.testimonials);
    (0, assert_1.assertEquals)(toTestTestimonials.length, 3, "Le premier témoignage est incorrect");
});
