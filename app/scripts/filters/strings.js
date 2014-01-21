//////////////////////////////
// Underscore String Filters
//
// Requires Angular and Underscore String
//////////////////////////////
define(['angular', '_string'], function () {
  angular.module('StringFiltersModule', [])
    //////////////////////////////
    // Capitalize
    //
    // Converts first letter of the string to uppercase.
    // {{ 'hello world' | capitalize }} => 'Hello world'
    //////////////////////////////
    .filter('capitalize', function () {
      return function (input) {
        return _.str.capitalize(input);
      };
    })
    //////////////////////////////
    // Camelize
    //
    // Converts underscored or dasherized string to a camelized one
    // {{ '-moz-transform' | camelize }} => 'MozTransform'
    //////////////////////////////
    .filter('camelize', function () {
      return function (input) {
        return _.str.camelize(input);
      };
    })
    //////////////////////////////
    // Classify
    //
    // Converts string to camelized class name
    // {{ 'some_class_name' | classify }} => 'SomeClassName'
    //////////////////////////////
    .filter('classify', function () {
      return function (input) {
        return _.str.classify(input);
      };
    })
    //////////////////////////////
    // Underscored
    //
    // Converts a camelized or dasherized string into an underscored one
    // {{ 'MozTransform' | underscored }} => 'moz_transform'
    //////////////////////////////
    .filter('underscored', function () {
      return function (input) {
        return _.str.underscored(input);
      };
    })
    //////////////////////////////
    // Dasherize
    //
    // Converts a underscored or camelized string into an dasherized one
    // {{ 'MozTransform' | dasherize }} => 'moz-transform'
    // {{ 'MozTransform' | dasherize:true }} => '-moz-transform'
    //////////////////////////////
    .filter('dasherize', function () {
      return function (input, leadingDash) {
        leadingDash = leadingDash || false;

        var dashed = _.str.dasherize(input);

        if (leadingDash) {
          return dashed;
        }
        else {
          return dashed.slice(1);
        }
      };
    })
    //////////////////////////////
    // Titleize
    //
    // Converts a string ti title case
    // {{ 'my name is epeli' | titleize }} => 'My Name Is Epeli'
    //////////////////////////////
    .filter('titleize', function () {
      return function (input) {
        return _.str.titleize(input);
      };
    })
    //////////////////////////////
    // Slugify
    //
    // Transform text into a URL slug. Replaces whitespaces, accentuated, and special characters with a dash.
    // {{ 'Un ŽlŽphant ˆ l'orŽe du bois' | slugify }} => 'un-elephant-a-loree-du-bois'
    //////////////////////////////
    .filter('slugify', function () {
      return function (input) {
        return _.str.slugify(input);
      };
    })
    //////////////////////////////
    // Strip Tags
    //
    // Removes all html tags from string.
    // {{ 'a <a href="#">link</a>' | stripTags }} => 'a link'
    // {{ 'a <a href="#">link</a><script>alert("hello world!")</script>' | stripTags }} => 'a linkalert("hello world!")'
    //////////////////////////////
    .filter('stripTags', function () {
      return function (input) {
        return _.str.stripTags(input);
      };
    })
    //////////////////////////////
    // To Number
    //
    // Parse string to number. Returns NaN if string can't be parsed to number.
    // {{ '2.556' | toNumber }} => 3
    // {{ '2.556' | toNumber:1 }} => 2.6
    //////////////////////////////
    .filter('toNumber', function () {
      return function (input, decimals) {
        decimals = decimals || 0;
        return _.str.toNumber(input, decimals);
      };
    })
    //////////////////////////////
    // Prune
    //
    // Elegant version of truncate. Makes sure the pruned string does not exceed the original length. Avoid half-chopped words when truncating.
    // {{ 'Hello, world' | prune:5 }} => 'Hello...'
    // {{ 'Hello, world' | prune:8 }} => 'Hello...'
    // {{ 'Hello, world' | prune:5:' (read a lot more)' }} => 'Hello, world' (as adding "(read a lot more)" would be longer than the original string)
    // {{ 'Hello, world' | prune:5:' wrld' }} => 'Hello wlrd' (as adding ' wrld' is shorter than original string, that gets appended after the 5 character break)
    // {{ 'Hello, cruel world' | prune:15 }} => 'Hello, cruel...'
    // {{ 'Hello' | prune:10 }} => 'Hello'
    //////////////////////////////
    .filter('prune', function () {
      return function (input, length, pruneString) {
        pruneString = pruneString || 'É';
        return _.str.prune(input, length, pruneString);
      };
    })
    //////////////////////////////
    // Humanize
    //
    // Converts an underscored, camelized, or dasherized string into a humanized one. Also removes beginning and ending whitespace, and removes the postfix '_id'.
    // {{ '  capitalize dash-CamelCase_underscore trim  ' | humanize }} => 'Capitalize dash camel case underscore trim'
    //////////////////////////////
    .filter('humanize', function () {
      return function (input) {
        _.str.humanize(input);
      };
    })
    //////////////////////////////
    // Starts With
    //
    // This method checks whether string starts with starts.
    // {{ 'image.gif' | startsWith:'image' }} => true
    //////////////////////////////
    .filter('startsWith', function () {
      return function (input, starts) {
        _.str.startsWith(input, starts);
      };
    })
    //////////////////////////////
    // Ends With
    //
    // This method checks whether string ends with ends.
    // {{ 'image.gif' | endsWith:'gif' }} => true
    //////////////////////////////
    .filter('endsWith', function () {
      return function (input, ends) {
        _.str.endsWith(input, ends);
      };
    })
    //////////////////////////////
    // Edit Distance
    //
    // Calculates Levenshtein distance between two strings.
    // {{ ['kitten', 'kittah'] | editDistance }} => 2
    //////////////////////////////
    .filter('editDistance', function () {
      return function (input) {
        return _.str.levenshtein(input[0], input[1]);
      };
    })
    //////////////////////////////
    // Escape HTML
    //
    // Converts HTML special characters to their entity equivalents.
    // {{ '<div>Blah blah blah</div>' | escapeHTML }} => '&lt;div&gt;Blah blah blah&lt;/div&gt;'
    //////////////////////////////
    .filter('escapeHTML', function () {
      return function (input) {
        return _.str.escapeHTML(input);
      };
    })
    //////////////////////////////
    // Unescape HTML
    //
    // Converts entity characters to HTML equivalents.
    // {{ '&lt;div&gt;Blah blah blah&lt;/div&gt;' | unescapeHTML }} => '<div>Blah blah blah</div>'
    //////////////////////////////
    .filter('unescapeHTML', function () {
      return function (input) {
        return _.str.unescapeHTML(input);
      };
    });
});