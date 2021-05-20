import a from "../images/Pool_1/1-1.jpg";
import b from "../images/Pool_1/1-2.jpg";
import c from "../images/Pool_1/1-3.jpg";
import d from "../images/Pool_1/1-4.jpg";

import a_a from "../images/Pool_2/2-1.jpg";
import b_a from "../images/Pool_2/2-2.jpg";
import c_a from "../images/Pool_2/2-3.jpg";
import d_a from "../images/Pool_2/2-4.jpg";

import a_b from "../images/Pool_3/3-1.jpg";
import b_b from "../images/Pool_3/3-2.jpg";
import c_b from "../images/Pool_3/3-3.jpg";
import d_b from "../images/Pool_3/3-4.jpg";

import a_c from "../images/Pool_4/4-1.jpg";
import b_c from "../images/Pool_4/4-2.jpg";
import c_c from "../images/Pool_4/4-3.jpg";
import d_c from "../images/Pool_4/4-4.jpg";

import a_d from "../images/Pool_5/5-1.jpg";
import b_d from "../images/Pool_5/5-2.jpg";
import c_d from "../images/Pool_5/5-3.jpg";
import d_d from "../images/Pool_5/5-4.jpg";

export const FIRST_IMAGES = [a, b, c, d];

export const SECOND_IMAGES = [a_a, b_a, c_a, d_a];

export const THIRD_IMAGES = [a_b, b_b, c_b, d_b];

export const FOURTH_IMAGES = [a_c, b_c, c_c, d_c];

export const FITH_IMAGES = [a_d, b_d, c_d, d_d];

export const MAPPING = {};

const processArray = arr => {
    for (let i = 1; i <= arr.length; i++) {
        MAPPING[arr[i-1]] = i;
    }
};

processArray(FIRST_IMAGES);
processArray(SECOND_IMAGES);
processArray(THIRD_IMAGES);
processArray(FOURTH_IMAGES);
processArray(FITH_IMAGES);
