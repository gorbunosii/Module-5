'use strict';

const advertising = document.getElementsByClassName(`ads`);

advertising[0].remove();

const cell = document.querySelectorAll(`.item`);

cell[3].after(cell[0]);

const propsList = document.querySelectorAll(`.props__list`);


const propsItemType = document.querySelectorAll(`.props__item_four`);
const propsItemES6 = document.querySelectorAll(`.props__item_two`);
const propsItemObject = document.querySelectorAll(`.props__item_five`);
const propsItemVisibility = document.querySelectorAll(`.props__item_three`);

propsItemType[3].after(propsItemType[0]);
propsItemES6[7].after(propsItemES6[8]);
propsItemES6[8].after(propsItemES6[9]);
propsList[2].before(propsItemVisibility[0]);
propsList[4].before(propsItemObject[0]);
propsList[2].before(propsItemVisibility[1]);
propsList[4].before(propsItemObject[1]);
propsList[2].before(propsItemVisibility[2]);
propsList[4].before(propsItemObject[2]);
propsList[2].before(propsItemVisibility[3]);
propsList[4].before(propsItemObject[3]);
propsList[2].before(propsItemVisibility[4]);
propsList[4].before(propsItemObject[4]);
propsList[2].before(propsItemVisibility[5]);
propsList[4].before(propsItemObject[5]);
propsList[2].before(propsItemVisibility[6]);
propsList[4].before(propsItemObject[6]);
propsList[4].before(propsItemObject[7]);
