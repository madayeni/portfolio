const hamburger = document.querySelector(".hamburger");
const lines = document.querySelectorAll(".line");
const nav = document.querySelector("nav")
const navLinks = document.querySelectorAll("nav li")
const header = document.querySelector(".header");
const sl = document.querySelector(".social-links")
const scroll = document.querySelector(".scroll")
const openModalBtn = document.querySelectorAll(".open-modal-btn")
const closeModalBtn = document.querySelectorAll(".close-modal-btn")
const modal = document.querySelectorAll(".modal")

// functions

const openModal = (e) => {
				e.target.nextElementSibling.classList.add("show")
}

const closeModal = (e) => {
				e.target.parentElement.parentElement.parentElement.parentElement.classList.remove("show")
}

const closeModalOut = (e) => {
				if(e.target.classList.contains("modal")) {
								e.target.classList.remove("show")
				}
}

const toggleHandler = () => {
				lines.forEach(line => line.classList.toggle("active"))
				nav.classList.toggle("active")
}

const closeMenu =() => {
				lines.forEach(line => line.classList.remove("active"))
				nav.classList.remove("active")
}

window.onscroll =function() {
				const top = window.scrollY
				if( top > 50) {
								header.classList.add("sticky")
								scroll.classList.add("show")
				} else {
								header.classList.remove("sticky")
								scroll.classList.remove("show")
				}
}
// event listeners

hamburger.addEventListener("click", toggleHandler);

navLinks.forEach(link => link.addEventListener("click", closeMenu))

openModalBtn.forEach(modalBtn => modalBtn.addEventListener("click", openModal))

closeModalBtn.forEach(closeBtn => closeBtn.addEventListener("click", closeModal))

modal.forEach(m => m.addEventListener("click", closeModalOut))