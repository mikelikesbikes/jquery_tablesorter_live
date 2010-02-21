# jquery tablesorter live

Many thanks are due to Christian Bach for creating the [jquery tablesorter plugin](http://tablesorter.com/docs/). Without it none of this would be possible.

## About

The "live" plugin (and associated parsers) add the necessary components to use tablesorter on columns with input elements as their content. It will pickup changes to the input elements and direct tablesorter to rebuild its internal cache based on the new values (checked, unchecked, selected, etc) provided by the user.

## Usage

"live" is fairly easy to use. It comes in a couple of pieces. First, a plugin called "live". Second, a collection of parsers. Open up the index.html file for a nice demo.

Step 1: Include the javascript files

    <script src="jquery.tablesorter.js" type="text/javascript"></script>
    <script src="jquery.tablesorter.live.js" type="text/javascript"></script>

Step 2: Setup the live plugin (in your application script)

    $("#myTable").tablesorter({
      widgets: ['live-inputs']

Step 3: Wire up the column parsers (optional, auto detection for :text, :radio, :checkbox and select)

      headers: {
        0: {
          sorter: 'text-select'
          },
        1: {
          sorter: 'checkbox'
        },
        2: {
          sorter: 'radio'
        },
        4: {
          sorter: 'text-input'
        }
      }
    });

## Caveats

* Only supports text based input, radio/checkboxes, and text based selects. Support for most other types/combinations of form elements is coming.
* On large tables the cache is entirely rebuilt every time an input element fires a change event. I plan to optimize this at some point, perhaps by triggering the update/appendCache events just before sorting occurs. Feel free to fork this repo if you need that functionality.

## Contact

Please feel free to send me a message if you have any issues, or would like to see support for a specific use case.

This plugin brought to you by [Mike Busch](http://mikelikesbikes.com).