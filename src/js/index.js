/* jshint  esnext: true */
import Comp1 from "./components/comp1";

var r = new Ractive({
    el: "body",
    template: "<comp1></comp1>",
    components: {
        comp1: Comp1,
    },
});
