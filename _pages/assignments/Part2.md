---
permalink: /assignments/part-2
title: "Part Two"
toc: true
toc_sticky: true
---

In Part 2, we will learn how to install additional libraries into our app. Specifically, we will install [react-native-router-flux](https://github.com/aksonov/react-native-router-flux) which is a library created to facilitate screen navigation. As shown on their GitHub, screen navigation is a way for us to connect screen togethers and be able to, well, _navigate_ through them! I have added their demo gif below.

![Screen navigation](https://user-images.githubusercontent.com/3681859/27937441-ef61d932-626b-11e7-885f-1db7dc74b32e.gif){: width="40%" .align-center}

--- 

**So, what is the *Router* and why do we need it?**  
Right now, our app has only one simple screen, the Dashboard. However, an app usually has more than one screen and in order to do that, we need the functionality of screen navigation (which the Router provides). We will then be able to split these screens into multiple files, because it would be completely *awful* to have a ton of screens in single .js file... it would probably be > 10000 lines of code and impossible to work with.
{: .notice--info}

Some prep work: Create 3 new screen files called **Events**, **Profile**, and **More**. Go ahead and follow the format that you learned when making the Dashboard screen in [Part 1](./part-1). You don't need to go into styling or anything, just have their `render()` functions return an empty `View` component.

## Exercise 1
**TLDR;** Install the react-native-router-flux library and create the router file.
{: .notice}

As you learned [before](./part-1#exercise-6), you install libraries, or modules, into your app by using the command

  ```
  npm install <package name>
  ```

This adds it to the dependency list of your project. You can check out the current dependencies and their versions in the `package.json` file.

1. Install `react-native-router-flux`.
2. Let's create the router file, this houses the implementation of the library. We could create this file anywhere, but to avoid having 50 files all in the same place, let's organize stuff. Create an `src` (short for source) folder.
3. Inside this folder, create another folder called `config` (short for configuration), this is the folder that will contain `Router.js`, you can create it as well.

    This `Router.js` file will contain a function component that returns the Router component.

    A function component can come in the form of:

    ```js
    const RouterComponent = () => {
      // Imagine some fancy code here
    }
    ```

    **What the heck is a function component?**  
    A function component is another way of making a class component to render JSX elements just as we did in [Part 1, Exercise 1](./part-1#exercise-1). The main difference is that we can't modify states or lifecycle, which we haven't covered yet. The important thing is that they are simpler since we don't handle as much stuff, but because we don't use it in the Router we can take advantage of that. You can read more about functional vs class components [here](https://guide.freecodecamp.org/react-native/functional-vs-class-components/) or [go down a rabbit hole](https://www.robinwieruch.de/react-function-component). <sub>please note that we get this function component from the React.js library, which is why the second link may have different syntax from React Native</sub>
    {: .notice--info}

    For now make your function return the Router component as a paired tag element as shown below and we'll go ahead and expand on the implementation of the router in the next exercises.

    ```js
    ...
      return (
        <Router>
        <Router/>
      )
    ...
    ```

    <div class="notice--warning" markdown="1">
    **Note**: Make sure that you properly import the router component from the react-native-router-flux library and that you export your new function component, otherwise you will get an error like this:
    
    ```
    // You forked up
    
    ```
    </div>

## Exercise 2
**TLDR;** Add our current screen (Dashboard) to the router component.
{: .notice}

The Router component makes use of some navigation components called `Stacks` and `Scenes`. Stacks allow you to group Scenes, while Scenes are the specific screens that we want to access. If you look around in the [documentation](https://github.com/aksonov/react-native-router-flux), you'll see some examples of how stacks and scenes are laid out in the code.

Similar to how we wrap our JSX elements in one "big" `View` on screens (as we did in App.js in Part 1), we wrap everything around a parent `Stack`. You can't have multiple stack components at the outermost level, there needs to be one stack component that encapsulates all the other stacks.

```js
<Router>
  <Stack> // outer stack
    <Stack> // first inner stack
      <Scene/> // I will make a scene (and end it)
    </Stack>
    <Stack> // second inner stack
      <Scene/> // another dramatic scene
    </Stack>
  </Stack>
</Router>
```

For this exercise, follow the [documentation](https://github.com/aksonov/react-native-router-flux) and create a stack with the key `"root"` inside of your Router component. Then, within this Stack, place all four screens that we have created so far as individual scenes.

```js
...
<Stack
  key = "root">
  <Scence>

...
```
{::comment}Props/states have not been discussed before this point.{:/}

Your Stack should have the follwing props values implemented:  
```js 
  key = "root"  
  tabs  
  tabBarPosition = "bottom"  
  type = {ActionConst.RESET}
```

{::comment}Why those props specifically? What to they do?{:/}

We're mimicking the SHPE App with the tab bar that is used to switch between the main screens of the app. So we don't really need to save these scenes into a call stack {::comment} What is that? {:/} since we use the tab bar to navigate between them. The value "ActionConst.RESET" means that whenever a new scene is called within this stack, it will fully empty the current call stack and bring up the new scene without transitioning. We'll want to change the type value in other situations in the future. 

Your Scenes should have the following prop values implemented for each screen:  
```js
  key="-screenname-"
  hideNavBar
  component={-Screenname-}
  tabBarLabel="-Screenname-"
```

The overall layout of this exercise should kinda look like this:  
```js
return (
  <Router>
    <Stack>
      <Scene/>
      <Scene/>
      <Scene/>
      <Scene/>
    </Stack>
  </Router>
)
```

For more info on these props, make sure to check out the Router documentation. For example, other cool stuff we can do with them is:

<div class="notice--warning" markdown="1">
Note: Make sure to properly import the screens into the Router.js file just like when we import other components. Otherwise, you will get an error like this:

```
```
</div>

## Exercise 3
**TLDR;** Call our new router function component inside of App.js.
{: .notice}

You've done the hard part, which is starting to build your actual router. This router will now function as the backbone of the app when it comes to scene navigation. Any new scenes you make will have to be placed inside the router strategically to be able make full use of the router APIs functionality. But more on that later. 

What do you do know if we want to actually see any of the changed we made? We just need to hand over the reigns of the app to the router. So, go to your App.js file and import your router function component from the Router.js file. 

Note: When importing components from other Javascript files, if those components were exported as default, the following import statements would be identical.

{::comment} What are default vs named exports? This should be removed from Part 2, or only give a sneak peak into exports/imports {:/}

```js
import Stuff from './File'
import Stuffs from './File'
```

Essentially these import statements are only going to grab whatever was exported as default from the directory you indicated, so it doesn't matter what you name the import. Just remember to use the name you gave it when you call it inside your code.

Once you've imported the function component, replace everything in the render return block with the import as a single tagged element as shown below.

{::comment} What are self-closing tags and when do we use them? {:/}
```js
return (
    <YourFunctionComponent />
)
```

Now when you open your app, you should see the tabBar at the bottom, allowing you switch between the different screens. 

<div class="notice--info" markdown="1">
Note: You might've noticed some yellow warnings popping up in your emulator. This is because the react-native-router-flux library is still using some older react functions that are being deprecated *eventually*. For now, place the following bit of code in App.js before your App component to get rid of any yellow warnings.

```js
console.disableYellowBox = true;
```
</div>


---
Solutions