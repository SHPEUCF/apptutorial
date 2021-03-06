---
permalink: /part-1
title: "Part One: The Tale of the Dashboard"
toc: true
toc_sticky: true
type: pages
---

<div markdown="1" class="notice--primary">
***Preamble***  
It is assumed that the reader has some basic programming knowledge and is able to web search anything that may not be explicitly written in the tutorial.

For reference, a link to the solutions can be found at the bottom of the page.
</div>

If you are here, you already have your environment set up and can start coding. If you don't know what I'm talking about, check [Getting Started](/getting-started).
{: .notice--danger}

In Part 1, we will start with making our first screen: the Dashboard. Here, multiple things will be introduced: components, functions, props, modules, and a bunch of other stuff. Throughout the exercises, you will build individual parts of the screen until the Dashboard is finished - without any actual data, since we need to add a database to fully complete it.

<a id="dashboard_final">
![Dashboard final result](../../assets/images/Part1/dashboard_final.png){: width="30%" .align-center}
</a>
_As reference, this is what we're aiming the Dashboard screen to look like. But feel free to make it however you want, since it's your app_.
{: style="text-align: center; font-size: 14px"}

## Exercise 1
**TLDR;** Create a react-native app and make a custom screen (this will be explained later).
{: .notice}

Please make sure that you have your environment set up; that is, you installed Node, an emulator (iOS or Android), and react-native. Double check that you have met these requirements by going to [Getting Started](/getting-started).
{: .notice--danger}

| Node | Expo |
| ---- | ---- |
| To build and run your application using node, create a new react-native app with the command: <br /> ``` npx react-native init <nameOfProject> ``` | To build and run your application using expo, create it with the following command: <br /> ``` expo init <nameOfProject> ``` |

> from [React Native](https://facebook.github.io/react-native/docs/getting-started.html)

This creates the project in the folder "nameOfProject." Inside, you will find multiple files/folders (you will find more, but we only care about a few):

| App.js 		   | File where app development takes place. Everything here is to be rendered. 					   |
| android 		 | Android project 																								                         |
| ios 			   | Xcode project for iOS devices 																				                   |
| index.js 		 | Entry point (aka root file) for react-native app. This is where code begins execution.  |
| node_modules | Folder with all dependencies being used on the project. 											           |
| package.json | Lists all dependencies installed for your project. 													           |

> from [Aman Mittal](https://hackernoon.com/getting-started-with-react-native-in-2019-build-your-first-app-a41ebc0617e2)

If you don't know how to set up your emulator, check out [Getting Started](/getting-started).
{: .notice--warning}

Run your emulator to see what react-native (or expo) made, a really neat "Welcome to React" screen.

| Android                          | iOS                           | Expo                               |
|----------------------------------|-------------------------------|------------------------------------|
| ``` react-native run-android ``` | ``` react-native run-ios  ``` | ``` npm start // or expo start ``` |

Once there, you can edit `App.js` to have your own custom screen. However, it would be better to start from scratch, so **delete the contents of `App.js`**. The reason for this is that the project creator implements code differently than how we code our app.

Normally, this is how your JavaScript files will look like, let's break it down.

```js
1  import React from "react";
2  import { Component } from "react"; 
3  import { View, Text } from "react-native";
4
5  class App extends Component {
6    render() {
7      return (
8       <View>
9         <Text>Hello, world!</Text>
10       </View>
11     );
12   }
13 }
14
15 export default App;
```

If you are emulating your app on a device that has a notch, such as the iPhone 11, your outermost `View` on lines 8 and 10 should instead be `SafeAreaView` so that it can push down the content of the screen away from said notch (make sure to import it as well like line 3 does). Learn more about it [here](https://reactnative.dev/docs/safeareaview.html).
{: .notice--warning}

This is the general structure your files will have in react-native:
* **line 1**: import statement to use the React library.
* **line 2**: import the React component to be extended. This is so we can write `extends Component` instead of `extends React.Component`.

<div class="notice--info" markdown="1">
We can have these statements in a single line, i.e.:

```js
import React, { Component } from "react";
```
</div>

* **line 3**: import [react-native components](https://facebook.github.io/react-native/docs/activityindicator) to be used in the render method.
We will go more in-depth on imports/exports later, but you are free to search for default and named imports/exports online.
* **line 5**: definition of class that extends from the [React base component](https://reactjs.org/docs/react-api.html#reactcomponent).
* **line 6**: required method for any component class. Returns elements to be displayed and can be used for fancier coding before returning.
* **lines 8-10**: [JSX elements](https://reactjs.org/docs/introducing-jsx.html) to be returned (aka rendered, displayed) on the app.
* **line 15**: exports the current class to be used in other files, such as in `index.js`.

**So, what's a component?**  
"Components let you split the [User Interface](https://computer.howstuffworks.com/operating-system10.htm) into independent, reusable pieces, and think about each piece in isolation" *from [ReactJS](https://reactjs.org/docs/components-and-props.html)*.
They are the building blocks for your app that can be used together to create basically everything; you will recognize them by the `<` and `/>` tags, just like in HTML.
{: .notice--info}

If you run this is in an emulator (using the command listed earlier), you will see a very simple screen that says "Hello, world!" (or anything else that you may have written).

For the next exercises, let's build a screen similar to the Dashboard from the SHPE app.

## Exercise 2
**TLDR;** Replace App.js with the bare bones of the Dashboard screen in the SHPE app.
{: .notice}
We will be coding in App.js, using the same structure we did in [Exercise 1](#exercise-1) (we'll be creating a separate file to divide our screens in an organized way in [Part 3](/part-3)).

The Dashboard on the app is more complicated than what we made previously. This is where we have to use [React Native components](https://facebook.github.io/react-native/docs/activityindicator), however you already used two of them: `View` and `Text`.
On the [React Native Docs](https://facebook.github.io/react-native/docs/activityindicator), you will see all components that are provided to us, which can be imported using the statement `import { ... } from "react-native"`, as [Exercise 1](#exercise-1) did in line 3.

Additionally, you will see that we have to include some styling to have the <span style="color: black">black</span>/<span style="color: yellow">yellow</span>/<span style="color: gray">gray</span> colors on the screen, but we should focus first on the functionality rather than the styling.

<div class="notice--warning" markdown="1">
Note that React Native requires you to wrap everything inside a parent `<View>` tag, since React can only return one element; e.g.,
```js
<View>
  // everything...
  // totally everything...
</View>
```
That means that can even have other `View`s inside the parent `View`!
</div>

1. In App.js, start by making the header (you can remove the "Hello, world!" text from Exercise 1). This only consists of a small `View` with bold text. Don't worry about making it bold right now.
1. Then create another `Text` component with the Greeting, these can be hard-coded for now.
1. There are 5 more "blocks": leaderboard, events, committees, Slack, and website. Create these as placeholders using `View`s and `Text`s. They will be filled throughout Part 1.

	What I mean by this is that each "block" should have its own `View` and `Text`, which will help with individual styling later on. As an example:

	```js
	<View> // parent View
	  <View> // title View
		  <Text>Dashboard</Dashboard>
	  </View>
	  <View> // greeting View
		  <Text>Bonjour!</Text>
	  </View>
		...
		...
		// and so on
	</View>
	```

![Exercise 2 screen](../../assets/images/Part1/ex2_screen.png){: width="30%" .align-center}

_Your emulator screen should look like this. Although this is pretty plain, we already divided the code in order to know what goes where. We are only able to do this because we know what the Dashboard should look like - it would be better to do it in small steps on screens you don't know much about._
{: style="text-align: center"}

## Exercise 3
**TLDR;** Style the title (or header) for the Dashboard screen to make it look like the SHPE app.
{: .notice}

Let's start filling in the screen you made in [Exercise 2](#exercise-2). Because we know what the Dashboard screen looks like, we can start placing these blocks in their respective areas (left, right, center...) and add some color or text styling to it. For the most part, we will be hard-coding stuff and will bring minimal functionality by the end of Part 1.

Because we will use styling, we will need styles (!), the [CSS way](https://www.w3schools.com/Css/). React Native allows us to do that in two ways: inline or "global, just like with CSS and HTML.  
For example, if I want to make the text blue, I can do the following: (I encourage you to test this code in App.js)
```js
...
  <Text style = { { color: "#000080" /* navy blue */ } }>
	  I am blue
  </Text>
...
```
However, this can get messy. What if I want to add more styling?
```js
...
  <Text style = { { color: "#FF1493" /* deep-pink */, fontWeight: "bold", textAlign: "center", padding: 10 } }>
	  I am pink, centered, bold, and have a padding of 10 pixels on all sides!
  </Text>
...
```
**Note:** This is slightly different from CSS, if you are familiar with it. Check out fontWeight (instead of font-weight), for example. See [React Native Style](https://facebook.github.io/react-native/docs/style) for more.
{: .notice--info}

And then imagine this being repeated for every other line of code that you write. Not only will you be duplicating styling most of time, but it will be way too cluttered for you to be able to follow your code after you write it.

For this reason, we use a global object called *styles* (by convention) with the [StyleSheet](https://facebook.github.io/react-native/docs/stylesheet.html) component from react-native ([although there appears to be no real difference](https://stackoverflow.com/questions/38958888/react-native-what-is-the-benefit-of-using-stylesheet-vs-a-plain-object) if you use it or not. I won't use it here). With it, we have a global object that contains other objects, the individual styles that we want to apply to different parts of our code.

Now that we know this, we can start making individual styles for the different parts of the Dashboard.

Let's start with the header (or navigation bar): **Dashboard**.
For it, we will need a `View` and `Text` component, that's it. Since we already had these components back from [Exercise 2](#exercise-2), we just need to add the style to the title `View` and `Text`.
```js
...
  <View style = { ... }> // title View
    <Text style = { ... }>Dashboard</Text>
  </View>
...
```
What should the styling be, then? If we look at the [Dashboard screen](#dashboard_final), we will see that the navigation bar is really simple, a black background with a bold white title, centered vertically.

![Dashboard navigation bar](../../assets/images/Part1/ex3_dashboardNavBar.png){: width="45%" .align-center}

To be able to do this, all background styling is placed in the `View` of the title and specific styling to the text in `Text`.

1. Create `styles` as a global constant at the end of App.js, right before the export statement.

	A constant is a variable, used in JavaScript, such as an `int` in C or Java, except that it cannot be changed after it is declared (because it's a constant) and is not restricted to a type. In JavaScript (the language we use), variables are loosely-typed, meaning that we can assign anything to them, whereas `int`s only allow integers. In JS, there's also `let` and `var`, check out more of this [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures).
	{: .notice--info}

1. Inside this object, you can create the name of the styling you want to add, they can be named whatever you want. It will later be accessed using the [dot operator](https://www.w3schools.com/js/js_objects.asp) for objects, e.g. if I create a style called potato inside the `styles` constant, I can access it with `styles.potato`. However, it should be named something that makes sense to you, such as *tabBar* and *tabBarText*.

	```js
	const styles = {
		tabBar: {
			backgroundColor: "#39FF14",
			borderColor: "#000"
		},
		tabBarText: {
			color: "#000"
		}
	}
	```

	Notice how this *styles* object contains other objects inside of it, which you can tell by the use of curly braces `{` and  `}`. Then inside each style, we have key-value pairs just like we did with inline styling.
	{: .notice--info}

1. We will need the following styles (and maybe a few more); you can start writing them in:
* backgroundColor: "#21252B"
* color: "#E0E6ED"
* fontSize: 20
* fontWeight: "bold"

1. After writing the styling in the styles `const`, you can tell React Native to use the styling by placing it in the style for `View` and `Text`, as you would inline.

	```js
	...
		<View style = { styles.tabBar }> // title View
			<Text style = { styles.tabBarText }>Dashboard</Text>
		</View>
	...
	```

	Notice how this time we only used one set of curly braces `{}` to apply styling, which is done to let React Native know we're about to use JavaScript. And how we "call" it by accessing the `styles` global constant we made at the bottom of the file. This is much cleaner than writing styling inline!

	If you have your emulator running, you will see the screen change as you save your file (assuming you have [Fast Refresh](https://facebook.github.io/react-native/docs/fast-refresh) enabled, found in the newest version of react-native, or [Hot Reloading](https://facebook.github.io/react-native/blog/2016/03/24/introducing-hot-reloading.html#hot-reloading) in older versions). Check out [Getting Started](/getting-started) if you're not sure how to enable it.

	![Dashboard style sample](../../assets/images/Part1/ex3_dashboard_sample.png){: width="50%" .align-center}

1. However, if you check your screen, it doesn't look the same as the SHPE app, the title is all cramped up in the corner. We need to increase the space or size of this container.

	We could use padding, but because we want a **fixed size of this bar**, not just whitespace, we use the [`height` style](https://developer.mozilla.org/en-US/docs/Web/CSS/height), which only requires a number.

	![Padding, margin, height...](../../assets/images/Part1/ex3_padding.png){: width="60%" .align-center}

	_A visual representation of padding, margin, border, height, and width - from [DifferenceBetween.com](https://www.differencebetween.com/difference-between-margin-and-vs-padding/)_
	{: style="text-align: center"}

	The problem with setting a random number (like `height: 941`) is that not all phones have the same screen size (if you didn't know), so it may look good on your phone/emulator, but it may be a total catastrophe on another phone. For this reason, we use the `Dimensions` component that [React Native provides](https://facebook.github.io/react-native/docs/dimensions.html#get) and use its `get()` method that returns an object with height and width, among other things. We then access it with the dot property.

	```js
	// Note that I'm not catching any of the values returned, which is bad.
	// I just wanted to show you how to use the Dimensions component and the width and height properties.
	// ---------------------------------------------------------------
	// Method 1
	Dimensions.get("screen").height;  // device height
	Dimensions.get("screen").width;   // device width

	// Or to only call get() once, if you're planning on using it multiple times:
	// Method 2
	const dimension = Dimensions.get("screen");
	dimension.height;  // device height;
	dimension.width;   // device width
	```

	Remember that, in order to use this React Native component, you *have* to import it the same way you did with `View` and `Text`, shown in line 3 of [Exercise 1](#exercise-1).
	{: .notice--warning}

	We generally use the second "method" and set `dimension` as a global constant (at the top of the file, after imports but before the class definition). Anyway, now that we have the height, we can scale it by any constant, which happens to be 0.1 for the navigation bar in the SHPE app - but you can set it to whatever you want, since it's your app!

	```js
	styles = {
		tabBar = {
			backgroundColor: "#21252B",
			//                        ^ notice this fancy comma since there's more than one element
			height: dimension.height * 0.1
			//      ^ dimension is the constant we created using method 2
		},
		tabBarText = {
			...
		}
	}
	```

1. But even then, the title is too close to the left. *Now* we can use padding. You can choose whatever number you like, we used `"5%"` to make sure it respected each device's width instead of setting a certain amount of pixels. Check out CSS padding [here](https://www.w3schools.com/csS/css_padding.asp) and React Native docs for padding [here](https://facebook.github.io/react-native/docs/0.36/layout-props#paddingleft).

	```js
	// Example
	paddingLeft: "10%"
	```

1. We also have a border on the bottom. It is [similar to CSS as well](https://www.w3schools.com/CSSref/pr_border-bottom.asp), but remember that there are no hyphens, use camelCase instead. This [link](https://reactnative.dev/docs/view-style-props) may be useful.  
**Hint**: <span style="color: #252A34">Use borderColor, borderStyle, and borderBottomWidth.</span>

1. Finally, we center it vertically with `justifyContent`, which [can take different values](https://reactnative.dev/docs/flexbox.html#justify-content) - although we probably want to use `center`. (If you go into the link, you will see something called the flexbox; don't worry about it now, we'll explain it later.)

After that, your emulator screen should still be plain, but now with a proper header, as shown before. Next, we have to style the remaining blocks.

This is actually not the best way of doing the header, but we'll do it like this for now. Why? Imagine if you have 30 screens, would you want to rewrite the same code for each one or make a single function that takes care of it?
{: .notice--info}

## Exercise 4
**TLDR;** Style the Greeting and add functionality.
{: .notice}

Let's continue coding up the Dashboard. Now that we did one part, the rest should be similar. 

1. The greeting is simple, just a "hello" and the user's name with the current date. But, we haven't configured anything regarding the database, so we're just gonna [hard-code](https://www.reddit.com/r/ProgrammerHumor/comments/9lllxu/hard_coding/) it for now, same with the date. You can write whatever text you want along with the date. We will fix the date by the end of this exercise.

1. First [notice that the greeting](#dashboard_final) on the app does not have background itself, it is placed on top of the background of the whole screen. For this we would need to style the outermost `View`. Create a new styling in the `styles` object for this, to keep everything organized.
* backgroundColor: "#0C0B0B"

	Two things happen when you do this:
	* We can't see any of the text. Fix this by changing the color of all texts using the color style. You can create a new style for each of the `Text`s or create a common style to be used for all `Text` and name it `textColor`.
	* The background color only takes ~1/4 of the page.	Let's fix this by adding another style to the outermost `View`, `flex: 1`.

	<div class="notice--info" markdown="1">
	**What [flex](https://facebook.github.io/react-native/docs/flexbox.html) does is amazing**, but complicated at first sight. "It makes the component flexible and it will be sized proportional to its flex value" *from [React Native](https://facebook.github.io/react-native/docs/layout-props.html#flex)*.

	`flex: 1` will allow the code to expand the component relative the number given across its main axis. **What is the main axis**, you ask? It is literally the axis we are working in, which is vertical by default, but you can change it with other styling, such as `flex-direction`. For an in-depth explanation of flex, go [here](https://medium.com/the-react-native-log/understanding-react-native-flexbox-layout-7a528200afd4).

	Furthermore, we can combine `flex` with other `flex`s to format the UI however we want. More on that later...
	</div>

1. Also, this greeting has some whitespace around it, so create a style specifically for the greeting `View` and add padding to it.

	![Greeting sample](../../assets/images/Part1/ex4_greeting_sample.png){: width="40%" .align-center}

	What's left? It doesn't look like the [final Dashboard looks](#dashboard_final). Let's fix that.

1. Split the actual greeting and the date into two separate `Text`s so that they are in separate lines.

	```js
	<Text style = { styles.textColor }>Hello, User.</Text> // greeting
	<Text style = { styles.textColor }>Today is March 40, 2081</Text> // date
	//              ^ the style created to have the font color white
	```

1. Create an additional style for the `Text` greeting, which we use to increase the fontSize.

	But, this style would be very similar to the textColor we created earlier. The only difference is that we added fontSize... Do we need a whole new style object just for this `Text` component? Nope.

	A nifty thing JS allows us to do is set the style prop as an array of objects (the styles), so that it can take multiple, different-named styles. In this case, we *can* use inline styling to add a new fontSize style. This is how it's done:

	```js
	<Text style = { [styles.textColor, { fontSize: 20 }] }>Hello, User.</Text>
	```

	Note that subsequent styles will overwrite the previous ones, so in:

	```js
	// Example
	<Text style = { [{ color: "yellow" }, { color: "red" }] }>I am red</Text>
	//                                       ^ I will overwrite the yellow color!
	```

	the text would end up being red, not yellow.

Now that the greeting is where it should be, we can add functions to it and get the current date and do some cool stuff to change the greeting depending on *when* the user is logging in. For this, we will use [JavaScript objects](https://www.w3schools.com/js/js_objects.asp) - specifically the [Date object](https://javascript.info/date) to get the current date.

We want to use this object and do some logic to be able to determine the appropriate greeting and display the date appropriately. This can't be done inside the `return` statement because we are also returning the JSX elements to display. We *could* do it in the `render()` function, but this is bad practice. The best way to do this is to create a separate function inside the `App` class.

We have different options for the function; it can return:
<ol type="a">
	<li>the current date or time in a specified format,</li>
	<li>an object with the current date and custom text, or</li>
	<li><strong>JSX elements displaying the greeting how we want it</strong>.</li>
</ol>

We choose **c**, since it is the simplest solution. Otherwise, with **a** or **b**, `render()` would need to take care of the styling and formatting of the text. By writing a function that takes care of everything, it simplifies the code in the render function, because we would only need to call the function inside the render's return statement.

By the way, you are already familiar with react native functions, since we've used `render()` everywhere (although they are [slightly different from JavaScript](https://www.w3schools.com/js/js_functions.asp)).

1. Create a function with a name that will let your future-self (or collaborators) know what the function does, such as `generateGreeting() {}` or `greeting() {}`.

	Your code will look something like:

	```js
	// import...
	// const...

	class Dashboard extends Component
	{
		greeting() {

		}

		render() {
			return (
				<View style = { }>
				  ...
				</View>
			)
		}

		const styles = {
			...
		}

		export default Dashboard;
	}
	```
1. Inside this function we will have the functionality to get the date and time. For this we need an instance of the [Date object](https://javascript.info/date), as `const date = new Date();`. We create it as a constant so that we don't accidentally change its value later on.

1. Create additional variables (for readability) to save the current day, month, and time. Check out all the available functions for the Date object [here](https://www.tutorialspoint.com/javascript/javascript_date_object.htm). The day and month will be used directly to display text, while `time` will be used for the personalized greeting, depending if the user is opening the application in the morning or afternoon... how?

	![Doggo](https://media.giphy.com/media/FnsbzAybylCs8/giphy.gif)  
	*Adding a picture here because there's too much white, lifeless text*.
	{: style="text-align: center"}

1. Using the time, determine the appropriate greeting, i.e., "Good morning", "Good evening", "Buenas noches"... you decide. This will be done using branches or conditionals, where you are free to use [if..else](https://www.w3schools.com/js/js_if_else.asp) branches or the [ternary operator](https://www.thoughtco.com/javascript-by-example-use-of-the-ternary-operator-2037394), which work the same way as in C or Java (and many other programming languages). You can save this greeting in a separate variable to easily access later when returning the elements, example:

	```js
	let greeting;
	if (time >= 12)
		greeting = "Good evening";
	else
		greeting = "Good morning";
	```

	There's a problem right now that you may not have noticed if you didn't read through the documentation of the Date object. Right now the function to get the current month returns a number from 0 to 11, not the actual month string.
	
	In order to get and display the month by name, we need to use an array of months, then index it with the value returned by `date.getMonth()`. That is, an array with indices ["January", "February", ..., "December"]. It can be declared as `let months = [...]`.

1. Let's finally return the JSX elements from this function, since we have everything we need to display it on the screen. Just like in `render()`, return a main `View` component with what you want inside, some `Text`. You can start by copying the greeting `View` from the render function. This text should display the customized greeting and today's day and month.

	<div markdown="1" class="notice--info">
	You can use previously defined variables by again using the curly braces to invoke JavaScript inside JSX elements. For example:

	```js
	let name = "Isabel";

	return (
		<Text>Hello, { name }</Text>
	);
	// returns "Hello, Isabel"
	```
	</div>

1. Now that we're done, we can call this function from `render` where we previously had the `View` and `Text` for the greeting hard-coded. We can call this function by placing it inside curly braces `{}` so that react native knows we're going to be using JavaScript, not JSX. That is, we have something like:

	```js
	<View> // title View
		...
	</View>
	{ this.greeting() }
	<View> // leaderboard View
		...
	</View>
	```
	<div markdown="1" class="notice--info">
	**What is** `this` **and what is it doing in my code?** *The simplified version*.  
	If you have ever coded on Java, you might have seen `this` already, but it's different in JavaScript. Here, it refers to the object it belongs to and it is defined differently depending on where it is used. In this case, since it's called in a component inside the Dashboard class, we have to tell React Native that the function is defined in the same context we are in. Otherwise it defaults to the global (window) constant, which would result in an error here because the function is defined inside our class, not outside. You can try it out if you want: Define a function outside of the class with the same name and you will be able to call the two different functions, one with `this` and without it.

	We will go more in-depth later on, but if you *really* want to understand it, you can read more on it [here](https://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/).
	</div>

If you rebuild your emulator, you will see that the greeting is displayed correctly.

![Final greeting](../../assets/images/Part1/ex4_greeting_final.png){: width="40%" .align-center}

## Exercise 5
**TLDR;** Make the style skeleton of leaderboard and events.
{: .notice}

This and the following blocks have a similar style, so we can take this into our advantage and reduce the amount of code that we write.

The rest of the screen, because it doesn't have any functionality *yet* (~~even in the most updated version~~ *it has been included in version 1.1*, which was released January 22, 2020), is simpler to code up since we only have to worry about styling, for the most part.

1. To fit the most content, the leaderboard and events are split in two columns, the first column being leaderboard. In order to do this, wrap the individual **Leaderboard** and **Events** in another `View`. Again, check out the [final result of Dashboard](#dashboard_final). An example of an additional `View` for leaderboard and events:

	```js
	<View> // parent View
	  ...
		<View> // leaderboard and events View
		  <View> // leaderboard View
		  </View>
		  <View> // events View
		  </View>
		</View>
		...
	</View>
	```

1. This `View` will allow us to use the flex again! [I hope you remember it](https://reactnative.dev/docs/flexbox) from the previous exercise. Create a new style object for the `View` we just created and use [flexDirection](https://reactnative.dev/docs/flexbox#flex-direction), which permits us to modify the layout of our screen. Add a common styling (and call it `containerStyle`, for example) to the two columns (that is, in the `View` that wraps both the Leaderboard and Events `View`) and use `flexDirection` to display it as two separate columns.

1. This will place "Leaderboard" and "Events" right next to each other, so style the `Text` title of Leaderboard and Events inside their individual columns. You need to make them bold and increase their size, which can be done with `fontWeight` and `fontSize`. More on `Text` styling can be found [here](https://reactnative.dev/docs/text#style).

1. Add more `Text` inside each column as to simulate data on the app. Don't worry about adding real events or users to the leaderboard, this will come later on. Also, don't forget to add the `fontText` style we created earlier so you can see them.

	![Columns next to each other](../../assets/images/Part1/ex5_column_sample.png){: width="50%" .align-center}

1. Here, you will see that both columns are pretty ugly. Let's style each column so that we can tell them apart. For this, we style the individual `View`s that wrap each column. Create a style to be applied to both called `dataContainer` (or whichever other name you want).

1. Align the items to the center with [alignItems](https://reactnative.dev/docs/flexbox.html#align-items) and set `flex` to 1 so that each column respects its proper space and the text isn't hugging it's borders. It would also be good to add `paddingLeft` and `paddingRight` so that the two columns are a bit separated in between. **Tip**: You can use `paddingVertical` to combine both `paddingLeft` and `paddingRight`.

1. However, it doesn't look that good. Go back to the `containerStyle` (which is in the `View` that wraps both Leaderboard and Events, as defined previously). Let's make it so that they stand out from the rest of the screen.

	Set the background color (`#21252B`), padding (`3%`), margin (`3%`), and set a radius (`10`) (with `borderRadius`) so that we have nice, rounded corners.

![Final leaderboard and events](../../assets/images/Part1/ex5_column_final.png){: width="45%" .align-center}

For more specific styling props, [check out the docs](https://reactnative.dev/docs/layout-props) (it's a lot).

## Exercise 6
**TLDR;** Finishing the rest of the screen, almost.
{: .notice}

1. Add styling for **Committees** to make it have rounded corners, centered, and bold. Take into account the styles that are used for its `View` vs `Text`.
* backgroundColor: "#21252B"
* borderRadius: 10
* padding: "3%"
* margin: "3%"
* alignItems: "center"
* color: "#FFF"
* fontWeight: "bold"
* fontSize: 20
* paddingBottom: "5%"

	Note that the last four styles listed are for the title itself, which is actually what we did previously for "Leaderboard" and "Events," so we could use that same styling instead of rewriting the same code.

	That is, if we have the style

	```js
	titleText: {
		color: "#FFF",
		fontWeight: "bold",
		fontSize: 20,
		paddingBottom: "5%"
	}
	```

	we could use it for all titles in our screen!

	Generally, style for specific stuff, such as fontSize, color, and centering lies on the inner tags of the `View`. The background styling, such as backgroundColor, vertical spacing, and direction lies on the `View` itself that wraps the specific content.
	{: .notice--info}

1. (Optional) Add `Text` for the "Coming Soon!" and its respective styling.

	![Committees](../../assets/images/Part1/ex6_committees.png){: width="40%" .align-center}

1. Continue with the **Slack** styling. Here we will use a third-party module. You can style this the same you did for **Committees** using step 1 in its `View` and `Text`.

	<div class="notice--info" markdown="1">
	**What is a module?**  
	"Sometimes an app needs to access a platform API and React Native doesn't have a corresponding module yet. [...] If React Native doesn't support a native feature that you need, you should be able to build it yourself." *from React Native [iOS](https://facebook.github.io/react-native/docs/native-modules-ios.html) and [Android](https://facebook.github.io/react-native/docs/native-modules-android)*.  
	
	It is a library with JavaScript code that serves the purpose of providing us with a feature, be it UI, animations, networks, widgets, etc. so that we only have to install it and then import it into whichever part of our app we want it in.
	</div>

	We want to use module called FontAwesome which is found in the [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons). With it, we use the [icon database](https://oblador.github.io/react-native-vector-icons/) to look up corresponding icons, along with the [Icon component](https://github.com/oblador/react-native-vector-icons#icon-component) to customize its size, style, etc.

1. Let's install the module as specified by their README installation instructions. The following line will install the module and update your package.json file (which is why you should commit and push these changes along with other changes you made to your repository, so that others have access to the same dependencies you use).

	```
	npm i react-native-vector-icons
	//  ^ short for `install`
	react-native link
	// this is used to link the libraries installed to your project, so that you can use the icons you want
	```

	At this point you should rebuild your emulator so that you can see the icons when we add them in the next steps. You will now get an error about a linking issue with React Native, but your app should still build without problems, so let's not worry about it for now.

	**Note**: Previously, npm required to install with the flag `--save` in order to update the dependencies, yet it is done automatically since [node 5.0.0](https://blog.npmjs.org/post/161081169345/v500). *from [voithos on Stack Overflow](https://stackoverflow.com/questions/19578796/what-is-the-save-option-for-npm-install)*
	{: .notice--info}

1. Now that we installed it, you will see changes to the `package.json` file, specifying the added module. We can import it to our app and start using it. In `App.js`, add this import statement:

	```js
	import Icon from "react-native-vector-icons/FontAwesome";
	```

1. Let's actually use it now. Looking at the syntax from the [repo](https://github.com/oblador/react-native-vector-icons#icon-component), we can pass in **props** to the Icon component to change how it looks, which is the main thing we care about with icons.
	
	<div markdown="1" class="notice--info">
	**What are these *props* I keep hearing about?**
	Props, or properties, is data that we pass into a component. Based on the component's definition, it will use the prop given and display it one way or another. You have used them many times before - `style` is one of them. They can be thought of as immutable, why?  
	Let's think about it for a second: What would happen if you give some text the prop style of `color: "blue"`, but it returns text whose color is *[mikado](https://www.colorhexa.com/ffc40c)*..? You can learn more about it [here](https://codeburst.io/props-and-state-in-react-native-explained-in-simple-english-8ea73b1d224e).

	Its counterpart are **states** (as you may have read), but we won't go into this till later.
	</div>

1. Using the [database](https://oblador.github.io/react-native-vector-icons/), select the icons you want to display by setting a name. I encourage you to play with the module and use different icons, changing their color, size, and adding props to it. Later on we will use these icons to simulate a button, pretty cool right?

	You will also notice other types of icons in the database, but because you imported `"Ionicons"`, you can only use those. I wonder if you could import [multiple icon sets](https://github.com/oblador/react-native-vector-icons#bundled-icon-sets)...

	```js
	// Example
	<Icon size = { 25 } color = "#FFC107" name = "slack" />
	```

1. Finally, before we finish this exercise, style the "website" block as we did we did others using the `generalStyle` and the `titleText` we created. We will add a link to it on the next exercise.

![Final committees and website](../../assets/images/Part1/ex6_final.png){: width="40%" .align-center}

Let's cut it off here and add a behavior to the icon on the next exercise... because it's too much so far.

## Exercise 7
**TLDR;** Adding onPress events.
{: .notice}

Now, let's make the icon behave as a button. In its documentation, the `Icon` component has an onPress prop which allows us to provide it a function to be triggered every time the user presses the icon. When a function is small enough, you can place it inline as shown in [this example](https://reactnative.dev/docs/handling-touches#displaying-a-basic-button); otherwise, you call them differently (explained on the next steps). A simple function that we can add to `onPress` is the `alert()` function [from JavaScript](https://www.w3schools.com/jsref/met_win_alert.asp).

```js
// Example
<View>
  <EvilIcons // imported `from "react-native-vector-icons/EvilIcons"`
    size = { 30 }
    name = "sc-google-plus"
    onPress = { () => alert("Google Plus is dead.") }
  />
</View>
// This will show the user an alert every time the icon is pressed
```
*Notice how the component properties were split in different lines as otherwise the line would be too long*.

We want to use the icon to go to the Slack app, found on [shpeucf.slack.com](www.shpeucf.slack.com). For this, we have to use another component that will open up the link on the user's phone when the icon triggered. This magical component is [Linking](https://reactnative.dev/docs/linking.html#openurl), of which we will use the openURL **method**, along with other neat and complex stuff.

If you look at the current SHPE app Dashboard.js (February 2020), you will see that the Icon uses the following.

```js
<Icon ... onPress = { () => Linking.openURL("https://www.shpeucf.slack.com") }/>
//                  ^ this is an anonymous arrow function
//                    which takes no parameters and calls the Linking.openURL() method
```

To learn more about arrow functions, look at this [link](https://www.w3schools.com/Js/js_arrow_function.asp).

Since it is a component and it *is* from react native, you also have to import (just like you did with dimensions).
{: .notice--warning} 

However, the problem with this approach is that it only opens the web browser on the requested link, not the Slack app. A way we solve this is using **deep linking** (read the first part of [this article](https://arsfutura.co/magazine/deep-linking-in-react-native/) to learn more about it).

To open the URL, we can use deep linking from the [Slack API](https://api.slack.com/reference/deep-linking#open_slack) to directly open it in the Slack app.

1. If you look at the API, you will see deep linking using `slack://`. Add the standard open (found on the API) link to the `onPress` prop (following the previous example) and test it.

1. What's the issue with this? We are not actually opening the SHPE UCF Slack workspace, we just open the Slack app. On the API site, below the standard open, you will see we can specify the workspace with a `TEAM_ID`. Use this link and test it. *FYI: The ID is `TC61JSPUZ`*.

	```js
	// That is, your onPress should look like this:
	onPress = { () => Linking.openURL("slack://open?team={TC61JSPUZ}") }
	```

	Another issue with this is that the button behaves weirdly: If the app is on the phone, Slack will open; otherwise, it won't do anything. To prevent this from happening, we can use the `canOpenURL()`, which is an interesting function we may not be ready to deal with until we get to later parts.

	![Cat](https://i.imgur.com/YCOOrTz.jpg){: width="40%" .align-center "}
	*[Cat](https://www.reddit.com/r/CatsStandingUp/comments/f7s4pj/cat/)*.
	{: style="text-align: center"}
	
	In addition, this function works great for Android, but is a little troublesome for iOS (read the issues [here](https://reactnative.dev/docs/linking.html#canopenurl)), since we have to add some special stuff. For this reason, we can go back to opening a webpage link with `Linking` and revisit this later on.
	
	I didn't want to waste your time doing this, just wanted to let you know of issues that you will run into with development, where oftentimes you will have to stop and continue with other sections.

To finish, now that we know how to use `onPress` and `Linking`, we can do the same thing with the shpeucf.com website. While we're at it, let's learn of another component `TouchableOpacitiy`, found [here](https://reactnative.dev/docs/touchableopacity.html). This component behaves just like `View`, except that we can add a function to it and trigger it when pressed - this, of course, happens because it has an `onPress` prop!

1. Add `TouchableOpacity` to the import statement and replace the `View` for the website "block" with it.

2. Add the `onPress` prop to our new `TouchableOpacity`, and follow the same pattern we use for the Icon. Note, however, that the new link is `https://www.shpeucf.com`.

	And that's it! You will see now that the whole "block" acts as a button, which makes it easier than to press the icon.

By the way, I should mention by now that we will not be able to create the bottom bar until [Part 2](./part-2), which is actually what is next, woo!

***  
**[Solutions](https://github.com/SHPEUCF/apptutorial/tree/master/solutions)**