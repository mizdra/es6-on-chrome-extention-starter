import $ from "jquery";

export default class Hello {
    static write() {
        $('body').html('<h1>Hello!</h1>');
    }
}