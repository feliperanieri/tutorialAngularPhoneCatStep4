'use strict';

// Register `loremText` component, along with its associated controller and template
angular.
  module('loremText').
  component('loremText', {
    templateUrl: 'lorem-text/lorem-text.template.html',
    controller: function LoremTextController() {
      this.lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus porttitor felis, at consequat sapien cursus a. Pellentesque non urna eget lectus malesuada condimentum. In ut mollis eros. Ut molestie massa et justo viverra, eu feugiat felis semper. Suspendisse eu leo eu purus tempor tristique eu vel sapien. Nullam pulvinar ultrices ipsum vitae iaculis. Nam vel ligula sit amet magna imperdiet pretium non id urna. Duis cursus mollis nibh, sit amet gravida ante semper et. Mauris lacinia sodales magna sit amet porta. Curabitur tincidunt lorem nulla, eget aliquam lectus eleifend quis. Fusce eu rhoncus arcu. Pellentesque turpis est, congue non velit rutrum, gravida vehicula dui. Suspendisse tempus elit tincidunt dui pretium mollis.'
    }
  });
