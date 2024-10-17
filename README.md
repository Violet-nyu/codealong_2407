## Step 1: Access the gallery element

```javascript
const gallery = document.getElementById('tree-gallery');
```

Explanation:

- We are using `document.getElementById()` to select an HTML element with the id of 'tree-gallery'.
- This element will serve as the container where we will dynamically add content (the tree information) later on.
- The `const` keyword is used to create a constant variable named gallery, which stores a reference to this DOM element.

## Step 2: Iterate over the `trees`array

```javascript
trees.forEach(function(tree){
    console.log(tree);
});
```

Explanation:

- There is a variable `trees` which is an array of tree objects.
- Each object might have properties like name, imagePath, description, and link.
- We use forEach() to loop through every object (referred to as tree) in the trees array.
- This method allows us to execute a function (defined by the code block inside) on each tree in the array.

## Step 3: Create a `div` for each tree

```javascript
    const treeDiv = document.createElement('div');
    treeDiv.className = 'tree';
```

Explanation:

- For each tree, we create a div element using `document.createElement('div')`.
- This will hold the individual tree's information (like its name, image, and description).
- We assign the div a class name of 'tree' using className.
- This class could be used in CSS to style each tree’s card uniformly.

## Step 4: Add the tree's name as an h2 element

```javascript
    const treeName = document.createElement('h2');
    treeName.textContent = tree.name;
    treeDiv.appendChild(treeName);
```

Explanation:

- We create an `h2` element using `document.createElement('h2')` to represent the name of the tree.
- We assign the `tree.name` (a property from the tree object in the array) to the `textContent` of the `h2` element.
- This will display the name of the tree in the heading.
- Finally, we append the `h2` (tree name) to `treeDiv` using `appendChild()`.
- This means the tree's name is now part of the div we created for this specific tree.

## Step 5: Add an image for the tree

```javascript
    const treeImage = document.createElement('img');
    treeImage.src = tree.imagePath;
    treeImage.alt = tree.name;
    treeDiv.appendChild(treeImage);
```

Explanation:

- We create an `img` element using `document.createElement('img')`.
- We assign `tree.imagePath` (the path to the tree's image) to the `src` property of the image, so the browser knows where to get the image.
- We also set the `alt` property to `tree.name`, which will be displayed if the image can't load, and it improves accessibility for screen readers.
- Lastly, we append the `img` element to `treeDiv`, making the image part of this tree's display.

## Step 6: Add the tree's description as a p element

```javascript
    const treeDescription = document.createElement('p');
    treeDescription.textContent = `Description: ${tree.description}`;
    treeDiv.appendChild(treeDescription);
```

Explanation:

- We create a `p` (paragraph) element to hold the description of the tree.
- We set its `textContent` to the string "Description: " followed by `tree.description`, which comes from the tree object.
This will display a descriptive text about the tree.
- Then we append the p element to treeDiv.

### 6.B Template Literals

What are Template Literals?

- The expression `${tree.description}` is an example of template literalsin JavaScript.
- Template literals are a way to embed variables or expressions inside a string
- Template literals use backticks (`) instead of regular quotation marks.
- Inside the string, you can use the `${}` syntax to insert variables dynamically.

Why Use Template Literals?

- Convenience: They allow you to embed variables or expressions directly inside a string, avoiding the need for concatenation (+ operator)

```javascript
treeDescription.textContent = "Description: " + tree.description;

```


- Readability: The code is more readable and maintainable compared to concatenation, especially when combining multiple variables or long strings.

## Step 7: Add a "Learn More" link

```javascript
    const treeLink = document.createElement('a');
    treeLink.href = tree.link;
    treeLink.textContent = "Learn More";
    treeDiv.appendChild(treeLink);
```

Explanation:

- We create an `a` (anchor) element, which is an HTML link.
- We set the `href` attribute to `tree.link`, the URL where more information about the tree can be found.
- The text of the link is set to "Learn More".
Finally, we append this link to the `treeDiv`.

## Step 8: Append the treeDiv to the gallery

```javascript
    gallery.appendChild(treeDiv);
```

Explanation:

- After assembling all the elements (name, image, description, and link) into `treeDiv`, we now append this div to the gallery element (which we selected at the beginning).
- This adds the complete block of information about this specific tree to the webpage.