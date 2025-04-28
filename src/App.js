document.addEventListener("DOMContentLoaded", () => {
    // Intro Animation
    const introAnimation = document.getElementById("intro-animation")
    const introText = document.getElementById("intro-text")
    const mainContent = document.getElementById("main-content")

    // Array of text to display in sequence
    const introTexts = ["CoCo", "敲一敲", "藝術空間"]
    let currentTextIndex = 0

    // Function to change intro text
    function changeIntroText() {
        introText.style.opacity = 0

        setTimeout(() => {
            introText.textContent = introTexts[currentTextIndex]
            introText.style.opacity = 1
            currentTextIndex++

            if (currentTextIndex < introTexts.length) {
                setTimeout(changeIntroText, 2000)
            } else {
                // End animation and show main content
                setTimeout(() => {
                    introAnimation.style.opacity = 0
                    mainContent.classList.remove("hidden")
                    setTimeout(() => {
                        mainContent.classList.add("visible")
                        introAnimation.classList.add("hidden")
                    }, 1500)
                }, 2000)
            }
        }, 500)
    }

    // Start intro animation
    setTimeout(changeIntroText, 500)

    // Mobile Menu Toggle
    const menuButton = document.querySelector(".mobile-menu-button")
    const mobileMenu = document.querySelector(".mobile-menu")

    menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden")

        // Change hamburger to X
        const spans = menuButton.querySelectorAll("span")
        if (mobileMenu.classList.contains("hidden")) {
            spans[0].style.transform = "none"
            spans[1].style.opacity = "1"
            spans[2].style.transform = "none"
        } else {
            spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
            spans[1].style.opacity = "0"
            spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)"
        }
    })

    // Gallery Navigation
    const galleryPrev = document.querySelector(".gallery-nav.prev")
    const galleryNext = document.querySelector(".gallery-nav.next")
    const galleryScroll = document.querySelector(".gallery-scroll")

    if (galleryPrev && galleryNext) {
        galleryPrev.addEventListener("click", () => {
            galleryScroll.scrollBy({ left: -300, behavior: "smooth" })
        })

        galleryNext.addEventListener("click", () => {
            galleryScroll.scrollBy({ left: 300, behavior: "smooth" })
        })
    }

    // Artwork Display
    const artworkGrid = document.querySelector(".artwork-grid")

    if (artworkGrid) {
        // Define age groups and their artwork collections
        const ageGroups = [
            {
                name: "幼兒組",
                images: [
                    "/placeholder.svg?height=300&width=250",
                    "/placeholder.svg?height=300&width=250",
                    "/placeholder.svg?height=300&width=250",
                ],
            },
            {
                name: "兒童組",
                images: [
                    "/placeholder.svg?height=300&width=250",
                    "/placeholder.svg?height=300&width=250",
                    "/placeholder.svg?height=300&width=250",
                ],
            },
            {
                name: "少年組",
                images: [
                    "/placeholder.svg?height=300&width=250",
                    "/placeholder.svg?height=300&width=250",
                    "/placeholder.svg?height=300&width=250",
                ],
            },
            {
                name: "青少年組",
                images: [
                    "/placeholder.svg?height=300&width=250",
                    "/placeholder.svg?height=300&width=250",
                    "/placeholder.svg?height=300&width=250",
                ],
            },
            {
                name: "成人組",
                images: [
                    "/placeholder.svg?height=300&width=250",
                    "/placeholder.svg?height=300&width=250",
                    "/placeholder.svg?height=300&width=250",
                ],
            },
            {
                name: "高級組",
                images: [
                    "/placeholder.svg?height=300&width=250",
                    "/placeholder.svg?height=300&width=250",
                    "/placeholder.svg?height=300&width=250",
                ],
            },
        ]

        // Create initial artwork frames
        for (let i = 0; i < 6; i++) {
            const groupIndex = i % ageGroups.length
            const imageIndex = 0

            const frameDiv = document.createElement("div")
            frameDiv.className = "artwork-frame"
            frameDiv.style.height = `${Math.floor(Math.random() * 40) + 320}px`

            const img = document.createElement("img")
            img.src = ageGroups[groupIndex].images[imageIndex]
            img.alt = `${ageGroups[groupIndex].name} artwork`

            const label = document.createElement("div")
            label.className = "artwork-label"
            label.textContent = ageGroups[groupIndex].name

            const pin = document.createElement("div")
            pin.className = "artwork-pin"

            frameDiv.appendChild(img)
            frameDiv.appendChild(label)
            frameDiv.appendChild(pin)
            artworkGrid.appendChild(frameDiv)
        }

        // Randomly change one image every few seconds
        setInterval(() => {
            const frames = artworkGrid.querySelectorAll(".artwork-frame")
            const frameToUpdate = Math.floor(Math.random() * frames.length)

            const randomGroupIndex = Math.floor(Math.random() * ageGroups.length)
            const randomImageIndex = Math.floor(Math.random() * ageGroups[randomGroupIndex].images.length)

            const frame = frames[frameToUpdate]
            const img = frame.querySelector("img")
            const label = frame.querySelector(".artwork-label")

            // Fade out
            img.style.opacity = 0

            setTimeout(() => {
                img.src = ageGroups[randomGroupIndex].images[randomImageIndex]
                label.textContent = ageGroups[randomGroupIndex].name

                // Fade in
                img.style.opacity = 1
            }, 300)
        }, 4000)
    }

    // Class Schedule
    const scheduleGrid = document.querySelector(".schedule-grid")

    if (scheduleGrid) {
        // Sample class schedule data
        const scheduleData = [
            {
                day: "週一",
                classes: [
                    { time: "15:00 - 16:30", name: "兒童繪畫班 (7-9歲)", slots: "剩餘名額: 3" },
                    { time: "17:00 - 18:30", name: "青少年素描班 (10-13歲)", slots: "剩餘名額: 2" },
                ],
            },
            {
                day: "週二",
                classes: [
                    { time: "15:00 - 16:30", name: "幼兒創意美術 (4-6歲)", slots: "剩餘名額: 4" },
                    { time: "17:00 - 18:30", name: "兒童水彩班 (7-9歲)", slots: "剩餘名額: 0" },
                ],
            },
            {
                day: "週三",
                classes: [
                    { time: "15:00 - 16:30", name: "兒童黏土創作 (6-8歲)", slots: "剩餘名額: 5" },
                    { time: "17:00 - 19:00", name: "青少年油畫班 (12-15歲)", slots: "剩餘名額: 3" },
                ],
            },
            {
                day: "週四",
                classes: [
                    { time: "15:00 - 16:30", name: "幼兒繪本創作 (5-7歲)", slots: "剩餘名額: 2" },
                    { time: "17:00 - 18:30", name: "兒童素描班 (8-10歲)", slots: "剩餘名額: 1" },
                ],
            },
            {
                day: "週五",
                classes: [
                    { time: "15:00 - 16:30", name: "兒童創意美術 (6-9歲)", slots: "剩餘名額: 3" },
                    { time: "17:00 - 19:00", name: "青少年插畫班 (11-14歲)", slots: "剩餘名額: 4" },
                    { time: "19:30 - 21:30", name: "成人水彩班", slots: "剩餘名額: 6" },
                ],
            },
            {
                day: "週六",
                classes: [
                    { time: "09:30 - 11:00", name: "幼兒美術班 (4-6歲)", slots: "剩餘名額: 2" },
                    { time: "11:30 - 13:00", name: "兒童繪畫班 (7-9歲)", slots: "剩餘名額: 0" },
                    { time: "14:00 - 16:00", name: "青少年素描班 (10-13歲)", slots: "剩餘名額: 3" },
                    { time: "16:30 - 18:30", name: "成人素描班", slots: "剩餘名額: 5" },
                ],
            },
        ]

        // Create schedule cards
        scheduleData.forEach((day) => {
            const cardDiv = document.createElement("div")
            cardDiv.className = "schedule-card"

            const headerDiv = document.createElement("div")
            headerDiv.className = "schedule-header"

            const dayTitle = document.createElement("h3")
            dayTitle.className = "schedule-day"
            dayTitle.textContent = day.day

            headerDiv.appendChild(dayTitle)

            const classesDiv = document.createElement("div")
            classesDiv.className = "schedule-classes"

            day.classes.forEach((classItem) => {
                const classDiv = document.createElement("div")
                classDiv.className = "class-item"

                const className = document.createElement("p")
                className.className = "class-name"
                className.textContent = classItem.name

                const classTime = document.createElement("p")
                classTime.className = "class-time"
                classTime.textContent = classItem.time

                const classSlots = document.createElement("p")
                classSlots.className = classItem.slots.includes("0") ? "class-slots full" : "class-slots"
                classSlots.textContent = classItem.slots

                classDiv.appendChild(className)
                classDiv.appendChild(classTime)
                classDiv.appendChild(classSlots)
                classesDiv.appendChild(classDiv)
            })

            cardDiv.appendChild(headerDiv)
            cardDiv.appendChild(classesDiv)
            scheduleGrid.appendChild(cardDiv)
        })
    }

    // Contact Form
    const contactForm = document.getElementById("contact-form")
    const formSuccess = document.getElementById("form-success")

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault()

            // Simulate form submission
            contactForm.style.opacity = 0.5
            const submitButton = contactForm.querySelector(".submit-button")
            const originalText = submitButton.innerHTML

            submitButton.innerHTML = `
        <svg class="animate-spin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-opacity="0.25" stroke-width="4" fill="none"></circle>
          <path d="M12 2C6.47715 2 2 6.47715 2 12C2 14.5361 3.00212 16.8262 4.6286 18.4721" stroke="currentColor" stroke-width="4"></path>
        </svg>
        處理中...
      `

            setTimeout(() => {
                contactForm.reset()
                contactForm.style.display = "none"
                formSuccess.classList.remove("hidden")

                // Reset after 5 seconds
                setTimeout(() => {
                    formSuccess.classList.add("hidden")
                    contactForm.style.display = "block"
                    contactForm.style.opacity = 1
                    submitButton.innerHTML = originalText
                }, 5000)
            }, 1500)
        })
    }
})