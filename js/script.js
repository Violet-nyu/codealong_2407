const gallery = document.getElementById('tree-gallery');

trees.forEach(createTreeCard);

function createTreeCard(tree){
    const treeDiv = document.createElement('div');
    treeDiv.className = 'tree';

    const treeName = document.createElement('h2');
    treeName.textContent = tree.name;
    treeDiv.appendChild(treeName);

    const treeImage = document.createElement('img');
    treeImage.src = tree.imagePath;
    treeImage.alt = tree.name;
    treeDiv.appendChild(treeImage);

    const treeDescription = document.createElement('p');
    treeDescription.textContent = `Description: ${tree.description}`;
    treeDiv.appendChild(treeDescription);

    const treeLink = document.createElement('a');
    treeLink.href = tree.link;
    treeLink.textContent = "Learn More";
    treeDiv.appendChild(treeLink);

    gallery.appendChild(treeDiv);
};