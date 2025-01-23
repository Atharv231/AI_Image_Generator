
---

# 🎨✨ **Dynamic AI Image Generator with Scroll Animations**  

Unleash your creativity with this **AI-powered image generator** and **dynamic web animations**! Transform your ideas into stunning visuals, engage users with smooth animations, and make your web experience unforgettable. 🌟  

---

## 💡 **Features at a Glance**  

### 🔮 **1. AI Image Generator**  
Transform text prompts into breathtaking visuals:  
- 🖋️ **Custom Prompts**: Describe your vision, and watch it come to life.  
- 🖼️ **Multiple Outputs**: Generate up to 10 images at a time.  
- 💾 **Easy Downloads**: Instantly save your AI-generated masterpieces.  

### 🖋️ **2. Typing Text Effect**  
Add dynamic flair with a typing animation that cycles through words like:  
- **Art**  
- **Photo**  
- **3D Image**  
- **Technology Related**  

🎨 Built with **Typed.js** for customizable, smooth effects.

### 🌟 **3. Scroll-Triggered Animations**  
Bring sections to life as users scroll through your page:  
- ✨ Sections animate into view with a custom `show-animate` class.  
- 🧹 Animations smoothly reset when scrolling out of view.  
- 🚀 Perfect for interactive portfolios and landing pages.  

---

## 🛠️ **Code Highlights**  

### 🖼️ **AI Image Generator**  
Generate stunning images using OpenAI’s API:  
```javascript
const generateAiImages = async (userPrompt, userImgQuantity) => {
    const response = await fetch("https://api.edenai.run/v2/image/generation", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            prompt: userPrompt,
            n: userImgQuantity,
            size: "512x512",
            response_format: "b64_json",
        }),
    });

    if (!response.ok) throw new Error("Failed to generate AI images.");
    const { data } = await response.json();
    updateImageCard([...data]);
};
```

### 🔤 **Typing Text Effect**  
Engage users with dynamic text animations:  
```javascript
var typed = new Typed('.type', {
    strings: ['Art', 'Photo', '3D Image', 'Technology Related'],
    typeSpeed: 100,
    loop: true,
});
```

### 🖱️ **Scroll Animations**  
Add immersive transitions as users explore your content:  
```javascript
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });
};
```

---

## 🛠️ **How to Get Started**  

### 1️⃣ **Set Up the Project**  
- Clone the repository:  
  ```bash
  git clone https://github.com/yourusername/dynamic-ai-image-generator.git  
  cd dynamic-ai-image-generator  
  ```  

- Replace `OPENAI_API_KEY` in the JavaScript file with your OpenAI key.  

### 2️⃣ **Include Dependencies**  
Make sure to include **Typed.js** in your project:  
```html
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
```  

### 3️⃣ **Run the Project**  
- Open the `index.html` file in your browser.  
- Start generating images and enjoying the animations! 🚀  

---

## 📸 **Visuals at a Glance**  

| **Feature**            | **Preview**                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| **Typing Effect**       | ![Typing Demo](https://your-link.com/typing-demo.gif)                      |
| **AI Image Generator**  | ![Generated Image](https://your-link.com/generated-image.jpg)              |
| **Scroll Animations**   | ![Scroll Demo](https://your-link.com/scroll-demo.gif)                      |

---

## 🌐 **Resources**  

- **Typed.js Documentation**: [Typed.js](https://mattboldt.com/demos/typed-js/)  
- **OpenAI API Documentation**: [OpenAI](https://openai.com/docs/)  
- **CSS Tricks for Scroll Animations**: [CSS Tricks](https://css-tricks.com/scroll-triggered-animations/)  

---

## 📜 **License**  

This project is licensed under the **MIT License**. You’re free to use, modify, and share it as you like! 🌟  

---

✨ **Thank you for exploring this project!** Let your creativity shine and build something amazing. 🚀
