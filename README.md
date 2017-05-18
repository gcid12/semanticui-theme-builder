# semanticui-theme-builder
Basic implementation of Semantic UI to start building Semantic UI themes


##Installation
```npm install```

Answer 3 questions as:
`Automatic` , `yes` , `yes` (Moving the cursor in your keypad)

Build Semantic for the very first time
```cd Semantic```
```gulp build```

##Seeing in browser

To see the Semantic Theme in action open in your browser:
``` /public/examples/theming.html ```

##Modifying the Theme
To modify the theme change variables of the component you want to change.
This variables are located inside:

```/semantic/src/themes/default/ ```

For example to change the color of the theme go to:

```/semantic/src/themes/default/globals/site.variables```

and change a variable (e.g.)

``` @primaryColor        : pink; ```

This change will affect multiple components that use the   `primaryColor` variable

To change more specific details of the theme go directly to the component variables file
 For example to change a button details go to:

```/semantic/src/themes/default/elements/site.variables```

##Important

To see the changes reflected in the browser you need to re-compile Semantic UI


1.Go to Semantic UI folder

```cd Semantic```

2.Compile the theme

```gulp build```

3.Or better start "watch" so Gulp recompile automatically every time you save a change:

``` gulp --watch```

4. Check your changes on the general sheet:

``` /public/examples/theming.html ```

or by specific component

``` /public/examples/components/button.html ```
``` /public/examples/components/card.html ```
``` /public/examples/components/table.html ```

etc..










