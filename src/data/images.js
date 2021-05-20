import a from "../images/Pool_1/1-1.png";
import b from "../images/Pool_1/1-2.png";
import c from "../images/Pool_1/1-3.png";
import d from "../images/Pool_1/1-4.png";

import a_a from "../images/Pool_2/2-1.png";
import b_a from "../images/Pool_2/2-2.png";
import c_a from "../images/Pool_2/2-3.png";
import d_a from "../images/Pool_2/2-4.png";

import a_b from "../images/Pool_3/3-1.png";
import b_b from "../images/Pool_3/3-2.png";
import c_b from "../images/Pool_3/3-3.png";
import d_b from "../images/Pool_3/3-4.png";

import a_c from "../images/Pool_4/4-1.png";
import b_c from "../images/Pool_4/4-2.png";
import c_c from "../images/Pool_4/4-3.png";
import d_c from "../images/Pool_4/4-4.png";

import a_d from "../images/Pool_5/5-1.png";
import b_d from "../images/Pool_5/5-2.png";
import c_d from "../images/Pool_5/5-3.png";
import d_d from "../images/Pool_5/5-4.png";

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
