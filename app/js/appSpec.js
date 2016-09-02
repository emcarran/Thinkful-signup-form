describe('optIn', function () {
    var scope, element, compiled, html;

    beforeEach(module('myApp'));
    //beforeEach(module('optin-template.html'));
    beforeEach(inject(function ($compile) {
        //scope = scope.$new();
        var html = '';
        html += "<div class='optin-container'>";
        html += "<div class='input-wrapper'>";
        html += "<form name='signupForm' action='' method='get ' novalidate>";
        html += "<div class='half-input-wrapper'> ";
        html += "<input name='first-name' placeholder='first name'/>";
        html += "</div>";
        compiled = $compile(html);
        element = compiled(scope);
        scope = $digest();
    }));

    it('should render the singup Form', function () {
        expect(element.find('input[name="first-name"]').length).toBe(1);
        expect(element.find('input[name="last-name"]').length).toBe(1);
        expect(element.find('input[name="email"]').length).toBe(1);

    });
});
