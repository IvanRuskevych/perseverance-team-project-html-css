const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),s=document.querySelector("[data-menu-is-open]"),n=document.querySelector("[data-menu-close-button]");e.addEventListener("click",(()=>{const n="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open"),s.classList.toggle("menu-is-open")})),n.addEventListener("click",(()=>{const n="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open"),s.classList.toggle("menu-is-open")}));
//# sourceMappingURL=index.b46baa0b.js.map
