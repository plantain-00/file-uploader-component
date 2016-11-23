import * as Vue from "vue";

import "../../dist/vue";

/* tslint:disable:only-arrow-functions */
/* tslint:disable:no-unused-new */
/* tslint:disable:object-literal-shorthand */

new Vue({
    el: "#container",
    data() {
        return {
            locale: navigator.language,
        };
    },
    methods: {
        fileUploaded(file: File | Blob) {
            console.log(file);
        },
    },
});
