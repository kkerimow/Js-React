// Navigation

// let li = document.querySelector('[data-current="3"]');
let wrapper = document.querySelector('.wrapper');

// console.log(wrapper.lastElementChild);

for (let node of wrapper.childNodes) {

    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}
