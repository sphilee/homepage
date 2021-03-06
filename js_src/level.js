/* 

(function(doc) {
	//change background of card, when resize viewport.

	const detectWidth = {
		mobile : 606,
		pc : 2280
	}

	const rule = {
		gray : {
			rgb : '#778899',
			colorSet : {
				one : [1,3,5],
				two : [1,4,5],
				three : [1,3,5]
			}
		},
		comachen : {
			rgb : '#997790',
			colorSet : {
				one : [2,4,6],
				two : [2,3,6],
				three : [2,4,6]
			}
		}
	}


	function changeBackgroundColor(ruleNumber) {
		const ulSelector = "#masters-desc-card .level-section-wrap > section > ul > li:nth-child"
		Object.keys(rule).forEach((color) => {
			rule[color].colorSet[ruleNumber].forEach((v) => {
				doc.querySelector(ulSelector + '(' + v +')').style.backgroundColor = rule[color].rgb;
					//when ul exist, reset it's border color
					const ulOfDesc = doc.querySelector(ulSelector + '(' + v + ') ul');
					if(ulOfDesc) ulOfDesc.style.border = "20px solid" + rule[color].rgb;
				})
		});
	}

	function changeBGColorAfterResize() {
		const mobileMedia = window.matchMedia('(max-width: '+ detectWidth.mobile +'px)');
		const pcMedia = window.matchMedia('(max-width: '+ detectWidth.pc +'px)');
		mobileMedia.addListener(function(evt) {
			if(evt.matches) {
			 changeBackgroundColor('one');
			} else { 
				changeBackgroundColor('two');
			}
		});

		pcMedia.addListener(function(evt) {
			if(evt.matches) changeBackgroundColor('two');
			else changeBackgroundColor('three');
		});
	}

	function changeBGColorAfterDOMLoaded() {
		doc.addEventListener("DOMContentLoaded", () => {
			const windowWidth = window.innerWidth;
			if(windowWidth <= detectWidth.mobile) {
				changeBackgroundColor('one');
			} else if(windowWidth > detectWidth.mobile && windowWidth < detectWidth.pc) {
				changeBackgroundColor('two');
			} else {
				changeBackgroundColor('three');
			}
		});
	}

	//RUN
	changeBGColorAfterResize();
	changeBGColorAfterDOMLoaded();
})(document);


(function(doc) {
//Select level by TabUI

const ul = doc.querySelector("#masters-desc-card  nav ul");
	ul.addEventListener("click", (evt) => {
		const el = evt.target;
		if(el.tagName !== "LI") return;
		const idx = [].indexOf.call(el.parentElement.children, el) + 1;

		//remove before block element
		const visualSection = doc.querySelector(".level-section-wrap > section:not(.view-none)");
		visualSection.classList.add("view-none");

		//add selected element
		const levelSection = doc.querySelector(".level-section-wrap > section:nth-child("+ idx +")");
		levelSection.classList.remove("view-none");

	});
})(document)
*/

