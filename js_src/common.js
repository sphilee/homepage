/* Privacy and Term Modal Controller */
(function() {
	var state = "";
	var elModal = document.querySelector("#myModal");
	var elModalBody = document.querySelector("#myModal .modal-body");
	var elModalLabel = document.querySelector("#myModalLabel");
	var elPrivacy = document.querySelector("#codesquad-privacy");
	var elTerm = document.querySelector("#codesquad-term");
	var modalCloseBtn = document.querySelector(".modal-footer button");
	var modalHeaderBtn = document.querySelector(".modal-header button");

	function reqListener() {
		elModalBody.innerHTML = this.responseText;
		elModal.className += " in";
		elModal.style.display = "block";
		document.body.className += " modal-open";
	}

	function runXHR(url) {
		var oReq = new XMLHttpRequest();
		oReq.addEventListener("load", reqListener);
		oReq.open("GET", url);
		oReq.send();
	}

	//1. NAVIGATION
	var path = location.pathname;
	if(path === "/page/index.html") path = "/";
	var q = ".navbar-nav a[href^='"+ path + "']";
	var matchedNode = document.querySelector(q);
	if(matchedNode) matchedNode.className = "selected-nav-menu";


	//2. NAVIGATION DROPDOWN
	
	var elDropdownlist = document.querySelectorAll(".dropdown-list > a");
	Array.from(elDropdownlist).forEach( function(el) {
		el.addEventListener("mouseenter", function(evt) {
			const el = evt.target;
			if(el.tagName !== "A") return;
			else el.nextElementSibling.style.display = "block";
		});

		el.addEventListener("mouseleave", function(evt) {
			function _isNavDropdownElement(elAfterOut) {
				return (elAfterOut.className === "nav-dropdown" || elAfterOut.parentElement.classame === "nav-dropdown");
			}

			if(_isNavDropdownElement(evt.relatedTarget)) return;
			evt.target.nextElementSibling.style.display = "none";
		});
	})

	var elNavDropdown = document.querySelectorAll(".nav-dropdown");
	Array.from(elNavDropdown).forEach(function(el) {
		el.addEventListener("mouseleave", function (evt) {
			const el = evt.target;
			const name = el.tagName;

			function _isMastersAnchorMenu(elAfterOut) {
				return (elAfterOut.className === "nav-masters" || elAfterOut.parentElement.className === "nav-masters");
			}

			if (_isMastersAnchorMenu(evt.relatedTarget)) return;

			if (name === "LI") el.parentElement.style.display = "none";
			else if (name === "UL") el.style.display = "none";
			else return;
		});
	});


	//3. PRIVACE AND TERM Handler on Footer.
	elPrivacy.addEventListener("click", function(e) {
		e.preventDefault();
		//if (state === "privacy") return;
		elModalLabel.innerText = this.textContent;
		runXHR("../../../data/privacy.htm");
		state = "privacy";
	});

	elTerm.addEventListener("click", function(e) {
		e.preventDefault();
		//if (state === "term") return;
		elModalLabel.innerText = this.textContent;
		runXHR("../data/term.htm");
		state = "term";
	});

	function closeModalHandler(e) {
		elModal.className = elModal.className.replace(/in/g, "");
		document.body.className = document.body.className.replace(/modal\-open/g, "");
		elModal.style.display="none";
	}

	modalCloseBtn.addEventListener("click", closeModalHandler);
	modalHeaderBtn.addEventListener("click", closeModalHandler);
})();


(function(){
	var menu = document.querySelector("button.navbar-toggle");
	var target = document.querySelector(".collapse");
	menu.addEventListener("click", function() {
		if( target.classList.contains("in") )  {
			target.classList.remove("in");
			target.style.height = "1px";
		} else {
			target.classList.add("in");
		target.style.height = "256px";
		}
	})
})();

window.addEventListener("load", function() {
	var cover = document.querySelector("header");
	if(cover)cover.style.opacity = 1.0;
});
